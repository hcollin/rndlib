import { rnd } from "./rnd";

/**
 * Return a random integer number as a string with leading zeroes equal to the length of max.
 *
 * If the random values is requested between 1 and 999, following results would be valid:
 *
 *   13 => "013"
 *   123 => "123"
 *
 * @param min number
 * @param max number
 */
 export function padrnd(min: number, max?: number): string {
    const num = rnd(min, max);
    const maxLen = max !== undefined ? max.toString().length : min.toString().length;
    const numStr: string = num.toString();
    return numStr.padStart(maxLen, "0");
}