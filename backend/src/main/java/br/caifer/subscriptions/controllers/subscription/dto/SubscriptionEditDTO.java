package br.caifer.subscriptions.controllers.subscription.dto;

import br.caifer.subscriptions.enums.BillingPeriods;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.validation.constraints.Min;

import java.math.BigDecimal;
import java.util.Date;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public record SubscriptionEditDTO(
        String name,
        BigDecimal cost,
        BillingPeriods billingPeriod,
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd") Date renewalDate,
        @Min(value = 1, message = "Provide a valid day") Integer notifyDaysBefore
) {
}
