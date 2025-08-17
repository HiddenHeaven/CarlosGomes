# Automação de Testes - DemoQA (Academia Accenture)

Este projeto automatiza testes na página "Web Tables" do site (https://demoqa.com/webtables/) para simular o gerenciamento de usuários.

### O que este projeto faz?

Cadastra um novo usuário na tabela.  
Edita as informações de um usuário existente.  
Exclui um usuário da tabela.  
Valida se cada uma dessas ações foi concluída com sucesso.

### Ferramentas Utilizadas

* **Cypress**
* **Cucumber** (Escrita de testes em `.feature`)
* **Faker.js** (Geração de dados aleatórios)

---

## Como Começar (Setup Rápido)

Você só precisa ter o **Node.js** instalado.

1.  **Clone o projeto:**
    ```bash
    git clone https://github.com/HiddenHeaven/CarlosGomes.git
    ```

2.  **Acesse a pasta:**
    ```bash
    cd Academia_Accenture2025
    ```

3.  **Instale as dependências:**
    ```bash
    npm install cypress --save-dev
    npm install -D cypress-cucumber-preprocessor
    npm install @faker-js/faker --save-dev
    ```

---

## Como Rodar os Testes

Modos de execução:

### Para ver o teste acontecendo (Modo Interativo)

Use este comando para abrir a interface do Cypress e assistir a automação em tempo real.

```bash
npm cypress open
```