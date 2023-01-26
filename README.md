# O que é SOLID?
## **S**ingle responsibility principle.
Determina que cada classe e cada arquivo em uma aplicação deve ter uma única responsabilidade.

## **O**pen closed principle.
Determina que uma classe deve ser aberta para extensões, mas não para modificações.

## **L**iskov substitution principle.
Defende que podemos pegar os "Drivers de Upload", ou seja, s3, cloud storage e substituir entre eles a classe que faz upload de maneira geral.

As classes derivadas devem poder substituir suas classes bases.
## **I**nterface Segregation principle.
Muitas interfaces específicas são melhores do que uma interface geral.

## **D**ependency Inversion principle.
Dependa de abstrações e não de implementações.