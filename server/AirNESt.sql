#Creation de la table client
CREATE TABLE Client
	(id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
	login VARCHAR(40) NOT NULL,
	password VARCHAR(40) NOT NULL,
	birth_day DATE NOT NULL,
	email VARCHAR(40) NOT NULL,
	PRIMARY KEY (id))
ENGINE=INNODB;

#Creation de la table game
CREATE TABLE Game
	(id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
	name VARCHAR(40) NOT NULL,
	editor VARCHAR(40) NOT NULL,
	date_sortie DATE NOT NULL,
	category VARCHAR(40),
	comment TEXT,
	PRIMARY KEY (id))
ENGINE=INNODB;

#Ajouter une colone a client (ca marche avec game aussi)
ALTER TABLE Client
ADD COLUMN nouvelle_colone;

#Inserer un nouveau utilisateur
INSERT INTO Client
SET login='AZE',
password='AZE',
birth_day='2010-07-21',
email='commandant.cousteau@gmail.com';

#Inserer un nouveau jeu
INSERT INTO Game
SET name='AZE',
editor='AZE',
date_sortie='2010-07-21',
comment='oh con les coms';

#Afficher tous les jeux et les details triller par date de sortie
SELECT * FROM Game
ORDER BY date_sortie;

#Afficher tous les jeux mais juste les noms triller par nom
SELECT name FROM Game;
ORDER BY name;

#Modification du login
ALTER TABLE Client
CHANGE login_old login_new login;

#Suppresion d'une colone
ALTER TABLE Client
DROP COLUMN colone;

#Faire une recherche d'un jeu commencant par A
SELECT * FROM Game
WHERE name LIKE 'A%';

#Modification a partir de l'id
UPDATE Client
SET login='AZE',
password='AZE',
birth_day='2010-07-21',
email='commandant.cousteau@gmail.com'
WHERE id='21';
