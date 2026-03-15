function* weekdayGenerator() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let index = 0;
  let counter = 1;

  while (true) {
    yield { count: counter, day: days[index] };
    counter++;
    index = (index + 1) % days.length;
  }
}

function consumeWithTimeout(iterator, timeoutSeconds) {
  const startTime = Date.now();

  const interval = setInterval(() => {
    if (Date.now() - startTime >= timeoutSeconds * 1000) {
      clearInterval(interval);
      console.log("Finished by timeout");
      return;
    }

    const { value } = iterator.next();
    console.log(`Iteration ${value.count}: ${value.day}`);
  }, 1000);
}

const gen = weekdayGenerator();
consumeWithTimeout(gen, 10);