## Kata Sudoku Solver

Este desafio envolve escrever um programa que resolva um quebra-cabeça de Sudoku.

O Sudoku é um jogo de lógica no qual o objetivo é preencher uma grade de 9x9 com números de 1 a 9, de forma que cada linha, coluna e região de 3x3 contenha todos os números de 1 a 9 sem repetições. O quebra-cabeça começa com algumas células já preenchidas e o objetivo é preencher o resto da grade.

O desafio do Kata Sudoku Solver é criar um programa que seja capaz de resolver qualquer quebra-cabeça de Sudoku. O programa deve ser capaz de receber uma grade incompleta e preencher as células vazias de forma que as regras do Sudoku sejam respeitadas.

Existem várias abordagens para resolver esse problema, mas uma possível estratégia é utilizar um algoritmo de busca. O programa pode começar preenchendo as células que só podem ter um valor possível, em seguida, tentar preencher as células restantes usando uma estratégia de tentativa e erro, que envolve escolher um valor para uma célula vazia e verificar se ele viola alguma das regras do Sudoku. Se uma violação for encontrada, o programa deve voltar atrás e tentar outro valor para a célula anterior.

Para tornar o desafio mais interessante, você pode definir diferentes níveis de dificuldade para o quebra-cabeça de Sudoku, variando o número de células já preenchidas no início. Isso torna o desafio mais escalável e adequado para diferentes níveis de habilidade dos participantes.