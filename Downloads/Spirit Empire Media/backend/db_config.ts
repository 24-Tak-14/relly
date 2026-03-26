// Configuration for database connection
const DB_CONFIG = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME || 'dev_drillbot_db',
  user: process.env.DB_USER || 'delta_drill',
  password: process.env.DB_PASSWORD || 'FetVulture@78_2407', // Warning: Storing credentials directly is not recommended for production. Use environment variables or secrets management.
};

export default DB_CONFIG;
