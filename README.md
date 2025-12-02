PROESP - Sistema de Avaliação Física
Descrição

Este projeto é um sistema de triagem e avaliação física desenvolvido para o PROESP-BR (Programa de Excelência em Saúde e Performance), que permite a coleta de dados sobre a saúde e aptidão física de estudantes. O sistema é dividido em várias etapas, incluindo triagem, medição antropométrica, testes motores e a apresentação de resultados com orientações baseadas nos dados inseridos.

O sistema coleta informações como peso, altura, testes de flexibilidade, resistência muscular, potência, velocidade e resistência aeróbica, com a geração de um IMC (Índice de Massa Corporal) e a classificação do aluno de acordo com os parâmetros do PROESP.

Funcionalidades

Triagem Inicial: Coleta informações pessoais como nome, idade e sexo do aluno.

Antropometria: Coleta dados sobre a massa corporal, estatura e envergadura, além de calcular o IMC do aluno.

Testes Motores: Inclui diversos testes para avaliar a flexibilidade, resistência muscular, potência e resistência aeróbica.

Resultado Final: Exibe o IMC do aluno e fornece orientações baseadas na classificação do PROESP-BR.

Estrutura do Projeto

O projeto é composto por várias páginas HTML interativas e um arquivo JavaScript que lida com o cálculo do IMC e a navegação entre as páginas.

Páginas

index.html: Página inicial com a triagem de identificação.

antropomeria.html: Página para preenchimento das medidas corporais e cálculo do IMC.

motores.html: Página para os testes motores.

resultado.html: Página que exibe o resultado final da avaliação com o IMC e orientações.

Scripts

codiguinhos.js: Script que realiza o cálculo do IMC com base no peso e altura fornecidos e salva o resultado no localStorage.

resultado.js: Script que recupera o IMC do localStorage e exibe a classificação e orientações correspondentes.

Estilos

estilo.css: Arquivo CSS que define o estilo visual do projeto, com um design responsivo e uma interface amigável.

Como Usar
Requisitos

Não há requisitos específicos de servidor, pois o projeto é composto apenas por arquivos HTML, CSS e JavaScript. Ele pode ser executado diretamente em qualquer navegador moderno.

Passo a Passo

Abra o arquivo index.html em seu navegador.

Preencha os campos de nome, idade e sexo para iniciar a triagem.

Avance para a página de Antropometria, onde você deve fornecer as medidas corporais (peso, altura e envergadura).

Após calcular o IMC, você será redirecionado para a página de Testes Motores, onde poderá preencher os resultados dos testes.

Visualize o Resultado Final na última página, onde será exibido o seu IMC, a classificação e as orientações personalizadas.

Estrutura de Arquivos
/proesp
  |-- index.html            # Página de triagem inicial
  |-- antropomeria.html     # Página de antropometria
  |-- motores.html          # Página de testes motores
  |-- resultado.html        # Página de resultados finais
  |-- codiguinhos.js        # Script de cálculo do IMC e manipulação de dados
  |-- resultado.js          # Script para exibir resultados e orientações
  |-- estilo.css            # Estilos CSS

Como Contribuir

Sinta-se à vontade para contribuir com melhorias, correções ou sugestões. Para isso, basta seguir os passos abaixo:

Fork o repositório.

Crie uma branch para sua nova feature (git checkout -b nova-feature).

Faça as alterações necessárias e commit as mudanças (git commit -am 'Adiciona nova feature').

Envie para o repositório remoto (git push origin nova-feature).

Abra um Pull Request.

Licença

Este projeto está licenciado sob a MIT License
.# Trabalho-interface-usu-rio
