package br.caifer.subscriptions.controllers.userPreference.dto;

public record UserPreferenceDTO(
        boolean receiveEmail,
        boolean receiveSMS
) {
}
