# ThePomodoro

## Instalação 
### Setup do postgres no docker
```shell
docker pull postgres 
docker run -d -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=postgres postgres 
```
### Ligar à base de dados no heroku
```shell
psql -h ec2-54-247-158-179.eu-west-1.compute.amazonaws.com -p 5432 -d dadih75qcq1ih -U ylhmlqpfkqbwxu
```
### Introduzir a password
```shell
86acc7cb14978bd57697eaa59022eec26a08f1930662da86502de3e39fd30e0d
```

