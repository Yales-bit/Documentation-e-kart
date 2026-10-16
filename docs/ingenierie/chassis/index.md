---
title: Châssis & Mécanique
description: Conception structurale du châssis, cinématique de direction, trains roulants et système de freinage.
tags:
  - ingénierie
  - châssis
  - mécanique
---

# Châssis & Mécanique

Le châssis constitue l'ossature primaire du kart. Il assure la résistance aux efforts dynamiques de torsion et de flexion, protège le pilote en cas de collision, et sert de support mécanique rigide à l'ensemble des sous-systèmes de puissance.

## Dossiers Techniques

<div class="grid cards" markdown>

-   :fontawesome-solid-ruler-combined:{ .lg .middle } __Géométrie & Dimensions__

    ---

    Empattement, voies avant/arrière, garde au sol, position du centre de gravité et ergonomie du poste de pilotage.

    [:octicons-arrow-right-24: Consulter la géométrie](geometrie.md)

-   :fontawesome-solid-cubes:{ .lg .middle } __Matériaux & Structure__

    ---

    Sélection des nuances d'acier (25CrMo4 / E235), analyse par éléments finis (FEA) et procédés de mécano-soudure.

    [:octicons-arrow-right-24: Consulter les matériaux](materiaux.md)

-   :fontawesome-solid-arrows-up-down:{ .lg .middle } __Suspension & Direction__

    ---

    Épures de direction (principe d'Ackermann), angle de chasse, carrossage dynamique et comportement en virage.

    [:octicons-arrow-right-24: Consulter la direction](suspension.md)

-   :fontawesome-solid-circle-stop:{ .lg .middle } __Système de Freinage__

    ---

    Dimensionnement hydraulique, étriers, disques ventilés, équilibrage avant/arrière et couplage régénératif.

    [:octicons-arrow-right-24: Consulter le freinage](freinage.md)

</div>

## Spécifications Géométriques et Structurelles

| Paramètre dimensionnel | Symbole | Valeur cible | Tolérance | Unité |
|:---|:---:|---:|:---:|:---:|
| Empattement | $L$ | $1\,040$ | $\pm 5$ | $\text{mm}$ |
| Voie avant (axe pivots) | $V_{\text{av}}$ | $880$ | $\pm 5$ | $\text{mm}$ |
| Voie arrière (extérieur pneus) | $V_{\text{ar}}$ | $1\,120$ | $\pm 10$ | $\text{mm}$ |
| Garde au sol sous châssis | $h_{\text{sol}}$ | $35$ | $\pm 3$ | $\text{mm}$ |
| Hauteur du centre de gravité (avec pilote) | $h_{\text{cg}}$ | $240$ | $\pm 15$ | $\text{mm}$ |
| Masse de la structure nue mécano-soudée | $m_{\text{chassis}}$ | $22{,}5$ | $\pm 1{,}0$ | $\text{kg}$ |
| Rigidité torsionnelle minimale mesurée | $K_{\text{torsion}}$ | $1\,450$ | $\pm 50$ | $\text{N}\cdot\text{m/deg}$ |
| Nuance des tubes structuraux principaux | — | 25CrMo4 | $\varnothing 30 \times 2{,}0$ | $\text{mm}$ |

!!! note "Exigences Réglementaires de Sécurité"
    Le châssis intègre des boucles latérales et un pare-chocs avant conformes aux règlements techniques de karting pour l'absorption d'énergie lors d'un choc frontal ou latéral.
