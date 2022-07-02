let text = 'HELLO WORLD!\n'

function setValue(newValue) {
  const textArea = document.getElementById('textarea')

  for (let i = 0, c = ''; c = newValue.charAt(i); i++) {
    if (c === '\n') {
      const newLine = document.createElement('br')
      textArea.appendChild(newLine)
    } else {
      const span = document.createElement('span')
      span.innerHTML = c
      textArea.appendChild(span)
    }
  }
}

function removeValue() {
  const textArea = document.getElementById('textarea')
  textArea.removeChild(textArea.lastChild)
}

function logKey(e) {
  if (e.code === 'Enter') {
    setValue('\n')
  } else if (e.code === 'Backspace') {
    removeValue()
  } else if (e.key.length === 1) {
    setValue(e.key.toUpperCase())
  }
}

window.onload = function() {
  setValue(text)
  document.addEventListener('keydown', logKey)
}