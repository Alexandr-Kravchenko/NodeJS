let pl = function(num, one, few, many) {
	num = num % 100;
	let lastPos = num % 10;
	let result;
	if(num > 10 && num < 20) result = many;
	if(lastPos === 0) result = many;
	if(lastPos >= 5 && lastPos <= 9) result = many;
	if(lastPos === 1) result = one;
	if(lastPos >= 2 && lastPos <= 4) result = few;

	return result
}

console.log(pl(511, 'кнопка', 'кнопки', 'кнопок'));