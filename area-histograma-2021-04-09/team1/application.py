def get_tallest_column(array):
	return array.index(max(array))


def get_area_between_columns(array):
    left_column = array[0]
    right_column = array[-1]
    return min(left_column, right_column) * (len(array) - 2)


def get_sum_area_between_columns(array):
    return sum(array[1:-1])


def get_real_area(array):
    return get_area_between_columns(array) - get_sum_area_between_columns(array)


def get_water_area(array):
    index_max_column = get_tallest_column(array)
    left_array = array[0:index_max_column+1]
    right_array = array[index_max_column:]

    left_sum, tallest_left = left_sum_area(left_array)
    right_sum, tallest_right = right_sum_area(right_array)

    total_sum = left_sum + right_sum

    if left_sum:
        total_sum += get_water_area(array[:tallest_left + 1])

    if right_sum:
        total_sum += get_water_area(array[tallest_right + 1 + index_max_column:])

    return total_sum


def left_sum_area(left_array):
    if not left_array[:-1]:
        return 0, 0
    index_max_column = get_tallest_column(left_array[:-1])

    return get_real_area(left_array[index_max_column:]), index_max_column


def right_sum_area(right_array):
    if not right_array[1:]:
        return 0, 0
    index_max_column = get_tallest_column(right_array[1:])
    return get_real_area(right_array[:index_max_column + 2]), index_max_column
