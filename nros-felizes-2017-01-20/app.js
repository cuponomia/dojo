'use strict';

class Calc {
	isHappy(x) {		

		let sum = 0;
		let arr = x.toString();		
		
		for(let i = 0; i < arr.length; i++){			
			let num = parseInt(arr[i]); 
			sum = sum + num*num;
		}

		return sum >= 10 ?
		 				 this.isHappy(sum) :
		 				 sum==1;
	}
}

module.exports = Calc;