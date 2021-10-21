import { rnd } from "./rnd";

/**
 * Returns a value based on gaussi
 * @param mid
 * @param steps
 * @param depth
 * @param minCut
 * @param maxCut
 * @returns
 */
function grnd(mid: number, steps: number, depth: number, minCut?: number, maxCut?: number): number {
    function insideCut(val: number) {
        if (typeof minCut === "number" && val < minCut) return false;
        if (typeof maxCut === "number" && val > maxCut) return false;
        return true;
    }

    let res = mid;

    const maxDepth = depth * 2;
    // const mods: Array<number | string> = [];
    for (let i = 0; i < steps; i++) {
        const mod = rnd(0, maxDepth) - depth;
        // mods.push(mod);

        if (insideCut(res + mod)) {
            res += mod;
        }
    }

    // if (typeof minCut === "number" && res < minCut) console.log(mods);
    return res;
}

/**
 * Return a random number between min and max values, but distribution of the values resembles normal distribution.
 *
 * This does not follow proper mathematical normalized deviation, but is an approximation.
 *
 * @param min number Bottom limit of the normalized rand
 * @param max number Top limit of the normalized rand
 * @param ramp 0-10 Higher the number, then more aggressive the curve
 * @returns
 */
export function nrnd(min: number, max: number, ramp?: number): number {
    if (min > max) throw new Error(`Invalid value: Minimum cannot be higher than max value. ${min} - ${max}`);
    const aggro = ramp !== undefined ? ramp : 5;
    if (aggro < 0 || aggro > 10) throw new Error(`Invalid ramp value ${aggro}: Must be between 0 and 10`);

    if (aggro === 0) {
        return rnd(min, max);
    }

    const mid = Math.round(min + (max - min) / 2);
    const steps = 11 - aggro;
    const depthPerc = 1 - aggro / 10;
    const depth = Math.round((mid * depthPerc) / 2);
    return grnd(mid, steps, depth, min, max);
}
