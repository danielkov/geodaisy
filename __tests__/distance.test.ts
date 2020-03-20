import { haversine, distanceWithLatitude } from '../src/index';

describe(`distance formula functions:`, () => {
  describe(`haversine: given two pairs of longitude and latitude`, () => {
    const atlanta = {
      latitude: 33.749,
      longitude: -84.388,
    };

    const london = {
      latitude: 51.5074,
      longitude: -0.1278,
    };

    const budapest = {
      longitude: 47.1625,
      latitude: 19.0402,
    };

    const paris = {
      longitude: 48.8566,
      latitude: 2.3522,
    };
    it(`returns the distance between Atlanta and London: 6769.949658450232`, () => {
      expect(
        haversine(
          atlanta.longitude,
          atlanta.latitude,
          london.longitude,
          london.latitude,
        ),
      ).toBe(6769.949658450232);
    });

    it(`returns the distance between Budapest and London: 5462.42749441401`, () => {
      expect(
        haversine(
          budapest.longitude,
          budapest.latitude,
          london.longitude,
          london.latitude,
        ),
      ).toBe(5462.42749441401);
    });

    it(`returns the distance between Atlanta and Paris: 13690.189226925422`, () => {
      expect(
        haversine(
          atlanta.longitude,
          atlanta.latitude,
          paris.longitude,
          paris.latitude,
        ),
      ).toBe(13690.189226925422);
    });

    it(`returns the distance between Paris and Budapest: 1864.7582060663146`, () => {
      expect(
        haversine(
          paris.longitude,
          paris.latitude,
          budapest.longitude,
          budapest.latitude,
        ),
      ).toBe(1864.7582060663146);
    });
  });

  describe(`distanceWithLatitude: factor in change in latitude in distance`, () => {
    describe(`given a distance and a change in altitude`, () => {
      it(`of 200m and 12m, returns real distance`, () => {
        expect(distanceWithLatitude(200, 12)).toBe(200.3596765818911);
      });

      it(`of 1km and 2m, returns real distance`, () => {
        expect(distanceWithLatitude(1000, 2)).toBe(1000.001999998);
      });

      it(`of 1km and 1km, returns real distance`, () => {
        expect(distanceWithLatitude(1000, 1000)).toBe(1414.213562373095);
      });

      it(`of 13.8km and 1,120m, returns real distance (Alpe d'Huez)`, () => {
        expect(distanceWithLatitude(13800, 1120)).toBe(13845.374678931588);
      });
    });
  });
});
