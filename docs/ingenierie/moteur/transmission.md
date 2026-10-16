---
title: Transmission
description: Conception de la transmission du kart électrique.
tags:
  - ingénierie
  - moteur
  - transmission
---

# Transmission

## Architecture de la transmission

<!-- TODO: Schéma de la chaîne cinématique -->

## Rapport de réduction

La vitesse de rotation du moteur doit être adaptée à la vitesse des roues.

$$
V_{kart} = \frac{\pi \times D_{roue} \times N_{moteur}}{60 \times R_{réduction}}
$$

Où :

- \( V_{kart} \) : vitesse du kart (m/s)
- \( D_{roue} \) : diamètre de la roue (m)
- \( N_{moteur} \) : vitesse du moteur (RPM)
- \( R_{réduction} \) : rapport de réduction

## Type de transmission

=== "Chaîne"
    - Robuste, éprouvée
    - Nécessite entretien (lubrification, tension)
    - Bruit

=== "Courroie crantée"
    - Silencieuse, propre
    - Pas de lubrification
    - Moins de couple transmissible

=== "Entraînement direct"
    - Pas de perte mécanique
    - Moteur hub (dans la roue)
    - Masse non suspendue élevée

---

*Page à compléter.*
