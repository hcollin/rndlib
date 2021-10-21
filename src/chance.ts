/**
 * Returns true on a percentage chance provided.
 *
 * @param percentage number
 * @returns
 */
export function chance(percentage: number) {
    if(percentage < 0 || percentage > 100) throw new Error(`Invalid value ${percentage}. Valid range is between 0-100`);
    const d100Roll: number = Math.floor(Math.random() * 100);
    if (percentage > d100Roll) {
        return true;
    }
    return false;
}
