import { rnd } from "./rnd";

describe("rnd() tests", () => {
    const repeats = 100;

    it(`Must accept 2 arguments, executed ${repeats} times`, () => {
        const results: number[] = [];
        for (let i = 0; i < repeats; i++) {
            const res = rnd(1, 10);
            expect(res).toBeGreaterThanOrEqual(1);
            expect(res).toBeLessThanOrEqual(10);
            if(!results[res]) {
                results[res] = 0;
            }
            results[res]++;
            expect(results[res]).toBeLessThan(repeats*0.75);
        }
    });

    it(`Must accept 1 argument, executed ${repeats} times`, () => {
        const results: number[] = [];
        for (let i = 0; i < repeats; i++) {
            const res = rnd(10);
            expect(res).toBeGreaterThanOrEqual(0);
            expect(res).toBeLessThanOrEqual(10);
            if(!results[res]) {
                results[res] = 0;
            }
            results[res]++;
            expect(results[res]).toBeLessThan(repeats*0.75);
        }
    });
});
