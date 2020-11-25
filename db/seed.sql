USE employees_db; 

INSERT INTO department (departemnt_name, id)
VALUES ("Department of Magical Law Enforcement", 10), ('Department of International Magical Cooperation', 20), ('Department of Magical Transportation', 30), ('Department of Mysteries', 40 ), ('Department of Magical Accidents and Catatrophies', 50), ("Department for the Regulation and Control of Magical Creatures", 60);

INSERT INTO role (title, salary, department_id)
VALUES ("Muggle Liason", 40,000, 50), ('Magical Law Enforcement Patrol', 40,000, 10), ('Foreign Affairs', 80,000, 20), ("Floo Network Authority", 30,000, 30), ("Auror", 60,000, 40), ("Goblin Liaison", 30,000, 60);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Arthur", "Weasley", 50), ("Kingsley", "Shackelbolt", 40), ("Nymphadora", "Tonks", 40), ("Barty", "Crouch", 20), ("Aurelius", "Burrow", 30); 