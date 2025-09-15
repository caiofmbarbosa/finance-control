package br.caifer.subscriptions.controllers.subscription;

import br.caifer.subscriptions.controllers.subscription.dto.SubscriptionAddDTO;
import br.caifer.subscriptions.controllers.subscription.dto.SubscriptionDTO;
import br.caifer.subscriptions.controllers.subscription.dto.SubscriptionEditDTO;
import br.caifer.subscriptions.entities.Subscriptions;
import br.caifer.subscriptions.mappers.SubscriptionMapper;
import br.caifer.subscriptions.services.SubscriptionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "/api/v1/subscription")
@RequiredArgsConstructor
public class SubscriptionController {

    private final SubscriptionService service;
    private final SubscriptionMapper mapper;

    @GetMapping
    public ResponseEntity<List<SubscriptionDTO>> list(Authentication auth) {
        List<Subscriptions> subscriptions = service.getAllSubscriptions(auth);

        return ResponseEntity.ok(subscriptions
                .stream()
                .map(mapper::toSubscriptionDTO)
                .toList());
    }

    @PostMapping(value = "/post")
    public ResponseEntity<SubscriptionDTO> create(
            @Valid @RequestBody final SubscriptionAddDTO dto,
            Authentication auth
    ) {
        Subscriptions subscription = service.createSubscription(dto, auth);
        return ResponseEntity.status(HttpStatus.CREATED).body(mapper.toSubscriptionDTO(subscription));
    }

    @PatchMapping(value = "/edit/{subscriptionId}")
    public ResponseEntity<SubscriptionDTO> patch(
            @PathVariable("subscriptionId") UUID id,
            @RequestBody SubscriptionEditDTO dto,
            Authentication auth
    ) {
        Subscriptions subs = service.editSubscription(id, dto, auth);
        return ResponseEntity.ok(mapper.toSubscriptionDTO(subs));
    }

    @DeleteMapping(value = "/delete/{subscriptionId}")
    public ResponseEntity<Void> delete(@PathVariable("subscriptionId") UUID id, Authentication auth) {
        service.deleteSubscription(id, auth);
        return ResponseEntity.noContent().build();
    }

}
