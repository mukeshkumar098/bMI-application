const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#Height").value);
    const weight = parseInt(document.querySelector("#Weight").value);
    const results = document.querySelector("#result");
    const guide = document.getElementById('guide');


    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`;

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${weight}`;

    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}<span>`

    }
    // if (bmi < 18.6) {
    //     guide.innerHTML = 'Under Weight'
    // } else if (bmi > 18.6 || bmi < 24.6) {
    //     guide.innerHTML = ' Normal'
    // }

})
document.querySelector('.male').addEventListener('click', () => {
    document.querySelector('.male').style.color = 'red'
    document.querySelector('.male').style.background = ' rgb(79, 79, 114)'
    document.querySelector('.female').style.color = 'white'
    document.querySelector('.female').style.background = ' rgb(35, 35, 61)'
})
document.querySelector('.female').addEventListener('click', () => {
    document.querySelector('.female').style.color = 'red'
    document.querySelector('.female').style.background = ' rgb(79, 79, 114)'
    document.querySelector('.male').style.color = 'white'
    document.querySelector('.male').style.background = ' rgb(35, 35, 61)'
})