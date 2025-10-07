const nama = "onii_chan";
let usia = 30;

let biodata = document.getElementById('biodata');

function generate() {
      let generasi;
      if (usia > 20 && usia < 31) {
            generasi = "anda sudah dewasa";
      } else if (usia > 30 && usia < 41) {
            generasi = "anda sudah sangat dewasa";
      } else if (usia > 40) {
            generasi = "anda sudah bau tanah";
      } else {
            generasi = "anda masih bocah";
      }
      return biodata.innerHTML = generasi;
}
generate();
