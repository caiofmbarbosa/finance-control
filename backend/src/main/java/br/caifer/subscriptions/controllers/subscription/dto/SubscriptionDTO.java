package br.caifer.subscriptions.controllers.subscription.dto;

import br.caifer.subscriptions.enums.BillingPeriods;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.math.BigDecimal;
import java.util.Date;

public record SubscriptionDTO(
        String id,
        String name,
        BigDecimal cost,
        BillingPeriods billingPeriod,
        @JsonFormat(pattern = "yyyy-MM-dd", shape = JsonFormat.Shape.STRING) Date renewalDate
) {
}
