# Portfolio — Nomeniavo Cathy Andriamanantena

CV et portfolio en une page (React 19, TypeScript, Vite 7, Tailwind CSS 4).

## Fonctionnalités

- Contenu bilingue **français / anglais** (`src/data/cvData.ts`, `src/data/cvData.en.ts`, `src/i18n/translations.ts`).
- Deux **profils** (Développeuse Web & Mobile, Consultante SI / Santé numérique) : le titre d'accueil change et les projets et compétences les plus pertinents remontent en premier (champ `focus` dans les données). Les expériences restent classées de la plus récente à la plus ancienne selon leur date de début (`startDate`, au format `AAAA-MM`), dans les deux langues et pour les deux profils.
- **Mode clair / sombre** persistant, initialisé depuis la préférence du système.
- **Démo interactive** de gestion des membres d'un OBNL (données fictives, côté client uniquement).
- **Démos One Health et RPS** : suivi de signaux et de leur historique fictif, exploration par région, création et lancement de campagnes et simulation de réponses. Les données restent en mémoire dans le navigateur, sont réinitialisables et ne sont ni transmises ni conservées après rechargement. Les indicateurs RPS sont des exemples et le seuil d'anonymat est une simulation.
- **Démo Mad’action** (`#madaction`) : écran de connexion inspiré de la capture fournie, compte fictif prérempli, affichage du mot de passe fictif, suivi de trois étudiants, recherche et validation locale d'un dossier. Accès depuis le projet mobile. FR/EN ; aucune authentification réelle, aucun envoi ou stockage de données. L'inscription et la récupération de mot de passe affichent une simulation explicite. Le sigle typographique est une interprétation pour la démo, pas le logo original.
- **Touches modernes** : barre de progression de lecture, fond animé du hero (grille pointillée et halos), bandeau défilant des technologies (issu des données), chiffres clés animés, halo qui suit le curseur sur les cartes et bloc final « Travaillons ensemble ». Tout est statique avec `prefers-reduced-motion` et masqué à l'impression.
- Mise en page **imprimable / export PDF** (bouton « Imprimer / PDF »).
- Accessibilité : lien d'évitement, repères ARIA, respect de `prefers-reduced-motion`.
- Identité **Digital Architect × Neural Interface** : palette ivoire/encre, titres Space Grotesk, annotations monospace et projets éditoriaux. Aucun moteur d'animation supplémentaire.
- **Constellation d'expériences** près du portrait : chaque astre orbite autour d'un soleil (vitesses différentes, pause au survol/focus) et mène à l'expérience correspondante, accessible au clavier, immobile avec `prefers-reduced-motion`. Masquée à l'impression.
- Navigation des sections sur desktop et menu mobile avec `aria-expanded`, fermeture par Échap et transfert du focus vers la section choisie. L'indicateur actif suit le défilement.

## Système visuel

Les couleurs communes sont définies par les variables `--canvas`, `--surface`, `--ink`, `--muted`, `--line`, `--accent` et `--accent-soft` dans `src/index.css`, avec variantes `.dark`. Les polices Google Fonts ont des alternatives système.

Les orbites et les astres s'animent discrètement et restent statiques avec `prefers-reduced-motion`. Les révélations utilisent `IntersectionObserver` avec un seuil nul pour les longues sections sur mobile. Le menu ne bloque pas le focus : il s'agit d'une navigation dépliable, pas d'une fenêtre modale. Les décorations sont exclues de l'impression.

## Scripts

```bash
npm install
npm run dev        # serveur de développement
npm run typecheck  # vérification TypeScript
npm run build      # build de production dans dist/
npm run preview    # prévisualiser le build
```

## Mettre à jour le contenu

| Quoi | Où |
| --- | --- |
| Profil, expériences, projets, compétences (FR) | `src/data/cvData.ts` |
| Traductions du contenu (EN) | `src/data/cvData.en.ts` |
| Libellés de l'interface | `src/i18n/translations.ts` |
| Photo de profil | `public/images/profile.jpg` (≈ 800 px de large suffit) |
| CV PDF téléchargeable | déposer le fichier dans `public/` puis renseigner `profile.cvUrl` |
| Captures d'écran de projets | `public/images/projects/` puis champ `images` du projet |

Le déploiement est prévu pour Netlify (`netlify.toml`) ou Vercel (`vercel.json`).
