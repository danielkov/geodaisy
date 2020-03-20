import {
  kmToMile,
  mileToKm,
  yardToMetre,
  metreToYard,
  inchToCm,
  cmToInch,
} from '../src/index';

describe(`convert between units`, () => {
  describe(`exports a kmToMiles function, that`, () => {
    it(`given an input of 1 kilometer, returns the amount in miles: 0.621371`, () => {
      expect(kmToMile(1)).toBe(0.621371);
    });

    it(`given an input of 12 kilometers, returns the amount in miles: 7.4564520000000005`, () => {
      expect(kmToMile(12)).toBe(7.4564520000000005);
    });

    it(`given an input of 0.3 kilometers, returns the amount in miles: 0.1864113`, () => {
      expect(kmToMile(0.3)).toBe(0.1864113);
    });

    it(`given an input of 8270 kilometers, returns the amount in miles: 5138.73817`, () => {
      expect(kmToMile(8270)).toBe(5138.73817);
    });

    it(`given an input of 130 kilometers, returns the amount in miles: 80.77823000000001`, () => {
      expect(kmToMile(130)).toBe(80.77823000000001);
    });
  });

  describe(`exports a milesToKm function, that`, () => {
    it(`given an input of 1 mile, returns the amount in kms: 0.621371`, () => {
      expect(mileToKm(1)).toBe(1.6093444978925633);
    });

    it(`given an input of 12 miles, returns the amount in kms: 7.4564520000000005`, () => {
      expect(mileToKm(12)).toBe(19.31213397471076);
    });

    it(`given an input of 0.3 miles, returns the amount in kms: 0.1864113`, () => {
      expect(mileToKm(0.3)).toBe(0.482803349367769);
    });

    it(`given an input of 8270 miles, returns the amount in kms: 5138.73817`, () => {
      expect(mileToKm(8270)).toBe(13309.278997571499);
    });

    it(`given an input of 130 miles, returns the amount in kms: 80.77823000000001`, () => {
      expect(mileToKm(130)).toBe(209.21478472603323);
    });
  });

  describe(`exports a yardToMetre function, that`, () => {
    it(`given an input of 1 yard, returns the amount in metre: 0.621371`, () => {
      expect(yardToMetre(1)).toBe(0.9144);
    });

    it(`given an input of 12 yard, returns the amount in metre: 7.4564520000000005`, () => {
      expect(yardToMetre(12)).toBe(10.9728);
    });

    it(`given an input of 0.3 yard, returns the amount in metre: 0.1864113`, () => {
      expect(yardToMetre(0.3)).toBe(0.27432);
    });

    it(`given an input of 8270 yard, returns the amount in metre: 5138.73817`, () => {
      expect(yardToMetre(8270)).toBe(7562.088);
    });

    it(`given an input of 130 yard, returns the amount in metre: 80.77823000000001`, () => {
      expect(yardToMetre(130)).toBe(118.872);
    });
  });

  describe(`exports a metreToYard function, that`, () => {
    it(`given an input of 1 metre, returns the amount in yard: 0.621371`, () => {
      expect(metreToYard(1)).toBe(1.0936132983377078);
    });

    it(`given an input of 12 metre, returns the amount in yard: 7.4564520000000005`, () => {
      expect(metreToYard(12)).toBe(13.123359580052494);
    });

    it(`given an input of 0.3 metre, returns the amount in yard: 0.1864113`, () => {
      expect(metreToYard(0.3)).toBe(0.32808398950131235);
    });

    it(`given an input of 8270 metre, returns the amount in yard: 5138.73817`, () => {
      expect(metreToYard(8270)).toBe(9044.181977252843);
    });

    it(`given an input of 130 metre, returns the amount in yard: 80.77823000000001`, () => {
      expect(metreToYard(130)).toBe(142.16972878390203);
    });
  });

  describe(`exports a inchToCm function, that`, () => {
    it(`given an input of 1 inch, returns the amount in cm: 0.621371`, () => {
      expect(inchToCm(1)).toBe(2.54);
    });

    it(`given an input of 12 inch, returns the amount in cm: 7.4564520000000005`, () => {
      expect(inchToCm(12)).toBe(30.48);
    });

    it(`given an input of 0.3 inch, returns the amount in cm: 0.1864113`, () => {
      expect(inchToCm(0.3)).toBe(0.762);
    });

    it(`given an input of 8270 inch, returns the amount in cm: 5138.73817`, () => {
      expect(inchToCm(8270)).toBe(21005.8);
    });

    it(`given an input of 130 inch, returns the amount in cm: 80.77823000000001`, () => {
      expect(inchToCm(130)).toBe(330.2);
    });
  });

  describe(`exports a cmToInch function, that`, () => {
    it(`given an input of 1 cm, returns the amount in inch: 0.621371`, () => {
      expect(cmToInch(1)).toBe(0.39370078740157477);
    });

    it(`given an input of 12 cm, returns the amount in inch: 7.4564520000000005`, () => {
      expect(cmToInch(12)).toBe(4.724409448818897);
    });

    it(`given an input of 0.3 cm, returns the amount in inch: 0.1864113`, () => {
      expect(cmToInch(0.3)).toBe(0.11811023622047243);
    });

    it(`given an input of 8270 cm, returns the amount in inch: 5138.73817`, () => {
      expect(cmToInch(8270)).toBe(3255.905511811023);
    });

    it(`given an input of 130 cm, returns the amount in inch: 80.77823000000001`, () => {
      expect(cmToInch(130)).toBe(51.18110236220472);
    });
  });
});
