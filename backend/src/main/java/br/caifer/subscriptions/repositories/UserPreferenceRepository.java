package br.caifer.subscriptions.repositories;

import br.caifer.subscriptions.entities.UserPreference;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserPreferenceRepository extends JpaRepository<UserPreference, UUID> {
}
