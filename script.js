function palindrome (str){
// first step is to lowercase our input
const alphanumericOnly=string.toLowerCase().match(/[a-z0-9]/)


//look for alphanumeric characters
//return vale is str === reversed str

  return alphanumericOnly.join('') === alphanumericOnly.reverse().join('');
}
palindrome()


//temperatre converter
<p>
  <label>Fahrenheit</label>
  <input id="inputFahrenheit" type="number" placeholder="Fahrenheit"
  oninput="temperatureConverter(this.value)"
  onchange="temperatureConverter(this.value)">
</p>
<p>Celsius: <span id="outputCelsius"></span></p>
//Celsius
/* When the input field receives input, convert the value from fahrenheit to celsius */
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}

/*
Convert from Fahrenheit to Celsius	℃=(℉-32)/1.8
Convert from Fahrenheit to Kelvin	K=((℉-32)/1.8)+273.15
Convert from Celsius to Fahrenheit	℉=(℃*1.8)+32
Convert from Celsius to Kelvin	K=℃+273.15
Convert from Kelvin to Fahrenheit	℉=((K-273.15)*1.8)+32
Convert from Kelvin to Celsius	℃=K-273.15
*/

//roman numeral converter
