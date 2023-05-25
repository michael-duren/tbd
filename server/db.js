const pg = require('pg');

const pool = new pg.Pool({
  host: 'db.bit.io',
});

function getAllSongs() {
  return pool.query('SELECT * FROM songs').then((result) => result.rows);
}

module.exports = {
  getAllSongs,
};
