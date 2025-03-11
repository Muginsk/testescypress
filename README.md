# Testes Automatizados com Cypress

## 📌 Descrição
Este projeto contém testes automatizados utilizando o **Cypress** para validar funcionalidades do site [SauceDemo](https://www.saucedemo.com/). Os testes incluem a automação do fluxo de login e a verificação da página de produtos.

## 🚀 Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) - Framework de testes end-to-end
- JavaScript - Linguagem utilizada para os testes
- GitHub Actions - Para execução dos testes em CI/CD
- [Mochawesome](https://www.npmjs.com/package/mochawesome) - Para geração de relatórios detalhados

## 📂 Estrutura do Projeto
```
/testescypress
│── cypress/
│   ├── e2e/
│   │   ├── loginTeste.cy.js  # Testes do site SauceDemo
        ├── realizacompraTeste.cy.js  # Testes do site SauceDemo
    │── reports/
        │── index.HTML
│   ├── support/
│   │   ├── commands.js      # Comandos customizados do Cypress
│── cypress.config.js        # Configuração do Cypress
│── package.json             # Dependências do projeto
│── README.md                # Documentação do projeto
        
```

## 🔧 Pré-requisitos
Antes de rodar os testes, certifique-se de ter instalado:
- **Node.js** (v16 ou superior)
- **NPM** (v8 ou superior) ou **Yarn**

Para instalar as dependências, execute:
```bash
npm install
```

## ▶️ Como Executar os Testes
### Executar os testes em modo headless (linha de comando):
```bash
npx cypress run
```

### Executar os testes no modo interativo (GUI):
```bash
npx cypress open
```

## 📊 Relatório de Testes
O projeto utiliza **Mochawesome** para geração de relatórios detalhados sobre a execução dos testes.

### Gerar Relatório
Após rodar os testes, o relatório será gerado automaticamente na pasta `mochawesome-report`.
Para visualizar o relatório em HTML, abra o arquivo:
```
mochawesome-report/mochawesome.html
```

Caso queira gerar o relatório manualmente, utilize:
```bash
npx cypress run --reporter mochawesome
```

## 🛠 Configuração no GitHub Actions
O projeto já possui um workflow configurado para executar os testes automaticamente no GitHub Actions sempre que houver um push ou pull request. O workflow está localizado em:
```
.github/workflows/github_actions_cypress.yml
```

## 📄 Licença
Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo e contribuir!

---

🚀 **Mantenha seus testes sempre atualizados para garantir qualidade no desenvolvimento!**
