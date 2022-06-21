function computerPlay() {
    let i;
    i = Math.floor(Math.random() * 3);
    console.log(i)
    if (i === 0) return 'Rock';
    if (i === 1) return 'Paper';
    if (i === 2) return 'Scissors';

}
console.log(computerPlay())