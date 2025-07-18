const {Pool} = require("pg")
require("dotenv").config()

let pool 
if (process.env.NODE_ENV === "production") {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    })

    module.exports = {
        async query(text, params) {
            try {
                const res = await pool.query(text, params)
                console.log("Query executed successfully")
                return res
            } catch (error) {
                console.error("error in query", { text })
                throw error
            }
        },
    }
} else {
    pool = new Pool({
        
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    })
    module.exports = pool;
}