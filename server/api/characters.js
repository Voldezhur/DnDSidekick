exports.getCharactersOfUser = async (req, res) => {
    try {
        const r = await req.db.pool.query(`SELECT * FROM characters WHERE creator_id = ${req.params.uid}`);
        res.json({ err: '', creator_id: req.params.uid, characters: r.rows });
    } catch (e) {
        res.status(500).send(e.message);
    }
}

exports.getCharactersById = async (req, res) => {
    try {
        const r = await req.db.pool.query(`SELECT * FROM characters WHERE character_id = ${req.params.character_id}`);
        res.json({ err: '', characters: r.rows[0] });
    } catch (e) {
        res.status(500).send(e.message);
    }
}

exports.postNewCharacter = async (req, res) => {
    // console.log(JSON.stringify(req.body.character_sheet));
    // res.sendStatus(201);

    try {
        if (!req.body) {
            return res.status(400);
        }

        let r = await req.db.pool.query(`
            INSERT INTO characters (creator_id, character_sheet)
            VALUES (${req.body.creator_id}, '${JSON.stringify(req.body.character_sheet)}');
        `);

        if (r.rowCount > 0) {
            r = await req.db.pool.query(`SELECT * FROM characters WHERE creator_id = ${req.body.creator_id} ORDER BY character_id DESC`);
            if (r.rows.length > 0) {
                res.status(201).json({ err: '', newCharacter: r.rows[0] });
                return;
            }
        }

        res.json({ err: 'There has been an error when inserting the new character', newCharacter: {} });
    } catch (e) {
        res.status(500).send(e.message);
    }
}