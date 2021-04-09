def get_all_water_volume(array):
    volume= 0
    last_bar = 0
    last_index = 0
    last_bar_minor = 0
    
    for i in range(0, len(array)):
        val = array[i]
        if val > 0 and last_bar == 0:
            last_bar = val
            last_index = i
        elif val >= last_bar and last_bar > 0:
            volume += get_water_volume(array[last_index:i+1])
        elif val > 0 and val < last_bar:
            last_bar_minor = val
            
    return volume

def get_smallest_column(array):
    first = array[0]
    last = array[-1]
    return min([last, first])
    
def get_water_volume(array):
    smallest = get_smallest_column(array)
    middle_bars = 0
    
    bars = array[1:-1]
    for bar_value in bars:
        middle_bars += bar_value
    volume = smallest * len(bars) - middle_bars
    
    return volume