const circele = document.querySelectorAll(".circel");
const titlese = document.getElementById("titlese")

circele.forEach(circel => {
      circel.addEventListener('click', (style) => {
            const computer = getComputedStyle(style.target)
            // console.log(computer.background)
            document.body.style.background = computer.background
            if (computer.background == "rgb(255, 0, 0)") {
                  titlese.style.color = "rgba(123, 255, 0, 1)"
            } if (computer.background == "rgb(46, 139, 87)") {
                  titlese.style.color = "rgba(226, 241, 16, 1)"
            } if (computer.background == "rgb(238, 130, 238)") {
                  titlese.style.color = "rgba(83, 16, 241, 1)"
            } if (computer.background == "rgb(255, 255, 0)") {
                  titlese.style.color = "rgba(255, 0, 0, 1)"
            } if (computer.background == "rgb(255, 255, 255)") {
                  titlese.style.color = "rgba(0, 0, 0, 1)"
                  document.body.style.background = "rgb(255, 255, 255)"
            }

      })
});

