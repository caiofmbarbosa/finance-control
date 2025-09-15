package br.caifer.subscriptions.controllers.subscription.dto;

import br.caifer.subscriptions.enums.BillingPeriods;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import java.math.BigDecimal;
import java.util.Date;

public record SubscriptionAddDTO(
        @NotBlank(message = "Name must be provided") String name,
        @NotNull(message = "Cost must be provided") @Positive(message = "Cost must be a valid value") BigDecimal cost,
        @NotBlank(message = "Billing period must be provided") BillingPeriods billingPeriod,
        @NotNull(message = "Renewal date must be provided")
        @FutureOrPresent(message = "Invalid date")
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
        Date renewalDate,
        Integer notificationDaysBefore
) {
}
