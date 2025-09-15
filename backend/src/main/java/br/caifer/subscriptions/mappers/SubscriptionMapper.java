package br.caifer.subscriptions.mappers;

import br.caifer.subscriptions.controllers.subscription.dto.SubscriptionAddDTO;
import br.caifer.subscriptions.controllers.subscription.dto.SubscriptionDTO;
import br.caifer.subscriptions.entities.Subscriptions;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class SubscriptionMapper {

    private final ModelMapper modelMapper;

    public SubscriptionDTO toSubscriptionDTO(Subscriptions subscription) {
        return modelMapper.map(subscription, SubscriptionDTO.class);
    }

    public Subscriptions toSubscription(SubscriptionAddDTO dto) {
        return modelMapper.map(dto, Subscriptions.class);
    }

}
