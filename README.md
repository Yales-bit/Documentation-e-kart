# e-Kart — Référentiel Technique & Documentation

Site de documentation technique, d'ingénierie système et journal de bord pour la conception et la fabrication d'un kart 100% électrique en open source.

---

## 1. Présentation & But du Projet

Le projet **e-Kart** a pour objectif la conception intégrale, le dimensionnement, la fabrication et la validation sur piste d'un véhicule monoplace électrique.

Ce dépôt héberge l'intégralité du site de documentation technique propulsé par [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/). Il sert de référentiel central pour :

- **L'ingénierie par sous-systèmes** : choix techniques, calculs de dimensionnement, intégration, schémas
- **Les dossiers de méthodes et de fabrication** 
- **Le suivi de projet et journal de bord** : revues de conception, planning directeur (Gantt).
- **La médiathèque et données ouvertes** : distribution sous licences libres des modèles CAO 3D (STEP), plans de découpe 2D (DXF), schémas de PCB (Gerber) et des codes embarqués.

---

## 2. Architecture du Projet

### 2.1. Pile Technologique

- **Moteur de génération** : MkDocs 1.6+ / Material for MkDocs 9.5+
- **Formules mathématiques** : MathJax 3 / LaTeX via `pymdownx.arithmatex`
- **Diagrammes et cinématique** : Mermaid.js via `pymdownx.superfences`
- **Design system & personnalisation** : Vanilla CSS responsive (`docs/stylesheets/extra.css`) avec support dynamique des modes clair et sombre (Slate)
- **Typographie** : Inter (corps de texte) et JetBrains Mono (code et données numériques)

### 2.2. Arborescence du Dépôt

```text
.
├── README.md                     # Présentation et guide du dépôt
├── mkdocs.yml                    # Fichier maître de configuration MkDocs & navigation
├── requirements.txt              # Dépendances Python versionnées
├── overrides/                    # Surcharges de templates Jinja2 personnalisés
├── docs/                         # Sources markdown de la documentation
│   ├── index.md                  # Page d'accueil / Tableau de bord du projet
│   ├── tags.md                   # Index des mots-clés thématiques
│   ├── includes/
│   │   └── abbreviations.md      # Glossaire technique pour infobulles automatiques
│   ├── javascripts/
│   │   └── mathjax.js            # Configuration et réarmement SPA de MathJax 3
│   ├── stylesheets/
│   │   └── extra.css             # Design system e-Kart et composants CSS avancés
│   ├── assets/                   # Médias statiques, logos et schémas vectoriels
│   ├── projet/                   # Cadrage : genèse, gouvernance, budget, planning
│   ├── ingenierie/               # Cœur technique : architecture globale et sous-systèmes
│   │   ├── architecture.md       # Synoptique d'interconnexion et flux Sankey
│   │   ├── chassis/              # Géométrie, matériaux RDM, direction, freinage
│   │   ├── moteur/               # Sélection moteur BLDC, transmission, onduleur ESC
│   │   ├── batterie/             # Chimie des cellules, pack 16S, BMS, chargeur
│   │   └── electronique/         # Schéma unifilaire, dashboard, télémétrie, faisceau
│   ├── fabrication/              # Méthodes : CAO au réel, usinage, assemblage, sécurité
│   ├── journal/                  # Journal de bord chronologique (posts datés)
│   └── mediatheque/              # Plans 2D/3D, schémas, photothèque, téléchargements
└── site/                         # Bundle HTML statique compilé (généré à la demande)
```

---

## 3. Guide d'Exploitation & de Développement

### 3.1. Prise en Main de l'Environnement Local

Le projet repose sur un environnement virtuel Python 3.10+ isolé.

#### Installation Initiale

```bash
# 1. Cloner le dépôt
git clone https://github.com/e-kart/e-kart.git
cd e-kart

# 2. Créer l'environnement virtuel
python3 -m venv env_git_kart

# 3. Activer l'environnement virtuel
source env_git_kart/bin/activate  # macOS / Linux
# .\env_git_kart\Scripts\activate   # Windows PowerShell

# 4. Installer les dépendances
pip install -r requirements.txt
```

#### Commandes d'Exécution Quotidiennes

```bash
# Lancer le serveur local de prévisualisation avec rechargement à chaud (Live Reload)
mkdocs serve -a 127.0.0.1:8080

# Compiler le site statique complet en mode strict (vérification de tous les liens internes)
mkdocs build --strict
```

Une fois le serveur démarré, le site est accessible à l'adresse suivante :  
**`http://127.0.0.1:8080/`**

---

### 3.2. Ajouter une Nouvelle Page Technique

Pour ajouter un nouveau document d'ingénierie :

1. **Créer le fichier Markdown** dans le répertoire approprié (par exemple `docs/ingenierie/chassis/aerodynamique.md`).
2. **Définir l'en-tête Frontmatter YAML obligatoire** en tête de fichier :
   ```yaml
   ---
   title: Étude Aérodynamique & Carénages
   description: Modélisation CFD de la traînée et dimensionnement des pontons latéraux.
   tags:
     - ingénierie
     - châssis
     - aérodynamique
   ---
   ```
