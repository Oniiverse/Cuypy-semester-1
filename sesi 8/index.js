let passwordLength = document.getElementById('passwordLength')
let password = document.getElementById('password')
let saveButton = document.getElementById('saveButton')

function generet(passwordLength) {
      const loweAlphabet = "abcdefghijklmnopqrstuvwxyz"
      const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      const numeric = "0123456789"
      const symbol = "~!@#$%^&*()_+=-`}{|:?><][';/.,"
      const data = loweAlphabet + upperAlphabet + numeric + symbol
      let generator = '';
      for (let passwd = 0; passwd < passwordLength; passwd++) {
            generator += data[~~(Math.random() * data.length)];
      }
      return generator
}
function getPassword() {
      let newPassword = generet(passwordLength.value)
      password.value = newPassword
      setTimeout(() => {
            alert('sukses!!!')
      }, 1000)

}
function reload() {
      location.reload()
}
function savePassword() {
      const pw = password.value
      saveButton.setAttribute('href', 'data:txt/plain;charset=utf-8,'
            + encodeURIComponent(`password saya: ${pw}`))

}