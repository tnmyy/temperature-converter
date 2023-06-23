console.log(`Temperature Converter`);

// Declaring Variables

let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

// Celsius to Fahrenheit Function

celsius.addEventListener("input", () => {
  let c2f = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(c2f.toFixed(2));
});

// Celsius To Kelvin Function

celsius.addEventListener("input", () => {
  let c2k = parseFloat(celsius.value) + 273.15;
  kelvin.value = parseFloat(c2k);
});

// Fahrenheit to Celsius Function

fahrenheit.addEventListener("input", () => {
  let f2c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(f2c.toFixed(2));
});

// Fahrenheit to Kelvin Function

fahrenheit.addEventListener("input", () => {
  let f2k = ((parseFloat(fahrenheit.value) - 32) * 5) / 9 + 273.15;
  kelvin.value = parseFloat(f2k.toFixed(2));
});

// Kelvin to Celsius Function

kelvin.addEventListener("input", () => {
  let k2c = parseFloat(kelvin.value) - 273.15;
  celsius.value = parseFloat(k2c);
});

// Kelvin to Fahrenheit Function

kelvin.addEventListener("input", () => {
  let k2f = ((parseFloat(kelvin.value) - 273.15) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(k2f.toFixed(2));
});
