---
title: Batterie & Énergie
description: Conception du système de stockage d'énergie haute tension — électrochimie, architecture du pack, BMS et protocoles de recharge.
tags:
  - ingénierie
  - batterie
  - énergie
  - BMS
---

# Batterie & Énergie

Le système accumulateur d'énergie constitue le réservoir électrochimique du kart électrique. Sa conception conditionne directement l'autonomie sur piste, la puissance crête disponible, la répartition des masses et la sécurité intrinsèque du véhicule.

## Dossiers Techniques

<div class="grid cards" markdown>

-   :fontawesome-solid-atom:{ .lg .middle } __Chimie & Cellules__

    ---

    Étude comparative LiFePO4 vs NMC, densité massique, sécurité électrochimique et sélection des références candidates.

    [:octicons-arrow-right-24: Consulter l'étude des cellules](cellules.md)

-   :fontawesome-solid-battery-full:{ .lg .middle } __Architecture du Pack__

    ---

    Agencement série-parallèle (16S8P / 20S6P), barres omnibus (busbars), modélisation thermique et caisson coupe-feu.

    [:octicons-arrow-right-24: Consulter l'architecture du pack](pack.md)

-   :fontawesome-solid-shield-halved:{ .lg .middle } __Système de Gestion (BMS)__

    ---

    Carte de supervision électronique, équilibrage actif des cellules, seuils de sécurité tension/température et liaison bus CAN.

    [:octicons-arrow-right-24: Consulter le BMS](bms.md)

-   :fontawesome-solid-plug:{ .lg .middle } __Charge & Gestion d'Énergie__

    ---

    Profil de charge CC/CV, dimensionnement du chargeur externe, connectique de sécurité et calculs d'autonomie réelle.

    [:octicons-arrow-right-24: Consulter la charge](charge.md)

</div>

## Spécifications Cibles du Pack Accumulateur

| Caractéristique technique | Symbole | Valeur cible | Unité | Justification technique |
|:---|:---:|---:|:---:|:---|
| Technologie électrochimique | — | LiFePO4 (ou NMC) | — | Stabilité thermique et durée de vie en cycles |
| Configuration électrique | — | 16S (LiFePO4) / 14S (NMC) | — | Plage compatible contrôleur ($40 - 60 \text{ V}$) |
| Tension nominale du pack | $U_{\text{nom}}$ | $51{,}2$ | $\text{V}$ | 16 cellules $\times 3{,}2 \text{ V}$ |
| Capacité nominale | $C_{\text{nom}}$ | $50{,}0$ | $\text{Ah}$ | $2{,}56 \text{ kWh}$ embarqués |
| Courant de décharge continu admissible | $I_{\text{cont}}$ | $120$ | $\text{A}$ | Régime permanent $2{,}4\text{C}$ |
| Courant de décharge crête (10 s) | $I_{\text{crete}}$ | $220$ | $\text{A}$ | Régime transitoire $4{,}4\text{C}$ |
| Masse totale du pack (avec boîtier) | $m_{\text{pack}}$ | $\le 28{,}0$ | $\text{kg}$ | Intégration latérale pour centrage des masses |
| Degré d'étanchéité du caisson | IP | IP65 | — | Protection poussières et projections d'eau |

!!! danger "Prescriptions de Sécurité Électrique"
    Le boîtier batterie intègre un fusible haute tension calibré au plus près des cellules, un contacteur général électromécanique à ouverture forcée piloté par le BMS, et un dispositif de purge des gaz en cas de surpression accidentelle.
