exports.getCharactersOfUser = async (req, res) => {
    try {
        const r = await req.db.pool.query(`SELECT c.character_id, c.creator_id, cs.* FROM characters c LEFT JOIN character_sheets cs ON c.character_sheet_id = cs.character_sheet_id WHERE c.creator_id = ${req.params.uid}`);
        res.json({ err: '', creator_id: req.params.uid, characters: r.rows });
    } catch (e) {
        res.status(500).send(e.message);
    }
}

exports.getCharacterById = async (req, res) => {
    try {
        const r = await req.db.pool.query(`SELECT c.character_id, c.creator_id, cs.* FROM characters c LEFT JOIN character_sheets cs ON c.character_sheet_id = cs.character_sheet_id WHERE c.character_id = ${req.params.character_id}`);
        res.json({ err: '', body: r.rows[0] });
    } catch (e) {
        res.status(500).send(e.message);
    }
}

exports.getCharactersInGroup = async (req,res) => {
    try {
        const r = await req.db.pool.query(`SELECT * FROM characters WHERE character_id IN (SELECT character_id FROM group_members WHERE group_id = ${req.params.group_id})`);
        res.json({ err: '', body: r.rows });
    } catch (e) {
        res.status(500).send(e.message);
    }
}

exports.postNewCharacter = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400);
        }

        // Сначала создаем лист персонажа
        let r_character_sheet = await req.db.pool.query(`
            INSERT INTO character_sheets (name, background, class_id, race_id, ability_scores)
            VALUES ('${req.body.character_sheet.name}', '${req.body.background}',  ${req.body.character_sheet.class_id}, ${req.body.character_sheet.race_id}, '${JSON.stringify(req.body.character_sheet.ability_scores)}');
        `);

        // Если лист персонажа создался
        if (r_character_sheet.rowCount > 0) {
            // Получаем созданный лист персонажа
            r = await req.db.pool.query(`SELECT * FROM character_sheets WHERE name = '${req.body.character_sheet.name}' ORDER BY character_sheet_id DESC`);
            if (r.rows.length > 0) {
                // Создаем нового персонажа с новым листом
                let r_character = await req.db.pool.query(`
                    INSERT INTO characters (creator_id, character_sheet_id)
                    VALUES (${req.body.creator_id}, ${r.rows[0].character_sheet_id});
                `);

                // Созвращаем нового персонажа
                res.status(201).json({ err: '', newCharacter: r_character.body });
                return;
            }
        }

        res.json({ err: 'There has been an error when inserting the new character', newCharacter: {} });
    } catch (e) {
        res.status(500).send(e.message);
    }
}

exports.deleteCharacter = async (req, res) => {
    try {
        const r = await req.db.pool.query(`DELETE FROM characters WHERE character_id = ${req.params.character_id}`);
        res.status(200).json({ err: '', info: `deleted character with code ${req.params.character_id}` });
    } catch (e) {
        res.status(500).send(e.message);
    }
}