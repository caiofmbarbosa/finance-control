package br.caifer.subscriptions.services;

import br.caifer.subscriptions.controllers.auth.dto.LoginRequestDTO;
import br.caifer.subscriptions.entities.User;
import br.caifer.subscriptions.entities.UserPreference;
import br.caifer.subscriptions.enums.Roles;
import br.caifer.subscriptions.repositories.UserPreferenceRepository;
import br.caifer.subscriptions.repositories.UserRepository;
import br.caifer.subscriptions.security.TokenService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authManager;
    private final UserRepository repository;
    private final UserPreferenceRepository userPreferenceRepository;
    private final TokenService tokenService;
    private final PasswordEncoder passwordEncoder;

    public String login(LoginRequestDTO dto) {
        log.info("Attempting to log in user: {}", dto.username());

        UsernamePasswordAuthenticationToken req = new UsernamePasswordAuthenticationToken(dto.username(), dto.password());
        Authentication auth = authManager.authenticate(req);
        User user = (User) auth.getPrincipal();

        return tokenService.generateAccessToken(user);
    }

    @Transactional
    public void register(LoginRequestDTO request) {
        if (repository.existsByUsername(request.username())) {
            throw new IllegalArgumentException("Username already exists, try to recover your password");
        }

        User user = new User();
        user.setUsername(request.username());
        user.setPassword(passwordEncoder.encode(request.password()));
        repository.save(user);

        UserPreference userPreference = new UserPreference();
        userPreference.setUser(user);
        userPreferenceRepository.save(userPreference);

    }
}
