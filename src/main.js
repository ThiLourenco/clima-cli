import { getCityID, getCityForecastById } from './utils/requests';

export default async function getForecast(cityName) {
  try {
    const cityId = await getCityID(cityName);
    const cityForecast = await getCityForecastById(cityId);
    const { name, state, temperature, wind_direction, wind_velocity, humidity, condition, pressure, sensation } = cityForecast;

    console.log(`
    Clima em ${name}, ${state}
      Temperatura: ${temperature}°
      Direção do vento: ${wind_direction}
      Velocidade do vento: ${wind_velocity} Km/h
      Humidade: ${humidity}%
      Condição: ${condition}
      Pressão atmosferica: ${pressure}
      Sensação: ${sensation}°
      `)
  } catch (error) {
    console.log(error.message);
  }
}