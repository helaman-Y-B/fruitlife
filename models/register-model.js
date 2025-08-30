const pool = require("../sql/server-connection");

async function registerAccount(insertedFname, insertedLname, insertedEmail, insertedPassword) {
    const query = await pool.query("SELECT * FROM public.accounts WHERE account_email = $1", [insertedEmail]);
    //console.log("Query executed:", query);

    if (query.rows.length > 0) {
        console.log("Email already exists");
        return false;
    } else {
        // Insert the new account into the database
        const sql = "INSERT INTO public.accounts (account_fname, account_lname, account_email, account_password) VALUES ($1, $2, $3, $4)";
        return await pool.query(sql, [insertedFname, insertedLname, insertedEmail, insertedPassword]); // User registered successfully

    }
}

module.exports = { registerAccount };