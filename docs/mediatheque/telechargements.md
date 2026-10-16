---
title: Dépôt des Téléchargements
description: Téléchargement des archives techniques, modèles CAO, schémas électroniques et codes sources du projet e-Kart.
tags:
  - médiathèque
  - téléchargement
  - open-source
  - CAO
---

# Dépôt des Téléchargements

## Archives Techniques et Fichiers Numériques

L'ensemble des livrables techniques du projet est distribué sous licences libres afin de favoriser la reproductibilité, l'audit technique et la réutilisation pédagogique.

| Désignation de l'archive | Format | Version / Indice | Empreinte de contrôle (SHA-256) | Accès |
|:---|:---:|:---:|:---:|:---:|
| Modèle d'ensemble CAO 3D (STEP complet) | `.step` / `.zip` | Rev C (CDR) | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` | [Dépôt GitHub CAO](https://github.com/e-kart/e-kart/releases) |
| Plans de fabrication tôlerie et découpe laser | `.dxf` / `.zip` | Rev C | `d41d8cd98f00b204e9800998ecf8427e1b5f7b0a7c4e2b0b1c2d3e4f5a6b7c8d` | [Dépôt GitHub Plans](https://github.com/e-kart/e-kart/releases) |
| Schémas électroniques & Fichiers Gerber PCB | `.zip` (KiCad) | v1.2 | `ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb` | [Dépôt GitHub PCB](https://github.com/e-kart/e-kart/releases) |
| Firmware calculateur embarqué (C++ / PlatformIO) | `.tar.gz` | v1.0.4 | `3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eee596e0c329` | [Code Source GitHub](https://github.com/e-kart/e-kart/releases) |
| Fiche de synthèse des calculs RDM et bilan masse | `.pdf` | Indice B | `2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae` | [Rapport PDF](https://github.com/e-kart/e-kart/releases) |

## Clonage et Synchronisation du Dépôt

Pour cloner l'intégralité de l'arborescence documentaire, des scripts et des sources de conception :

```bash
# Clonage récursif incluant les sous-modules de télémétrie
git clone --recurse-submodules https://github.com/e-kart/e-kart.git

# Accès au répertoire du projet
cd e-kart
```

## Licences de Distribution

Les livrables de ce projet sont régis par les licences suivantes :

- **Matériel et Fichiers CAO** : Distribués sous licence **CERN-OHL-S v2** (CERN Open Hardware Licence - Strongly Reciprocal).
- **Firmwares et Logiciels Embarqués** : Distribués sous licence **MIT / Apache 2.0**.
- **Documentation et Rapports Techniques** : Distribués sous licence **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)**.
