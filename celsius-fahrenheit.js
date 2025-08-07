function celsiusToFahrenheit(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);
    let flr_cls = Math.floor(celsius);
    console.log(flr_cls);
}

celsiusToFahrenheit(45);
