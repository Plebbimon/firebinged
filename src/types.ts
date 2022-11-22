export interface ForestFire {
  DC: number;
  DMC: number;
  FFMC: number;
  ISI: number;
  RH: number;
  X: number;
  Y: number;
  area: number;
  day: string;
  month: string;
  rain: number;
  temp: number;
  wind: number;
}

export interface ForestFireWithId extends ForestFire {
  id: string;
}

export interface LowestTempChartProps {
  data: ForestFire[];
}

export interface FrequencyChartProps {
  data: ForestFire[];
}

export interface WindChartProps {
  data: ForestFire[];
}

export interface HumidityChartProps {
  data: ForestFire[];
}
