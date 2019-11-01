import { promises } from "../services/weatherApi";
const {
  getLngLatFromIPAddr,
  getCityFromLngLat,
  getForecast,
  transformForecast
} = promises;

function handleError(err, res) {
  res.status(500).json(err);
}

export default async function handleGetWeatherAsyncAwait(req, res, next) {
  const ipAddr = req.connection.remoteAddress;

  try {
    const lngLat = await getLngLatFromIPAddr(ipAddr);
    const city = await getCityFromLngLat(lngLat);
    const forecast = await getForecast(city);
    const transformedForecast = await transformForecast(forecast);

    return res.status(200).json(transformedForecast);
  } catch (err) {
    return handleError(err);
  }
}
