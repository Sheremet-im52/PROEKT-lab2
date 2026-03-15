const { weekdayGenerator } = require("../library/generator");
const gen = weekdayGenerator();
consumeWithTimeout(gen, 10);