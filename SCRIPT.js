const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');

    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // console.log(valueTemp);

    const celToFah = (cel) => {
        let fahrenite = Math.round((cel * 9 / 5) + 32);
        return fahrenite;
    }

    const fahToCel = (fah) => {
        let celsius = Math.round((fah - 32) * 5 / 9);
        return celsius;
    }

    let result;

    if (valueTemp == 'cel') {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `=  ${result}°Fahrenite`;
    }
    else {
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `=  ${result}°Celsius`;
    }



}