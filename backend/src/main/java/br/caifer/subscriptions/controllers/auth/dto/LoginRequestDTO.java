package br.caifer.subscriptions.controllers.auth.dto;

import jakarta.validation.constraints.NotBlank;

public record LoginRequestDTO(
        @NotBlank(message = "Username must be provided") String username,
        @NotBlank(message = "Password must be provided") String password
) {
}
