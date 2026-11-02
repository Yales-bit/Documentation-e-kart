---
title: Fichiers CAO & Plans de Définition
description: Plans de définition d'atelier 2D, mises en plan cotées et modèles numériques 3D du projet e-Kart.
tags:
  - médiathèque
  - CAO
  - plans
  - fabrication
---

# Fichiers CAO & Plans de Définition

Les plans de fabrication et dessins d'ensemble officiels sont normalisés et validés par l'équipe d'ingénierie et le responsable d'atelier.

---

## 1. Plans de Définition et d'Assemblage Disponibles (PDF)

| Sous-système | Désignation de la pièce / assemblage | Format | Procédé / Spécification | Lien de consultation |
|:---|:---|:---:|:---|:---:|
| **Groupe Motopropulseur** | Platine Support Moteur V2 ($5\text{ mm}$ S235) | `PDF A3` | Découpe jet d'eau, 6 perçages, FEA validée ($s = 10{,}6$) | [:fontawesome-solid-file-pdf: Plan Support V2](../assets/images/moteur/Support_V2%20Drawing.pdf) |
| **Groupe Motopropulseur** | Ensemble Fixation Moteur Réglable V3 | `PDF A3` | Montage sur brides, réglage orthogonal X/Y | [:fontawesome-solid-file-pdf: Plan Fixation Moteur V3](../assets/images/moteur/Fixation%20Moteur%20V3%20Dessin.pdf) |
| **Stockage Énergie** | Caisson Batterie Mécano-Plié | `PDF A4` | Tôle d'acier découpée et pliée, anti-gauchissement | [:fontawesome-solid-file-pdf: Plan Boîtier Batterie](../assets/images/batterie/Boitier%20Drawing%201.pdf) |
| **Stockage Énergie** | Couvercle Démontable Caisson IP54 | `PDF A4` | Perçages de fixation M4 taraudés dans rebords pleins | [:fontawesome-solid-file-pdf: Plan Couvercle](../assets/images/batterie/Couvercle%20Drawing%201.pdf) |
| **Stockage Énergie** | Assemblage Pack Batterie Complet (MIQ4) | `PDF A3` | Plan d'ensemble avec nomenclature des 52 cellules et spacers | [:fontawesome-solid-file-pdf: Plan Assemblage Batterie](../assets/images/batterie/ass_Batterie_kart_MIQ4.pdf) |

---

## 2. Formats Standards d'Échange Atelier

| Format | Logiciel source | Destination & Usage atelier |
|:---|:---|:---|
| `.step` / `.stp` | PTC Creo / Fusion 360 | Échange universel 3D pour usinage CNC 3/5 axes |
| `.dxf` | PTC Creo (mise en plan 2D) | Profils de découpe jet d'eau et laser sans ZAT |
| `.stl` | Trancheur PrusaSlicer | Fabrication additive FDM (PETG pour spacers et prototypes) |
| `.pdf` | Plans cotés ISO 2768-mK | Dossiers de contrôle métrologique et montage d'atelier |
