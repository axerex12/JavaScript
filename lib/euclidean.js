/**
 *
 * @param {*} alkupiste number[]
 * @param {*} loppupiste number[]
 * @returns number
 */

function distance(alkupiste, loppupiste) {
  return Math.sqrt(
    (loppupiste[0] - alkupiste[0]) ** 2 + (loppupiste[1] - alkupiste[1]) ** 2
  );
}
