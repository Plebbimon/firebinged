import { ForestFire } from "../types";
import { months } from "../consts";

export function filterByMonth(data: ForestFire[], month: string) {
  return data.filter((fire) => fire.month === month);
}

// TEMPERATURE FILTERS

export function filterLowestTemp(data: ForestFire[], month: string) {
  const filtered = filterByMonth(data, month);
  const sorted = filtered.sort((a, b) => a.temp - b.temp);
  return sorted[0]?.temp;
}

export function filterAverageTemp(data: ForestFire[], month: string) {
  const filtered = filterByMonth(data, month);
  const total = filtered.reduce((acc, curr) => acc + curr.temp, 0);
  return total / filtered.length;
}

export function filterHighestTemp(data: ForestFire[], month: string) {
  const filtered = filterByMonth(data, month);
  const sorted = filtered.sort((a, b) => b.temp - a.temp);
  return sorted[0]?.temp;
}

// HUMIDITY FILTERS

export function filterLowestHumidity(data: ForestFire[], month: string) {
  const filtered = filterByMonth(data, month);
  const sorted = filtered.sort((a, b) => a.RH - b.RH);
  return sorted[0]?.RH;
}

export function filterAverageHumidity(data: ForestFire[], month: string) {
  const filtered = filterByMonth(data, month);
  const total = filtered.reduce((acc, curr) => acc + curr.RH, 0);
  return total / filtered.length;
}

export function filterHighestHumidity(data: ForestFire[], month: string) {
  const filtered = filterByMonth(data, month);
  const sorted = filtered.sort((a, b) => b.RH - a.RH);
  return sorted[0]?.RH;
}

// WIND FILTERS

export function filterAverageWind(data: ForestFire[], month: string) {
  const filtered = filterByMonth(data, month);
  const total = filtered.reduce((acc, curr) => acc + curr.wind, 0);
  return total / filtered.length;
}

// Is this a total performance drain? Yes, probably. But it's a small dataset, and I'm not too worried about it.
