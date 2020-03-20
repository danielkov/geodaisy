export const toRadian = (value: number): number => (value * Math.PI) / 180;

export const EARTH_RADIUS_KM = 6371;

export const haversine = (
  lon1: number,
  lat1: number,
  lon2: number,
  lat2: number,
): number => {
  const dLat = toRadian(lat2 - lat1);
  const dLon = toRadian(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadian(lat1)) *
      Math.cos(toRadian(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS_KM * c;
};

export const distanceWithLatitude = (distance: number, elevation: number) =>
  Math.sqrt(distance ** 2 + elevation ** 2);

const KM_MILES = 0.621371;

const MILES_KM = 1 / KM_MILES;

const YARDS_METRES = 0.9144;

const METRES_YARDS = 1 / YARDS_METRES;

const INCH_CM = 2.54;

const CM_INCH = 1 / INCH_CM;

export const kmToMile = (km: number) => km * KM_MILES;

export const mileToKm = (miles: number) => miles * MILES_KM;

export const yardToMetre = (yards: number) => yards * YARDS_METRES;

export const metreToYard = (metres: number) => metres * METRES_YARDS;

export const inchToCm = (inches: number) => inches * INCH_CM;

export const cmToInch = (cm: number) => cm * CM_INCH;
