import { shuffle } from "./shuffle";

interface TestObject {
    a: string;
}

describe("arnds() tests", () => {
    const repeats = 100;

    it(`Shuffle the array`, () => {
        const arrData: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
        const results: Map<string, number> = new Map<string, number>();
        for (let i = 0; i < repeats; i++) {
            const res = shuffle(arrData);
            expect(res.length).toBe(arrData.length);
            let diffs = 0;
            res.forEach((val, index) => {
                expect(arrData.includes(val));
                if (val !== arrData[index]) diffs++;
            });
            expect(diffs).toBeGreaterThan(0);
        }
    });

    it("returned array must be a shallow copy with strings", () => {
        const arrData: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
        const res = shuffle(arrData);

        const fval = res[0];
        const i = arrData.indexOf(fval);

        expect(fval).toBe(arrData[i]);
        res[0] = "Z";
        expect(res[0]).not.toBe(arrData[i]);
    });

    it("returned array is a shallow copy with objects", () => {
        const arrData: TestObject[] = [
            { a: "A" },
            { a: "B" },
            { a: "C" },
            { a: "D" },
            { a: "E" },
            { a: "F" },
            { a: "G" },
            { a: "H" },
        ];
        const res = shuffle(arrData);

        const fval = res[0];
        const i = arrData.indexOf(fval);

        expect(fval).toBe(arrData[i]);
        fval.a = "X";
        expect(res[0].a).toBe(arrData[i].a);
    });
});
