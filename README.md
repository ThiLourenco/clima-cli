## clima-cli

Node-CLI para exibir o clima atual de uma cidade em tempo real.

### Instalar dependências
`npm install`

### Instalação
Para instalação localmente e poder utilizar o comando no terminal, use o comando:
`npm link`

O comando `clima` vai estar disponível no terminal. Você pode usar o comando passando o nome da cidade:

`clima Rio de Janeiro`

O comando vai mostrar o clima tem tempo real da cidade:
``` 
Clima em Rio de Janeiro, RJ
    Temperatura: 32°
    Direção do vento: SW
    Velocidade do vento: 9.5 km/h
    Humidade: 44.9%
    Condição: Poucas nuvens
    Pressão atmosférica: 1012.2
    Sensação: 39°
```

### API Adivisor ClimaTempo
Esta ferramenta uma API do ClimaTempo para buscar as informações do clima da cidade. Ao ser executada na primeira vez , é necessário informar o token da API para poder usa-lá:
`clima rio de janeiro --token seu-app-token`

ou 

`clima rio de janeiro -t seu-app-token`

O token só precisa ser informado uma vez e ele será armazenado localmente. Se precisar atualizar o token, basta informá-lo novamente usando o mesmo parâmetro.

Vocẽ pode gerar aqui no site [climaTempo](https://advisor.climatempo.com.br/).