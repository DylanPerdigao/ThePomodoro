# ThePomodoro

## Instalação 
### Base de Dados
#### Setup do postgres no docker
```shell
docker pull postgres 
docker run -d -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=*** postgres 
```
#### Ligar à base de dados no heroku
```shell
psql -h ec2-54-247-158-179.eu-west-1.compute.amazonaws.com -p 5432 -d dadih75qcq1ih -U ylhmlqpfkqbwxu
```
#### Introduzir a password
```shell
***
```
### React
```
npm install react-router-dom --save
```
## Run
```shell
cd the-pomodoro
npm start
```

## Deploy
```shell
npm run build
```

