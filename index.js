const htp = require('http');
const rupiahFormat = require('rupiah-format');
const host = '127.0.0.1'
const port = 3000
const rupiah = rupiahFormat

const server = htp.createServer(function (minta, memberi) {
      let nama = "Onii-chan"
      let saldo = 50000
      let jajan = 40000
      let sisa = saldo - jajan
      saldo = rupiah.convert(saldo)
      jajan = rupiah.convert(jajan)
      sisa = rupiah.convert(sisa)
      let hasil = `
      <head>
      <title>${nama}</title>
      </head>
      <body>
            <h3 
            style='background:red; color:black; padding:20px;display: flex;
            justify-content: center;
            align-items: center;'>NODE JS PERHITUNGAN</h3>
            <p>
                  nama saya ${nama} 
            </p>
            <p>
                  saya memiliki uang sebanyak ${saldo}
                  dan uang jajan saya sebanyak ${jajan}.
                  berarti, sisa uang yang saya miliki adalah:${sisa}
            </p>
      </body>
            `


      memberi.statusCode = 200;
      memberi.end(hasil)
});
server.listen(port, host, function () {
      console.log('server menyala di port:', host, ':', port)
})