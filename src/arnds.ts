import { arnd } from "./arnd";

/**
 * Return a random values from the provided array
 *
 * @param arr array<T>
 * @param amout number Amount of values to return
 * @param unique boolean Provided values must be unique
 */
 export function arnds<T>(arr: Array<T>, amount: number, unique = false): T[] {
    if (unique && arr.length <= amount) {
        return [...arr];
    }
    const res: T[] = [];
    if (!unique) {
        for (let i: number = 0; i < amount; i++) {
            if (!unique) {
                res.push(arnd<T>(arr));
            }
        }
    } else {
        while (res.length < amount) {
            const val: T = arnd<T>(arr);
            if (!res.includes(val)) {
                res.push(val);
            }
        }
    }

    return res;
}