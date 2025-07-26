const pool = require("../sql/server-connection");

async function registerAccount(insertedFname, insertedLname, insertedEmail, insertedPassword) {
    const query = await pool.query("SELECT * FROM public.accounts");
    console.log("Query executed:", query);

    for (const row of query.rows) {
        if (row.account_fname === insertedFname) {
            console.log("Username already exists");
            return false; // Username already exists
        } else {
            const insertQuery = await pool.query("INSERT INTO public.accounts (account_fname, account_lname, account_email, account_password) VALUES ($1, $2)", [insertedFname, insertedLname, insertedEmail, insertedPassword]);
            console.log("Account registered successfully:", insertQuery);
            return true; // User registered successfully
        }
    
    }
}

module.exports = { registerAccount };