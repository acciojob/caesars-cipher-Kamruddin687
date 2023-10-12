function rot13(encodedString) {
  // Regular expression to match uppercase letters
  const uppercaseLetters = /[A-Z]/;

  // Function to decode a single character
  function decodeChar(char) {
    const charCode = char.charCodeAt(0);
    let decodedCharCode;

    if (uppercaseLetters.test(char)) {
      // Shift uppercase letters by 13 positions
      decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
    } else {
      // If it's not an uppercase letter, leave it unchanged
      decodedCharCode = charCode;
    }

    return String.fromCharCode(decodedCharCode);
  }

  // Split the encoded string into an array of characters, decode each character, and join them back
  return encodedString.split('').map(decodeChar).join('');
}

// Example usage:
const encodedString = "GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.";
const decodedString = rot13(encodedString);
console.log(decodedString); // Output: "THE QUICK BROWN DOG JUMPS OVER THE LAZY FOX."
