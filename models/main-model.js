const pool = require("../sql/server-connection");

async function getFruits() {
    const query = await pool.query("SELECT * FROM public.fruits_for_sale");
    //console.log("Query executed:", query);

    return query;
};

module.exports = { getFruits };