exports.getAllUsers = async (req, res) => {
  try {
    const r = await req.db.pool.query("SELECT * FROM users ORDER BY user_id")
    res.json({err: '', users: r.rows});
  } catch(e) {
    res.status(500).send(e.message);
  }
}