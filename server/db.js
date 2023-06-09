const pg = require('pg');

const pool = new pg.Pool({
  host: 'db.bit.io',
  database: 'michael-duren/prime',
  port: 5432,
  user: 'tbd',
  ssl: true,
  password: process.env.DATABASE_PASSWORD,
});

function getAllMessages() {
  let query = 'SELECT * FROM messages';

  return pool
    .query(query)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      throw new Error(err);
    });
}

function createMessage(message) {
  let query = `INSERT INTO messages (title, text, timestamp)
		VALUES ('${message.title}', '${message.text}', NOW());
	`;

  return pool
    .query(query)
    .then(console.log)
    .catch((err) => {
      throw new Error(err);
    });
}

module.exports = {
  getAllMessages,
  createMessage,
};
