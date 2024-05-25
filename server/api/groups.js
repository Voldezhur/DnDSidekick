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

exports.getGroupByDM = async (req, res) => {
    try {
        const r = await req.db.pool.query(`SELECT * FROM groups WHERE dm_id = ${req.params.user_id}`);
        res.json({ err: '', body: r.rows })
    } catch (e) {
        res.status(500).send(e.message);
    }
}

exports.postNewGroup = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400);
        }

        // Записываем группу в таблицу групп
        let r = await req.db.pool.query(`
            INSERT INTO groups (dm_id, group_name)
            VALUES (${req.body.dm_id}, '${req.body.group_name}');
        `);

        // Если получилось записать
        if (r.rowCount > 0) {
            r = await req.db.pool.query(`SELECT * FROM groups WHERE dm_id = ${req.body.dm_id} ORDER BY group_id DESC`);
            
            if (r.rows.length > 0) {
                // Записываем персонажей в члены группы
                req.body.characters.forEach(async character => {
                    await req.db.pool.query(`INSERT INTO group_members ("group_id", "character_id") VALUES (${r.rows[0].group_id}, ${character.character_id})`);
                });

                res.status(201).json({ err: '', newGroup: r.rows[0] });
            }
        }

        else {
            res.json({ err: 'There has been an error creating the new group', newGroup: {} });
        }
    } catch (e) {
        res.status(500).send(e.message);
    }
}

exports.postSessionNote = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400);
        }

        // Записываем группу в таблицу групп
        let r = await req.db.pool.query(`
            INSERT INTO session_notes (group_id, notes)
            VALUES (${req.body.group_id}, '${req.body.notes}');
        `);

        // Если получилось записать
        if (r.rowCount > 0) {
            res.status(201).json({ err: '' });
        }

        else {
            res.json({ err: 'There has been an error saving the notes', newGroup: {} });
        }
    } catch (e) {
        res.status(500).send(e.message);
    }
}