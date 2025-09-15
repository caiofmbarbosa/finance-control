package br.caifer.subscriptions.controllers.userPreference;

import br.caifer.subscriptions.controllers.userPreference.dto.UserPreferenceDTO;
import br.caifer.subscriptions.controllers.userPreference.dto.UserPreferencePatchDTO;
import br.caifer.subscriptions.services.UserPreferenceService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user-preferences")
@RequiredArgsConstructor
public class UserPreferenceController {

    private final UserPreferenceService service;
    private final ModelMapper mapper;

    @GetMapping
    public ResponseEntity<UserPreferenceDTO> list(Authentication authentication) {
        return ResponseEntity.ok(mapper.map(service.getUserPreference(authentication), UserPreferenceDTO.class));
    }

    @PatchMapping(value = "/edit", consumes = "application/json")
    public ResponseEntity<UserPreferenceDTO> edit(Authentication authentication, @RequestBody UserPreferencePatchDTO dto) {
        return ResponseEntity.ok(mapper.map(service.save(dto, authentication), UserPreferenceDTO.class));
    }

}
