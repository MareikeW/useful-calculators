var button = document.getElementById('btn');
var input = document.getElementById('pounds');
var resultInKg = document.getElementById('result');

button.addEventListener('click', function() {
  input = parseFloat(input.value);
  resultInKg.textContent = (input / 2.2046).toFixed(2);

})


/* To-Do-Liste
- Was tun, wenn Komma eingegeben wird? Umwandeln?
- Neue Eingabe ohne neu laden zu müssen
- "Eingabe ändern"-Button?
*/
