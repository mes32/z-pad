let text = 'HELLO WORLD!'

function setValue(newValue) {
  const textArea = document.getElementById('textarea');
  textArea.value = newValue;
}

window.onload = function() {
  setValue(text)
}