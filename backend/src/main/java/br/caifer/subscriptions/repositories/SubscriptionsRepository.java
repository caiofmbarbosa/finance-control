package br.caifer.subscriptions.repositories;

import br.caifer.subscriptions.entities.Subscriptions;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SubscriptionsRepository extends JpaRepository<Subscriptions, UUID> {
}
