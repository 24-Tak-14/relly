// Configuration for PostgreSQL database connection
// NOTE: In a production environment, sensitive information like passwords
// should be managed using environment variables or a secrets management system,
// not hardcoded.

const DB_CONFIG = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME || 'dev_drillbot_db',
  user: process.env.DB_USER || 'delta_drill',
  password: process.env.DB_PASSWORD || 'FetVulture@78_2407', // Replace with actual password or use env var
};

export default DB_CONFIG;
