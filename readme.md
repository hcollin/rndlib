# RNDLIB

Randomization utils for simpler usage.

## Mission

To create a library of simple to use randomization functions. Not the fastest, not the fanciests, but good enough for most use cases and easy to understand.

## Basic Randomizers

These functions are easy to use and understand will cover most use cases.

### rnd()

Used to pick to random number between two numbers:

```ts
// Generate a random number between 1 and 10
const result: number = rnd(1, 10);

// Generate a random number between 1 and 10
const result: number = rnd(10);
```

### chance()

Succeed or fail based on a precentage

```ts
// 50% chance to return true or false
const willWork: boolean = chance(50);

// 10% chance of succcess
const liveto100: boolean = chance(10);
```

### padrnd()

Return a string with padded zeros. The length of the pad is equal to the length of the max value.

```ts
// Return a string between 001-100
const value: string = padrnd(1, 100);

// Return a string between 01-10
const value: string = padrnd(10);
```

### nrnd()

Return random value between min and max but the results are normalized. The higher the ramp value is (between 0-10, default is 5), more skewed the results are towards midrange (gauss anyone?). 0 is same as **rnd()**.

```ts
// Return a value between 1 and 100, where values closer to 50 are much more common.
const val: number = nrnd(1, 100);

// When ramp value is increased even more values are closer to 50
const val: number = nrnd(1, 100, 8);

// When ramp value goes down the curve becomes more flat
const val: number = nrd(1, 100, 3);
```

## Array randomizers

Functions to be used with Arrays

### arnd()

Return a random value from the Array.

```ts
const val: string = arnd<string>(["A", "B", "C", "D"]);
```

### arnds()

Return one or more values from the array. This can be set to only return a single value once.

```ts
// Return two values from array. Valid responses are for example ["A", "C"] or ["B", "B"]
const vals: string[] = arnds(["A", "B", "C", "D"], 2);

// Return 3 unique values from the provided array.
const vals: number[] = arnds([1, 2, 3, 4, 5, 6], 3, true);
```

### shuffle()

Return a shallow copy the provided array where the value order has been randomized.

```ts
// Same values, new order
const arr: number[] = shuffle<number>([1, 2, 3, 4, 5, 6]);

// This is only a shallow copy so objects in the array are not copied
const arr: MyData = shuffle<MyData>([{ a: "foo" }, { a: "bar" }]);
```

## Dice functions

Ready to run dice functions with familiar names!

### Simple dice functions

All the usual suspects have their own functions. Each function returns an array of results. One result for each die rolled.

```ts
import { Dice } from "rndlib";

// Return a random value between 1 and 6
const val: number[] = Dice.d6();

// Roll 2 ten sided dice
const val: number[] = Dice.d10(2);
```

### roll()

Roll function is used to convert string based dice rolls like 2d6 and 3d4+2 to results directly. **roll()** funciton returns an interface that has thee values in it:

-   sum: contains the sum of all the dice rolls and the added bonus.
-   rolls: is an array of roll results, one number for each die
-   dieType: contains the die type as a number, so d6 would have 6 and d20 would contain 20.

```ts
// This will roll two 6 sided dice and sum their results together resulting a value between 2 and 12.
const val: DiceResults = Dice.roll("2d6");

// This will return a sum value between 6 and 33.
const val: DiceResults = Dice.roll("3d10+3");

// This will roll 3 six sided dice, sum their result total and then substract 2 from it resulting in a value between 1 and 16.
const val: DiceResults = Dice.roll("3d6-2");
```

## Utility functions

Collection of functions to handle randomized results

### successPool()

Get the number of results that is equal or higher than the threshold value. Values be provided as an array of numbers or as a **Diceresult**. If **Diceresult** is used all bonus modifiers are ignored.

```ts
// All values of 6 or more are successes
const successesA: number = successPool(6, d10(7));
const successesB: number = successPool(6, Dice.roll("7d10"));
const successesC: number = successPool(6, [1, 8, 6, 3, 9, 4, 6]); // Will return 4
```

### sumPool()

Will return a sum of array of numbers or a **DiceResult**. When **DiceResult** is provided this does not take into account any modifiers, making is a useful tool for gettin sum of actual results without bonuses.

```ts
const totalA: number = sumPool([1, 2, 3, 4]); // result is 10
const totalB: number = sumPool(d6(4));
const totalC: number = sumPool(Dice.roll("4d6"));
const totalD: number = sumPool(Dice.roll("2d6+2")); // value is between 2 and 12 not 4 and 14.
```
