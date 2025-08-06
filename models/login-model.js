const pool = require("../sql/server-connection");
const bcrypt = require("bcrypt");

async function signIn(insertedEmail, insertedPassword) {
    const query = await pool.query("SELECT * FROM public.accounts WHERE account_email = $1", [insertedEmail]);
    //console.log("Query executed:", query);

    if (query.rows.length === 0) {
        return null; // No user found with the given email
    }

    const row = query.rows[0]

    // Check if the password matches
    if (await bcrypt.compare(insertedPassword, row.account_password)) {
        return row.account_fname; // User found and authenticated
    } else {
        console.log("Invalid email or password for user");
    }
    //if (row.account_email === insertedEmail && row.account_password === insertedPassword) {
    //    return row.account_fname; // User found and authenticated
    //} 
}

module.exports = { signIn };