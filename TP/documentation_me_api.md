# Documentation de l'API me

## Introduction

Cette API permet de savoir si un utilisateur est connecté. 

### Endpoints disponibles

1. Récupération de l'ensemble des utilisateurs **users**

    - **Endpoint** : `/users``
    - **Méthode :** `GET`
    - **Description :** Permet d'obtenir l'ensemble des users, sans leurs mots de passe respectif.
    - **Paramètres de la Requête :**
        - aucun
    - **Réponses** :
        - Code 200 : Succès de l'authentification.

2. Savoir si on est connecté 

    - **Endpoint** : `/me``
    - **Méthode :** `GET`
    - **Description :** Permet à l'utilisateur de savoir si il est encore connecté.
    - **Paramètres de la Requête :** Aucun
    - **Réponses** :
        - Code 200 : Succès de l'authentification.
        - Code 404 : Utilisateur non trouvé !


## Exemples d'utilisation

### Récupérer la liste des utilisateurs

- **Requête :**
  ```http
  GET /users
  ```

```json
[
    {
        "id": "1",
        "name": "Alice",
        "email": "alice@alice.fr",
        "status": "Offline"
    },
    {
        "id": "2",
        "name": "Bob",
        "email": "bob@bob.fr",
        "status": "Offline"
    }
]
```

### Vérifier si l'utilisateur est connecté

- Statut non connecté type d'erreur ( utilisateur non trouvé)

- **Requête :**
  ```http
  GET /me
  ```

```json
{
    "message": "Accès interdit"
}
```

- Statut  connecté

- **Requête :**
  ```http
  GET /me
  ```

```json
{
    "id": "1",
    "name": "Alice",
    "email": "alice@alice.fr",
    "status": "Offline"
}
```
