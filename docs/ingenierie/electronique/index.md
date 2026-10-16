---
title: Électronique & Embarqué
description: Architecture de l'électronique de contrôle, réseaux de communication embarqués, télémétrie et câblage.
tags:
  - ingénierie
  - électronique
  - embarqué
  - CAN
---

# Électronique & Embarqué

L'électronique embarquée constitue le système nerveux du kart électrique. Elle assure la conversion des consignes du pilote en commandes de puissance pour l'onduleur, la surveillance permanente des paramètres de sécurité critique (températures, tensions d'isolement), et la transmission des mesures télémétriques.

## Dossiers Techniques

<div class="grid cards" markdown>

-   :fontawesome-solid-diagram-project:{ .lg .middle } __Schéma Électrique Général__

    ---

    Schéma unifilaire complet, architecture de puissance haute tension ($48 - 72 \text{ V}$), distribution basse tension ($12 \text{ V}$) et boucle d'arrêt d'urgence.

    [:octicons-arrow-right-24: Consulter le schéma unifilaire](schema.md)

-   :fontawesome-solid-gauge:{ .lg .middle } __Tableau de Bord & Interface Pilote__

    ---

    Afficheur numérique OLED/TFT, indicateurs d'état à diodes LED, commandes au volant et sélecteur de modes de conduite.

    [:octicons-arrow-right-24: Consulter le tableau de bord](dashboard.md)

-   :fontawesome-solid-tower-broadcast:{ .lg .middle } __Capteurs & Télémétrie__

    ---

    Centrale inertielle (IMU 6 axes), sondes de température PT100/NTC, acquisition du bus CAN et liaison sans fil vers les stands.

    [:octicons-arrow-right-24: Consulter la télémétrie](telemetrie.md)

-   :fontawesome-solid-ethernet:{ .lg .middle } __Câblage & Faisceau Électrique__

    ---

    Calibrage des sections de conducteurs (norme AWG/ISO), sélection des connecteurs étanches (Deutsch, Amphenol, XT90-S) et routage châssis.

    [:octicons-arrow-right-24: Consulter le câblage](cablage.md)

</div>

## Spécifications de l'Architecture Électronique

| Sous-ensemble électronique | Matériel / Contrôleur | Protocole / Interface | Rôle fonctionnel |
|:---|:---|:---:|:---|
| **Calculateur Principal (MCU)** | ESP32-S3 / STM32F405 | Bus CAN 2.0B / SPI | Gestion centrale, cartographie pédale, boucle de sécurité |
| **Onduleur Moteur (ESC)** | Variateur FOC programmable | Bus CAN / PWM $20 \text{ kHz}$ | Commande des phases statoriques du moteur synchrone |
| **Carte BMS** | BMS intelligent 16S | Bus CAN / UART | Surveillance tension/température de chaque élément de batterie |
| **Tableau de Bord (Dash)** | Écran TFT couleur $3{,}5''$ SPI | SPI / I2C | Affichage vitesse instantanée, état de charge (SoC), alarmes |
| **Alimentation Auxiliaire** | Convertisseur DC-DC isolé | $48 \text{ V} \to 12 \text{ V} / 5 \text{ V}$ | Alimentation découplée du MCU, des capteurs et de l'éclairage |
| **Module Télémétrie** | Transmetteur WiFi / LoRa | UART / SPI | Envoi des trames de données à fréquence d'échantillonnage de $20 \text{ Hz}$ |
