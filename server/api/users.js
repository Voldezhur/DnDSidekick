exports.getAllUsers = async (req, res) => {
  try {
    const r = await req.db.pool.query("SELECT * FROM users ORDER BY user_id")
    res.json({err: '', users: r.rows});
  } catch(e) {
    res.status(500).send(e.message);
  }
}

exports.postNewUser = async (req, res) => {
  try {
      if (!req.body) {
          return res.status(400);
      }

      let r = await req.db.pool.query(`
          INSERT INTO users (password, user_name)
          VALUES ('${req.body.password}', '${req.body.user_name}');
      `);

      if (r.rowCount > 0) {
          r = await req.db.pool.query(`SELECT * FROM users WHERE password = ${req.body.password} and user_name = ${req.body.user_name}`);
          if (r.rows.length > 0) {
              res.status(201).json({ err: '', newUser: r.rows[0] });
              return;
          }
      }

      res.json({ err: 'There has been an error when inserting the new user', newUser: {} });
  } catch (e) {
      res.status(500).send(e.message);
  }
}

exports.postUserForLogin = async (req, res) => {
  try {
    const query = `SELECT * FROM users WHERE password = '${req.body.password}' and user_name = '${req.body.user_name}'`;
    const r = await req.db.pool.query(query);
    if (r.rowCount == 0) {
      res.status(400).send("No user found");
      return;
    }

    res.status(200).json({err: '', user: r.rows[0]});
  } catch(e) {
    res.status(500).send(e.message);
  }
}