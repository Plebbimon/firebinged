import {ForestFire} from "../types";
import {months} from "../consts";

export function filterByMonth(data: ForestFire[], month: string) {
    return data.filter((fire) => fire.month === month);
}

export function filterLowestTemp(data: ForestFire[], month: string) {
    // filter by month
    const filtered = filterByMonth(data, month);
    // sort by temp
    const sorted = filtered.sort((a, b) => a.temp - b.temp);
    // return the first item
    return sorted[0]?.temp;
}

// Is this a total performance drain? Yes, probably. But it's a small dataset, and I'm not too worried about it.