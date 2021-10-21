import { rnd } from "./rnd";
import { sumPool } from "./utils";

export interface DiceResults {
    sum: number,
    rolls: number[],
    dieType: number
}

/**
 * Get results for string die roll like 2d10+3
 * 
 * @param dieString 
 * @returns 
 */
export function roll(dieString: string): DiceResults {
    const diere = /(\d*)d(\d+)([\+\-]*)(\d*)/im;
    const die = dieString.replace(" ", "").match(diere);
    const times = Number(die[1] || 1);
    const sides = Number(die[2]);

    const bnum = Number(die[4] || 0);
    const bonus = die[3] === "-" ? bnum * -1 : bnum * 1;
    const res = dx(sides, times);
    
    const sum = sumPool(res) + bonus;
    const results: DiceResults = {
        sum: sum,
        rolls: res,
        dieType: sides
    }

    return results;
}

/**
 * Internal dice roller for any side
 *
 * @param sides
 * @param times
 * @returns
 */
function dx(sides: number, times: number): number[] {
    const repeat = times === undefined ? 1 : times;
    const pool: number[] = [];
    for (let i = 0; i < repeat; i++) {
        pool.push(rnd(1, sides));
    }
    return pool;
}

/**
 * Roll d4 n Times and return the results of each roll
 *
 * @param times How many 4 sided die are rolled.
 * @returns
 */
export function d4(times?: number): number[] {
    return dx(4, times);
}

/**
 * Roll d6 n Times and return the results of each roll
 *
 * @param times How many 6 sided die are rolled.
 * @returns
 */
export function d6(times?: number): number[] {
    return dx(6, times);
}

/**
 * Roll d8 n Times and return the results of each roll
 *
 * @param times How many 4 sided die are rolled.
 * @returns
 */
export function d8(times?: number): number[] {
    return dx(8, times);
}

/**
 * Roll d10 n Times and return the results of each roll
 *
 * @param times How many 4 sided die are rolled.
 * @returns
 */
export function d10(times?: number): number[] {
    return dx(10, times);
}

/**
 * Roll d12 n Times and return the results of each roll
 *
 * @param times How many 4 sided die are rolled.
 * @returns
 */
export function d12(times?: number): number[] {
    return dx(12, times);
}

/**
 * Roll d20 n Times and return the results of each roll
 *
 * @param times How many 4 sided die are rolled.
 * @returns
 */
export function d20(times?: number): number[] {
    return dx(20, times);
}

/**
 * Roll d100 n Times and return the results of each roll
 *
 * @param times How many 4 sided die are rolled.
 * @returns
 */
export function d100(times?: number): number[] {
    return dx(100, times);
}

