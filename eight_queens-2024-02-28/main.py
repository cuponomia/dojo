
board = [
    ['0', '0', '*', '0' ],
    ['0', '0', '0', '0' ],
    ['0', '0', '*', '0' ],
    ['0', '0', '0', '0' ],
]

def init():
    print("Hello World!")

def is_position_filled(arr):
    return "*" in arr

if __name__ == "__main__":
    init()


def get_row(index):    
    return board[index]

def get_column(index):     
    columns = []    
    for row in board:
        columns.append(row[index])
        
    return columns

def get_negative_diagonal(x, y):
    board_size = len(board)

    lower_limit = 0
    if (x > y): 
        lower_limit = y
    else:
        lower_limit = x

    for i in range(lower_limit, board_size):
        

    board[x][y]
    board[x+1][y+1]
    board[x+2][y+2]
    board[x+3][y+3]
    
    diagonal = []

    for i in range(x, board_size):
        
    for row in board:
        for 

        (x - board_size, y - board_size)


    position(x - 3, y - 3)
    position(x - 2, y - 2)
    position(x - 1, y - 1)
    position(x, y)
    position(x + 1, y + 1)
    position(x + 2, y + 2)
    position(x + 3, y + 3)
    


'''
Lucas
Fabricio
Adauto
Eduardo
Daniel
'''