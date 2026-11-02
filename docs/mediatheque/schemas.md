---
title: Schémas & Datasheets
description: Schémas électriques, architecture des cartes électroniques et fiches techniques certifiées des composants.
tags:
  - médiathèque
  - schémas
  - datasheets
  - batterie
---

# Schémas & Datasheets

## 1. Schémas de Principe et Routages Électroniques

Les typons, schémas Proteus et fichiers de perçage Gerber des 4 cartes électroniques du kart sont documentés dans la section d'ingénierie :

* [:octicons-arrow-right-24: Schéma Électrique & Cartes PCB (Avant, Arrière, Distribution Puissance, Feux)](../ingenierie/electronique/schema.md)

---

## 2. Datasheets des Composants Certifiés

| Sous-système | Organe | Fabricant / Réf. | Spécifications clés | Fiche technique |
|:---|:---|:---|:---|:---:|
| **Stockage Énergie** | Cellule Li-ion 21700 | **Molicel INR21700-P42A** | $4\,200\text{ mAh}$, $45\text{ A}$ continu, $R_i \le 16\text{ m}\Omega$ | [:fontawesome-solid-file-pdf: Datasheet PDF](../assets/images/batterie/INR21700P42A_1.7_Product-Data-Sheet-of-INR-21700-P42A-80092.pdf) |
| **Régulation Puissance** | Hacheur abaisseur | Texas Instruments LM2576HVS | $V_{\text{in}} \le 60\text{ V}$, $I_{\text{out}} = 3\text{ A}$, boîtier CMS TO-263 | [:octicons-link-external-24: TI LM2576HV](https://www.ti.com/product/LM2576HV) |
| **Microcontrôleur** | Calculateur double cœur | Espressif ESP32-WROOM-32 | $240\text{ MHz}$, Wi-Fi/BLE, contrôleur CAN TWAI | [:octicons-link-external-24: Espressif ESP32](https://www.espressif.com/en/products/socs/esp32) |
| **Consigne Pilote** | Potentiomètre rotatif | Bourns / Vishay 10 kΩ | 1 tour, linéaire, montage direct coaxial 3,3V | [:octicons-arrow-right-24: Étude pédalier](../ingenierie/chassis/freinage.md) |
