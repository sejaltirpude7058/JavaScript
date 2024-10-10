const form = document.querySelector('form');
//console.log(form);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let height = parseInt(document.querySelector('#height').value);

  let weight = parseInt(document.querySelector('#weight').value);

  let result = document.querySelector('#results');

  //check Marks
  if (height < 0 || height === '' || isNaN(height)) {
    result.innerHTML = '<span>Please Enter Valid Height</span>';
  } else if (weight < 0 || weight === '' || isNaN(weight)) {
    result.innerHTML = '<span>Please enter Valid Weight</span>';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result.innerHTML = `<span>${bmi}</span>`

    if (bmi < 18.6) {
      result.innerHTML = `<span>Under Weight ${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span>Normal ${bmi}</span>`;
    } else if (bmi > 24.9) {
      result.innerHTML = `<span>Over Weight ${bmi}</span>`;
    } else {
      result.innerHTML = `<span>${bmi}</span>`;
    }
  }
});