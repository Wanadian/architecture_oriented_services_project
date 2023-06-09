# Projet d'Architecture Orientée Services

## Équipe de travail

Pour la mise en œuvre de cette application, nous sommes trois étudiant(e)s, Amandine CARLIER (n°21700078), William DENORME (n°21903046) et François DEROUBAIX (n°22105578). De cette façon, nous avons pu répartir la charge de travail de l’ensemble du projet.

## Architecture mise en place

### Illustration

![archi](https://user-images.githubusercontent.com/74269323/235193335-c15f9c81-1a81-4f6b-876b-9286c267c922.png)

### Explications

L'ensemble de tous ces services sont exécutables via un docker-compose avec la commande : 

`docker compose up -d (--build)`

/!\ Il est possible qu'au démarage du docker-compose il faille relancer manuellement les containers qui ce sont arrêtés, 
en effet les autres micro-services ont besoin de spring config et nous n'avons pas trouvé comment ajouter un *delay* de lancement à ces containers.

Une fois l'ensemble des services démarrés, vous pouvez accéder à la *gateway* via l'url : 
`localhost:8080`

Vous avez également accès à un certain nombre de service : 

#### Swagger
`http://localhost:8080/webjars/swagger-ui/index.html`

#### Postman
`./docs/Archi-service.postman_collection.json`

/!\ Veillez à bien l'importer via votre workspace postman (pour se faire rien de plus simple, vous cliquez sur *import* puis *from file* et vous n'avez plus qu`à sléctionner ce fichier pour obtenir la collection dans votre espace de travail postman).

#### Zipkin
`http://localhost:9411`

Malheureusement *Zipkin* ne reçoit aucune requête dû au problème de compatibilité avec spring boot 3, nous n'avons pas réussi à comprendre les changements de fonctionnement entre la version 2.7 et la 3.0.

#### Le client front-end
`http://localhost:3000`

#### Eureka
`http://localhost:8761`

## Sécurité

Attention, notre projet comporte des routes sécurisées, que ce soit sur postman ou swagger, il est important de :
- se créer un compte via la route : `/client/auth/register` 
- se login via la route : `/client/auth/login`
- récupérer le token en sortie

### Cas postman
![postman](docs/img/postman.png)

### Cas swagger
![swagger](docs/img/swagger.png)

*Remarque 1* :
*Seules les routes suivantes sont accessibles **sans token** :*
* *Pour swagger :*
  * */client/v3/api-docs,*
  * */products/v3/api-docs,*
  * */orders/v3/api-docs,*
  * */payment/v3/api-docs,*
  * */webjars/swagger-ui*
* *Pour les micro-services :*
  * */client/auth/login,*
  * */client/auth/register,*
  * */client/auth/valide-token,*
  * */products/product*

*Remarque 2 : La collection postman nous permet de faire ces appels, ainsi que biens d'autres (concerant les produits, les commandes, etc.).*

## Routes mises en place

### Pour la gestion et la vente des produits *(ms-products)* :
  * GET : getAll
  * GET : getProductById(id)
  * POST : create(productDto)
  * DELETE : delete(id)
  * PUT : update(id, productDto)

*Remarque : La collection postman permet d'ajouter un nouveau produit afin de tester notre projet.*

### Pour la gestion des clients *(ms-client)* :
  * POST : addNewUser(userDto)
  * PUT : getToken(userCredentials)
  * GET : validateToken(token)
  * GET : authorization(email)

### Pour la gestion des commandes / du panier *(ms-orders)* :
  * GET : getAll
  * GET : getById(id)
  * GET : getByUserId(email)
  * POST : create(orderDto)

*Remarque : Lorsque, côté front, vous cliquez sur clean, vous devez rafraîchir la page.*

### Pour la gestion des paiements *(ms-payment)* :
  * POST : pay(paymentDto)

*Remarque : Pour valider la commande, il faut 6 chiffres pour le second champ, 2 pour le troisième et une date sous la forme dd/mm pour le quatrième.*

## Conseils

N'hésitez pas à vous armez de patience pour certains appels car il y a de nombreuses instances dans le docker compose. De plus, n'hésitez pas à rafraîchir la page si vous n'avez pas de réponse lorsque vous cliquez sur un élément.

Pour vérifier l'aspect fonctionnel des routes mises à disposition, n'hésitez pas à utiliser la collection postman.

## Perspectives d'amélioration

Comme tout projet, celui-ci peut bien évidemment être amélioré. En effet voici une courte liste des points qui peuvent être approfondis :
  * Optimisation du code
  * Gestion des erreurs
  * Appronfissement du frontend
  * Mise en place de la partie Zipkin
  * Évolution du docker pour le lancement des instances
