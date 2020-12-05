import program from 'commander';
import { version } from '../package.json';
import getForecast from './main';
import { saveApiToken } from './utils/apiToken';

export function init(args) {
  program
      .version(version, '-v, --version', 'Mostrar versão da ferramenta')
      .option('-t --token [token]', 'Advisor ClimaTempo API token')
      .arguments('<cityName...') //... para juntar caso for Cabo Frio, como é um array ira juntar CaboFrio para uma city só
      .description('Exibe o clima em tempo real de uma cidade')
      .action(async (cityName) => {
        if (program.token) {
          await saveApiToken(program.token);
        }

        getForecast(cityName.join(' '));
      })
      .on('--help', () => {
        console.log();
        console.log('Exemplos');
        console.log('$ clima cabo frio');
        console.log('$ clima rio de janeiro');
      })

      program.parse(args);
}