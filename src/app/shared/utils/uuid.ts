/**
 * Erzeugt eine UUID nach RFC 4122
 */
export function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    // tslint:disable-next-line: no-bitwise
    const random = (Math.random() * 16) | 0;
    const value = char === 'x' ? random : (random % 4) + 8;
    return value.toString(16); // Hexadezimales Zeichen zurückgeben
  });
}
