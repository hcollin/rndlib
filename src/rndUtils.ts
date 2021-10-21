
// export function fnreps<T>(fn: () => T, maxRepeats: number) {
//     const reps = rnd(0, maxRepeats);
//     const res: T[] = [];
//     while (res.length < reps) {
//         res.push(fn());
//     }
//     return res;
// }


// export function reps(times: number, fn: () => void): void {
//     for (let i = 0; i < times; i++) {
//         fn();
//     }
// }

// const Characters: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".split("");

// export function rndId(): string {
//     const ts = Date.now();
//     return `${arnd(Characters)}${arnd(Characters)}${arnd(Characters)}${arnd(Characters)}${arnd(
//         Characters
//     )}-${ts}-${arnd(Characters)}${arnd(Characters)}${arnd(Characters)}${arnd(Characters)}`;
// }
