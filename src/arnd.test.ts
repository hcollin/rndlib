import { arnd } from "./arnd";

describe("arnd() tests", () => {
    const repeats = 100;

    it(`Get only values from array`, () => {
        const arrData: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
        const results: Map<string, number> = new Map<string, number>();
        for (let i = 0; i < repeats; i++) {
            const res = arnd(arrData);
            expect(arrData.includes(res)).toBeTruthy();
            if (!results.has(res)) {
                results.set(res, 1);
            } else {
                const cur = results.get(res);
                results.set(res, cur + 1);
            }

            const current = results.get(res);
            expect(current).toBeLessThan(repeats * 0.75);
        }
    });
});
