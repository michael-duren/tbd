const pg = require('pg');

const pool = new pg.Pool({
  host: 'db.bit.io',
  database: 'michael-duren/prime',
  port: 5432,
  user: 'tbd',
  ssl: true,
  password: process.env.DATABASE_PASSWORD,
});

function getAllSongs() {
  return pool.query('SELECT * FROM songs').then((result) => result.rows);
}

module.exports = {
  getAllSongs,
};
