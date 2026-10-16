---
title: Chimie & Cellules
description: Étude comparative des chimies lithium, analyse des formats de cellules et critères de sélection pour le kart électrique.
tags:
  - ingénierie
  - batterie
  - cellules
  - chimie
---

# Chimie & Cellules

## Étude Comparative des Technologies Électrochimiques

Le choix de la technologie d'accumulateur conditionne la densité énergétique, la stabilité thermique face au risque d'emballement et la durée de vie sous forts courants de décharge.

| Technologie | Tension nominale | Densité massique | Stabilité thermique | Durée de vie (cycles) | Coût relatif | Évaluation projet |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| **LiFePO4** (Lithium Fer Phosphate) | $3{,}2 \text{ V}$ | $140 - 170 \text{ Wh/kg}$ | Maximale ($T_{\text{runaway}} > 270^\circ\text{C}$) | Excellente ($> 3\,000$ cycles) | Modéré | **Recommandé pour la sécurité et la robustesse** |
| **NMC** (Nickel Manganèse Cobalt) | $3{,}7 \text{ V}$ | $220 - 260 \text{ Wh/kg}$ | Moyenne ($T_{\text{runaway}} \approx 210^\circ\text{C}$) | Bonne ($1\,000 - 1\,500$ cycles) | Élevé | Option haute performance si masse critique |
| **LTO** (Lithium Titanate) | $2{,}3 \text{ V}$ | $70 - 90 \text{ Wh/kg}$ | Maximale | Exceptionnelle ($> 15\,000$ cycles) | Très élevé | Écarté : masse excessive pour l'énergie requise |

## Comparatif des Formats Géométriques

=== "Cellules Cylindriques (21700 / 18650)"
    - **Avantages** : Standard industriel éprouvé, disponibilité immédiate, excellente dissipation thermique surfacique, fusibles internes de surpression (CID).
    - **Procédé d'assemblage** : Soudage par points (spot welding) de bandes de cuivre/nickel pur sur gabarit isolé imprimé en 3D (PETG ignifugé).
    - **Applications cibles** : Packs haute puissance nécessitant des décharges crêtes supérieures à $30 \text{ A}$ par élément.

=== "Cellules Prismatiques"
    - **Avantages** : Forte capacité unitaire ($30 - 100 \text{ Ah}$), réduction drastique du nombre de connexions (16 cellules pour un pack 16S1P), bornes vissées M6/M8.
    - **Inconvénients** : Nécessite une mise sous compression mécanique contrôlée ($300 \text{ kgf}$) pour éviter le gonflement au cyclage.
    - **Applications cibles** : Packs de grande autonomie privilégiant la simplicité d'intégration mécanique.

=== "Cellules Poches (Pouch Cells)"
    - **Avantages** : Compacité extrême, absence de boîtier lourd, très faible résistance série équivalente (ESR).
    - **Inconvénients** : Vulnérabilité mécanique aux perforations, déformation sous gazage, contraintes sévères de bridage.
    - **Applications cibles** : Compétition de pointe sous réserve d'un confinement structurel étanche.

## Tableau Comparatif des Références Candidates

| Référence commerciale | Format | Chimie | Capacité | Tension nom. | Décharge continue | Décharge crête | Masse |
|:---|:---:|:---:|---:|---:|---:|---:|---:|
| **Molicel INR-21700-P42A** | Cylindrique 21700 | NMC | $4{,}2 \text{ Ah}$ | $3{,}6 \text{ V}$ | $30 \text{ A}$ (crête $45 \text{ A}$) | $10{,}7\text{C}$ | $68 \text{ g}$ |
| **Samsung INR-21700-40T** | Cylindrique 21700 | NMC | $4{,}0 \text{ Ah}$ | $3{,}6 \text{ V}$ | $35 \text{ A}$ (crête $50 \text{ A}$) | $12{,}5\text{C}$ | $70 \text{ g}$ |
| **CALB CA50** | Prismatique | LiFePO4 | $50{,}0 \text{ Ah}$ | $3{,}2 \text{ V}$ | $100 \text{ A}$ ($2\text{C}$) | $150 \text{ A}$ ($3\text{C}$) | $1\,450 \text{ g}$ |
| **EVE LF105** | Prismatique | LiFePO4 | $105{,}0 \text{ Ah}$ | $3{,}2 \text{ V}$ | $105 \text{ A}$ ($1\text{C}$) | $210 \text{ A}$ ($2\text{C}$) | $1\,980 \text{ g}$ |

## Décision Technique et Justification

Le dimensionnement de référence s'oriente vers une architecture **16S LiFePO4 prismatique** ($50 \text{ Ah}$ nominal) ou une variante **14S8P en cellules cylindriques 21700 NMC (Molicel P42A)**. La variante prismatique LiFePO4 est privilégiée pour sa sécurité supérieure en phase d'essais préliminaires et son nombre réduit d'interconnexions électriques.
