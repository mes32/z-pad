let startingText = 'HELLO WORLD!\n'

function insertCursor() {
  const textArea = document.getElementById('textarea')
  const span = document.createElement('span')
  span.innerHTML = '_'
  span.id = 'cursor'
  textArea.appendChild(span)
}

function insertValue(newValue) {
  const textArea = document.getElementById('textarea')
  const cursor = document.getElementById('cursor')

  for (let i = 0, c = ''; c = newValue.charAt(i); i++) {
    if (c === '\n') {
      const newLine = document.createElement('br')
      textArea.insertBefore(newLine, cursor)
    } else {
      const span = document.createElement('span')
      span.innerHTML = c
      textArea.insertBefore(span, cursor)
    }
  }
}

function removeValue() {
  const textArea = document.getElementById('textarea')
  textArea.removeChild(textArea.lastChild.previousSibling)
}

function logKey(e) {
  if (e.code === 'Enter') {
    insertValue('\n')
  } else if (e.code === 'Backspace') {
    removeValue()
  } else if (e.key.length === 1) {
    insertValue(e.key.toUpperCase())
  }
}

window.onload = function() {
  insertCursor()
  insertValue(startingText)
  document.addEventListener('keydown', logKey)
}