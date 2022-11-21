import {ForestFire} from "../types";


export function filterByMonth(data: ForestFire[], month: string) {
    return data.filter((fire) => fire.month === month);
}

// Is this a total performance drain? Yes, probably. But it's a small dataset, and I'm not too worried about it.