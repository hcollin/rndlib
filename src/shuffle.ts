import { rnd } from "./rnd";

/**
 * Return a shallow copy the provided array and shuffle its contents.
 *
 * @param Array<T>
 * @returns Array<T>
 */
export function shuffle<T>(arr: T[]): T[] {
    // const maxLen = arr.length;
    const copyArr = [...arr];
    const newArr: T[] = [];

    while (copyArr.length > 0) {
        const ind = rnd(0, copyArr.length - 1);
        newArr.push(copyArr.splice(ind, 1)[0]);
    }

    return newArr;
}
