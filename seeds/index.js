const seedDeals = require("./deals-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n---------- DATABASE SYNCED ----------\n");

  await seedDeals();
  console.log("\n---------- DEALS SYNCED ----------\n");

  process.exit(0);
};

seedAll();
