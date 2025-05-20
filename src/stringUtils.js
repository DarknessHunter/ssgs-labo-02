/**
 * Inverte una stringa.
 * @param {string} str - La stringa da invertire.
 * @returns {string} - La stringa invertita.
 */
function reverseString(str) {
    if (!str) return '';
    return str.split('').reverse().join('');
}

/**
 * Verifica se una stringa è palindroma (ignorando maiuscole/minuscole e spazi).
 * @param {string} str - La stringa da verificare.
 * @returns {boolean} - True se la stringa è palindroma, altrimenti false.
 */
function isPalindrome(str) {
    if (!str) return true;
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

/**
 * Tronca una stringa a una lunghezza massima, aggiungendo "..." se necessario.
 * @param {string} str - La stringa da troncare.
 * @param {number} maxLength - La lunghezza massima.
 * @returns {string} - La stringa troncata.
 */
function truncateString(str, maxLength) {
    if (!str) return '';
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
}

/**
 * Conta i caratteri di una stringa.
 * @param {string} str - La stringa da analizzare.
 * @returns {Object} - Un oggetto con il conteggio dei caratteri.
 */
function countCharacters(str) {
    const counts = {};
    for (const char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }
    return counts;
}

function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function countVowels(str) {
    if (!str) return 0;
    return (str.match(/[aeiouAEIOU]/g) || []).length;
}

module.exports = {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
    capitalize,
    countVowels,
};
