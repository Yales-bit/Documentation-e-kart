---
title: Performances
description: Calculs et simulations de performances du kart électrique.
tags:
  - ingénierie
  - moteur
  - performances
---

# Performances

## Modèle dynamique simplifié

La force de traction nécessaire est la somme des résistances :

$$
F_{traction} = F_{roulement} + F_{aéro} + F_{pente} + F_{accélération}
$$

$$
F_{traction} = C_{rr} \, m \, g + \frac{1}{2} \, \rho \, C_x \, A \, v^2 + m \, g \, \sin(\alpha) + m \, a
$$

On négligera pour l'instant la force aérodynamique, la vitesse visée ($v$) et la surface projetée ($S$) n'étant pas très grandes. 

De même, pour des essais, la piste ou la route seront plutôt plates et $\alpha \approx 0$. 

Ainsi, les termes se s'annulent et l'équation devient : 

$$

F_{traction} = C_{rr} \, m \, g + m \, a = m \, (C_{rr} \, g + a)

$$
## Courbe de performance

<!-- TODO: Graphique vitesse vs temps, vitesse max en fonction du rapport de réduction -->

## Autonomie estimée

<!-- TODO: Calcul de l'autonomie en fonction du profil de conduite -->

| Profil | Vitesse moy. | Autonomie estimée |
|:---|---:|---:|
| Éco (ville) | 25 km/h | — km |
| Normal | 40 km/h | — km |
| Sport (piste) | 55 km/h | — km |

---

*Page à compléter avec les résultats de simulation.*
