import countCharacters from "file-character-countrrr";

const text = process.argv.slice(2).join(" ") || "Hello from my npm package!";

console.log(`Text: ${text}`);
console.log(`Characters: ${countCharacters(text)}`);
console.log(`Characters without spaces: ${countCharacters(text, { ignoreSpaces: true })}`);
