/**
 * Return a random integer number between two provided values. If only 
 * one value is provided, it is considered to be the max value, min is 0.
 *
 * @param min number
 * @param max number
 */
 export function rnd(min: number, max?: number): number {
    const maxReal = max || 0; 
    return Math.floor(Math.random() * (maxReal + 1 - min)) + min;
}
