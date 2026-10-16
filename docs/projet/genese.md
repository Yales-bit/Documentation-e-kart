---
title: Genèse & Objectifs
description: Origine du projet e-Kart, motivations techniques et cahier des charges fonctionnel.
tags:
  - projet
  - genèse
  - objectifs
---

# Genèse & Objectifs

## Contexte et Genèse

Le projet **e-Kart** s'inscrit dans une démarche d'ingénierie appliquée visant à concevoir, dimensionner et réaliser un véhicule de compétition monoplace 100% électrique. L'objectif consiste à maîtriser l'intégralité de la chaîne de valeur d'un système mécatronique complexe : calculs de structure, électronique de puissance, stockage électrochimique haute tension, contrôle temps réel et conformité aux standards de sécurité.

!!! abstract "Synthèse du projet"
    Développement d'un châssis tubulaire sur mesure intégrant une chaîne de traction synchrone à haute densité de couple, une batterie lithium à haut pouvoir de décharge et un réseau d'acquisition de télémétrie en temps réel.

## Axes Directeurs

- :fontawesome-solid-graduation-cap: **Excellence Technique** — Application rigoureuse des méthodes de l'ingénierie mécanique, électrotechnique et automatique.
- :fontawesome-solid-leaf: **Efficience Énergétique** — Optimisation du rendement de la chaîne de puissance (onduleur, moteur, réducteur cinématique).
- :fontawesome-solid-shield-halved: **Sécurité & Normes** — Implémentation stricte des protocoles d'isolement galvanique et de coupure d'urgence.
- :fontawesome-solid-code-branch: **Documentation & Open Source** — Capitalisation des données techniques, schémas et codes dans un format accessible et réutilisable.

## Grille des Spécifications et Objectifs

| Exigence fonctionnelle | Valeur cible | Tolérance | Priorité |
|:---|:---|:---:|:---:|
| Vitesse maximale en ligne droite | $\ge 65 \text{ km/h}$ | $\pm 5 \text{ km/h}$ | Priorité 1 (Critique) |
| Accélération $0 \to 50 \text{ km/h}$ | $\le 4{,}5 \text{ s}$ | $+ 0{,}5 \text{ s}$ | Priorité 1 (Critique) |
| Autonomie nominale en conditions de piste | $\ge 25 \text{ km}$ | $- 3 \text{ km}$ | Priorité 1 (Critique) |
| Masse totale à vide (hors pilote) | $\le 115 \text{ kg}$ | $+ 5 \text{ kg}$ | Priorité 2 (Majeur) |
| Durée de recharge complète ($0 \to 100\%$) | $\le 90 \text{ min}$ | $+ 15 \text{ min}$ | Priorité 2 (Majeur) |
| Télémétrie et enregistrement de données temps réel | Bus CAN + WiFi | — | Priorité 3 (Secondaire) |

!!! note "Gestion des compromis de conception"
    Les objectifs de masse et d'autonomie font l'objet d'un arbitrage permanent avec le dimensionnement du pack batterie. Tout accroissement de capacité énergétique implique une masse accrue qui pénalise le comportement dynamique et la tenue en virage.

## Cadre Normatif et Référentiels

Le dimensionnement du véhicule s'appuie sur les recommandations suivantes :

1. **Règlements techniques CIK-FIA** applicables aux karts de compétition (géométrie des protections, garde au sol, double circuit de freinage).
2. **Normes ISO 6469-1 / 6469-3** relatives à la sécurité électrique des véhicules routiers à propulsion électrique (protection contre les chocs électriques, isolement des masses).
3. **Directive Machines 2006/42/CE** pour la conception des organes en mouvement et des dispositifs de coupure d'urgence.
