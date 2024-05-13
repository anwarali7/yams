# Documentation de l'API Pastries

## Introduction

Bienvenue dans la documentation de l'API Pastries, une API simple pour la gestion de pâtisseries. Cette API permet de récupérer la liste des pâtisseries ainsi que de mettre à jour le statut de choix d'une pâtisserie spécifique.

## Base de l'API

### URL de base

L'URL de base de l'API est définie par le chemin relatif `/`.

### Endpoints disponibles

1. **Récupérer la liste des pâtisseries**

   - **Endpoint :** `/game/pastries`
   - **Méthode :** `GET`
   - **Description :** Récupère la liste complète des pâtisseries.
   - **Réponses :**
     - Code 200 : Succès de la requête avec la liste des pâtisseries.
     - Code 400 : Erreur en cas de problème lors de la lecture du fichier de données.

2. **Récupérer une pâtisserie par ID**

   - **Endpoint :** `/game/pastrie/:id`
   - **Méthode :** `GET`
   - **Description :** Récupère les détails d'une pâtisserie spécifique en fonction de son ID.
   - **Paramètres URL :**
     - `id` (string) : L'identifiant unique de la pâtisserie.
   - **Réponses :**
     - Code 200 : Succès de la requête avec les détails de la pâtisserie.
     - Code 404 : La pâtisserie avec l'ID spécifié n'a pas été trouvée.
     - Code 400 : Erreur en cas de problème lors de la lecture ou de l'écriture du fichier de données.

3. **Récupérer des pâtisseries gagnées avec mise à jour des données**
   - **Endpoint :** `/game/win-pastries/:quantity`
   - **Méthode :** `GET`
   - **Description :** Récupère la quantité des patisseries gagnées égale à la quantité passée en paramètre de la route si il reste suffisamment de quantité de patisseries, et sinon retourne un tableau vide.
   - **Données modifiées :** les champs de chaque patisserie gagnée suivants sont modifiés si elles sont gagnées quantity, choice, quantityWon. 
   - **Paramètres URL :** `quantity` (number): La quantité de pâtisseries à gagner.
   - **Réponses :**
     - 200 OK: Retourne la liste des pâtisseries avec les données mises à jour.
     - 400 Bad Request: Si la quantité spécifiée n'est pas un nombre entier positif.
     - 404 Not Found: Si aucune pâtisserie n'est trouvée.

4. **Récupérer des pâtisseries gagnées avec mise à jour des données**
   - **Endpoint :** `/game/refresh`
   - **Méthode :** `GET`
   - **Description :** Met à jour les données avec les mocks 
  
   - **Paramètres URL :** aucun
   - **Réponses :**
     - 200 OK: Met à jour les données dans pour l'API.
     - 404 Not Found: Il n'y a plus de pâtisserie

## Exemples d'utilisation

### Récupérer la liste des pâtisseries

- **Requête :**
  ```http
  GET /game/pastries
  ```

```json
[
  {
    "id": "1",
    "name": "Tarte aux fraises",
    "quantity": 10,
    "image": "strawberry-pie.jpg",
    "choice": false
  },
  {
    "id": "2",
    "name": "Éclair au chocolat",
    "quantity": 15,
    "image": "chocolate-eclair.jpg",
    "choice": true
  }
  // ... autres pâtisseries
]
```

### Récupérer une pâtisserie par ID

```txt
GET /game/pastrie/2
```

```json
{
  "id": "2",
  "name": "Éclair au chocolat",
  "quantity": 15,
  "image": "chocolate-eclair.jpg",
  "choice": true
}
```

- réponse Code 404

```json
{
  "message": "Pâtisserie non trouvée !"
}
```

### Récupérer pâtisseries en modifiant les quantités

```txt
GET /game/win-pastries/4
```

- Réponse Code 200 OK

```json
[
  {
    "id": "1",
    "name": "Fondant supreme",
    "image": "http://placehold.it/32x32",
    "quantity": 3,
    "quantityWon": 1,
    "choice": true
  },
  {
    "id": "2",
    "name": "Cake tout Chocolat",
    "image": "http://placehold.it/32x32",
    "quantity": 2,
    "quantityWon": 1,
    "choice": true
  },
  {
    "id": "3",
    "name": "Cake Framboise chocolat",
    "image": "http://placehold.it/32x32",
    "quantity": 3,
    "quantityWon": 1,
    "choice": true
  },
  {
    "id": "4",
    "name": "Brioche sucrée avec chocolat",
    "image": "http://placehold.it/32x32",
    "quantity": 5,
    "quantityWon": 1,
    "choice": true
  },

// les autres patisseries

]

```

- Code 400 (error first type)

```json
 { "message": "La quantité doit être un nombre entier positif." }
```

- Code 404 (error first type)

```json
 { "message": "Pâtisserie(s) non trouvée !." }
```

### Remarques

- Les données des pâtisseries sont stockées dans un fichier JSON spécifié par la variable d'environnement DATA_PASTRIES.

- Les opérations de lecture et d'écriture sur le fichier de données sont gérées de manière asynchrone.

- En cas de problème lors de l'accès au fichier de données, des réponses avec le code 400 sont renvoyées pour informer l'utilisateur de l'erreur.
