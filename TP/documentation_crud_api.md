# Documentation de l'API

## Liste des Pastries

### Endpoint : `GET /pastries`

Récupère la liste de toutes les pâtisseries.

#### Paramètres

- Aucun.

#### Réponses possibles

- `200 OK` : Retourne la liste de toutes les pâtisseries.

### Pastrie par ID

#### Endpoint : `GET /pastrie/:id`

Récupère une pâtisserie en fonction de son ID.

#### Paramètres

- `id` (obligatoire) : L'identifiant numérique de la pâtisserie.

#### Réponses possibles

- `200 OK` : Retourne la pâtisserie correspondante.
- `404 Not Found` : Aucune pâtisserie trouvée avec l'ID spécifié.

### Recherche de Pâtisseries

#### Endpoint : `GET /pastries-search/:word`

Recherche une pâtisserie en fonction d'un mot-clé.

#### Paramètres

- `word` (obligatoire) : Le mot-clé à rechercher.

#### Réponses possibles

- `200 OK` : Retourne la première pâtisserie correspondante.
- `404 Not Found` : Aucune pâtisserie trouvée avec le mot-clé spécifié.

### Pagination des Pastries

#### Endpoint : `GET /pastries/:offset?/:limit`

Récupère une liste paginée de pâtisseries.

#### Paramètres

- `offset` (optionnel) : Le décalage de départ dans la liste.
- `limit` (optionnel) : Le nombre maximum de pâtisseries à récupérer.

#### Réponses possibles

- `200 OK` : Retourne la liste paginée de pâtisseries.

### Pastries Triées par Quantité

#### Endpoint : `GET /pastries/order-quantity/:offset?/:limit`

Récupère une liste paginée de pâtisseries triées par quantité décroissante.

#### Paramètres

- `offset` (optionnel) : Le décalage de départ dans la liste.
- `limit` (optionnel) : Le nombre maximum de pâtisseries à récupérer.

#### Réponses possibles

- `200 OK` : Retourne la liste triée paginée de pâtisseries par quantité décroissante.

### Comptage des Pastries

#### Endpoint : `GET /pastries-count`

Récupère le nombre total de pâtisseries.

#### Paramètres

- Aucun.

#### Réponses possibles

- `200 OK` : Retourne le nombre total de pâtisseries.

### Ajout d'une Pastrie

#### Endpoint : `POST /pastrie`

Ajoute une nouvelle pâtisserie.

#### Paramètres

- `name` (obligatoire) : Le nom de la pâtisserie.
- `quantity` (obligatoire) : La quantité de la pâtisserie.
- `image` : L'URL de l'image de la pâtisserie.
- `choice` : Le choix de la pâtisserie.

#### Réponses possibles

- `200 OK` : Retourne la nouvelle pâtisserie ajoutée.
- `400 Bad Request` : Données invalides.

### Modification d'une Pastrie

#### Endpoint : `PUT /pastrie/:id`

Modifie une pâtisserie existante en fonction de son ID.

#### Paramètres

- `id` (obligatoire) : L'identifiant numérique de la pâtisserie à modifier.
- `name` (optionnel) : Le nouveau nom de la pâtisserie.
- `quantity` (optionnel) : La nouvelle quantité de la pâtisserie.
- `image` (optionnel) : La nouvelle URL de l'image de la pâtisserie.
- `choice` (optionnel) : Le nouveau choix de la pâtisserie.

#### Réponses possibles

- `200 OK` : Retourne la pâtisserie modifiée.
- `404 Not Found` : Aucune pâtisserie trouvée avec l'ID spécifié.

### Suppression d'une Pastrie

#### Endpoint : `DELETE /pastrie/:id`

Supprime une pâtisserie en fonction de son ID.

#### Paramètres

- `id` (obligatoire) : L'identifiant numérique de la pâtisserie à supprimer.

#### Réponses possibles

- `200 OK` : Retourne la liste des pâtisseries après la suppression.
- `404 Not Found` : Aucune pâtisserie trouvée avec l'ID spécifié.

## Remarques

- Assurez-vous d'utiliser les bons paramètres et méthodes HTTP pour chaque point d'extrémité.
- Les réponses de statut HTTP indiquent le résultat de chaque requête.
- Veuillez vous assurer que les données fournies lors de la création ou de la modification d'une pâtisserie sont correctes pour éviter les erreurs.
