const pool = require("../sql/server-connection");

async function getUsersImg(userId) {

    const query = `SELECT profile_picture FROM public.accounts WHERE account_id = $1`;
    const img = await pool.query(query, [userId]);

    if (img.rows.length > 0 && img.rows[0].profile_picture) {
        return img.rows[0].profile_picture;
    }
    // Return null or a default image path if not set
    return "img/logo.png";
}

async function updateProfilePicture(userId, filePath) {

    const updateQuery = `UPDATE public.accounts SET profile_picture = $1 WHERE account_id = $2`;
    const values = [filePath, userId];
    console.log(`Updating profile picture for user ${userId} to ${filePath}`);
    try {
        await pool.query(updateQuery, values);
        return true;
    } catch (error) {
        console.error("Error updating profile picture in database:", error);
        throw error;
    }
}

module.exports = { updateProfilePicture, getUsersImg };