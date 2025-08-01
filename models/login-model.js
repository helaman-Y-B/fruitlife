const pool = require("../sql/server-connection");

async function signIn(insertedEmail, insertedPassword) {
    const query = await pool.query("SELECT * FROM public.accounts");
    //console.log("Query executed:", query);

    for (let i = 0; i < query.rows.length; i++) {
        const row = query.rows[i];
        if (row.account_email === insertedEmail && row.account_password === insertedPassword) {
            console.log("Welcome " + row.account_fname);
            return row.account_fname; // User found and authenticated
        } 
    }
}

module.exports = { signIn };