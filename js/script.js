const cardContainer = document.querySelector('.container');
const shuffleBtn = document.getElementById('shuffleBtn');
const sortBtn = document.getElementById('sortBtn');

const cards = [];

const createCards = () => {
    for (let i = 1; i <= 9; i++) {
        const card = document.createElement('div');
        card.innerHTML = i;
        cards.push(card);
    }
};
createCards();
cards.forEach(card => cardContainer.appendChild(card));

const shuffleCards = () => {
    cards.sort(() => Math.random() - 0.5)
        .forEach(card => cardContainer.appendChild(card));
};

const sortCards = () => {
    cards.sort((a, b) => parseInt(a.innerHTML) - parseInt(b.innerHTML))
        .forEach(card => cardContainer.appendChild(card));
};

shuffleBtn.addEventListener('click', shuffleCards);
sortBtn.addEventListener('click', sortCards);

const name = "Rodali";
document.getElementById('footerName').innerHTML = `Shuffle and sort by ${name}`;