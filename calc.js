var button = document.getElementById('btn');
var input = document.getElementById('pounds');
var resultInKg = document.getElementById('result');

button.addEventListener('click', function() {
    input = parseInt(input.value);
    resultInKg.textContent = (input / 2.2046).toFixed(2);

})
