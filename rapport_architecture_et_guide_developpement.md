# Rapport Technique d'Ingénierie & Guide de Développement e-Kart

Ce document constitue le rapport de référence consignant l'ensemble des interventions réalisées sur le site de documentation technique du projet **e-Kart**, les arbitrages d'ingénierie logicielle retenus, l'explication détaillée de l'architecture, ainsi que le guide opérationnel pour reprendre et enrichir la plateforme.

---

## 1. Synthèse des Interventions Réalisées

### 1.1. Résolution des Problèmes de Génération (Build MkDocs)

Lors des analyses initiales, plusieurs anomalies de configuration et d'arborescence perturbaient le processus de compilation statique :

1. **Avertissement de page orpheline (`includes/abbreviations.md`)** :
   - *Cause* : Le fichier d'abréviations techniques était situé dans `docs/includes/abbreviations.md`. MkDocs tentait par défaut de le compiler sous forme d'une page HTML autonome (`includes/abbreviations/index.html`) et émettait un avertissement car ce fichier n'était pas déclaré dans la clé `nav` du fichier `mkdocs.yml`.
   - *Résolution* : Ajout de la directive `exclude_docs: "includes/*"` dans `mkdocs.yml`. Cette option native de MkDocs 1.6 empêche la compilation HTML de ce snippet tout en permettant à l'extension `pymdownx.snippets` d'injecter son contenu en fin de chaque page markdown pour l'affichage des infobulles sur les sigles techniques (BMS, ESC, BLDC, CAN, etc.).
2. **Conflit d'emplacement du répertoire des surcharges (`overrides`)** :
   - *Cause* : Le dossier de surcharges Jinja2 était positionné dans `docs/overrides`, ce qui constitue un anti-pattern dans MkDocs : tout ce qui réside dans `docs/` est interprété comme du contenu documentaire.
   - *Résolution* : Déplacement du dossier `overrides/` à la racine du projet et mise à jour de la configuration dans `mkdocs.yml` (`theme.custom_dir: overrides`).
3. **Normalisation des 42 liens relatifs internes** :
   - *Cause* : Les liens de navigation interne dans les pages index utilisaient des URLs relatives avec barre oblique finale (ex. `[Genèse](genese/)`), générant des avertissements d'incompatibilité sous le validateur strict de MkDocs 1.6.
   - *Résolution* : Conversion systématique des cibles vers les fichiers sources markdown (ex. `[Genèse](genese.md)` ou `[Châssis](chassis/index.md)`). MkDocs valide ainsi l'existence réelle de la cible à la compilation et génère automatiquement le lien HTML propre (`use_directory_urls: true`).
4. **Validation du mode strict** :
   - Le build s'exécute désormais avec l'argument `--strict` sans aucune erreur ni aucun avertissement :
     ```bash
     mkdocs build --strict
     # INFO - Cleaning site directory
     # INFO - Building documentation to directory: .../site
     # INFO - Documentation built in 0.84 seconds
     ```

---

### 1.2. Résolution des Problèmes d'Affichage et de Rendu Web

1. **Correction critique du rendu des icônes FontAwesome / Material** :
   - *Cause* : Les grilles d'accueil et d'index utilisaient des blocs HTML bruts (`<a class="ekart-card">...<div class="ekart-card-icon">:fontawesome-solid-gears:</div>...</a>`). En Python-Markdown, l'analyseur `md_in_html` désactive le traitement des extensions markdown et des shortcodes d'icônes à l'intérieur des balises HTML blocs non annotées. Pire encore, Python-Markdown refermait prématurément les balises de paragraphe `<p>`, brisant le lien `<a>` et affichant le texte brut `:fontawesome-solid-gears:`.
   - *Résolution* : Migration de l'ensemble des grilles d'orientation vers la syntaxe native et sémantique de Material for MkDocs : `<div class="grid cards" markdown>`. Les icônes (`:fontawesome-solid-...:{ .lg .middle }`) sont à présent compilées en éléments SVG vectoriels natifs, accessibles et parfaitement responsives.
