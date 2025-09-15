package br.caifer.subscriptions.controllers.auth;

import br.caifer.subscriptions.controllers.auth.dto.LoginDTO;
import br.caifer.subscriptions.controllers.auth.dto.LoginRequestDTO;
import br.caifer.subscriptions.services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService service;

    @PostMapping(value = "/login")
    public ResponseEntity<LoginDTO> login(@RequestBody LoginRequestDTO request) {
        String response = service.login(request);
        return ResponseEntity.ok(new LoginDTO(response));

    }

    @PostMapping(value = "/register")
    public ResponseEntity<Void> register(@RequestBody LoginRequestDTO request) {
        service.register(request);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

}
