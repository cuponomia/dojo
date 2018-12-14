def miojo(miojo_time, amp1, amp2):
	if (miojo_time > amp1 or miojo_time > amp2):
		return [-1,-1,-1]
	    
	it1 = it2 = 1
	cooking_time = 0
	
	for it1 in [1, 2, 3]:
		for it2 in [1, 2, 3]:
			cooking_time = min(amp1 * it1, amp2 * it2)
			result = abs(amp1 * it1 - amp2 * it2)
			if (result == miojo_time):
				return [max(amp1 * it1, amp2 * it2), it1, it2]

	return [-1,-1,-1]