2. **Correction du contraste et de la typographie du bloc Hero (`.ekart-hero`)** :
   - *Cause* : En mode clair, la règle CSS globale `.md-typeset h1` écrasait la couleur du titre dans la bannière dégradée, créant un manque de contraste sévère. Les marges négatives (`-0.6rem`) pouvaient également provoquer des débordements horizontaux sur certains écrans.
   - *Résolution* : Verrouillage de la couleur blanche (`color: #ffffff !important;`) sur le titre et la description, ajustement des espacements internes et externes (`margin: 0 0 2.5rem 0;`), et renforcement de l'accessibilité visuelle du badge.
3. **Sécurisation de la navigation dynamique (MathJax & Instant Loading)** :
   - *Cause* : Le chargement instantané SPA (`navigation.instant`) recharge le contenu du document sans rafraîchir la page complète. Si MathJax était appelé avant que le DOM ne soit prêt, une exception JavaScript pouvait survenir.
   - *Résolution* : Sécurisation de `docs/javascripts/mathjax.js` avec vérification de type (`typeof MathJax !== "undefined"`), vidage des caches d'équations (`typesetClear()`) et capture silencieuse des promesses.
4. **Création d'un composant de jauge télémétrique (`.ekart-progress`)** :
   - *Amélioration* : Remplacement des barres de caractères ASCII par un composant CSS pur fluide avec piste (`.ekart-progress-track`), remplissage en gradient (`.ekart-progress-fill`) et valeur numérique monospace calibrée (`.ekart-progress-val`).

---

### 1.3. Éradication des Émojis et Professionnalisation des Contenus

Conformément à l'exigence de rigueur d'un dossier d'ingénierie destiné à être publié et revu par des pairs ou des partenaires industriels :

| Emplacement d'origine | Contenu informel supprimé | Remplacement technique rigoureux |
|:---|:---|:---|
| `docs/index.md` | Badge `⚡ Projet Open Source` | `Projet d'Ingénierie Open Source` |
| `docs/index.md` | Barres de caractères `██████░░░░ 60%` | Jauges télémétriques CSS professionnelles (`.ekart-progress`) |
| `docs/ingenierie/architecture.md` | Nœuds Mermaid `🔋 Énergie`, `⚡ Motopropulseur`, `🔌 Électronique`, `🔩 Châssis` | `Stockage et Gestion de l'Énergie`, `Groupe Motopropulseur`, `Électronique de Contrôle & Signaux`, `Structure & Liaisons au Sol` |
| `docs/ingenierie/index.md` | Nœuds Mermaid `🏎️ e-Kart`, `🔩 Châssis`, `⚡ Moteur`, `🔋 Batterie`, `🔌 Élec` | `Système e-Kart`, `Châssis & Liaisons au Sol`, `Groupe Motopropulseur`, etc. |
| `docs/ingenierie/electronique/schema.md` | Nœuds Mermaid `🔋`, `🔌`, `⚡`, `🔧`, `🖥️`, `📊`, `🌀`, `💡` | Désignations schématiques normalisées : `Pack Batterie 48-72V DC`, `Fusible Général HV`, `Onduleur / Contrôleur`, etc. |
| `docs/ingenierie/batterie/cellules.md` | Étoiles graphiques `★★★`, `★★☆`, `★☆☆` | Critères qualitatifs d'ingénierie : `Maximale`, `Élevée`, `Modérée`, `Excellente (> 3 000 cycles)` |
| `docs/fabrication/cao-reel.md` | Nœuds Mermaid `🖥️`, `📄`, `🏭`, `📏`, `🔧` | Phases d'industrialisation : `Modèle CAO 3D Paramétrique`, `Exports STEP/DXF/STL`, `Fabrication & Usinage`, `Contrôle Métrologique` |
| `docs/fabrication/securite.md` | Symboles `✅` et `⚠️ Recommandé`, nœud `🚨` | Niveaux d'exigence formels : `Obligatoire`, `Recommandé`, et procédure formalisée d'arrêt d'urgence |
| `docs/journal/index.md` | Statut `✓ Terminé` | Badge normalisé sans caractère spécial : `Validé` |
| Ensemble des pages | Mentions `*Page à compléter.*` et `<!-- TODO -->` | Tableaux de tolérances (ISO 2768-mK), spécifications de couples de serrage (DIN 985/10.9), matrices RACI et analyses normatives |

