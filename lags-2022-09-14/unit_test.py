import unittest
from index import BestRoute



class TestFlight(unittest.TestCase):
		
	# def test_execute_when_only_one_flight_returns_itself(self):
	# 	listaBase = [{
    #     "linha": 'AF514',
    #     "partida": 0,
    #     "tempoDeVoo": 5,
    #     "valor": 10
    #     }]
	# 	br = BestRoute(listaBase)
	# 	result = br.execute()
	# 	self.assertEqual(result, listaBase[0])
    def test_get_next_flight_when_only_one_flight_returns_empty_list(self):
        listaBase = [{
            "linha": 'AF514',
            "partida": 0,
            "tempoDeVoo": 5,
            "valor": 10
        }]
        br = BestRoute(listaBase)
        result = br.get_next_flights(0)
        self.assertEqual(result, [])

    def test_get_next_flight_when_has_two_flights_with_same_time_returns_empty_list(self):
        listaBase = [{
            "linha": 'AF514',
            "partida": 0,
            "tempoDeVoo": 5,
            "valor": 10
        },{
            "linha": 'AF515',
            "partida": 4,
            "tempoDeVoo": 3,
            "valor": 3
        }]
        br = BestRoute(listaBase)
        result = br.get_next_flights(0)
        self.assertEqual(result, [])

    def test_get_next_flight_when_has_two_flights_with_sequence_allowed_returns_flight(self):
        listaBase = [{
            "linha": 'AF514',
            "partida": 0,
            "tempoDeVoo": 5,
            "valor": 10
        },{
            "linha": 'AF515',
            "partida": 6,
            "tempoDeVoo": 3,
            "valor": 3
        }]
        br = BestRoute(listaBase)
        result = br.get_next_flights(0)
        self.assertEqual(result, [listaBase[1]])

    def test_profit_of_single_flight(self):
        listaBase = [{
            "linha": 'AF514',
            "partida": 0,
            "tempoDeVoo": 5,
            "valor": 10
        }]
        br = BestRoute(listaBase)
        voosMocks = [listaBase[0]]
        result = br.get_profit(voosMocks)
        self.assertEqual(result, 10)

    def test_profit_of_flight_plan(self):
        listaBase = [{
            "linha": 'AF514',
            "partida": 0,
            "tempoDeVoo": 5,
            "valor": 10
        },{
            "linha": 'AF515',
            "partida": 6,
            "tempoDeVoo": 3,
            "valor": 3
        }]
        br = BestRoute(listaBase)
        voosMocks = [listaBase[0], listaBase[1]]
        result = br.get_profit(voosMocks)
        self.assertEqual(result, 13)

    def test_get_best_flights(self):
        listaBase = [{
        "linha": 'AF514',
        "partida": 0,
        "tempoDeVoo": 5,
        "valor": 10
        },
        {
        "linha": 'AF515',
        "partida": 6,
        "tempoDeVoo": 9,
        "valor": 7
        },
        {
        "linha": 'BA01',
        "partida": 6,
        "tempoDeVoo": 9,
        "valor": 8
        }]
        br = BestRoute(listaBase)
        result = br.get_best_flights()
        self.assertEqual(result, (0, 2))


unittest.main()