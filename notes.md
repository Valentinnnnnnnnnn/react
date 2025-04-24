## React

Bibliothèque javaScript pour construire des interfaces utilisateur

## Termes
- **Store** : Contexte global de l'application, permet de partager des données entre les composants sans avoir à les passer en props
- **Provider** : Composant qui permet de fournir un service

## Caractéristiques

- Déclaratif
- Basé sur les composants
- Virual DOM (DOM : Document Object Model, c'est la représentation de la page web dans le navigateur)
- Orienté vers les applications à pages uniques (SPA)

### Composants

- Un composant est une fonction qui retourne des éléments de l'interface utilisateur en JSX qui est composé d'une balise principale unique (ex: `<>` ou <React.Fragment>).
- Un composant est toujours exporté par défaut (`export default`)
- Commence toujours par une majuscule (ex: `MyComponent`)

### Props & state

- **Props** : Propriétés passées aux composants, immuables
- **State** : État interne du composant, mutable

### Virtual DOM

- Représentation légère du DOM réel

## Fonctionnement

### Un cycle de vie

- **Évenements** : Quand l'utilisateur interagit avec l'interface, des événements sont déclenchés (ex: clic sur un bouton).
- **Mise à jour de l'état**
- **Scheduling** : React planifie la mise à jour de l'interface utilisateur en fonction des changements d'état.
- **Réconciliation** : React compare l'état actuel de l'interface avec le nouvel état et détermine les changements nécessaires.
- **Commit** : Les changements sont appliqués au DOM réel.

## JSX

Extension de JavaScript qui permet d'écrire du HTML dans le code JavaScript
Pour éviter les conflits entre les mots réservés, il a été choisi de modifier uniquement la syntaxe HTML, et non pas la syntaxe JavaScript. Par exemple, `class` devient `className`, `for` devient `htmlFor`, etc.

## Hooks

Permet de gérer l'état et d'autres fonctionnalités de React sans écrire de classes

## Configuration projet

### Créer un projet React avec Vite

```bash
pnpm create vite@latest app-name --template react-ts
cd app-name
pnpm install
pnpm run dev
```

### Installation de Tailwind CSS

https://tailwindcss.com/docs/installation/using-vite

## Gestion des événements

preventDefault : empêche le comportement par défaut de l'événement (ex: empêcher le rechargement de la page lors de la validation d'un formulaire)

## Hooks

- Tous les hooks doivent être utilisés au niveau supérieur d'un composant fonctionnel

### useState

- Permet de gérer l'état d'un composant fonctionnel
  Ex :

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Cliquez ici</button>
    </div>
  );
}
```

### useEffect

- Permet de gérer les effets de bord (effets secondaires) : appel API, manipulation du DOM, etc.
- S'exécute après le rendu du composant si le tableau de dépendances est vide
- Est composé de 2 arguments : un callback et un tableau de dépendances

### useRef

- Permet de créer une référence mutable qui persiste entre les rendus

### useReducer

- Utilisé pour les objets d'état complexes ou lorsque la variable doit être disponible dans plusieurs composants (ex: thème sombre)

## React Router v7
### Méthode Framework
### Méthode Data
### Méthode déclarative
- **Routes** : Définit les routes de l'application
- **Route** : Définit une route spécifique