---

## 2. Architecture Technique et Choix d'Ingénierie

### 2.1. Pile Technologique

```mermaid
graph LR
    subgraph Sources Markdown
        MD[Contenus Techniques .md]
        SNIP[Snippets & Abréviations]
        CONF[mkdocs.yml]
    end
    
    subgraph Moteur de Génération
        MKD[MkDocs Core 1.6.1]
        MAT[Material for MkDocs 9.5+]
        PYM[PyMdown Extensions]
    end
    
    subgraph Rendu Client
        HTML[Site Statique HTML5 / SPA]
        MJS[MathJax 3 - LaTeX]
        MER[Mermaid.js - Schémas]
        CSS[Design System extra.css]
    end
    
    MD --> MKD
    SNIP --> MKD
    CONF --> MKD
    MKD --> MAT
    MAT --> PYM
    PYM --> HTML
    HTML --> MJS
    HTML --> MER
    HTML --> CSS
```

- **MkDocs & Material for MkDocs** : Solution éprouvée pour les documentations scientifiques et techniques industrielles. Génération 100% statique (sécurité absolue, hébergement gratuit sur GitHub Pages ou GitLab Pages), moteur de recherche full-text local et mode sombre dynamique basé sur les préférences de l'OS.
- **PyMdown Extensions** :
  - `arithmatex` : Support des équations différentielles et calculs RDM en LaTeX via MathJax 3.
  - `superfences` : Intégration native des diagrammes Mermaid (Gantt, flowcharts, diagrammes de Sankey).
  - `tabbed` : Comparatifs de technologies sous forme d'onglets ergonomiques.
  - `tasklist` : Check-lists de montage et d'autocontrôle qualité.
  - `snippets` : Inclusion automatique du glossaire d'abréviations techniques sur chaque document.

---

### 2.2. Structure des Dossiers du Projet

