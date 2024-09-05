document.addEventListener("DOMContentLoaded", function () {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 18 || currentHour < 6) {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
  }
});

function copyEmail() {
  const email = "lyciakremer@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    alert("Email copiado para a área de transferência!");
  }).catch(err => {
    console.error('Falha ao copiar o e-mail: ', err);
  });
}

document.addEventListener("DOMContentLoaded", () => {
	const interBubble = document.querySelector(".interactive");
	let curX = 0;
	let curY = 0;
	let tgX = 0;
	let tgY = 0;

	function move() {
		curX += (tgX - curX) / 20;
		curY += (tgY - curY) / 20;
		interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(
			curY
		)}px)`;
		requestAnimationFrame(() => {
			move();
		});
	}

	window.addEventListener("mousemove", (event) => {
		tgX = event.clientX;
		tgY = event.clientY;
	});

	move();
});
