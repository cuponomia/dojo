def main(grid):
    pass

def count_digits(grid):
    most_single_given_digit = [0]* (len(grid) + 1)

    for i in range(len(grid)):
        for j in range(len(grid[i])):
            most_single_given_digit[grid[i][j]] = most_single_given_digit[grid[i][j]] + 1

    return most_single_given_digit;

def get_least_empty_rows(grid):
    rows = []
    least_spaces_in_row = len(grid)

    for i in range(len(grid)):
        spaces = 0
        for j in range(len(grid[i])):
            if(grid[i][j] == 0):
                spaces = spaces + 1
        if (spaces == least_spaces_in_row):
            rows.append(i)
        
        elif (spaces < least_spaces_in_row):
            least_spaces_in_row = spaces
            rows = [i]

    return rows

def get_least_empty_cols(grid):
    cols = []
    least_spaces_in_col = len(grid)

    j = 0
    while j < len(grid):
        spaces = 0
        for i in range(len(grid)):
            if(grid[i][j] == 0):
                spaces = spaces + 1

        if (spaces == least_spaces_in_col):
            cols.append(j)
    
        elif (spaces < least_spaces_in_col):
            least_spaces_in_col = spaces
            cols = [j]
            
        j += 1

    return cols

def get_row(grid, row_number):
    return grid[row_number]

def get_column(grid, col_number):
    col = []
    for i in range(len(grid[0])):
        col.append(grid[i][col_number])
    return col

def get_possible_digits_in_row(row):
    possibles = range(1,len(row)+1)
    return [x for x in possibles if x not in row]

def solve_hidden_singles(grid):
    solved = 1
    while solved > 0:
        solved = 0
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                point = grid[i][j]
                if point == 0:
                    row_possibles = get_possible_digits_in_row(grid[i])
                    column_possibles = get_possible_digits_in_row(get_column(grid, j))

                    possibles = [x for x in row_possibles if x in column_possibles]
                    if len(possibles) == 1:
                        grid[i][j] = possibles[0]
                        solved = solved + 1    
    return grid

if __name__ == "__main__":
    main([])