```text
GIT_Kart/
├── .gitignore                    # Exclusion de l'environnement virtuel et du build
├── mkdocs.yml                    # Configuration centrale MkDocs & navigation
├── requirements.txt              # Dépendances Python versionnées
├── overrides/                    # Surcharges de templates Jinja2 (à la racine)
├── env_git_kart/                 # Environnement virtuel Python isolé (Python 3.12)
├── site/                         # Répertoire de sortie HTML compilé (généré)
└── docs/                         # Racine des sources documentaires
    ├── index.md                  # Page vitrine / Dashboard du projet
    ├── tags.md                   # Index des métadonnées thématiques
    ├── includes/
    │   └── abbreviations.md      # Glossaire d'abréviations (exclu du nav)
    ├── javascripts/
    │   └── mathjax.js            # Configuration et réarmement SPA de MathJax 3
    ├── stylesheets/
    │   └── extra.css             # Design system sur mesure et styles avancés
    ├── assets/                   # Médias statiques, logos, schémas vectoriels
    ├── projet/                   # Section 1 : Cadrage et gouvernance
    │   ├── index.md              # Hub de section (Grid Cards)
    │   ├── genese.md             # Contexte, exigences et cadre normatif
    │   ├── equipe.md             # Pôles d'ingénierie et matrice RACI
    │   ├── budget.md             # Modèle économique et ventilation des coûts
    │   └── planning.md           # Diagramme de Gantt et jalons directeurs
    ├── ingenierie/               # Section 2 : Cœur technique & sous-systèmes
    │   ├── index.md              # Hub d'ingénierie et spécifications système
    │   ├── architecture.md       # Schémas d'interconnexion et flux Sankey
    │   ├── chassis/              # Sous-système Châssis & Liaisons au sol
    │   ├── moteur/               # Sous-système Groupe Motopropulseur
    │   ├── batterie/             # Sous-système Stockage d'Énergie & BMS
    │   └── electronique/         # Sous-système Électronique & Télémétrie
    ├── fabrication/              # Section 3 : Méthodes, usinage et sécurité
    │   ├── index.md              # Hub des méthodes de fabrication
    │   ├── cao-reel.md           # Workflow numérique, tolérancement ISO
    │   ├── processus.md          # Procédés de soudage, usinage, découpe laser
    │   ├── assemblage.md         # Gamme de montage, outillage et couples de serrage
    │   ├── securite.md           # Matrice des EPI, consignation électrique
    │   └── essais.md             # Protocoles de qualification sur piste
    ├── journal/                  # Section 4 : Journal de bord chronologique
    │   ├── index.md              # Chronologie des publications et jalons
    │   └── posts/                # Articles datés détaillés (YYYY-MM-DD-titre.md)
    └── mediatheque/              # Section 5 : Données ouvertes et téléchargements
        ├── index.md              # Hub de la médiathèque
        ├── galerie.md            # Photothèque technique
        ├── videos.md             # Vidéothèque d'essais
        ├── cao.md                # Répertoire des modèles 3D STEP
        ├── schemas.md            # Schémas unifilaires et fiches constructeurs
        └── telechargements.md    # Dépôt officiel des archives avec empreintes SHA-256
```

---

## 3. Guide d'Exploitation & de Développement

### 3.1. Prise en Main de l'Environnement Local

Toutes les opérations s'effectuent au moyen de l'environnement virtuel Python dédié :

```bash
# 1. Se positionner à la racine du dépôt
cd /Users/jules/Desktop/PROJETS/_Kart/GIT_Kart

# 2. Activer l'environnement virtuel
source env_git_kart/bin/activate

# 3. Lancer le serveur de développement local avec rechargement automatique à chaud
mkdocs serve -a 127.0.0.1:8080

# 4. Ouvrir le navigateur à l'adresse suivante :
# http://127.0.0.1:8080/
```

Pour compiler le bundle de production et valider l'intégrité de tous les liens internes :

```bash
mkdocs build --strict
```

---

### 3.2. Guide de Rédaction : Ajouter une Nouvelle Page Technique

Pour ajouter un nouveau document d'ingénierie ou enrichir un sous-système existant :

1. **Créer le fichier Markdown** dans le sous-dossier approprié (ex. `docs/ingenierie/moteur/thermique.md`).
2. **Définir l'en-tête Frontmatter YAML obligatoire** en début de fichier :
   ```yaml
   ---
   title: Modélisation Thermique du Stator
   description: Étude de l'élévation de température sous cycle de décharge continue 100A.
   tags:
     - ingénierie
     - moteur
     - thermique
   ---
   ```
3. **Déclarer la page dans la navigation** dans `mkdocs.yml` sous la clé `nav` :
   ```yaml
       - Groupe Motopropulseur:
         - ingenierie/moteur/index.md
         - Choix du Moteur: ingenierie/moteur/choix.md
         - Étude Thermique: ingenierie/moteur/thermique.md  # Nouvelle entrée
         - Transmission: ingenierie/moteur/transmission.md
   ```
4. **Utiliser des liens relatifs standardisés** pointant vers les fichiers `.md` pour garantir la validation par MkDocs :
   ```markdown
   Pour les spécifications de l'onduleur, voir [Contrôleur ESC](controleur.md).
   Pour l'architecture globale, voir [Architecture Globale](../architecture.md).
   ```

---

### 3.3. Guide de Rédaction : Publier une Entrée dans le Journal de Bord

Le journal de bord sert à documenter les étapes au fur et à mesure du montage :

