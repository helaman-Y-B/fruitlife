const pool = require("../sql/");

async function getFruits() {
    return await pool.query("SELECT * FROM public.fruits_for_sale");
};

module.exports = { getFruits };