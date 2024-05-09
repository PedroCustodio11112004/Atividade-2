# Atividade-2
Explicação do código de HTML e JavaSript:
No HTML o que vale ser destacado é o "form" que é um formulário para coleta de informações do usuário e normalmente envia para algum lugar.
Seu id é form-datas e possui 2 campos de entrada e coleta de dados e 1 botão de envio, dentro desses campos de entrada o atributo required indica que o formulário não pode ser enviado vazio.
No JavaScript o destaque fica mais nas primeiras linhas onde pegamos os valores de form-data pelo seu id, o addEventListener é a função que adiciona um listener(define uma função a ser chamada quando um evento(eventos comuns são cliques de mouse, teclado etc) ocorrer, ele tem 2 parâmetros o 1° é o tipo de evento monitorado no caso é o envio do formulário pelo submit lá no HTML.
O segundo parâmetro é a função que será executada quando o evento ocorrer, chamada de callback.
O event.preventDefault( ) a linha impede o comportamento padrão quando fosse enviar o formulário sem essa linha ao enviar o formulário a página iria recarregar ou ir para outra parte, em específico o Prevent.Default fa
Na função calcular intervalo temos 2 parâmetros e a transformação de ambos em objeto Date. No if acontece uma comparação para ver se a data 1 é maior que a data 2, se for contínua se não for aparece uma msg de erro.
As funções get retornam o Date das variáveis com as especificações dos mesmos, como o
getFullYear retorna o ano de um objeto.
 getMonth retorna o mês do ano (0 para janeiro, 1 para fevereiro, e assim por diante).
getDate retorna o dia do mês.
A variável anosDif vai retornar a diferença das datas em milissegundos, o if abaixo ve a diferença dos meses em incrementa -1 a cada vez q for, no próximo ele calcula a diferença dos meses, abaixo calcula a diferença dos dias, caso ocorra de eles serem negativos caírem um em 10 de um mês e outro em 15 do próximo o'resultado seria negativo então com isso as funções date2.setMonth(date2.getMonth() - 1) ajusta para o mês anterior.
diasDif += new Date(date2.getFullYear(), date2.getMonth() + 1, 0).getDate(); adiciona o número de dias do mês anterior a diasDif para corrigir a diferença.
e incrementa menos 1 mês.
Na função dataHoraAtual criamos um objeto Date e colocamos na variável data
 com as const de hora e minuto aplicamos ogetHours e o getMinutes que retornam a hora e o minuto atual.Criei as variaveis dia e mes e as colocamos a conversão para string,utilizo o getdate para pegar o dia e com o padstart que recebe 2 parâmetros o primeiro é o tamanho que deve se ter 2 caracteres e se por acaso não tiver colocasse um zero à esquerda para completar, isso acontece no dia e no mes, a leve diferença do mes é que como ele começa a contar do 0 temos que somar 1 ao seu retorno. No ano se adiciona o get.full.year retorna o ano completo e no fim apenas concateno tudo com o tamplete String.
