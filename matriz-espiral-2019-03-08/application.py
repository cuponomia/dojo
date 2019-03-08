def espiral(columns, rows):
    retorno = [[0 for x in range(rows)] for y in range(columns)] 
    return run(retorno, 1, 0, 0, columns, rows)

def run(retorno, initial_value, col_offset, row_offset, columns, rows):
	#mat = [[0 for x in range(l)] for y in range(c)]
	total = columns * rows
	
	linha = 0
	coluna = 0
	
	#retorno = [[0 for x in range(rows)] for y in range(columns)] 

    # l -> r
	for c in range(col_offset, columns):
	    retorno[row_offset][c] = initial_value
	    initial_value += 1
	    
	# u -> d
	for l in range(row_offset, rows):
	    
	    
	# r -> l
	for c in range(columns-1, col_offset):
	    
	    
	# d -> u
	for l in range(rows-1, row_offset+1):
		
		
	return run(retorno, initial_value+1, col_offset+1, row_offset+1, columns-1, rows-1)
	
	#1 2 3
	#0 0 4
	#7 6 5