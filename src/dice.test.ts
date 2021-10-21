import { d10, d100, d12, d20, d4, d6, d8, roll, successPool, sumPool } from "./dice";

describe("Dice Rollers", () => {
    const repeats = 100;

    it("simple d4", () => {
        const res = d4();
        for (let i = 0; i < repeats; i++) {
            expect(res[0]).toBeGreaterThanOrEqual(1);
            expect(res[0]).toBeLessThanOrEqual(4);
        }
    });

    it("simple d6", () => {
        const res = d6();
        for (let i = 0; i < repeats; i++) {
            expect(res[0]).toBeGreaterThanOrEqual(1);
            expect(res[0]).toBeLessThanOrEqual(6);
        }
    });

    it("simple d8", () => {
        const res = d8();
        for (let i = 0; i < repeats; i++) {
            expect(res[0]).toBeGreaterThanOrEqual(1);
            expect(res[0]).toBeLessThanOrEqual(8);
        }
    });

    it("simple d10", () => {
        const res = d10();
        for (let i = 0; i < repeats; i++) {
            expect(res[0]).toBeGreaterThanOrEqual(1);
            expect(res[0]).toBeLessThanOrEqual(10);
        }
    });

    it("simple d12", () => {
        const res = d12();
        for (let i = 0; i < repeats; i++) {
            expect(res[0]).toBeGreaterThanOrEqual(1);
            expect(res[0]).toBeLessThanOrEqual(12);
        }
    });

    it("simple d20", () => {
        const res = d20();
        for (let i = 0; i < repeats; i++) {
            expect(res[0]).toBeGreaterThanOrEqual(1);
            expect(res[0]).toBeLessThanOrEqual(20);
        }
    });

    it("simple d100", () => {
        const res = d100();
        for (let i = 0; i < repeats; i++) {
            expect(res[0]).toBeGreaterThanOrEqual(1);
            expect(res[0]).toBeLessThanOrEqual(100);
        }
    });

    it("Roll a pool of d6", () => {
        const resultPool = d6(10);
        expect(resultPool.length).toBe(10);
        resultPool.forEach((res) => {
            expect(res).toBeGreaterThanOrEqual(1);
            expect(res).toBeLessThanOrEqual(6);
        });
    });
});

describe("Dice Roller", () => {

    it("Pure roll", () => {
        const res = roll("2d6");
        expect(res.rolls.length).toBe(2);
        expect(sumPool(res.rolls)).toBe(res.sum);
        expect(res.dieType).toBe(6);
        
    });

    it("Roll with positive bonus", () => {
        const res = roll("4d12+8");
        expect(res.rolls.length).toBe(4);
        expect(sumPool(res.rolls) + 8).toBe(res.sum);
        expect(res.dieType).toBe(12);
        
    });

    it("Roll with positive bonus", () => {
        const res = roll("3d10-4");
        expect(res.rolls.length).toBe(3);
        expect(sumPool(res.rolls) - 4).toBe(res.sum);
        expect(res.dieType).toBe(10);
        
    });

    it("Roll a single die", () => {
        const res = roll("d20");
        expect(res.rolls.length).toBe(1);
        expect(sumPool(res.rolls)).toBe(res.sum);
        expect(res.dieType).toBe(20);
        expect(res.sum).toBeGreaterThanOrEqual(1);
        expect(res.sum).toBeLessThanOrEqual(20);
    });
})

describe("Pool Functions", () => {
    it("Success pool", () => {
        expect(successPool(5, [1, 6, 4, 5, 8, 3, 4, 4])).toBe(3);
    });

    it("Sum pool", () => {
        expect(sumPool([1,2,3,4])).toBe(10);
    });
});
