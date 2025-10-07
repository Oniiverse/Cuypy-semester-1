let body = document.body;
let info = document.getElementById("info")
let mode = document.getElementById("mode")
let home = document.getElementById("home")
let nyaman = document.getElementById("nyaman")
const gelapLImit = 5;
let gelapConter = 0;
let gelapRemainingLeft;

function darkMode() {
      if (gelapRemainingLeft == 0) {
            info.textContent = 'kesempatan anda sudah habis'
            home.textContent = 'RESTART'
            mode.style.display = "none"

            return
      }
      gelapConter += 1;
      gelapRemainingLeft = gelapLImit - gelapConter
      body.classList.toggle("gelap")
      info.textContent = `sisa ${gelapRemainingLeft}`
      if (gelapRemainingLeft == 4) {
            mode.textContent = 'TERANG'
      } if (gelapRemainingLeft == 3) {
            mode.textContent = 'GELAP'
      } if (gelapRemainingLeft == 2) {
            mode.textContent = 'TERANG'
      } if (gelapRemainingLeft == 1) {
            mode.textContent = 'GELAP'
      }
}

function mataMode() {
      if (gelapRemainingLeft == 0) {
            info.textContent = 'kesempatan anda sudah habis'
            home.textContent = 'RESTART'
            mode.style.display = "none"
            nyaman.style.display = "none"
            return
      }
      gelapConter += 1;
      gelapRemainingLeft = gelapLImit - gelapConter
      body.classList.toggle("nyaman")
      info.textContent = `sisa ${gelapRemainingLeft}`
      if (gelapRemainingLeft == 4) {
            nyaman.textContent = 'TERANG'
      } if (gelapRemainingLeft == 3) {
            nyaman.textContent = 'NYAMAN'
      } if (gelapRemainingLeft == 2) {
            nyaman.textContent = 'TERANG'
      } if (gelapRemainingLeft == 1) {
            nyaman.textContent = 'NYAMAN'
      }
}

function reload() {
      location.reload()
}
