export const breakpoints = {
  // 36em => 36 * 16px = 576px
  phone: "36em",
  // 48em => 48 * 16px = 768px
  tablet_portrait: "48em",
  // 56.25em => 48 * 16px = 900px
  tablet_landscape: "56.25em",
  // 64em => 64 * 16px = 1024px
  desktop: "64em",
  // 75em => 75 * 16px = 1200px
  desktop_big: "75em",
  // 90em => 90 * 16px = 1440px
  desktop_huge: "90em",
};

/**
 * Helper for defining media queries within styled components.
 * Usage example:
 * ```
 * styled.div`
 *    background-color: blue;
 *
 *    ${responsive.phone} {
 *      background-color: red;
 *    }
 * `
 *```
 * is equivalent to:
 *
 * ```
 * styled.div`
 *    background-color: blue;
 *
 *    @media only screen and (max-width: 36em) {
 *      background-color: red;
 *    }
 * `
 *```
 * */
export const responsive = Object.freeze(
  Object.keys(breakpoints).reduce((responsiveEntries, key) => {
    return {
      ...responsiveEntries,
      [key]: `@media only screen and (max-width: ${breakpoints[key as keyof typeof breakpoints]})`,
    };
  }, {} as { [key in keyof typeof breakpoints]: string })
);
