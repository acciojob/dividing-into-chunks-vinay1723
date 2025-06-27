const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let currChunk = [];
	let currSum = 0;
	let res = [];
	for (let num of arr) {
		if (currSum + num > n && currChunk.length > 0) {
			res.push(currChunk);
			currChunk = [num];
			currSum = num;
		}else{
			currChunk.push(num);
			currSum += num;
		}
	}

	if (currChunk.length > 0) {
		res.push(currChunk);
	}

	return res;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

