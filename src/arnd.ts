/**
 * Return a random value from the provided array
 *
 * @param arr array<T>
 */
 export function arnd<T>(arr: Array<T>): T {
    return arr[Math.floor(Math.random() * arr.length)];
}