DROP DATABASE IF EXISTS employees_db; 
CREATE DATABASE employees_db; 
USE employees_db; 

CREATE TABLE department (
  department_id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(100)UNIQUE  NOT NULL
);

CREATE TABLE role (
  role_id int UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
  title VARCHAR(100) UNIQUE NOT NULL,
  salary DECIMAL UNSIGNED NOT NULL, 
  department_id INT UNSIGNED NOT NULL, 
  INDEX dep_ind (department_id)
  -- CONSTRAINT FK_departmentRole FOREIGN KEY (department_id) REFERENCES department(department_id)
);

CREATE TABLE employee (
  employee_id int UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  INDEX role_ind (role_id) 
--   CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE, 
--  manager_id INT UNSIGNED, 
--  INDEX man_ind (manager_id), 
--  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL  
);