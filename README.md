![Ilustração do Adonis 5](https://res.cloudinary.com/mezie/image/upload/v1588872552/AdonisJS_5_from_scratch_qepsja.png)
<br/>

# CRUD Adonis 5 Preview

No dia 1 de março foi anunciado no blog do AdonisJS um preview de sua versão 5, juntamente com seu novo site, este preview já está disponível para uso e sua documentação pode ser encontrada no [site oficial](https://preview.adonisjs.com/). Um ponto a ser destacado é que ser uma versão preview não quer dizer que seja problemática, apenas significa que nem todas as funcionalidades e integrações estão implementadas no momento, mas serão, com o passar do tempo, até o lançamento final.

## ⛰ Introdução

AdonisJS é um framework NodeJS robusto que vem com diversas funcionalidades prontas, dentre elas estão: autenticação, envio de e-mail, ORM, etc. Já tem seu lugar garantido no mercado, visto que segue a ideia de frameworks já consolidados no mercado como: Laravel, Rails ou Django. Ele vem com uma estrutura pronta, definindo um padrão de código para um trabalho em equipe, por exemplo.

Este projeto teve o objetivo de ser um teste da nova versão do Adonis e sua integração com o TypeScript, nele construí um CRUD simples de usuários. Não houve muitas mudanças em relação ao funcionamento geral do framework, a criação de rotas e controllers continua muito simplificada e praticamente não mudou desde a versão passada, por exemplo.

Neste CRUD as senhas são armazenadas como hash encriptados no banco de dados com base na própria senha do usuário utilizando um [hook](https://preview.adonisjs.com/guides/models/hooks) do AdonisJS, incluí também um pequeno sistema de login com usuário e senha que compara a senha encriptada com a senha enviada pelo usuário e verifica se é válida.

## 💯 Principais novidades:

- Integração completa com TypeScript
- Fim da CLI do Adonis (um projeto Adonis agora é iniciado com npx ou yarn create)
- Melhoras na performance (chegando a ultrapassar o fastify em velocidade)
- ESM imports como método de import padrão
- Adição de Health Checks

E muitas outras novidades, caso queira saber todas, visite os links no tópico "Fique atualizado"

## 🎸 Tecnologias usadas: 

#### - Linguagem: TypeScript
- AdonisJS (Framework robusto de NodeJS, similar a frameworks já consolidados no mercado)
- SQLite3 (Banco de dados SQL embutido)

## 💾 Instalação
Para baixar as dependências do projeto apenas rode o comando:

    $ npm install
    
## 💿 Rodando o App
Para iniciar o app, apenas utilize o comando:

    $ node ace serve --watch

## ❗️ Fique atualizado
Abaixo estão as possíveis formas de sempre se manter atualizado em relação às novidades do AdonisJS versão 5

Site oficial: https://preview.adonisjs.com/ <br>
Blog Adonis: https://blog.adonisjs.com/introducing-adonisjs-v5/ <br>
Roadmap no Trello: https://trello.com/b/3klaHbfP/adonisjs-roadmap-2020 <br>

## 💻 Conhecimentos adquiridos

- Utilização da nova versão do AdonisJS
- Uso do Lucid
- Aprendizado do pattern "Active Records"
