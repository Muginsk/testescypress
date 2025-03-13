funcionalidade: Acessar o site saucelabs e realizar login
    Descrição: aqui estamos validando o login com credencias validas

Contexto: 
    Dado que acesso o site "https://www.saucedemo.com/v1"

Cenário: testar login com credencias validas
    Quando ir ate o campo de usuario
    E campo senha
    E clico no botao de login
    Então usuario terá logado 
    E estara na pagina de produtos