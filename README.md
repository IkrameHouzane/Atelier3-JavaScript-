Rapport Atelier 3 : JavaScript et Programmation Fonctionnelle
Objectif général
L'objectif de cet atelier est de se familiariser avec les concepts de la programmation fonctionnelle en JavaScript. Les exercices proposés permettent de manipuler des listes, des objets, et de créer une application web pour traiter des données de produits. Chaque exercice aborde des aspects spécifiques de la programmation fonctionnelle, tels que le filtrage, la transformation, le tri, et la visualisation des données.
Exercice 1 : Filtrage de liste
Objectif:
Écrire un programme fonctionnel qui prend une liste de nombres et renvoie une autre liste contenant uniquement les nombres pairs, triés par ordre croissant.
Détails:
Dans cet exercice, on a utilisé:
--filter : pour ne garder que les nombres pairs (num % 2 === 0).
--sort : pour trier les nombres pairs par ordre croissant ((a, b) => a - b).
Exercice 2 : Transformation de liste
Objectif:
Écrire un programme fonctionnel qui transforme une liste de nombres en une nouvelle liste où chaque élément est multiplié par son factoriel.
Détails:
--factorial : Cette fonction récursive calcule le factoriel d'un nombre donné.
--La méthode map parcourt chaque élément du tableau numbers et applique la fonction factorial à chaque élément.Elle retourne un nouveau tableau contenant les résultats.
Exercice 3 : Traitement de texte
Objectif:
Écrire un programme fonctionnel qui divise un texte en lignes, convertit chaque ligne en majuscules, filtre les lignes contenant la lettre "I", puis les imprime.
Détails:
--split('\n') : Divise le texte en lignes.
--map : Convertit chaque ligne en majuscules.
--filter : Filtre les lignes contenant la lettre "I".
--forEach : Affiche les lignes filtrées.
Exercice 4 : Trouver le nombre maximum
Objectif:
À partir d'une liste de nombres, trouver le nombre maximum.
Détails:
---Initialisation : .reduce() commence avec la première valeur de la liste comme point de départ (numbers[0]).
--Comparaison : À chaque itération, l'élément courant (current) est comparé à l'accumulateur (max).
--Mise à jour : Si current est plus grand que max, max devient current. Sinon, max reste inchangé.
-- Une fois toutes les valeurs parcourues, l'accumulateur contient la plus grande valeur.

Exercice 5 : Calcul du prix total TTC
Objectif:
Écrire un programme fonctionnel qui calcule le prix total de tous les produits TTC (avec une TVA de 25 %).
Détails:
--reduce : Parcourt chaque produit et accumule le prix total TTC.
--product.price * 1.25 : Applique une TVA de 25 % à chaque produit.
Exercice 6 : Traitement des données de produits
Objectif:
Créer une application web pour traiter un ensemble de données de produits. Les fonctionnalités incluent :
-Filtrer les produits par catégorie.
-Calculer le prix total des produits.
-Trouver les produits en faible stock.
-Trier les produits par prix ou par stock.
-Intégrer une barre de recherche pour trouver des produits par nom.
-Afficher les résultats sous forme de graphiques avec Chart.js.
Détails:
--Chargement du fichier JSON contenant les données des produits.
--Présentation des produits sous forme de tableau .
--Tri des produits: Trier les produits par prix ou par stock.
--Filtrage par catégorie: Affiche uniquement les produits appartenant à une catégorie spécifique. 
-- Calculer et afficher la somme des prix de tous les produits. 
-- Affichage des produits ayant un stock inférieur à 5 .
--Dashboard avec Chart.js : Affiche des graphiques interactifs pour visualiser les données des produits .
