---
title: Groupe Motopropulseur
description: Dimensionnement de la chaîne de traction — moteur synchrone sans balais, contrôleur onduleur et transmission mécanique.
tags:
  - ingénierie
  - moteur
  - transmission
  - ESC
---

# Groupe Motopropulseur

Le groupe motopropulseur convertit l'énergie électrique fournie par la batterie en couple mécanique transmis aux roues arrière motrices. Il comprend le moteur synchrone sans balais, l'étage de puissance (onduleur / ESC) et l'étage de réduction cinématique par chaîne.

## Dossiers Techniques

<div class="grid cards" markdown>

-   :fontawesome-solid-magnifying-glass:{ .lg .middle } __Sélection du Moteur__

    ---

    Étude comparative BLDC vs PMSM, modélisation des courbes de couple-vitesse et tenue thermique sous charge.

    [:octicons-arrow-right-24: Consulter le choix moteur](choix.md)

-   :fontawesome-solid-gears:{ .lg .middle } __Transmission & Réduction__

    ---

    Calcul cinématique du rapport de réduction pignon/couronne, tension de chaîne et efforts axiaux sur les paliers.

    [:octicons-arrow-right-24: Consulter la transmission](transmission.md)

-   :fontawesome-solid-sliders:{ .lg .middle } __Contrôleur de Puissance (ESC)__

    ---

    Stratégies de commande vectorielle (FOC), programmation des rampes d'accélération et freinage électrique régénératif.

    [:octicons-arrow-right-24: Consulter l'onduleur](controleur.md)

-   :fontawesome-solid-gauge-high:{ .lg .middle } __Performances & Dynamique__

    ---

    Équations de dynamique du véhicule, modélisation des forces résistantes, simulations de vitesse et consommations énergétiques.

    [:octicons-arrow-right-24: Consulter les performances](performances.md)

</div>

## Spécifications de la Chaîne Cinématique

| Paramètre électromécanique | Symbole | Valeur cible | Unité |
|:---|:---:|---:|:---:|
| Tension nominale d'alimentation | $U_{\text{nom}}$ | $51{,}2$ (ou $72{,}0$) | $\text{V}$ |
| Puissance mécanique nominale continue | $P_{\text{cont}}$ | $5{,}0$ | $\text{kW}$ |
| Puissance crête transitoire (10 s) | $P_{\text{crete}}$ | $10{,}0$ | $\text{kW}$ |
| Vitesse de rotation nominale | $N_{\text{mot}}$ | $4\,500$ | $\text{tr/min}$ |
| Constante de vitesse moteur | $K_v$ | $85$ | $\text{RPM/V}$ |
| Couple électromagnétique maximal | $C_{\text{max}}$ | $24{,}0$ | $\text{N}\cdot\text{m}$ |
| Rapport de réduction cinématique | $R_{\text{red}}$ | $4{,}20 : 1$ (Pignon 13 / Couronne 55) | — |
| Rendement global de la chaîne de transmission | $\eta_{\text{trans}}$ | $94$ | $\%$ |
