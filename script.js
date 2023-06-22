console.log(`Temperature Converter`);

// Declaring Variables

let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

// Celsius to Fahrenheit Function

const celToFah = () => {
  let c2f = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(c2f.toFixed(2));
};

// Celsius To Kelvin Function

const celToKel = () => {
  let c2k = parseFloat(celsius.value) + 273.15;
  kelvin.value = parseFloat(c2k);
};

// Fahrenheit to Celsius Function

const fahToCel = () => {
  let f2c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(f2c.toFixed(2));
};

// Fahrenheit to Kelvin Function

const fahToKel = () => {
  let f2k = ((parseFloat(fahrenheit.value) - 32) * 5) / 9 + 273.15;
  kelvin.value = parseFloat(f2k.toFixed(2));
};

// Kelvin to Celsius Function

const kelToCel = () => {
  let k2c = parseFloat(kelvin.value) - 273.15;
  celsius.value = parseFloat(k2c);
};

// Kelvin to Fahrenheit Function

const kelToFah = () => {
  let k2f = ((parseFloat(kelvin.value) - 273.15) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(k2f.toFixed(2));
};
