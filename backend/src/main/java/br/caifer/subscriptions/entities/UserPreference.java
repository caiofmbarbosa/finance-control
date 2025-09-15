package br.caifer.subscriptions.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter @Setter
@RequiredArgsConstructor
@Entity
@Table(name = "user_preference")
public class UserPreference {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @OneToOne(optional = false)
    private User user;

    @Column(name = "receive_email", nullable = false)
    private boolean receiveEmail = false;

    @Column(name = "receive_sms", nullable = false)
    private boolean receiveSms = false;

}
