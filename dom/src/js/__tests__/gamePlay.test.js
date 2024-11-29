import Field from "../field";

test("creating a playing field", () => {
  const field = new Field();
  const fields = field.gameField(4);
  const received = fields.querySelectorAll(".cell");
  expect(received.length).toBe(4 ** 2);
});
