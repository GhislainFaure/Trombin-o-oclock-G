## Commandes SQL

Listes de commandes SQL 

Pour se connecter à la base : 

```psql -h <hote> -U <utilisateur> -d <baseDeDonnée>```

puis on saisie le mot de passe (QUI NE S'AFFICHE PAS ! Et c'est **NORMAL**)

Example :
```psql -h pg.oclock.lan -U etudiant -d trombi``` avec le mot de passe ```js4life```

### /!\ Attention chaque commande doit se terminer avec un ; sinon terminal SQL ne sait pas que l'instruction est terminé.

|Commande|Action|
|--------|------|
|```\dt;```|Lister les tables dans une base de donnée|
|```\d student;```|Afficher la structure d'une table|
|```SELECT * FROM "student";```| Récupère tous les étudiants avec tous les champsdepuis la table "students"|
|```SELECT "first_name" FROM "student";```| Récupère tous les first_name des étudiants depuis la table "students"|
|```SELECT * FROM "student" WHERE "promo_id" = 358;```| Récupère tous les students avec tous les champs depuis la table student ou le champ promo_id est égal à 358|
|```SELECT * FROM "promo" WHERE "name" LIKE 'Z%';```| Récupère tous les students avec tous les champs depuis la table student ou le nom commence par 'Z' |
|```SELECT * FROM "student" WHERE "promo_id" = 358 AND "first_name" LIKE 'I%';```| Récupère tous les étudiants de la promo Zagreus avec le prénom qui commence par I comme Inès |
|```SELECT COUNT(*) FROM "student" WHERE "first_name" LIKE 'I%';```| Compte le nombre de students qui remplissents les critères de la requête |



