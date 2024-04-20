# Especificações do Projeto


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|ID    | EU COMO...               | QUERO/PRECISO ...                                                                                  | PARA ...                                                                             |
|------|--------------------------|----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
|RF-01 | Eu como analista de RH   | Preciso cadastrar usuários e criar equipes para classificar os funcionários e líderes entre elas   | para que os funcionários possam usar da melhor maneira as funcionalidades do sistema.|
|RF-02 | Eu como analista de RH   | Desejo criar publicações                                                                           | para manter as equipes atualizada sobre qualquer noticia ou informação relevante.    |
|RF-03 | Eu como coordenador      | Quero criar publicações, quizzes e formulários                                                     | para manter minha equipe atualizada sobre qualquer noticia ou informação relevante.  |
|RF-04 | Eu como coordenador      |Desejo criar planos de desenvolvimento individual                                                   | para estimular a melhoria contínua do meu time.                                      |
|RF-05 | Eu como coordenador      |Preciso criar quizzes e formulários                                                                 | para conseguir coletar informações da minha equipe de forma prática e eficiente.     |
|RF-06 | Eu como analista de RH   |Quero gerar relatórios com base no resultado dos quizzes e formulários.                             | para coletar informações dos funcionários de forma prática.                          |
|RF-07 | Eu como funcionário      |Desejo ver as postagens de outros setores                                                           | para poder me atualizar sobre diversos tópicos que possam me interessar.             |
|RF-08 | Eu como funcionário      |Desejo adicionar aos favoritos os posts que me interessam                                           | para poder acessá-los de maneira fácil posteriormente.                               |
|RF-09 | Eu como funcionário      |Preciso ter acesso as postagens do meu setor                                                        | para poder me manter atualizado sobre meu setor atual.                               |
|RF-10 | Eu como funcionário      |Desejo criar, alterar e visualizar o conteúdo e prazos dos meus planos de desenvolvimento           | para poder estudar os conteúdos propostos e aprimorar minhas habilidades.            |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                                                                                          | Prioridade |
|------|-----------------------------------------------------------------------------------------------------------------|------------|
|RF-01 | Cadastrar usuários no sistema.                                                                                  | Alta  | 
|RF-02 | Permitir cadastrar post informativos.                                                                           | Alta  |
|RF-03 | Conseguir cadastrar os posts separando por setor.                                                               | Alta  |
|RF-04 | Conseguir cadastrar planos de desenvolvimento, com prazo e conteúdo para que outros funcionários possam aderir. | Alta  |
|RF-05 | Cadastrar quizzes e formulários.                                                                                | Média |
|RF-06 | Criar relatórios com base no resultado dos quizzes e formulários.                                               | Média |
|RF-07 | Conseguir realizar pesquisa entre os posts publicados filtrando pelo título ou categoria.                       | Média |
|RF-08 | Conseguir salvar as publicações como favoritos.                                                                 | Baixa |
|RF-09 | Ter uma página para ver os posts da categoria onde o funcionário logado está inserido.                          | Baixa | 
|RF-10 | Conseguir cadastrar e atualizar planos de desenvolvimento individual, com prazo e conteúdo.                     | Alta  |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-----------------------------------------------------------|------------|
|RNF-01 | Ter validação de senha e usuário, onde o analista de RH cria a conta com o e-mail fornecido pelo usuário ou pelo e-mail empresarial (se houver) e o usuário altera a senha após o primeiro uso. | Alta  | 
|RNF-02 | Não demorar mais que 10 segundos no carregamento das páginas.  | Alta  | 
|RNF-03 | Ser autoexplicativo, não depender de tutoriais para uso. | Media |
|RNF-04 | Ser responsivo para todas as telas de monitores, smartphone e tablet. | Media |
|RNF-05 | A senha deve ser redefinida a cada 3 meses.  | Media |


