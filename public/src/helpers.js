window.setCookie = function (cname, cvalue, exdays) {
  var d = new Date()
  if (cvalue === null) {
    exdays = -1
  }
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  var expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

window.getCookie = function (cname) {
  var name = cname + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return null
}

window.blurInputs = function () {
  const inputs = document.getElementsByTagName('input')
  for (let input of inputs) {
    input.blur()
  }
}

window.toggleBodyScrolling = function () {
  var appContainer = this.document.getElementById('appContainer')
  appContainer.classList.toggle('appContainer--frozen')
}

window.deepClone = function (object) {
  return JSON.parse(JSON.stringify(object))
}
