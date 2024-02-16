Adicionando Node no projeto com typescript
yarn add typescript ts-node-dev @types/node -D

node build/server.js

yarn tsc --init --rootDir src --outdir build \ 
--esModuleInterop --resolveJsonModule --lib es6 \ 
--module commonjs --allowJs true --noImplicitAny

yarn tsc --init
Instalar o typescript e inicializar,

-rootDir src
Define o diretório root src

--outdir build
Diretorio para criar o build

--esModuleInterop
utilizado no sistema de módulo(aplicativos node), então deve ser definido como true

--lib es6
ulitizando o lib6

--resolveJsonModule
Permite que typescript utilize o JSON

--module commonjs
Nosso mudulo padrão do node

--allowJs true
Defeinimos que podemos utilizar JavasCript

Depois de configurar o ORM, vamos conutilizar o comando abaixo para criar as migrations

yarn typeorm migration:create -n Create

E agora utilizar o comando abaixo para rodar a criação das mesmas

yarn typeorm migration:run  


adicionar Jest
yarn add -D jest @types/jest

rodar jest para configurar
yarn jest --init


Depois de configurado rodar

yarn dev
