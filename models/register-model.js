const pool = require("../sql/server-connection");

async function registerAccount(insertedFname, insertedLname, insertedEmail, insertedPassword) {
    const query = await pool.query("SELECT * FROM public.accounts");
    //console.log("Query executed:", query);

    for (let i = 0; i < query.rows.length; i++) {
        const row = query.rows[i];
        if (row.account_email === insertedEmail) {
            console.log("Username already exists");
            return false; // Username already exists
        }

    }
    // Insert the new account into the database
    const sql = "INSERT INTO public.accounts (account_fname, account_lname, account_email, account_password) VALUES ($1, $2, $3, $4)";
    console.log("Account registered successfully:", insertQuery);
    return await pool.query(sql, [insertedFname, insertedLname, insertedEmail, insertedPassword]); // User registered successfully
}

module.exports = { registerAccount };