3. **Déclarer la page dans la navigation** dans `mkdocs.yml` sous la clé `nav` :
   ```yaml
       - Châssis & Mécanique:
         - ingenierie/chassis/index.md
         - Géométrie & Dimensions: ingenierie/chassis/geometrie.md
         - Étude Aérodynamique: ingenierie/chassis/aerodynamique.md  # Nouvelle entrée
         - Matériaux & Structure: ingenierie/chassis/materiaux.md
   ```
4. **Employer des liens relatifs standardisés** ciblant les fichiers `.md` :
   ```markdown
   Pour la structure tubulaire, voir [Matériaux & Structure](materiaux.md).
   Pour l'onduleur, voir [Contrôleur ESC](../moteur/controleur.md).
   ```

---

### 3.3. Publier une Entrée dans le Journal de Bord

1. Créer le document technique détaillé dans le répertoire `docs/journal/posts/` sous la nomenclature `YYYY-MM-DD-titre.md` (par exemple : `2024-11-20-usinage-fusées.md`).
2. Ajouter le point de jalon synthétique dans la timeline de `docs/journal/index.md` :
   ```html
   <div class="ekart-timeline-item" markdown>
   <span class="ekart-timeline-date">20 Novembre 2024</span>

   ### :fontawesome-solid-screwdriver-wrench: Usinage des Portes-Fusées Avant
   Contrôle métrologique des alésages H7 pour roulements de roue. Tolérances validées.

   <span class="ekart-status ekart-status--done">Validé</span>
   </div>
   ```

---

### 3.4. Conventions Rédactionnelles et Syntaxes Avancées

#### Formules Mathématiques & Physiques (LaTeX / MathJax)

- **En ligne** : encadrer d'un antislash et de parenthèses : `\( F = m \cdot a \)`.
- **En bloc centré** : encadrer d'un double dollar `$$` :
  ```markdown
  $$
  V_{\text{kart}} = \frac{\pi \times D_{\text{roue}} \times N_{\text{moteur}}}{60 \times R_{\text{réduction}}}
  $$
  ```

#### Schémas et Diagrammes Techniques (Mermaid)

Les diagrammes de flux, de structure ou de séquence s'insèrent via des blocs annotés ` ```mermaid ` :

```markdown
```mermaid
flowchart LR
    CAPTEUR[Capteur Pédale Effet Hall] --> MCU[Calculateur Central]
    MCU -->|Bus CAN| ESC[Onduleur Moteur]
    ESC --> MOT[Moteur Synchrone BLDC]
```
```

#### Encadrés de Vigilance (Admonitions)

Pour maintenir une documentation rigoureuse, utiliser les admonitions sémantiques au lieu d'émojis :

```markdown
!!! info "Information technique"
    Rappel normatif ou contexte de dimensionnement.

!!! tip "Recommandation d'atelier"
    Bonne pratique de fabrication ou outillage optimal.

!!! warning "Contrainte critique"
    Vigilance requise sur les jeux de fonctionnement ou la tenue thermique.

!!! danger "Sécurité haute tension"
    Avertissement impératif sur les risques électriques ou mécaniques.
```

#### Grilles de Cartes Interactives (Grid Cards)

Pour préserver la cohérence visuelle des hubs de sections, utiliser la syntaxe native Material :

```markdown
<div class="grid cards" markdown>

-   :fontawesome-solid-icone:{ .lg .middle } __Titre de la Section__

    ---

    Description synthétique des objectifs et sous-ensembles traités.

    [:octicons-arrow-right-24: Consulter le dossier](destination.md)

</div>
```

---

### 3.5. Déploiement Continu (CI/CD)

Le site est déployé automatiquement sur **GitHub Pages** lors de chaque `push` sur les branches `main` ou `master` via le workflow GitHub Actions configuré dans [`.github/workflows/ci.yml`](.github/workflows/ci.yml) :

```yaml
name: ci
on:
  push:
    branches:
      - master
      - main
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Configure Git Credentials
        run: |
          git config user.name github-actions[bot]
          git config user.email 41898282+github-actions[bot]@users.noreply.github.com
      - uses: actions/setup-python@v5
        with:
          python-version: 3.x
      - run: echo "cache_id=$(date --utc '+%V')" >> $GITHUB_ENV
      - uses: actions/cache@v4
        with:
          key: mkdocs-material-${{ env.cache_id }}
          path: .cache
          restore-keys: |
            mkdocs-material-
      - run: pip install -r requirements.txt
      - run: mkdocs gh-deploy --force
```

---

## 4. Licences & Propriété Intellectuelle

Les données et travaux du projet sont distribués sous licences libres adaptées à chaque domaine :

- **Conception Matérielle & Fichiers CAO** : [CERN-OHL-S v2](https://ohwr.org/cern_ohl_s_v2.txt) (CERN Open Hardware Licence - Strongly Reciprocal).
- **Firmwares & Logiciels Embarqués** : Licence [MIT](https://opensource.org/licenses/MIT).
- **Documentation Technique & Référentiel** : Licence [Creative Commons CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
