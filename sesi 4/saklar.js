function saklar() {

      // cetrekannya
      let toggle1 = document.getElementById("default-toggle1");
      let toggle2 = document.getElementById("default-toggle2");
      let toggle3 = document.getElementById("default-toggle3");
      let toggle4 = document.getElementById("default-toggle4");
      let toggle5 = document.getElementById("default-toggle5");
      let toggle6 = document.getElementById("default-toggle6");
      let toggle7 = document.getElementById("default-toggle7");
      let toggle8 = document.getElementById("default-toggle8");
      let toggle9 = document.getElementById("default-toggle9");
      let toggle10 = document.getElementById("default-toggle10");

      // grup cetrekannya
      let togglegrup1 = document.getElementById("default-togglegrup1");
      let togglegrup2 = document.getElementById("default-togglegrup2");
      let togglegrup3 = document.getElementById("default-togglegrup3");
      let togglegrup4 = document.getElementById("default-togglegrup4");

      // lampunya
      let lampu1 = document.getElementById("lampu1");
      let lampu2 = document.getElementById("lampu2");
      let lampu3 = document.getElementById("lampu3");
      let lampu4 = document.getElementById("lampu4");
      let lampu5 = document.getElementById("lampu5");
      let lampu6 = document.getElementById("lampu6");
      let lampu7 = document.getElementById("lampu7");
      let lampu8 = document.getElementById("lampu8");
      let lampu9 = document.getElementById("lampu9");
      let lampu10 = document.getElementById("lampu10");


      if (toggle1.checked || togglegrup1.checked) {
            lampu1.src = "asset/img/on.png";
      } else {
            lampu1.src = "asset/img/off.png";
      }
      if (toggle2.checked || togglegrup2.checked) {
            lampu2.src = "asset/img/on.png";
      } else {
            lampu2.src = "asset/img/off.png";
      }
      if (toggle3.checked || togglegrup2.checked) {
            lampu3.src = "asset/img/on.png";
      } else {
            lampu3.src = "asset/img/off.png";
      }
      if (toggle4.checked || togglegrup3.checked) {
            lampu4.src = "asset/img/on.png";
      } else {
            lampu4.src = "asset/img/off.png";
      }
      if (toggle5.checked || togglegrup3.checked) {
            lampu5.src = "asset/img/on.png";
      } else {
            lampu5.src = "asset/img/off.png";
      }
      if (toggle6.checked || togglegrup3.checked) {
            lampu6.src = "asset/img/on.png";
      } else
            lampu6.src = "asset/img/off.png";

      if (toggle7.checked || togglegrup4.checked) {
            lampu7.src = "asset/img/on.png";
      } else {
            lampu7.src = "asset/img/off.png";
      }
      if (toggle8.checked || togglegrup4.checked) {
            lampu8.src = "asset/img/on.png";
      } else {
            lampu8.src = "asset/img/off.png";
      }
      if (toggle9.checked || togglegrup4.checked) {
            lampu9.src = "asset/img/on.png";
      } else {
            lampu9.src = "asset/img/off.png";
      }
      if (toggle10.checked || togglegrup4.checked) {
            lampu10.src = "asset/img/on.png";
      } else {
            lampu10.src = "asset/img/off.png";
      }
}