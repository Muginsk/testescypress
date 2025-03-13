Feature: Realizar login no site SauceDemo

  Scenario: Realizar login com credenciais válidas
    Given o usuário está na página de login
    When o usuário preenche as credenciais válidas e clica no botão de login
    Then o usuário deve ser redirecionado para a página de produtos e visualizar o título "Products"
