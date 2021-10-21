import { successPool, sumPool } from "./utils";


describe("Util Functions", () => {
    it("Success pool", () => {
        expect(successPool(5, [1, 6, 4, 5, 8, 3, 4, 4])).toBe(3);
    });

    it("Sum pool", () => {
        expect(sumPool([1, 2, 3, 4])).toBe(10);
    });
});
