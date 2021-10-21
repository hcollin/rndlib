/**
 * Return a random integer number between two provided values. If only 
 * one value is provided, it is considered to be the max value, min is 0.
 *
 * @param min number
 * @param max number
 */
 export function rnd(min: number, max?: number): number {
    const rMin = max !== undefined ? min : 0;
    const rMax = max !== undefined ? max : min;

    if(rMin > rMax) throw new Error(`Invalid values: Minimum boundary on rnd() cannot be higher than maximum boundary: ${rMin} - ${rMax}`);
    if(rMin === rMax) return rMin;
    return Math.floor(Math.random() * (rMax + 1 - rMin)) + rMin;
}
