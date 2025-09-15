package br.caifer.subscriptions.controllers.userPreference.dto;

import jakarta.validation.constraints.NotNull;

public record UserPreferencePatchDTO(
        @NotNull(message = "Receive email must be provided") Boolean receiveEmail,
        @NotNull(message = "Receive sms must be provided") Boolean receiveSMS
) {
}
