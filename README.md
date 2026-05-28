# website-charly

Site personnel pour me présenter, mes projets, mes compétences et mon parcours.

> Disponible en ligne sur [www.charlyflu.fr](https://www.charlyflu.fr) !

## Stack technique

- **React 18** + **TypeScript**
- **Vite** comme bundler et serveur de développement
- **React Router** pour la navigation
- **react-i18next** pour l'internationalisation (FR / EN)
- **React Spring** pour les animations et l'effet de parallaxe
- **Vitest** + **Testing Library** pour les tests
- **ESLint** + **Prettier** + **Husky** + **lint-staged** pour la qualité de code

## Prérequis

- **Node.js** >= 18
- **npm** >= 9

## Installation

```bash
cd front
npm install
```

## Scripts disponibles

Tous les scripts sont à lancer depuis le dossier `front/`.

| Commande | Description |
| --- | --- |
| `npm run dev` | Démarre le serveur de développement Vite (hot reload) |
| `npm start` | Alias de `npm run dev` |
| `npm run build` | Vérifie les types TypeScript puis génère le build de production dans `dist/` |
| `npm run preview` | Sert localement le build de production |
| `npm run lint` | Lance ESLint (échoue à la moindre warning) |
| `npm run lint:fix` | Corrige automatiquement les erreurs ESLint réparables |
| `npm run format` | Formate le code avec Prettier |
| `npm run format:check` | Vérifie le formatage sans modifier les fichiers |
| `npm run test` | Lance la suite de tests Vitest une fois |
| `npm run test:watch` | Lance Vitest en mode watch |
| `npm run deploy` | Build et déploie sur GitHub Pages via `gh-pages` |

## Démarrage rapide

```bash
cd front
npm install
npm run dev
```

Le site est ensuite accessible sur [http://localhost:5173](http://localhost:5173).

## Structure du projet

```
front/
├── index.html              # Point d'entrée HTML (inclut le tag Google Analytics + décodeur SPA)
├── public/
│   ├── 404.html            # Trick GitHub Pages SPA (redirige toutes les routes inconnues vers index.html)
│   └── ...                 # Autres assets statiques servis tels quels
├── src/
│   ├── main.tsx            # Bootstrap React
│   ├── App.js              # Composant racine et déclaration des routes
│   ├── pages/
│   │   ├── HomePage.jsx    # Page principale (Hero, Projects, Career, Skills, Contact)
│   │   └── HiddenGames/    # Hub des jeux cachés + route dynamique /hidden-games/:gameId
│   ├── games/              # Registry des jeux + composants jeu par jeu
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # HeroSection, Projects, Skills, Career, Contact
│   │   ├── ui/             # Composants réutilisables (Tabs, Slider, Toggle...)
│   │   └── effects/        # Animations (Rain...)
│   ├── data/               # Données statiques (projets, compétences, parcours, langues)
│   ├── hooks/              # Hooks React personnalisés
│   ├── i18n/               # Configuration i18next
│   ├── locales/            # Fichiers de traduction FR / EN
│   ├── styles/             # Styles globaux
│   └── utils/              # Fonctions utilitaires
└── vite.config.ts          # Configuration Vite
```

## Hidden Games

Un petit bouton discret en pied de page mène vers `/hidden-games`, un hub qui liste les
mini-jeux cachés du site. Pour ajouter un nouveau jeu :

1. Créer un dossier `front/src/games/MonJeu/` avec son composant React.
2. Ajouter une entrée dans [front/src/games/games.js](front/src/games/games.js) :
   ```js
   { id: 'mon-jeu', titleKey: '...', descriptionKey: '...', component: MonJeu, available: true }
   ```
3. Ajouter les clés de traduction associées dans les deux fichiers de `locales/`.

La route `/hidden-games/:gameId` est dynamique et récupère le bon composant depuis le registry.

## Routing & déploiement GitHub Pages

Le site utilise `BrowserRouter` (URLs propres comme `/hidden-games`). GitHub Pages, par défaut,
renvoie une 404 quand on rafraîchit une sous-route — il cherche un fichier qui n'existe pas.

Pour contourner ce problème, on utilise le pattern [spa-github-pages](https://github.com/rafgraph/spa-github-pages) :

- [front/public/404.html](front/public/404.html) intercepte les 404 et encode l'URL demandée
  dans la query string avant de rediriger vers `/`.
- Un petit script en tête de [front/index.html](front/index.html) décode cette query string et
  restaure l'URL d'origine via `history.replaceState`, avant que React Router ne démarre.

Aucune configuration côté OVH n'est nécessaire — la redirection de domaine pointe simplement
vers GitHub Pages, qui gère tout.

## Internationalisation

Les traductions sont gérées via `react-i18next`. Pour ajouter ou modifier des textes, éditez :

- [front/src/locales/fr/translation.json](front/src/locales/fr/translation.json)
- [front/src/locales/en/translation.json](front/src/locales/en/translation.json)

La langue est détectée automatiquement depuis le navigateur et peut être changée via le sélecteur dans l'interface.

## Déploiement

Le site est déployé sur GitHub Pages. Pour publier une nouvelle version :

```bash
cd front
npm run deploy
```

Le script `predeploy` lance automatiquement un `npm run build` avant la publication.

## Analytics

Le suivi est assuré par **Google Analytics** (gtag.js, ID `G-5KLJL689VT`), intégré directement dans [front/index.html](front/index.html).
