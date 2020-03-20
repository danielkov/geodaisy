# 🌎Geodaisy - simple geodesic utilities for NodeJS and Web

## Get started

```bash
npm install geodaisy
```

Usage in JavaScript or TypeScript (typings are available):

### Distance utilities - Haversine

Uses the [Haversine Formula](https://en.wikipedia.org/wiki/Haversine_formula) to calculate the distance between two earthly points of coordinates.

```ts
import { haversine } from 'geodaisy';

const atlanta = {
  latitude: 33.749,
  longitude: -84.388,
};

const london = {
  latitude: 51.5074,
  longitude: -0.1278,
};

const distance = haversine(
  atlanta.longitude,
  atlanta.latitude,
  london.longitude,
  london.latitude,
);

console.log(distance); // > 6769.949658450232
```

### Distance utilities - distanceWithLatitude

Given a distance as a number (this formula does not care about units) and the distance between the elevation change between two points - calculates the real distance between the two points in a straight line, e.g.:

```ts
import { distanceWithLatitude } from 'geodaisy';

const distance = 13800; // m
const elevation = 1120; // m

const realDistance = distanceWithLatitude(distance, elevation);

console.log(realDistance); // > 13845.374678931588
```

### Conversion utilities

The following conversion utilities are also available:

```ts
import {
  kmToMile,
  mileToKm,
  yardToMetre,
  metreToYard,
  inchToCm,
  cmToInch,
} from 'geodaisy';

console.log(kmToMile(1)); // > 0.621371
console.log(mileToKm(1)); // > 1.6093444978925633
console.log(yardToMetre(1)); // > 0.9144
console.log(metreToYard(1)); // > 1.0936132983377078
console.log(inchToCm(1)); // > 2.54
console.log(cmToInch(1)); // > 0.39370078740157477
```

### Missing features

The following features I'd love to have in this library but just don't have the time to implement yet. If you'd like to help, feel free to contribute!

- [ ] Bearing calculation
- [ ] Destination point calculation
- [ ] Intersection calculation
- [ ] Path finding
- [ ] Closest point to the poles
- [ ] Rhumb lines
- [ ] Vincenty's formula
