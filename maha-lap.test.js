const Mahalap = require("./maha-lap");
describe("Test Maha-lap", () => {
  test("Test Tamnai with day", () => {
    const result = Mahalap.tamnaiWithDay("จันทร์");
    expect(result).toEqual(2);
  });
});
