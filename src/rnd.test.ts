import { rnd } from "./rnd";

describe("rnd() tests", () => {

    const repeats = 100;

    it(`Must accept 2 arguments, run ${repeats} times`, () => {

        for(let i = 0; i < repeats ; i++) {
            const res = rnd(1,10);
            expect(res).toBeGreaterThanOrEqual(0);
            expect(res).toBeLessThanOrEqual(10);
        }


    });
})