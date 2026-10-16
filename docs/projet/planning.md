---
title: Planning & Jalons
description: Calendrier de développement, diagramme de Gantt et jalons directeurs du projet e-Kart.
tags:
  - projet
  - planning
  - jalons
---

# Planning & Jalons

## Diagramme de Gantt Directeur

Le calendrier du projet s'articule autour de trois grandes phases : conception détaillée, fabrication / intégration atelier, et qualifications sur banc et piste.

```mermaid
gantt
    title Feuille de Route Opérationnelle e-Kart
    dateFormat  YYYY-MM
    axisFormat  %b %Y
    
    section Conception Système
    Spécifications & Cahier des charges  :done,    c1, 2024-01, 2024-03
    Dimensionnement cinématique & CAO    :done,    c2, 2024-03, 2024-06
    Études électrotechniques & batterie  :active,  c3, 2024-06, 2024-09
    Architecture logicielle & bus CAN    :active,  c4, 2024-08, 2024-11
    
    section Fabrication & Intégration
    Usinage & mécano-soudure châssis     :         f1, 2024-10, 2025-01
    Assemblage du pack batterie & tests  :         f2, 2025-01, 2025-03
    Câblage faisceau HV / BT             :         f3, 2025-02, 2025-04
    Montage mécanique final              :         f4, 2025-03, 2025-05
    
    section Essais & Qualifications
    Tests d'isolement électrique & banc  :         e1, 2025-04, 2025-06
    Premiers roulages à puissance réduite:         e2, 2025-06, 2025-07
    Campagnes de performance sur piste   :         e3, 2025-07, 2025-09
```

## Jalons Techniques Majeurs

<div class="ekart-timeline" markdown>

<div class="ekart-timeline-item" markdown>
<span class="ekart-timeline-date">Jalon M1 — T1 2024</span>

### :fontawesome-solid-flag-checkered: Revue des Exigences Initiales (SRR)
Validation du cahier des charges fonctionnel, des cibles d'autonomie et de masse globale.
</div>

<div class="ekart-timeline-item" markdown>
<span class="ekart-timeline-date">Jalon M2 — T2 2024</span>

### :fontawesome-solid-pencil-ruler: Revue de Conception Préliminaire (PDR)
Finalisation des modèles CAO 3D du cadre châssis et sélection des composants clés (moteur BLDC, ESC, cellules).
</div>

<div class="ekart-timeline-item" markdown>
<span class="ekart-timeline-date">Jalon M3 — T4 2024</span>

### :fontawesome-solid-hammer: Revue Critique de Conception (CDR) & Début Usinage
Lancement des approvisionnements matière (tubes 25CrMo4), découpe laser des supports et début de mécano-soudure.
</div>

<div class="ekart-timeline-item" markdown>
<span class="ekart-timeline-date">Jalon M4 — T1 2025</span>

### :fontawesome-solid-bolt: Intégration de Puissance & Faisceau
Assemblage sécurisé du pack batterie, mise en service du BMS et validation des verrouillages de sécurité haute tension.
</div>

<div class="ekart-timeline-item" markdown>
<span class="ekart-timeline-date">Jalon M5 — T3 2025</span>

### :fontawesome-solid-road: Qualification Dynamique & Mesures
Premières sessions de roulage sur piste fermée avec acquisition télémétrique haute fréquence et validation de la tenue thermique.
</div>

</div>
