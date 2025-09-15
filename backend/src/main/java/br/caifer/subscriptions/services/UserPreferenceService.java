package br.caifer.subscriptions.services;

import br.caifer.subscriptions.controllers.userPreference.dto.UserPreferencePatchDTO;
import br.caifer.subscriptions.entities.UserPreference;
import br.caifer.subscriptions.repositories.UserPreferenceRepository;
import br.caifer.subscriptions.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserPreferenceService {

    private final UserPreferenceRepository repository;
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public UserPreference getUserPreference(Authentication authentication) {
        log.info("Fetching user preference");
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        UUID id = userRepository.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("Invalid user or session expired"))
                .getId();

        return repository.findByUserId(id)
                .orElseThrow(() -> new RuntimeException("User preference not found"));

    }

    @Transactional
    public UserPreference save(UserPreferencePatchDTO dto, Authentication authentication) {
        log.info("Saving user preference: {}", dto);
        UserPreference userPreference = getUserPreference(authentication);

        if (dto.receiveEmail() != null) userPreference.setReceiveEmail(dto.receiveEmail());
        if (dto.receiveSMS() != null) userPreference.setReceiveSms(dto.receiveSMS());

        return repository.save(userPreference);
    }

}
