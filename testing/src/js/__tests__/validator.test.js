import validate from "../validator";

test.each([
  ["valid number card", "5555555555554444", true],
  ["valid number card", "4539283476916568", true],
  ["valid number card", "6762403225743237", true],
  ["valid number card", "2201382000000013", true],
  ["valid number card", "2202946725158147", true],
  ["valid number card", "2204770467290753", true],
  ["valid number card with letter", "4111111111111111asa", true],
  ["invalid number card", "411111111", false],
  ["invalid number card", "12357847523695414", false],
])("it should be %s", (_, input, expected) => {
  expect(validate(input)).toBe(expected);
});
