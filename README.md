# Projet d'Architecture Orienté Services

## Équipe de travail

&ensp;Pour la mise en œuvre de cette application, nous nous avons de choisi de s’associer à trois étudiants, Amandine CARLIER (n°21700078), William DENORME (n°21903046) et François DEROUBAIX (n°22105578). De cette façon, nous avons pu répartir la charge de travail de l’ensemble du projet.

## Architecture mise en place

### Illustration

![image](https://user-images.githubusercontent.com/74269323/231555103-cef0e5ec-6b9a-40b4-9a39-51a9994dc203.png)

### Explications

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
  * POST : addCartToOrders
  * POST : addProductToCartById(idProduit, idUser)
  * DELETE : deleteProductFromCartById(idProduit, idUser)

### Pour la gestion des paiements :
* Pour tous les types de profils
  * GET : processPaiement(cardInfo)
