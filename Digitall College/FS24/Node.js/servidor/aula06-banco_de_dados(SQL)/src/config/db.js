const pg = require("pg");

const {Pool} = pg; //Piscina;

const pool = new Pool({
  host: "ep-calm-sea-a5tvx5qz.us-east-2.aws.neon.tech",
  port: 5432,
  user: "pipoca_owner",
  password: "onNPGam1Y0ME",
  database: "pipoca",
  max: 100,
  min: 10,
  ssl: true,
});

module.exports = pool;
