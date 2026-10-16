---
title: Architecture du Pack
description: Configuration et construction du pack batterie.
tags:
  - ingénierie
  - batterie
  - pack
---

# Architecture du Pack

## Configuration série/parallèle

La tension et la capacité du pack sont déterminées par la configuration des cellules.

$$
V_{pack} = n_s \times V_{cellule}
$$

$$
C_{pack} = n_p \times C_{cellule}
$$

$$
E_{pack} = V_{pack} \times C_{pack}
$$

| Paramètre | Formule | Valeur |
|:---|:---|:---|
| Cellules en série (nS) | \( V_{cible} / V_{cellule} \) | — |
| Cellules en parallèle (nP) | \( C_{cible} / C_{cellule} \) | — |
| Nombre total de cellules | \( n_s \times n_p \) | — |
| Énergie totale | \( V_{pack} \times C_{pack} \) | — kWh |

## Conception du boîtier

<!-- TODO: Matériau, étanchéité (IP), fixation au châssis -->

## Gestion thermique

<!-- TODO: Refroidissement passif / actif, capteurs de température -->

---

*Page à compléter.*
