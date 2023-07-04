Task 2 : NodeJS + MySQL assignment
Table "company" has the following columns: companyId, companyName
Table "user" has the following columns: userId, userName, email, mobile, password, companyId
companyId is a foreign key to the "company" table
Write a function in NodeJS that has "companyId" as a parameter. This function should return a list of users that belong to this companyId. 

************************Process to run the file***********************
1. Create a database named user_details. 
2. Then create a table named company having the following columns: companyId, companyName
3. Then create a table named user having the following columns: userId, userName, email, mobile, password, companyId
Note: Also make companyId a foreign key to the column table
-Perform the above three steps in phpmyadmin for easiness
4. After establishing a complete database, open the index.js file and change the user and password according to your phpmyadmin credentials
(In most cases it will be the same i.e root and null respectively )
5. Finally, ensure that the node is installed in your local device and run "node index.js" or "nodemon index.js"
(You will find the user data according to the companyId in terminal after running the above command)
