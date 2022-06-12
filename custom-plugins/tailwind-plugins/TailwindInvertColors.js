const twColors = require("tailwindcss/colors");

const colorsToSkip = [
  "inherit",
  "current",
  "transparent",
  "lightBlue",
  "warmGray",
  "coolGray",
  "trueGray",
  "blueGray",
];

// Remove deprecated colors and static colors
const colors = twColors;
colorsToSkip.forEach(color => delete colors[color]);

/**
 * Reverse colors order :
 *
 * For each color: 50 becomes 900, 100 becomes 800, 200 becomes 700, ...
 * @type {typeof colors}
 */
const reversedColors = Object.fromEntries(
  Object.entries(colors).reduce((acc, [name, values]) => {
    const valuesReversed = [...Object.values(values)].reverse();

    return [
      ...acc,
      [
        name,
        Object.keys(values).reduce((acc, key, index) => {
          return { ...acc, [key]: valuesReversed[index] };
        }, {}),
      ],
    ];
  }, [])
  // }, [] as [string, any][])
);
reversedColors.white = "#000";
reversedColors.black = "#fff";

module.exports = {
  colors: colors,
  reversedColors: reversedColors,
};
