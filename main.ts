export enum Action {
    transact,
    doNothing
}
function numberComparator(x:number,y:number)
{
    return x < y ? 1 : -1;
}
export function percentile(numbers: number[],percent:number): number
{
    // First sort the list.
    const sorted = numbers.sort(numberComparator);
    // Get the top (1 - percent) % of sorted.
    const index = (100 - percent) * numbers.length / 100;
    const element = sorted[index];
    return element;
}

export default function transactOrDoNothing(exchanges: number[][],confidenceInterval:number,profit=0.01): Action
{
    return Action.doNothing;
}