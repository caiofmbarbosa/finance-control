package br.caifer.subscriptions.repositories;

import br.caifer.subscriptions.entities.Subscriptions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface SubscriptionsRepository extends JpaRepository<Subscriptions, UUID> {

    List<Subscriptions> getAllByUserId(UUID id);

}
