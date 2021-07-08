const Calculator = function () {
	this.evaluate = str => {
		str = "1 + 2 * 4 - 8 + 2.5"
		this.symbolArr = str.split(" ").map((x) => {
			if (x === "*" || x === "/" || x === "-" || x === "+") return x;

			if (x.includes(".")) return parseFloat(x);
			return parseInt(x)
		});

		while (this.symbolArr.length !== 1) {
			let mulIndex = this.symbolArr.findIndex((el) => el === "*");
			let divIndex = this.symbolArr.findIndex((el) => el === "/");

			if (this.calculateInOrder(mulIndex, divIndex, this.multiply, this.divide)) continue;

			let subIndex = this.symbolArr.findIndex((el) => el === "-");	
			let addIndex = this.symbolArr.findIndex((el) => el === "+");

			this.calculateInOrder(subIndex, addIndex, this.subtract, this.add)
		}

		return this.symbolArr[0];
  }

	this.calculateInOrder = (firstIndex, secondIndex, firstOperation, secondOperation) => {
		if (firstIndex !== -1 && secondIndex !== -1) {
			if (firstIndex < secondIndex) {
				this.calculateInPlace(firstIndex, firstOperation);
				return true;
			}
			
			this.calculateInPlace(secondIndex, secondOperation);
			return true;
		}

		if (firstIndex !== -1) {
			this.calculateInPlace(firstIndex, firstOperation);
			return true;
		}

		if (secondIndex !== -1) {
			this.calculateInPlace(secondIndex, secondOperation);
			return true;
		}

		return false;
	}

	this.calculateInPlace = (index, func) => {
		let res = func(this.symbolArr[index - 1], this.symbolArr[index + 1]);
		this.symbolArr.splice(index, 1, res);
		this.symbolArr.splice(index - 1, 1);
		this.symbolArr.splice(index, 1);

	}

	this.multiply = (first, second) => {
		return first * second
	}

	this.divide = (first, second) => {
		return first / second
	}

	this.subtract = (first, second) => {
		return first - second
	}

	this.add = (first, second) => {
		return first + second
	}
};

var calc = new Calculator();
calc.evaluate("1 + 2 * 4 - 8");
