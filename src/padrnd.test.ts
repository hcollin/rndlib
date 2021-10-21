import { padrnd } from "./padrnd";

describe("padrnd() tests", () => {
    const repeats = 100;

    it(`All values must have an equal length to the max value`, () => {
        for (let i = 0; i < repeats; i++) {
            const res = padrnd(1, 10);
            expect(res.length).toBe(2);
        }

        for (let i = 0; i < repeats; i++) {
            const res = padrnd(1, 100000);
            expect(res.length).toBe(6);
        }
    });

    it(`The first argument is considered a max value if only a single argument is provided`, () => {
        for (let i = 0; i < repeats; i++) {
            const res = padrnd(10);
            expect(res.length).toBe(2);
        }

        for (let i = 0; i < repeats; i++) {
            const res = padrnd(100000);
            expect(res.length).toBe(6);
        }
    });
});
