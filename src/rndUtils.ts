
export function fnreps<T>(fn: () => T, maxRepeats: number) {
    const reps = rnd(0, maxRepeats);
    const res: T[] = [];
    while (res.length < reps) {
        res.push(fn());
    }
    return res;
}


export function grnd(mid: number, steps: number, depth: number, minCut?: number, maxCut?: number): number {
    function insideCut(val: number) {
        if (typeof minCut === "number" && val < minCut) return false;
        if (typeof maxCut === "number" && val > maxCut) return false;
        return true;
    }

    let res = mid;

    const maxDepth = depth * 2;
    const mods: Array<number | string> = [];
    for (let i = 0; i < steps; i++) {
        const mod = rnd(0, maxDepth) - depth;
        mods.push(mod);

        if (insideCut(res + mod)) {
            res += mod;
        }

        // if(typeof maxCut === "number" && res > maxCut) {
        //     // res -= mod;
        //     res = Number(mods[mods.length -1])
        //     mods.push(`>Cut to ${res}`);
        // }
        // if(typeof minCut === "number" && res < minCut) {
        //     res += mod;
        //     mods.push(`<Cut to ${res}`);
        // }
    }

    // if(minCut !== undefined && res < minCut) {
    //     res += rnd(0, depth);
    // }

    // if(maxCut !== undefined && res > maxCut) {
    //     res -= rnd(0, depth);
    //     // res = maxCut;
    // }

    if (typeof minCut === "number" && res < minCut) console.log(mods);
    return res;
}

export function reps(times: number, fn: () => void): void {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

const Characters: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".split("");

export function rndId(): string {
    const ts = Date.now();
    return `${arnd(Characters)}${arnd(Characters)}${arnd(Characters)}${arnd(Characters)}${arnd(
        Characters
    )}-${ts}-${arnd(Characters)}${arnd(Characters)}${arnd(Characters)}${arnd(Characters)}`;
}
