const pool = require("../sql/server-connection");

async function updateProfilePicture(userId, filePath) {
    const updateQuery = `UPDATE public.accounts SET profile_picture = $1 WHERE account_id = $2`;
    const values = [filePath, userId];
    try {
        await pool.query(updateQuery, values);
        return true;
    } catch (error) {
        console.error("Error updating profile picture in database:", error);
        throw error;
    }
}

module.exports = { updateProfilePicture };