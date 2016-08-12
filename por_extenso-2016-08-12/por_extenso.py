def por_extenso(numero):
	
	if numero > 10 and numero < 20:
		return teens_por_extenso(numero)

	if numero < 10:
		return unidade_por_extenso(numero)
		
	return dezena_unidade_por_extenso(numero)

def unidade_por_extenso(numero):
	unidades = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
	return unidades[numero - 1]

def dezena_por_extenso(numero):
	dezenas = ['dez','vinte','trinta','quarenta','cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']	
	return dezenas[numero - 1]	

def teens_por_extenso(numero):
	teens = ['onze','doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']
	return teens[numero - 11]
	
def dezena_unidade_por_extenso(numero):
	resto = numero % 10
	numero = numero / 10
	dezena_extenso = dezena_por_extenso(numero)
	if resto == 0:
		return dezena_extenso				
	unidade = unidade_por_extenso(resto)
	return dezena_extenso + " e " + unidade
	