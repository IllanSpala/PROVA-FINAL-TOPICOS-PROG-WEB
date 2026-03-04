# PROVA-FINAL-TOPICOS-PROG-WEB
PASSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEI

# Avaliação Final - Programação Web
## Tópicos Especiais em Programação Web I

**Aluno:** ILLAN SPALA (Matrícula: 2022201138)
**Curso:** Sistemas de Informação - UFES
**Tema da Aplicação:** Sistema de Cadastro de Pessoas e Cálculos Fiscais de Produtos (POO)

---

### 1. Descrição do Projeto
Este projeto compõe a avaliação final da disciplina e é dividido em duas frentes principais: uma interface web interativa (Frontend) para cadastro e consulta de usuários, e um script focado na lógica de negócios utilizando Programação Orientada a Objetos (POO) em JavaScript. 

A aplicação web realiza validações rigorosas de formulário no lado do cliente, consome dados de uma API/arquivo JSON de forma assíncrona e aplica filtros dinâmicos de renderização. Paralelamente, a camada de POO simula o gerenciamento de produtos com cálculo polimórfico de impostos.

---

### 2. Requisitos Implementados (Mapeamento da Prova)

A aplicação atende aos requisitos solicitados através da implementação das seguintes funcionalidades:

* **Validação de Formulário (Questão 1 - Frontend):** Implementação de regras de negócio estritas no arquivo `q1.html` antes do envio dos dados:
  * Nome deve conter pelo menos 10 caracteres.
  * CPF restrito a exatamente 11 dígitos numéricos.
  * Validação de maioridade (18+ anos) calculada a partir da data de nascimento.
  * Verificação da presença do caractere obrigatório (`@`) no e-mail.
* **Consumo de API e Renderização Dinâmica (Questão 1 - Frontend):** Uso da biblioteca `Axios` para realizar requisições HTTP assíncronas (`GET`) à base de dados `json02.json` (com tratamento de erro via fallback local). Os dados são manipulados e exibidos em uma tabela HTML.
* **Filtros Personalizados:** Lógica de manipulação de arrays (`filter`) para extrair e renderizar em uma lista apenas as pessoas com idade inferior a 30 anos que possuam "Musculação" como preferência de lazer.
* **Manipulação de Datas (Página de Confirmação):** Utilização do objeto nativo `Date` do JavaScript em `confirmacao.html` para gerar e exibir dinamicamente o dia da semana, dia do mês e ano da realização do cadastro.
* **Orientação a Objetos e Polimorfismo (Questões 3 e 4 - POO):** O arquivo `q3_4.js` implementa a superclasse `Produto` e as subclasses `Eletronico` e `Alimentacao`. O método `calcularValorImposto(percentualLucro)` é sobrescrito nas subclasses para aplicar regras tributárias específicas baseadas no tipo de produto (ex: agropecuário vs. industrial).

---

### 3. Tecnologias Utilizadas

* **Frontend:** HTML5, CSS3 (`styles.css`), JavaScript Vanilla (ES6+).
* **Requisições HTTP:** Axios (via CDN).
* **Lógica de Negócios (POO):** Node.js / JavaScript.

---

### 4. Instruções de Execução

O projeto é composto por arquivos estáticos e scripts em JavaScript. Para testar as funcionalidades:

**1. Executando a Interface Web (Cadastro e Tabela)**
* Abra o arquivo `q1.html` em qualquer navegador web atualizado.
* *Nota:* Como a página realiza uma requisição Axios para um arquivo `.json` local em caso de falha da API da UFES, é recomendado rodar a aplicação através de um servidor local (como a extensão *Live Server* do VSCode) para evitar bloqueios de CORS pelo navegador.

**2. Executando a Lógica de Orientação a Objetos**
Para testar os cálculos de impostos e a herança das classes de produtos, certifique-se de ter o Node.js instalado e execute o seguinte comando no terminal, dentro da pasta do projeto:
```bash
node q3_4.js
