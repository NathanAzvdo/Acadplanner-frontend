# AcadPlanner Frontend

Este projeto foi gerado utilizando o Angular CLI na versão 20.1.4.

## Sobre o projeto

O AcadPlanner é um sistema desenvolvido para auxiliar estudantes no planejamento e organização de suas matérias da faculdade.  
A aplicação permite que:

- O usuário visualize as disciplinas disponíveis de acordo com seu curso.
- Exiba recomendações baseadas nas matérias já cursadas.
- Apenas o administrador possa cadastrar cursos e disciplinas.

Este repositório contém o frontend do projeto, desenvolvido em Angular, responsável pela interface interativa e comunicação com o backend via API.

## Servidor de desenvolvimento

Para iniciar um servidor local de desenvolvimento, execute:

```bash
ng serve
```

Após o servidor estar em execução, abra o navegador e acesse `http://localhost:4200/`.  
A aplicação será recarregada automaticamente sempre que você modificar os arquivos-fonte.

## Geração de código (Scaffolding)

O Angular CLI inclui ferramentas poderosas para gerar código. Para criar um novo componente, execute:

```bash
ng generate component nome-do-componente
```

Para ver a lista completa de esquemas disponíveis (como components, directives ou pipes), execute:

```bash
ng generate --help
```

## Build (Compilação)

Para compilar o projeto, execute:

```bash
ng build
```

O Angular irá gerar os artefatos de build na pasta `dist/`.  
Por padrão, o build de produção otimiza a aplicação para melhor desempenho.

## Testes unitários

Para executar os testes unitários com o Karma, utilize o comando:

```bash
ng test
```

## Testes end-to-end

Para rodar testes de ponta a ponta (e2e), execute:

```bash
ng e2e
```

**Observação:** O Angular CLI não inclui, por padrão, um framework para testes e2e. Você pode escolher a ferramenta que preferir.

## Recursos adicionais

Para mais informações sobre como usar o Angular CLI, incluindo referências detalhadas dos comandos, visite:  
[Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
