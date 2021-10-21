import { rnd } from "./rnd";
import { arnd } from "./arnd";
import { nrnd } from "./nrnd";
import { shuffle } from "./shuffle";
import { chance } from "./chance";
import { d10, d100, d12, d20, d4, d6, d8, DiceResults, roll } from "./dice";
import { padrnd } from "./padrnd";
import { arnds } from "./arnds";

interface DiceFns {
    d4: (times?: number) => number[];
    d6: (times?: number) => number[];
    d8: (times?: number) => number[];
    d10: (times?: number) => number[];
    d12: (times?: number) => number[];
    d20: (times?: number) => number[];
    d100: (times?: number) => number[];
    roll: (diceString: string) => DiceResults;
}

const dice: DiceFns = {
    d4,
    d6,
    d8,
    d10,
    d12,
    d20,
    d100,
    roll,
};

export { rnd, arnd, arnds, nrnd, shuffle, chance, padrnd, dice as Dice };
