function createDonnut() {
    const donnut = document.createElement('div');
    donnut.classList.add('donnut');

    donnut.style.left = Math.random() * 100 + "vw";
    donnut.style.animationDuration = Math.random() * 2 + 3 + "s";

    donnut.innerText = 'Erreur 4🍩4'

    document.body.appendChild(donnut);
    setTimeout(() => {
        donnut.remove();
    }, 5000);
}

setInterval(createDonnut, 300)