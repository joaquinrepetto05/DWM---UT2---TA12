function generatePassword(length) {
    
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%&*';
    
    const allChars = upperCase + lowerCase + numbers + specialChars;
    
    // Función para generar un carácter aleatorio de un string dado
    function getRandomChar(chars) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        return chars[randomIndex];
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += getRandomChar(allChars);
    }
    
    return password;
}

console.log(generatePassword(12));
console.log(generatePassword(12));