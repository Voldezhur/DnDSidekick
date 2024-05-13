exports.getClassesList = async (req, res) => {
    try {
        const r = await req.db.pool.query(`SELECT * FROM classes`);
        res.json({ err: '', body: r.rows });
    } catch (e) {
        res.status(500).send(e.message);
    }
}

exports.getRacesList = async (req, res) => {
    try {
        const r = await req.db.pool.query(`SELECT * FROM races`);
        res.json({ err: '', body: r.rows });
    } catch (e) {
        res.status(500).send(e.message);
    }
}

exports.getWeaponsList = async (req, res) => {
    try {
        const r = await req.db.pool.query(`SELECT * FROM items WHERE is_weapon = true`);
        res.json({ err: '', body: r.rows });
    } catch (e) {
        res.status(500).send(e.message);
    }
}

exports.getArmorList = async (req, res) => {
    try {
        const r = await req.db.pool.query(`SELECT * FROM items WHERE is_armor =  true`);
        res.json({ err: '', body: r.rows });
    } catch (e) {
        res.status(500).send(e.message);
    }
}