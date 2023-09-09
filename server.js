const express = require('express');
const routes = require('./routes');
const seedAll = require('./seeds/index')
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
// sync sequelize models to the database, then turn on the server
// will seed the database when server is started
const seed_start_server = async () =>{
  try {
    await seedAll();
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
  }catch (err){
    console.log("Error in seeding and starting the server")
  }
};
seed_start_server();

