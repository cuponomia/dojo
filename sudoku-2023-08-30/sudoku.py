def main(grid):
    pass

def get_most_given_digit(grid):
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

if __name__ == "__main__":
    main([])