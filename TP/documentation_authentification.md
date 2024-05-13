# Documentation de l'API d'Authentification

## Introduction

Cette API d'authentification permet de vérifier les informations d'un utilisateur, telles que l'email et le mot de passe, pour établir une connexion sécurisée.

### Endpoints disponibles

1. Vérification des Identifiants (login)

    - **Endpoint** : `/login``
    - **Méthode :** `POST`
    - **Description :** Permet de vérifier l'email et le mot de passe de l'utilisateur pour l'authentifier.
    - **Paramètres de la Requête :**
        - email (string): Email de l'utilisateur.
        - password (string): Mot de passe de l'utilisateur.
    - **Réponses** :
        - Code 200 : Succès de l'authentification.
        - Code 400 : Erreur d'authentification.

2. Déconnexion (logout)

    - **Endpoint** : `/logout``
    - **Méthode :** `GET`
    - **Description :** Permet à l'utilisateur connecté de se déconnecter.
    - **Paramètres de la Requête :** Aucun
    - **Réponses** :
        - Code 200 : Succès de l'authentification.
        - Code 400 : Erreur d'authentification.

## Prérequis

- Cette API utilise un cookie sécurisé (httpOnly) pour stocker le token JWT, renforçant la sécurité contre les attaques XSS.

- Les identifiants d'utilisateurs et les mots de passe sont stockés dans un mock (un ensemble de données de test).

- Un mot de passe doit contenir entre 8 et 20 caractères, avec au moins un chiffre.

- Ici les mots de passe sont : alice et bob pour respectivement alice@alice.fr et bob@bob.fr