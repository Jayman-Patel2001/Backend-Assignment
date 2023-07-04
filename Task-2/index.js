//! Task-2 : Node.js + MySQL Assignment
//! (Function which fetch the user data based on the companyId)
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: null,
  database: "user_details",
});

const getUsersByCompanyId = (companyId) => {
  return new Promise((resolve, reject) => {
    //TODO: Query for fetching the data
    const query = `
      SELECT *
      FROM user
      WHERE companyId = ?
    `;
    //TODO: Retrieving the data from database
    connection.query(query, [companyId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

//TODO: Usage example
const companyId = 1;
getUsersByCompanyId(companyId)
  .then((users) => {
    console.log("Users:", users);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//TODO: closing the connection
connection.end((err) => {
  if (err) {
    console.error("Error closing the database connection:", err);
    process.exit(1);
  }
  console.log("Database connection closed");
  process.exit(0);
});
