# Refonte frontend — Digital Architect × Neural Interface

Intervention locale du 10 novembre 2026. Aucun commit, push, déploiement ou publication effectué. Aucune validation client revendiquée.

## Périmètre

- Stack React / TypeScript / Vite / Tailwind conservée, sans dépendance ajoutée.
- Tokens ivoire/encre, titres Space Grotesk, annotations monospace et surfaces communes dans `src/index.css`.
- Hero existant recomposé, portrait conservé, motif neural SVG décoratif avec réaction à la souris et animation d'entrée ponctuelle.
- Navigation desktop et mobile dans `SectionNavigation.tsx`, avec section active, fermeture par Échap et focus transféré à la cible.
- Projets illustrés par des motifs abstraits décoratifs ; ces motifs ne constituent pas des captures des applications.
- Expériences, statistiques, compétences, formation et contact harmonisés. Contenus, liens et tri chronologique des expériences conservés.
- Démo d'adhésion : modifications de classes uniquement, sans modification de sa logique.
- Révélations adaptées aux longues sections mobiles et à la préférence de mouvement réduit. Styles d'impression ajustés pour conserver des textes lisibles en mode sombre.

## Vérifications locales observées

- TypeScript et build Vite réussis.
- Contrôle Chromium sur 32 combinaisons : 320, 390, 768 et 1440 px ; FR/EN ; clair/sombre ; profils développement/santé. Aucun débordement horizontal dans ces combinaisons après correction du halo du Hero.
- Navigation mobile : ouverture et fermeture, sélection de la section Projets, focus sur cette section et indicateur actif cohérents ; Échap ferme le menu et rend le focus au bouton.
- Mouvement réduit : animation du tracé neural désactivée (`animation-name: none`).
- Démo avec données fictives uniquement : 6 entrées avant essai ; formulaire vide et courriel invalide refusés, toujours 6 entrées ; ajout valide, 7 entrées ; réinitialisation, 6 entrées. Aucune erreur JavaScript observée pendant cet essai.
- Export PDF local produit dans Chromium ; animations du Hero désactivées et contenu visible dans le contexte d'impression.
- Aucun script de lint ou de test automatisé n'est déclaré dans `package.json`. Les contrôles navigateur ont été exécutés ponctuellement, sans ajouter de framework au projet.

## Limites

Contrôles effectués sur Chromium local, sans recette Safari/Firefox ou appareil physique. Les essais clavier ne constituent pas un audit complet d'accessibilité avec lecteur d'écran. L'export PDF local ne prouve pas un rendu identique sur tous les pilotes d'impression. Les polices Google Fonts disposent d'alternatives système si leur chargement est indisponible.

Aucune intervention DevOps requise pour ces modifications locales ; aucune configuration d'infrastructure, CI/CD, sauvegarde ou déploiement modifiée.
