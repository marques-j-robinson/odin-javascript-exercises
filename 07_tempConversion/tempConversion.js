const round = temp => parseFloat(temp.toFixed(1))

const convertToCelsius = function(temp) {
    return round((temp-32)*(5/9))
};

const convertToFahrenheit = function(temp) {
    return round((temp*(9/5))+32)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
