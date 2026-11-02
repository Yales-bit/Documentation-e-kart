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
| **Carte Avant (Cockpit)** | Microcontrôleur ESP32 | Bus CAN 2.0B (GPIO 6 & 7) / SPI / ADC | Acquisition potentiomètre pédale, écran TFT couleur, lecteur SD, boutons |
| **Carte Arrière (Puissance)** | Microcontrôleur ESP32 | Bus CAN 2.0B (GPIO 6 & 7) / I2C / PWM | Pilotage MOSFETs CMS, boucle d'arrêt d'urgence, capteurs IMU et température |
| **Carte Distribution Puissance** | Hacheurs abaisseurs LM2576HV CMS | Lignes continues régulées ($12\text{ V}$, $6\text{ V}$) | Conversion abaisseuse depuis bus 48V, mesure globale de courant ($R_{\text{th}} = 32\text{ °C/W}$) |
| **Carte Signalisation Arrière** | PCB satellite CMS déporté | Commande 6V commutée par MOSFET | Feux stop et clignotants à double branche redondante équilibrée |
| **Onduleur Moteur (ESC)** | Variateur FOC programmable | PWM $20 \text{ kHz}$ / Bus CAN | Commande triphasée du moteur synchrone 3-4 kW |
| **Système Batterie (BMS)** | BMS intelligent 14S | Bus CAN / NTC | Protection surtension, sous-tension et équilibrage des 52 cellules |

