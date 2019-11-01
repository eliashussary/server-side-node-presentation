import faker from "faker";

const getMockCallback = dataGenerator => (val, cb) => {
  setTimeout(() => {
    cb(null, dataGenerator());
  }, 50);
};

const getMockPromise = dataGenerator => val =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataGenerator());
    }, 50);
  });

const fakeLngLat = () => [faker.address.latitude(), faker.address.longitude()];

const fakeForecast = () => ({
  temperature: faker.random.number(),
  city: faker.address.city(),
  forecast: [
    {
      high: faker.random.number(),
      low: faker.random.number(),
      date: faker.date.future()
    },
    {
      high: faker.random.number(),
      low: faker.random.number(),
      date: faker.date.future()
    },
    {
      high: faker.random.number(),
      low: faker.random.number(),
      date: faker.date.future()
    }
  ]
});
const callbacks = {
  getLngLatFromIPAddr: getMockCallback(fakeLngLat),
  getCityFromLngLat: getMockCallback(faker.address.city),
  getForecast: getMockCallback(fakeForecast),
  transformForecast: getMockCallback(fakeForecast)
};

const promises = {
  getLngLatFromIPAddr: getMockPromise(fakeLngLat),
  getCityFromLngLat: getMockPromise(faker.address.city),
  getForecast: getMockPromise(fakeForecast),
  transformForecast: getMockPromise(fakeForecast)
};

export { callbacks, promises };
