---
title: Schéma Électrique Général
description: Architecture unifilaire, synoptique de distribution haute tension et schéma du circuit de sécurité.
tags:
  - ingénierie
  - électronique
  - schéma
  - puissance
---

# Schéma Électrique Général

## Synoptique de la Chaîne de Puissance Haute Tension

Le circuit haute tension (HV) alimente l'onduleur de traction depuis le pack d'accumulateurs. La chaîne de distribution intègre un fusible pyrotechnique / cartouche ultrarapide, un contacteur de puissance et une résistance de précharge.

```mermaid
flowchart LR
    BAT["Pack Batterie<br/>48-72V DC"] --> FUSE["Fusible Général HV<br/>(200A Type gBat)"]
    FUSE --> PRECHG["Circuit de Précharge<br/>(Résistance 100Ω / Relais)"]
    PRECHG --> CONTACTOR["Contacteur Principal HV<br/>(Normalement Ouvert)"]
    CONTACTOR --> ESC["Onduleur / Contrôleur Moteur<br/>(ESC FOC)"]
    ESC --> MOT["Moteur Synchrone BLDC<br/>(Phases U, V, W)"]
    
    BAT --> DCDC["Convertisseur DC-DC Isolé<br/>48V-72V vers 12V DC"]
    DCDC --> FUSE_BT["Boîte à Fusibles BT<br/>(Circuits 12V Auxiliaires)"]
    FUSE_BT --> MCU["Calculateur Central MCU<br/>(Supervision & CAN)"]
    FUSE_BT --> DASH["Tableau de Bord Pilote<br/>(Affichage Vitesse & SoC)"]
    FUSE_BT --> FAN["Ventilation Forcée<br/>(Onduleur & Moteur)"]
    FUSE_BT --> LIGHT["Éclairage & Balise Sécurité<br/>(Feu Stop & LED État)"]
```

## Distribution Basse Tension (Réseau 12V DC)

Le réseau basse tension alimente l'ensemble de l'instrumentation et des organes de sécurité. Il est galvaniquement isolé du bus continu haute tension par un transformateur haute fréquence interne au convertisseur DC-DC.

| Circuit auxiliaire | Calibre fusible | Section conducteur | Organe alimenté |
|:---|:---:|:---:|:---|
| Ligne 1 — Calculateur central | $3 \text{ A}$ | $0{,}75 \text{ mm}^2$ | MCU, récepteur télémétrie, capteur pédale |
| Ligne 2 — Tableau de bord | $2 \text{ A}$ | $0{,}50 \text{ mm}^2$ | Écran TFT, boutons de commande, voyants |
| Ligne 3 — Bobine contacteur | $5 \text{ A}$ | $1{,}00 \text{ mm}^2$ | Bobine de maintien du contacteur principal HV |
| Ligne 4 — Refroidissement | $7{,}5 \text{ A}$ | $1{,}50 \text{ mm}^2$ | Ventilateurs axiaux PWM $12 \text{ V}$ |
| Ligne 5 — Feux de signalisation | $3 \text{ A}$ | $0{,}75 \text{ mm}^2$ | Feu stop arrière et indicateur d'isolement |

## Circuit de Sécurité et Boucle d'Arrêt d'Urgence

```mermaid
flowchart TD
    ALIM["Alimentation 12V DC Sécurité"] --> KS_INT["Arrêt Coup de Poing<br/>(Poste Pilote Volant)"]
    KS_INT --> KS_EXT["Arrêt Coup de Poing<br/>(Accès Extérieur Commissaire)"]
    KS_EXT --> BMS_RELAY["Contact Sec BMS<br/>(Alarme Sous/Surtension)"]
    BMS_RELAY --> IMD_RELAY["Relais Contrôleur d'Isolement<br/>(Défaut Masse Châssis)"]
    IMD_RELAY --> BRAKE_SW["Interrupteur Sécurité Pédale<br/>(Freinage Prioritaire)"]
    BRAKE_SW --> COIL["Bobine Contacteur Principal HV"]
    COIL --> GND["Masse 0V Châssis"]
    
    style COIL fill:#f87171,stroke:#b91c1c,color:#ffffff
```

!!! danger "Fonctionnement en Sécurité Positive"
    La boucle d'arrêt d'urgence fonctionne selon le principe de la **sécurité positive** : la bobine du contacteur principal haute tension doit être continuellement alimentée pour maintenir le circuit fermé. Toute ouverture d'un contact (coup de poing pilote, coup de poing commissaire, alarme thermique BMS ou coupure d'isolement) provoque l'ouverture instantanée du contacteur par rappel mécanique à ressort.
