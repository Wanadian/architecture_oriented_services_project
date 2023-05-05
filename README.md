# Projet d'Architecture Orienté Services

## Équipe de travail

&ensp;Pour la mise en œuvre de cette application, nous nous avons de choisi de s’associer à trois étudiants, Amandine CARLIER (n°21700078), William DENORME (n°21903046) et François DEROUBAIX (n°22105578). De cette façon, nous avons pu répartir la charge de travail de l’ensemble du projet.

## Architecture mise en place

### Illustration

![archi](https://user-images.githubusercontent.com/74269323/235193335-c15f9c81-1a81-4f6b-876b-9286c267c922.png)

### Explications

L'ensemble de tous ces services sont executables via un docker-compose avec la commande : 

`docker compose up -d (--build)`

/!\ il est possible qu'au démarage du docker-compose il faille relancer manuellement les containers qui ce sont arrêté, 
en effet les autres micro-services ont besoin de spring config et nous n'avons pas trouvé comment ajouté un delay de lancement à ces containers.

une fois l'ensemble des services démarés vous pouvez accéder à la gateway vient l'url : 
`localhost:8080`

Vous avez également accéder à un certain nombre de service : 

#### Swagger
`http://localhost:8080/webjars/swagger-ui/index.html`

#### Postman
`.docs/Archi-service.postman_collection.json`

#### Zipkin
`http://localhost:9411`

malheuresement zipkin ne reçoit aucune requête dû au problème de compatibilité avec spring boot 3, nous n'avons pas réussi à comprendre les changements de fonctionnement entre la version 2.7 et la 3.0

#### Le client front-end
`http://localhost:3000`

#### Eureka
`http://localhost:8761`

## Sécurité

Attention, notre projet comporte des routes sécurisé, que ce soit sur postman ou swagger, il est important de :
- se créer un compte via la route : `/client/auth/register` 
- se login via la route : `/client/auth/login`
- récupérer le token en sortie

### cas postman
![postman](docs/img/postman.png)

### cas swagger
![swagger](docs/img/swagger.png)

## Routes mises en place

### Pour la gestion et la vente des produits :
* Pour les profils de type Administrateur
  * POST : createProduct(product)
  * DELETE : deleteProductById(id)
  * PUT : modifyProductById(id)
* Pour tous les types de profils
  * GET : getAllProducts --> sort by name
  * GET : getAllProductsByType(type)
  * GET : getProductById(id)

### Pour la gestion des clients :
* Pour les profils de type Administrateur
  * Comptes créés en "dur"
* Pour tous les types de profils
  * POST : createAccount(user)
  * GET : login (JWT)
  * GET : logout (JWT)
* En "interne"
  * GET : isUserAdmin

### Pour la gestion des commandes / du panier :
* Pour tous les types de profils
  * GET : getAllOrders (triés par date)
  * GET : getCart
  * GET : getPriceOrder
  * POST : addCartToOrders
  * POST : addProductToCartById(idProduit, idUser)
  * DELETE : deleteProductFromCartById(idProduit, idUser)

### Pour la gestion des paiements :
* Pour tous les types de profils
  * GET : processPaiement(cardInfo)
