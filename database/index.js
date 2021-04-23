const { Pool } = require('pg');

const pool = new Pool({
  user: 'gabriel.g',
  host: 'localhost',
  database: 'striingr',
  password:''
});

pool.on('connect', () => {
  console.log('Connected to database');
});

module.exports = pool;