const verses = [
    { verse: "Perché Dio ha tanto amato il mondo, che ha dato il suo unigenito Figlio.", reference: "Giovanni 3:16" },
    { verse: "Geova è il mio pastore: non mi mancherà nulla.", reference: "Salmo 23:1" },
    { verse: "Il vostro cuore non sia turbato. Abbiate fede in Dio; abbiate fede anche in me.", reference: "Giovanni 14:1" },
    { verse: "Io sono la via, la verità e la vita. Nessuno viene al Padre se non per mezzo di me.", reference: "Giovanni 14:6" },
    { verse: "Tutto posso in virtù di colui che mi dà potenza.", reference: "Filippesi 4:13" },
    { verse: "Nessuna calamità ti colpirà, e nessuna piaga si avvicinerà alla tua tenda.", reference: "Salmo 91:10" },
    { verse: "Non abbiate nessuna ansietà per nulla, ma in ogni cosa le vostre richieste siano rese note a Dio.", reference: "Filippesi 4:6" },
    { verse: "Il frutto dello spirito è amore, gioia, pace, pazienza, benignità, bontà, fede.", reference: "Galati 5:22" },
];

let currentVerseIndex = 0;

function displayVerse() {
    const verseText = document.querySelector('.card-front p');
    const verseReference = document.querySelector('.card-back p');

    verseText.textContent = verses[currentVerseIndex].verse;
    verseReference.textContent = verses[currentVerseIndex].reference;
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('is-flipped');
    });
});

document.getElementById('prev').addEventListener('click', function() {
    currentVerseIndex = (currentVerseIndex === 0) ? verses.length - 1 : currentVerseIndex - 1;
    displayVerse();
});

document.getElementById('next').addEventListener('click', function() {
    currentVerseIndex = (currentVerseIndex === verses.length - 1) ? 0 : currentVerseIndex + 1;
    displayVerse();
});

document.addEventListener('DOMContentLoaded', displayVerse);