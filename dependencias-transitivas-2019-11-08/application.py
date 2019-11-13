def dependencia(input):
	dicionario = {}
	for classe in input:
		c = classe.pop(0)
		deps = classe
		dicionario[c].append(deps)
		
	result = set()
	for k, v in dicionario:
		recurseDependency(set, dicionario, k, v)
	
	return result
	
def recurseDependency(set, dicionario, classe, dependencias):
	if !dicionario[classe]:
		return
	
	set.add(dependencias)
	
	recurseDependency(set, dicionario, dicionario[dependencias[0]])
		