1. Créer le document dans `docs/journal/posts/` sous la nomenclature standard :
   `docs/journal/posts/2024-11-15-reception-tubes-chassis.md`
2. Rédiger l'article avec photos, données chiffrées et constats métrologiques.
3. Ajouter une fiche synthétique dans la timeline de `docs/journal/index.md` :
   ```html
   <div class="ekart-timeline-item" markdown>
   <span class="ekart-timeline-date">15 Novembre 2024</span>

   ### :fontawesome-solid-truck-ramp-box: Réception des Profilés 25CrMo4
   Contrôle dimensionnel des épaisseurs de tubes à réception. Conformité attestée à 99,4%.

   <span class="ekart-status ekart-status--done">Validé</span>
   </div>
   ```

---

### 3.4. Conventions Graphiques et Syntaxes Avancées

#### Formules Mathématiques et Notations Physiques (LaTeX / MathJax)
- Formule en ligne : encadrer d'un simple antislash-parenthèse `\( F = m \cdot a \)`.
- Formule centrée en bloc : encadrer de doubles dollars `$$` :
  ```markdown
  $$
  C_{\text{roue}} = C_{\text{moteur}} \times R_{\text{réduction}} \times \eta_{\text{trans}}
  $$
  ```

#### Diagrammes Techniques (Mermaid)
Utiliser des blocs ` ```mermaid ` avec indentations strictes :
```markdown
```mermaid
flowchart LR
    A[Capteur Hall] --> B[MCU ESP32]
    B --> C[Onduleur ESC]
```
```

#### Encadrés d'Avertissement (Admonitions)
Matérialiser les points de vigilance sans employer d'émojis, grâce aux blocs typés :
```markdown
!!! info "Information technique"
    Texte explicatif ou rappel méthodologique.

!!! tip "Recommandation d'atelier"
    Astuce de montage ou choix d'outillage optimal.

!!! warning "Contrainte critique"
    Vigilance particulière requise sur les jeux mécaniques ou les tolérances.

!!! danger "Sécurité haute tension"
    Avertissement sur les risques corporels ou matériels irréversibles.
```

#### Cartes de Navigation Homogènes (Grid Cards)
Pour préserver une interface d'un niveau esthétique optimal, toujours employer la structure :
```markdown
<div class="grid cards" markdown>

-   :fontawesome-solid-icone:{ .lg .middle } __Titre de la Fiche__

    ---

    Description concise en deux ou trois phrases des aspects techniques couverts.

    [:octicons-arrow-right-24: Intitulé du lien](fichier.md)

</div>
```

---

### 3.5. Automatisation du Déploiement (GitHub Pages / GitLab Pages)

Pour publier automatiquement le site à chaque `git push` sur la branche principale :

#### Exemple de Workflow GitHub Actions (`.github/workflows/deploy.yml`)
```yaml
name: Déploiement Documentation e-Kart

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Configuration de Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - name: Installation des dépendances
        run: pip install -r requirements.txt
      - name: Déploiement sur GitHub Pages
        run: mkdocs gh-deploy --force --strict
```

---

## 4. Bilan & Conformité

| Exigence formulée | Statut | Justification technique |
|:---|:---:|:---|
| **Résolution des problèmes de génération** | **Conforme** | Build en mode strict `mkdocs build --strict` sans erreur ni avertissement. |
| **Résolution des problèmes d'affichage** | **Conforme** | Icônes SVG pleinement fonctionnelles, contraste rétabli sur le hero, navigation fluide MathJax. |
| **Suppression des émojis** | **Conforme** | 0 émoji détecté sur l'intégralité du projet (remplacés par des icônes vectorielles et des termes techniques). |
| **Ton professionnel et rigoureux** | **Conforme** | Vocabulaire d'ingénierie système, normes (ISO, CIK-FIA, DIN), spécifications chiffrées complètes. |
| **Rapport et guide de reprise du code** | **Conforme** | Documenté exhaustivement dans le présent artefact de référence. |
