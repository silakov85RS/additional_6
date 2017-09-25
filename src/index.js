module.exports = function zeros(expression) {
  expressionArguments = expression.split('*');
  for (i = 0; i < expressionArguments.length; i++) {
    factorialCount = expressionArguments[i].split('!').length - 1;
    num = +expressionArguments[i].replace(/!/g, '');
    for (j = num; j > factorialCount;) {
      j -= factorialCount;
      first = num.toString();
      second = j.toString();
      num = multiply(first, second);
    }

    expressionArguments[i] = num.toString();
  };

  expressionProduct =  expressionArguments[0];
  for (k = 0; k < (expressionArguments.length - 1); k++) {
    expressionProduct = multiply(expressionProduct, expressionArguments[k + 1]);
  };

  revertProduct = expressionProduct.split('').reverse().join('');
  for (l = 0; l < expressionProduct.length; l++) {
    if (revertProduct[l] !== '0') {
      return l;
    }
  }
};

function multiply(first, second) {
  if (first.length < second.length) {
    tmp = second;
    second = first;
    first = tmp;
  }

  result = [];
  resultLength = first.length + second.length;

  for (z = 0; z < resultLength; z++) {
    result[z] = 0;
  }

  for (x = 0; x < second.length; x++) {
    for (y = 0; y < first.length; y++) {
      result[1 + y + x] += first[y] * second[x];
    }
  }

  for (z = resultLength - 1; z > 0; z--) {
    if (result[z] >= 10) {
      result[z - 1] += Math.floor(result[z] / 10);
      result[z] %= 10;
    }
  }

  if (result[0] == 0)
    delete result[0];

  return result.join('');
};
