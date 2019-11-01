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

export default function handleGetWeatherPromises(req, res, next) {
  const ipAddr = req.connection.remoteAddress;

  getLngLatFromIPAddr(ipAddr)
    .then(getCityFromLngLat)
    .then(getForecast)
    .then(transformForecast)
    .then(forecast => {
      res.status(200).json(forecast);
    })
    .catch(handleError);
}
