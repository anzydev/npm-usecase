import test from "node:test";
import assert from "node:assert/strict";
import countCharacters from "file-character-countrrr";

test("uses file-character-countrrr to count a message", () => {
  const message = "Build with npm";

  assert.equal(countCharacters(message), 14);
  assert.equal(countCharacters(message, { ignoreSpaces: true }), 12);
});
