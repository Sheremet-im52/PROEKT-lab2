const {
  weekdayGenerator,
  consumeWithTimeout
} = require("../library/generator");

const gen = weekdayGenerator();
consumeWithTimeout(gen, 10);