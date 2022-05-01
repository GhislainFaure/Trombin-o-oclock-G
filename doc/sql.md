|Commande|Action|
|--------|------|
|```SELECT * FROM "promos" ORDER BY "name" ASC;```|toutes les promos, dans l'ordre alphabétique|
|```SELECT * FROM "student" ORDER BY "last_name" ASC;```|tous les étudiants, dans l'ordre alphabétique des noms de famille|
|```SELECT * FROM "student" WHERE "promo_id" = 135;```|tous les étudiants de la promo 135|
|```SELECT * FROM "student" WHERE "last_name" LIKE "%max%" OR "first_name" LIKE "%max%";```|les étudiants dont le nom ou le prénom ressemble à "max"|
|``` INSERT INTO  "student" (first_name, last_name, promo_id) VALUES ('Chuck', 'Norris', 5); ```|Insérer dans la table "student" un étudiant qui s'appelle "Chuck Norris" appartenant à la promo 5|
|```INSERT INTO "promo" ("id", "name") VALUES (393, 'César') ```|Insérer dans la table "promo" une promo qui s'appelle "César" et ne possède pas d'orga|
|``` UPDATE "promo" SET "name" = 'Cléo' WHERE "id" = 5; ```|Mettre à jour la promo 5 pour la renommer "Cleo"|
|``` DELETE FROM "promo" WHERE "id"=123; ```|Supprimer la promo 123|





