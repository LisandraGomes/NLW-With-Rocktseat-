function createGame(player1, hour, player2){
    return `
    <li>
    <img class="bandeirinhas" src="./assets/bandeiras/icon-${player1}.svg" alt="${player1}">
    <strong>${hour}</strong>
    <img class="bandeirinhas" src="./assets/bandeiras/icon-${player2}.svg" alt="${player2}">
    </li>
    `
}

let delay = -0.3;

function createCard(date, day, games){
    delay = delay + 0.9;
    return `
           <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
        <ul>
        ${games}
        </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML = `
           ${createCard("21/11", "Segunda", 
                createGame('brasil', '16:00', 'coreia-sul' ) + 
                createGame('brasil', '19:00', 'coreia-sul' )
           )} 
           
           ${createCard("22/11", "Terça", 
                createGame('brasil', '16:00', 'coreia-sul' ) + 
                createGame('brasil', '18:00', 'coreia-sul' )
           )} 
`