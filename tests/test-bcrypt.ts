import bcrypt from 'bcrypt';

const saltRounds = 10;
const plainPassword = 'testPassword';

async function testBcrypt() {
  try {
    // Hash erstellen
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    console.log('Gehashter Wert:', hashedPassword);

    // Passwort vergleichen
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    console.log('Stimmt das Passwort überein?', isMatch);
  } catch (error) {
    console.error('Fehler bei der Verwendung von bcrypt:', error);
  }
}

testBcrypt();
