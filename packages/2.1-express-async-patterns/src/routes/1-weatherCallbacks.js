import { callbacks } from "../services/weatherApi";
const {
  getLngLatFromIPAddr,
  getCityFromLngLat,
  getForecast,
  transformForecast
} = callbacks;

function handleError(err, res) {
  res.status(500).json(err);
}

export default function handleGetWeatherCallbacks(req, res, next) {
  const ipAddr = req.connection.remoteAddress;

  getLngLatFromIPAddr(ipAddr, function(err, lngLat) {
    if (err) {
      return handleError(err);
    }
    getCityFromLngLat(lngLat, function(err, city) {
      if (err) {
        return handleError(err);
      }
      getForecast(city, function(err, forecast) {
        if (err) {
          return handleError(err);
        }
        transformForecast(forecast, function(err, transformedForecast) {
          if (err) {
            return handleError(err);
          }

          return res.status(200).json(transformedForecast);
        });
      });
    });
  });
}
