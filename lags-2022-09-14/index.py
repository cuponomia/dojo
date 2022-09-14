'''

# Lags - https://codingdojo.org/kata/Lags/

Problem Description
ABEAS Corp is a little company with only one plane. ABEAS Corps customers ask for this plane to help them sometimes. They send rent request with start time, travel duration, and a price they will paid.

You could help ABEAS Corp by finding the best request combination to maximize gain.

Sample Test Cases
Requests are sorted. Here is a sample file with 4 requests.

AF514 0 5 10
CO5 3 7 14
AF515 5 9 7
BA01 6 9 8

(AF514, AF515) -> (AF515, BA01)
(AF514, BA01)
(AF515, BA01)

The best combination here is AF514 and BA01 with a gain of 10+8=18.

Depending on how you want to turn this Kata, the output could be 18

'''

available_flights = []

listaBase = [
    {
    "linha": 'AF514',
    "partida": 0,
    "tempoDeVoo": 5,
    "valor": 10
    },
    {
    "linha": 'CO5',
    "partida": 3,
    "tempoDeVoo": 7,
    "valor": 14
    },
    {
    "linha": 'AF515',
    "partida": 5,
    "tempoDeVoo": 9,
    "valor": 7
    },
    {
    "linha": 'BA01',
    "partida": 6,
    "tempoDeVoo": 9,
    "valor": 8
    }
]

 
def get_next_flight(voo):
    listaPossiveis = []
    
    for index, vooAChecar in enumerate(listaBase):
        if vooAChecar.linha == listaBase[index].linha:
            continue
        if vooAChecar.partida < listaBase[index].partida:
            listaPossiveis.append((voo,listaBase[index]))
    return listaPossiveis

def execute(orderedList):
    initial = 0

    for item, index in enumerate(orderedList):
        print(get_next_flight(item))
        
        
       
def main():
    print('main')
    execute(listaBase)

main()