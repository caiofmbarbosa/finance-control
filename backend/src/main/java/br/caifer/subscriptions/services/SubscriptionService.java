package br.caifer.subscriptions.services;

import br.caifer.subscriptions.controllers.subscription.dto.SubscriptionAddDTO;
import br.caifer.subscriptions.controllers.subscription.dto.SubscriptionEditDTO;
import br.caifer.subscriptions.entities.Subscriptions;
import br.caifer.subscriptions.entities.User;
import br.caifer.subscriptions.mappers.SubscriptionMapper;
import br.caifer.subscriptions.repositories.SubscriptionsRepository;
import br.caifer.subscriptions.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@Slf4j
@RequiredArgsConstructor
public class SubscriptionService {

    private final SubscriptionsRepository repository;
    private final UserRepository userRepository;
    private final SubscriptionMapper mapper;

    @Transactional(readOnly = true)
    public List<Subscriptions> getAllSubscriptions(Authentication authentication) {
        UserDetails user = (UserDetails) authentication.getPrincipal();
        User foundUser = userRepository.findByUsername(user.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("Invalid user or session expired"));

        UUID id = foundUser.getId();
        log.info("Fetching all subscriptions for user with id: {}", id);

        return repository.getAllByUserId(id);
    }

    @Transactional
    public Subscriptions createSubscription(SubscriptionAddDTO dto, Authentication authentication) {
        log.info("Creating subscription for user: {}", dto);
        UserDetails userToFind = (UserDetails) authentication.getPrincipal();

        User user = userRepository.findByUsername(userToFind.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("Invalid user or session expired"));

        Subscriptions subscription = mapper.toSubscription(dto);
        subscription.setUser(user);

        try {
            repository.save(subscription);
            return subscription;

        } catch (DataIntegrityViolationException ex) {
            log.error("Subscription already exists");
            throw new RuntimeException("Subscription already exists");
        }
    }

    @Transactional
    public void deleteSubscription(UUID id, Authentication authentication) {
        log.info("Deleting subscription with id: {}", id);
        UserDetails userToFind = (UserDetails) authentication.getPrincipal();
        User user = userRepository.findByUsername(userToFind.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("Invalid user or session expired"));

        Subscriptions subscription = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Subscription not found"));

        if (!subscription.getUser().getId().equals(user.getId())) {
            log.error("The user that is trying to delete the subscription is not the owner of it");
            throw new RuntimeException("You do not have permission to delete this subscription");
        }

        repository.deleteById(id);
    }

    @Transactional
    public Subscriptions editSubscription(UUID subscriptionId, SubscriptionEditDTO dto, Authentication auth) {
        log.info("Editing subscription with id: {}", subscriptionId);

        UserDetails userToFind = (UserDetails) auth.getPrincipal();
        User user = userRepository.findByUsername(userToFind.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("Invalid user or session expired"));

        Subscriptions subscription = repository.findById(subscriptionId)
                .orElseThrow(() -> new RuntimeException("Subscription not found"));

        if (!subscription.getUser().getId().equals(user.getId())) {
            log.error("The user that is trying to edit the subscription is not the owner of it");
            throw new RuntimeException("You do not have permission to edit this subscription");
        }

        if (dto.name() != null && !dto.name().isEmpty()) subscription.setName(dto.name());
        if (dto.cost() != null) subscription.setCost(dto.cost());
        if (dto.billingPeriod() != null) subscription.setBillingPeriod(dto.billingPeriod());
        if (dto.renewalDate() != null) subscription.setRenewalDate(dto.renewalDate());
        if (dto.notifyDaysBefore() != null) subscription.setNotifyDaysBefore(dto.notifyDaysBefore());

        try {
            return repository.save(subscription);
        } catch (DataIntegrityViolationException e) {
            throw new RuntimeException("Subscription name already exists for this user");
        }
    }
}
