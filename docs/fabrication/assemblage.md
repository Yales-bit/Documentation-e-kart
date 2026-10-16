---
title: Gamme d'Assemblage
description: Procédures d'assemblage mécanique, outillage d'atelier requis et tableau des couples de serrage critiques.
tags:
  - fabrication
  - assemblage
  - métrologie
  - outillage
---

# Gamme d'Assemblage

## Séquence d'Assemblage Mécanique et Électrique

L'assemblage du véhicule s'effectue sur marbre de réglage afin de garantir l'alignement des trains roulants et la perpendicularité des axes.

### Phase 1 — Structure et Liaisons au Sol
- [ ] Contrôle métrologique de la géométrie du cadre tubulaire après soudure
- [ ] Montage des paliers d'arbre arrière (3 paliers auto-aligneurs à roulement)
- [ ] Insertion et centrage de l'arbre arrière plein en acier rectifié $\varnothing 30 \text{ mm}$
- [ ] Montage des fusées de direction avant avec leurs bagues et rondelles de calage
- [ ] Pose de la colonne de direction, du moyeu et du volant
- [ ] Installation des biellettes de direction et pré-réglage du parallélisme

### Phase 2 — Freinage et Chaîne Cinématique
- [ ] Fixation du disque de frein ventilé sur son porte-disque flottant
- [ ] Montage de l'étrier de frein hydraulique arrière sur sa platine usinée
- [ ] Installation du maître-cylindre, de la pédale de frein et purge du liquide DOT 4/5.1
- [ ] Montage du support moteur réglable en aluminium 6061-T6
- [ ] Fixation du moteur synchrone BLDC et du pignon de sortie
- [ ] Installation de la couronne arrière et de la chaîne de transmission
- [ ] Alignement laser pignon-couronne et réglage de la flèche de chaîne ($10 - 15 \text{ mm}$)

### Phase 3 — Électrotechnique et Puissance Haute Tension
- [ ] Fixation du berceau coupe-feu amorti pour le pack batterie
- [ ] Insertion du caisson batterie et verrouillage mécanique
- [ ] Pose et fixation de l'onduleur (ESC) sur dissipateur thermique ventilé
- [ ] Raccordement des câbles de puissance triphasés moteur (phases U, V, W)
- [ ] Raccordement des lignes d'alimentation continue (HV DC) avec détrompeurs
- [ ] Installation de la boucle d'arrêt d'urgence et des contacteurs de sécurité

### Phase 4 — Basse Tension, Instrumentation et Essais Pré-Roulage
- [ ] Câblage du faisceau basse tension $12 \text{ V}$ et du bus CAN
- [ ] Fixation du tableau de bord et raccordement au calculateur central (MCU)
- [ ] Contrôle de l'isolement galvanique entre réseau haute tension et châssis
- [ ] Validation du bon fonctionnement de la précharge et du contacteur général
- [ ] Test à vide des sens de rotation moteur et de la progressivité de l'accélérateur

## Outillage d'Atelier Requis

| Catégorie | Outils indispensables | Spécification / Précision |
|:---|:---|:---|
| **Serrage dynamométrique** | Clé dynamométrique $5 - 25 \text{ N}\cdot\text{m}$ et $20 - 100 \text{ N}\cdot\text{m}$ | Certificat d'étalonnage ISO 6789 |
| **Métrologie & Alignement** | Pied à coulisse $0 - 200 \text{ mm}$, comparateur au centième, outil d'alignement laser de chaîne | Précision $\pm 0{,}02 \text{ mm}$ |
| **Purge hydraulique** | Kit de purge sous pression pour liquide de frein | Compatible DOT 4 et DOT 5.1 |
| **Habilitation électrique** | Multimètre catégorie CAT III $1\,000 \text{ V}$, gants isolants classe 00 ($500 \text{ V}$), tapis isolant | Vérification périodique conforme |
| **Outillage à main** | Clés plates/mixtes métriques $8 - 24 \text{ mm}$, jeu de clés Allen hexagonales à rotule | Qualité chrome-vanadium |

## Tableau des Couples de Serrage Critiques

Tous les assemblages vissés soumis à des vibrations doivent être sécurisés par du frein filet moyen (Loctite 243) ou des écrous autofreinés (Nylstop classe 8 / DIN 985).

| Assemblage mécanique | Dimension filetage | Classe de qualité acier | Couple préconisé | Remarque / Sécurisation |
|:---|:---:|:---:|---:|:---|
| Vis des paliers d'arbre arrière sur châssis | $\text{M8} \times 1{,}25$ | Classe 10.9 | $28 \text{ N}\cdot\text{m}$ | Frein filet Loctite 243 |
| Serrage des brides de roulement d'arbre | $\text{M6} \times 1{,}00$ | Classe 8.8 | $10 \text{ N}\cdot\text{m}$ | Clé dynamométrique basse |
| Fixation de la platine moteur sur châssis | $\text{M10} \times 1{,}50$ | Classe 10.9 | $55 \text{ N}\cdot\text{m}$ | Rondelles Nord-Lock crantées |
| Vis de fixation du moteur sur sa platine | $\text{M8} \times 1{,}25$ | Classe 8.8 | $22 \text{ N}\cdot\text{m}$ | Loctite 243 |
| Porte-disque et porte-couronne sur arbre | $\text{M8} \times 1{,}25$ (vis transversales) | Classe 10.9 | $32 \text{ N}\cdot\text{m}$ | Serrage alterné en croix |
| Fixation de l'étrier de frein | $\text{M8} \times 1{,}25$ | Classe 10.9 | $30 \text{ N}\cdot\text{m}$ | Vis neuves impératives |
| Rotules de biellettes de direction | $\text{M8}$ (filet fin pas $1{,}00$) | Classe 10.9 | $25 \text{ N}\cdot\text{m}$ | Écrous autofreinés Nylstop |
| Écrous centraux de moyeux de roues | $\text{M14} \times 1{,}50$ | Classe 8.8 | $75 \text{ N}\cdot\text{m}$ | Goupille fendue de sécurité |
