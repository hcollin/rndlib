import { arnds } from "./arnds";

describe("arnds() tests", () => {
    const repeats = 100;

    it(`Return valid number of values`, () => {
        const arrData: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
        const results: Map<string, number> = new Map<string, number>();
        for (let i = 0; i < repeats; i++) {
            const res = arnds(arrData, 5);
            expect(res.length).toBe(5);
            res.forEach(r => {
                expect(arrData.includes(r)).toBeTruthy();
            });
        }
    });

    it('All returned values must be unique', () => {
        const arrData: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
        for (let i = 0; i < repeats; i++) {
            const res = arnds(arrData, 5, true);
            expect(res.length).toBe(5);
            res.forEach(r => {
                expect(arrData.includes(r)).toBeTruthy();
            });
            const resSet = new Set<string>(res);
            expect(resSet.size).toBe(5);
            expect(resSet.size).toBe(res.length);

        }
    });

    it('If more unique values are required than there are available, return all values', () => {
        const arrData: string[] = ["A", "B", "C", "D"];
        for (let i = 0; i < repeats; i++) {
            const res = arnds(arrData, 5, true);
            expect(res.length).toBe(4);
        }
    });
});
