import { ForestFire } from "../types";
import { months } from "../consts";

export function filterByMonth(data: ForestFire[], month: string) {
  return data.filter((fire) => fire.month === month);
}

export function filterAverageVariable(
  data: ForestFire[],
  variable: "temp" | "RH" | "wind" | "area" | "rain",
  month: string
) {
  const filtered = filterByMonth(data, month);
  const total = filtered.reduce((acc, curr) => acc + curr[variable], 0);
  return total / filtered.length;
}

export function filterHighestVariable(
  data: ForestFire[],
  variable: "temp" | "RH" | "wind" | "area" | "rain",
  month: string
) {
  const filtered = filterByMonth(data, month);
  const sorted = filtered.sort((a, b) => b[variable] - a[variable]);
  return sorted[0]?.[variable];
}

export function filterLowestVariable(
  data: ForestFire[],
  variable: "temp" | "RH" | "wind" | "area" | "rain",
  month: string
) {
  const filtered = filterByMonth(data, month);
  const sorted = filtered.sort((a, b) => a[variable] - b[variable]);
  return sorted[0]?.[variable];
}

// Is this a total performance drain? Yes, probably. But it's a small dataset, and I'm not too worried about it.
