
const validation = {}

// Regular expressions for validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
const nameRegex = /^[A-Za-zÀ-ÿ]{2,}$/;

//Login Form
validation.validateLogin = (email, password) => {
    if (!emailRegex.test(email)) {
        return { valid: false, message: "Invalid email format." };
    } else if (!passwordRegex.test(password)) {
        return { valid: false, message: "Password must be at least 6 characters long and contain both letters and numbers." };
    }
    return { valid: true };
}

// Register Form
validation.validateRegister = (fname, lname, email, password) => {
    if (!nameRegex.test(fname)) {
        return { valid: false, message: "First name must be at least 2 characters long and contain only letters." };
    } else if (!nameRegex.test(lname)) {
        return { valid: false, message: "Last name must be at least 2 characters long and contain only letters." };
    } else if (!emailRegex.test(email)) {
        return { valid: false, message: "Invalid email format." };
    } else if (!passwordRegex.test(password)) {
        return { valid: false, message: "Password must be at least 6 characters long and contain both letters and numbers." };
    }
    return { valid: true };
}

module.exports = validation;