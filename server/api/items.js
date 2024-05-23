exports.getItemsInInventory = async (req, res) => {
    try {
        const r = await req.db.pool.query(`SELECT item_id FROM inventories WHERE character_id = ${req.params.character_id}`);
        res.status(200).json({ err: '', body: r.rows });
    } catch (e) {
        res.status(500).send(e.message);
    }
}