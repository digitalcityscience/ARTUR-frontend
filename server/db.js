import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  //host: "host.docker.internal",
  host: "localhost",
  database: "ARTUR",
  password: "123456",
  port: 5432,
});

export default pool;
