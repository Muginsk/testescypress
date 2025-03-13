Feature: Fluxo de Compra no site Saucedemo

  Scenario: Realiza login, adiciona itens ao carrinho, preenche checkout e finaliza compra com sucesso
    Given que estou na página de login do Saucedemo
    When faço login com usuário "standard_user" e senha "secret_sauce"
    Then sou redirecionado para a página de produtos

    When adiciono os seguintes produtos ao carrinho:
      | Produto                          |
      | Sauce Labs Backpack              |
      | Sauce Labs Bike Light            |
      | Sauce Labs Bolt T-Shirt          |
    Then vejo 3 itens no carrinho

    When acesso o carrinho
    Then os produtos no carrinho são:
      | Produto                          |
      | Sauce Labs Backpack              |
      | Sauce Labs Bike Light            |
      | Sauce Labs Bolt T-Shirt          |

    When realizo o checkout preenchendo "Felipe", "Teste" e "06700287"
    Then sou redirecionado para a página de revisão do pedido

    When confirmo a compra
    Then vejo a mensagem de confirmação "THANK YOU FOR YOUR ORDER"
