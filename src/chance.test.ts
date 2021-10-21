import { chance } from "./chance";

describe("chance()", () => {
    const repeats = 100;

    const distributionRepeats = 10000;
    const tolerance = 0.05;

    it("0 must always return false", () => {
        for (let i = 0; i < repeats; i++) {
            expect(chance(0)).toBe(false);
        }
    });

    it("100 must always return true", () => {
        for (let i = 0; i < repeats; i++) {
            expect(chance(100)).toBe(true);
        }
    });

    it("Distribution test 33%", () => {
        let successes = 0;
        const testChance = 33;
        for (let i = 0; i < distributionRepeats; i++) {
            if (chance(testChance)) {
                successes++;
            }
        }
        const sperc = successes / distributionRepeats;

        const min = testChance / 100 - tolerance;
        const max = testChance / 100 + tolerance;
        expect(sperc >= min).toBe(true);
        expect(sperc <= max).toBe(true);
    });

    it("Distribution test 50%", () => {
        let successes = 0;
        const testChance = 50;
        for (let i = 0; i < distributionRepeats; i++) {
            if (chance(testChance)) {
                successes++;
            }
        }
        const sperc = successes / distributionRepeats;

        const min = testChance / 100 - tolerance;
        const max = testChance / 100 + tolerance;
        expect(sperc >= min).toBe(true);
        expect(sperc <= max).toBe(true);
    });

    it("Distribution test 90%", () => {
        let successes = 0;
        const testChance = 90;
        for (let i = 0; i < distributionRepeats; i++) {
            if (chance(testChance)) {
                successes++;
            }
        }
        const sperc = successes / distributionRepeats;

        const min = testChance / 100 - tolerance;
        const max = testChance / 100 + tolerance;
        expect(sperc >= min).toBe(true);
        expect(sperc <= max).toBe(true);
    });
});
