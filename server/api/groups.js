exports.getAllGroups = async (req, res) => {
    try {
        const r = await req.db.pool.query("SELECT * FROM groups ORDER BY group_id")
        res.json({ err: '', groups: r.rows });
    } catch (e) {
        res.status(500).send(e.message);
    }
}

exports.getGroupById = async (req, res) => {
    try {
        const r = await req.db.pool.query(`SELECT * FROM groups WHERE group_id = ${req.params.group_id}`);
        res.json({ err: '', body: r.rows[0] });
    } catch (e) {
        res.status(500).send(e.message);
    }
}

exports.getGroupByUser = async (req, res) => {
    try {
        const r = await req.db.pool.query(`SELECT * FROM groups WHERE group_id IN (SELECT group_id FROM group_members WHERE character_id IN (SELECT character_id FROM characters WHERE creator_id = ${req.params.user_id}))`);
        res.json({ err: '', body: r.rows })
    } catch (e) {
        res.status(500).send(e.message);
    }
}