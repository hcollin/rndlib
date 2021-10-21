import { nrnd } from "./nrnd";

describe("grnd() tests", () => {
    const repeats = 50000;

    xit("print test", () => {
        const results: number[] = [];
        const min = 0;
        const max = 100;

        for (let i = 0; i < repeats; i++) {
            const res = nrnd(min, max, 6);

            if (results[res] === undefined) {
                results[res] = 1;
            } else {
                results[res]++;
            }
        }

        let dispStr = "";

        for (let i = min; i <= max; i++) {
            const val = results[i] || 0;
            const perc = Math.round((val / repeats) * 100);
            dispStr +=
                String(i).padEnd(4, " ") +
                ": " +
                `${results[i] || 0}`.padEnd(String(repeats).length + 2, " ") +
                String().padStart(perc, "=") +
                ` ${perc}%\n`;
        }
        console.log(dispStr);
    });

    it("Results must resemble normalized distribution: ", () => {
        const results: number[] = [];
        const min = 0;
        const max = 100;

        for (let i = 0; i < repeats; i++) {
            const res = nrnd(min, max, 6);

            if (results[res] === undefined) {
                results[res] = 1;
            } else {
                results[res]++;
            }
        }
        const step = Math.round((max - min)/10);
        const mid = (max - min ) / 2;
        for(let i = step; i < (max+step); i = i + step) {
            const prevVal = results[i - step] || 0;
            const val = results[i] || 0;
            if(i <= mid) {
                expect(prevVal).toBeLessThan(val);
            } else {
                expect(prevVal).toBeGreaterThan(val);
            }
        }
    });
});
