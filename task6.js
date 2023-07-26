function generateRandomPassword(length) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numericChars = "0123456789";
    const specialChars = "!@#$%^&*()_+";

    const allChars = uppercaseChars + lowercaseChars + numericChars + specialChars;

    let password = '';
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecialChar = false;

    while (password.length < length) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        const randomChar = allChars[randomIndex];

        if (uppercaseChars.includes(randomChar) && !hasUppercase) {
            password += randomChar;
            hasUppercase = true;
        } else if (lowercaseChars.includes(randomChar) && !hasLowercase) {
            password += randomChar;
            hasLowercase = true;
        } else if (numericChars.includes(randomChar) && !hasNumber) {
            password += randomChar;
            hasNumber = true;
        } else if (specialChars.includes(randomChar) && !hasSpecialChar) {
            password += randomChar;
            hasSpecialChar = true;
        } else {
            password += randomChar;
        }
    }

    return password;
}

