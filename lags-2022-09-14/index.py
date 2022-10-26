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

---

Eduardo
Lucas
Rodrigo
Nathael
Adauto

'''

class BestRoute():

    def __init__(self, list_base):
        self.listaBase = list_base

    available_flights = []
    
    def get_next_flights(self, voo_index):
        listaPossiveis = []
        voo = self.listaBase[voo_index]
        
        for vooAChecar in self.listaBase:
            if vooAChecar['linha'] == voo['linha']:
                continue
            if voo['partida'] + voo['tempoDeVoo'] <= vooAChecar['partida']:
                listaPossiveis.append(vooAChecar)
        return listaPossiveis

    def get_profit(self, voos):
        sum = 0
        for item in voos:
            sum = sum + item['valor']
        return sum

    def get_best_flights(self):
        profits_max = 0
        profits_index = 0
        for index, item in enumerate(self.listaBase):
            voo_possiveis = self.get_next_flights(index)
            for i, voo in enumerate(voo_possiveis):
                profit = self.get_profit([item, voo])
                if (profit > profits_max):
                    profits_max = profit
                    profits_index = (index , i)
            
        return profits_index
    
    #########################

    def get_next_best_flight(self, voos):
        best_profit = 0
        for voo in voos:
            current_profit = self.get_profit([voo])
            if (current_profit > best_profit):
                best_profit = current_profit
        return best_profit
    
    def get_best_flights_2(self):
        pass

    #########################

    def execute(self):
        self.get_best_flights()

def main():
    print('main')

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
    bestroute = BestRoute(listaBase)

    bestroute.execute()

if (__name__ == "__main__"):
    main()