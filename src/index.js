class SmartCalculator {
  constructor(initialValue) {
    this.total = 0;
    this.equal = [initialValue];   
  }
 get recalculated() {
    var arr = this.equal;
    for(let i = arr.length-1; i>0; i--) {
      if(arr[i] === '^') {
        var res = Math.pow(arr[i-1] ,arr[i+1]);
        arr.splice(i-1, 3, res);
        i++;
      }
    }

    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === '*') {
        var res = arr[i-1] * arr[i+1];
        arr.splice(i-1, 3, res);
        i--;
      }
      if(arr[i] === '/') {
        var res = arr[i-1] / arr[i+1];
        arr.splice(i-1, 3, res);
        i--;
      }
    }
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === '+') {
        var res = arr[i-1] + arr[i+1];
        arr.splice(i-1, 3, res);
        i--;
      }
      if(arr[i] === '-') {
        var res = arr[i-1] - arr[i+1];
        arr.splice(i-1, 3, res);
        i--;
      }
    }
    return arr[0];
  }
  
  add(number) {
    this.equal.push('+');
    this.equal.push(number);
		return this;
  }
  
  subtract(number) {
    this.equal.push('-');
    this.equal.push(number);
		return this;
  }

  multiply(number) {
    this.equal.push('*');
    this.equal.push(number);
		return this;
  }

  devide(number) {
    this.equal.push('/');
    this.equal.push(number);
		return this;
  }

  pow(number) {
    this.equal.push('^');
    this.equal.push(number);
		return this;
  }

  valueOf(){
    return this.recalculated;
  }
}

module.exports = SmartCalculator;
