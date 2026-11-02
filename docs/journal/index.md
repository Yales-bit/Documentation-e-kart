---
title: Journal de Bord
description: Suivi chronologique de l'avancement, revues de conception et jalons opérationnels du projet e-Kart.
tags:
  - journal
  - suivi
  - jalons
---

# Journal de Bord

Le journal de bord consigne de manière chronologique les faits techniques marquants, les arbitrages de dimensionnement, les jalons de fabrication et les résultats des campagnes de test.

!!! tip "Procédure de publication d'une entrée"
    Pour documenter un nouveau jalon ou une campagne d'essais, créer un fichier markdown dans le répertoire `docs/journal/posts/` sous la nomenclature `YYYY-MM-DD-titre.md`, puis référencer ce document dans la navigation `nav` du fichier `mkdocs.yml`.

---

## Chronologie des Dernières Publications

<div class="ekart-timeline" markdown>

<div class="ekart-timeline-item" markdown>
<span class="ekart-timeline-date">Octobre 2024</span>

### :fontawesome-solid-folder-tree: Mise en place du Référentiel Technique (Livrable 1)
Déploiement de l'architecture documentaire modulaire avec MkDocs Material. Structuration des sous-systèmes, définition des fonctions de service et choix des solutions techniques majeures.

<span class="ekart-status ekart-status--done">Validé</span>
</div>

<div class="ekart-timeline-item" markdown>
<span class="ekart-timeline-date">Novembre – Décembre 2024</span>

### :fontawesome-solid-compass-drafting: Modélisations CAO & Premières Expérimentations (Livrable 2)
Modélisations CAO 3D initiales, schémas de principe et premiers routages des cartes électroniques sous Proteus. Approvisionnement des composants clés et premiers essais en atelier.

<span class="ekart-status ekart-status--done">Validé</span>
</div>

<div class="ekart-timeline-item" markdown>
<span class="ekart-timeline-date">Janvier – Février 2025</span>

### :fontawesome-solid-gears: Phase de Mise en Œuvre Concrète & Qualifications (Livrable 3)
* **Support moteur & brides** : Validation par analyse statique FEA sous Creo Simulate Structure (contrainte max $22{,}1\text{ MPa}$, coefficient de sécurité $s = 10{,}6$, déplacement $0{,}017\text{ mm}$ dans le plan). Validation de la découpe jet d'eau (acier $5\text{ mm}$ S235) avec M. Schalck et prototype imprimé 3D du double réglage X/Y.
* **Transmission par chaîne 219** : Abandon de la V1 empirique et redimensionnement normé NF E 26-102 du pignon sur-mesure 9 dents afin de concilier fort rapport ($1:9$ à $1:10$) et garde au sol de $10{,}5\text{ cm}$.
* **Pédalier** : Essais de caractérisation du capteur à effet Hall concluant à son abandon (faible course $< 5^\circ$, non-linéarité). Bascule sur potentiomètre rotatif $10\text{ k}\Omega$ coaxial direct sous $3{,}3\text{ V}$.
* **Électronique & PCB v2** : Déplacement du bus CAN sur GPIO 6/7, migration vers MOSFETs CMS, validation thermique sans dissipateur des LM2576HV ($R_{\text{th}} = 32\text{ °C/W}$, $T_j \le 83{,}3\text{ °C}$) et conception de la carte feux stop redondante.
* **Modélisation multiphysique Simulink / Simscape** : Simulation dynamique sous $42\text{ A}$ continu et preuve d'inertie thermique ($37-38\text{ °C}$ après $1\,000\text{ s}$, sans risque d'emballement).
* **Boîtier batterie IP54** : Conception mécano-pliée anti-gauchissement, portées d'étanchéité vissées en tube plein $8\text{ mm}$ et soudage des pattes au châssis avec retrait sécuritaire des vis.

<span class="ekart-status ekart-status--done">Validé</span>
</div>

<div class="ekart-timeline-item" markdown>
<span class="ekart-timeline-date">Mars 2025</span>

### :fontawesome-solid-bolt: Assemblage Intégral & Roulage Pré-Piste
Réception des pièces usinées jet d'eau et pignon CNC, brasage des cartes PCB gravées, intégration du faisceau complet et premiers roulages d'essais à puissance bridée.

<span class="ekart-status ekart-status--wip">En cours</span>
</div>

</div>

---

## Registre des Archives Techniques

Les articles détaillés rédigés sous forme d'articles de blog ou de rapports d'essais complets sont capitalisés dans le dossier `docs/journal/posts/`. À mesure de l'avancement des essais sur piste, chaque session de roulage donnera lieu à un compte-rendu avec courbes d'acquisition télémétrique.
