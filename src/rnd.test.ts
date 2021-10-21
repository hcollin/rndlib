import { rnd } from "./rnd";

describe("rnd() tests", () => {
    const repeats = 100;

    it(`Must accept 2 arguments, executed ${repeats} times`, () => {
        const results: number[] = [];
        for (let i = 0; i < repeats; i++) {
            const res = rnd(1, 10);
            expect(res).toBeGreaterThanOrEqual(1);
            expect(res).toBeLessThanOrEqual(10);
            if (!results[res]) {
                results[res] = 0;
            }
            results[res]++;
            expect(results[res]).toBeLessThan(repeats * 0.75);
        }
    });

    it(`Must accept 1 argument, executed ${repeats} times`, () => {
        const results: number[] = [];
        for (let i = 0; i < repeats; i++) {
            const res = rnd(10);
            expect(res).toBeGreaterThanOrEqual(0);
            expect(res).toBeLessThanOrEqual(10);
            if (!results[res]) {
                results[res] = 0;
            }
            results[res]++;
            expect(results[res]).toBeLessThan(repeats * 0.75);
        }
    });

    it("Check the min and max boundary", () => {
        for (let i = 0; i < repeats; i++) {
            const res = rnd(50, 100);
            expect(res).toBeGreaterThanOrEqual(50);
            expect(res).toBeLessThanOrEqual(100);
        }
    });

    it("rnd() must throw if min boundary is less than max boundary", () => {
        expect(() => rnd(10, 5)).toThrow();
        expect(() => rnd(-5)).toThrow();
    });

    it("When min and max are equal that number is always returned", () => {
        for (let i = 0; i < repeats; i++) {
            expect(rnd(5, 5)).toBe(5);
            expect(rnd(0)).toBe(0);
        }
    });
});
