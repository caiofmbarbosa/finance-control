package br.caifer.subscriptions.entities;

import br.caifer.subscriptions.enums.BillingPeriods;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;

@Getter @Setter
@RequiredArgsConstructor @NoArgsConstructor
@Entity
@Table(name = "subscriptions")
public class Subscriptions {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "cost", nullable = false, precision = 12, scale = 2)
    private BigDecimal cost;

    @Column(name = "billing_period", nullable = false)
    private BillingPeriods billingPeriod = BillingPeriods.MONTHLY;

    @Column(name = "renewal_date", nullable = false)
    private Date renewalDate;

    @Column(name = "notify_days_before")
    private Integer notifyDaysBefore;

}
