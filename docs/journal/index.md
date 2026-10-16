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

### :fontawesome-solid-folder-tree: Mise en place du Référentiel Technique
Déploiement de l'architecture documentaire modulaire avec MkDocs Material. Structuration des sous-systèmes, implémentation du système de navigation par onglets et configuration des extensions scientifiques (MathJax, Mermaid).

<span class="ekart-status ekart-status--done">Validé</span>
</div>

<div class="ekart-timeline-item" markdown>
<span class="ekart-timeline-date">Novembre 2024</span>

### :fontawesome-solid-compass-drafting: Clôture de la Revue de Conception Préliminaire (PDR)
Finalisation des épures géométriques du châssis 25CrMo4 et sélection définitive de la cellule d'accumulateur de référence. Début des simulations statiques de résistance mécanique (FEA).

<span class="ekart-status ekart-status--wip">En cours</span>
</div>

<div class="ekart-timeline-item" markdown>
<span class="ekart-timeline-date">Décembre 2024</span>

### :fontawesome-solid-fire-extinguisher: Qualification du Circuit Haute Tension
Mise en place de la maquette d'essais pour l'étage de puissance, test de la boucle de sécurité d'arrêt d'urgence et validation de la précharge capacitive de l'onduleur.

<span class="ekart-status ekart-status--todo">Planifié</span>
</div>

</div>

---

## Registre des Archives Techniques

Les articles détaillés rédigés sous forme d'articles de blog ou de rapports d'essais complets sont capitalisés dans le dossier `docs/journal/posts/`. À mesure de l'avancement des essais sur piste, chaque session de roulage donnera lieu à un compte-rendu avec courbes d'acquisition télémétrique.
