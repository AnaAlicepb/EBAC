Projeto com SASS
Este projeto é um exemplo de utilização de SASS para estilização de um formulário simples em HTML.

Estrutura do Projeto
O projeto consiste em três arquivos principais:

index.html: Contém a estrutura básica do formulário HTML.
main.scss: Arquivo principal onde estão definidos os estilos usando SASS.
variaveis.scss e reset.scss: Arquivos auxiliares que contêm variáveis de estilos e reset de estilos, respectivamente.
Estrutura de Arquivos

├── build
├── node_modules
├── source
│ ├── config
│ │ ├── reset.scss
│ │ └── variaveis.scss
│ └── main.scss
├── .gitignore
├── index.html
├── package-lock.json
└── package.json
Pré-requisitos
Antes de executar este projeto, é necessário ter o SASS instalado. Você pode instalar o SASS utilizando o npm:

npm install -g sass
Execução do Projeto
Clone este repositório:

git clone https://github.com/seu-usuario/seu-projeto.git
Entre no diretório do projeto:
cd seu-projeto
Compile os arquivos Sass para CSS:
sass sass/main.scss build/main.css
Abra o arquivo index.html no seu navegador.
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

Licença
Este projeto está sob a [Nome da Licença]. Veja o arquivo LICENSE.md para mais detalhes.