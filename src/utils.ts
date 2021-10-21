import { DiceResults } from "./dice";




/**
 * Return the number of results that are equal or higher than threshold
 * @param threshold
 * @param pool
 */
 export function successPool(threshold: number, pool: number[]|DiceResults): number {
    const results: number[] = Array.isArray(pool) ? pool : pool.rolls;
    return results.reduce((sum: number, res: number) => {
        if (res >= threshold) return sum + 1;
        return sum;
    }, 0);
}

/**
 * Return the number of results that are equal or higher than threshold
 * @param threshold
 * @param pool
 */
export function sumPool(pool: number[]|DiceResults): number {
    const results: number[] = Array.isArray(pool) ? pool : pool.rolls;
    return results.reduce((sum: number, res: number) => {
        return sum + res;
    }, 0);
}
