const randomDamage = () => {
    return Math.floor(Math.random()* 10 + 1);
}
console.log(`Random Damage: ${randomDamage()}`);

//to add an armor stat, replace above with:
const randomDamageArmor = (armor) => {
    let damage = Math.floor(Math.random()* 10 + 1);
    
    damage = damage - armor;
    if(damage < 0){
        damage = 0;
    } 
    return damage;
}
console.log(`Damage with armor: ${randomDamageArmor(5)}`);


const chooseOption = (opt1, opt2) => {
    let randNum = Math.round(Math.random());
    return (randNum%2 === 0) ? opt1 :  opt2;  
}
console.log(chooseOption('Heads','Tails'));

const attackPlayer = function(health){
    return health - randomDamage();
}
console.log(attackPlayer(100));

const logHealth = (player, health) => {    
    console.log(`${player} health: ${health}`);
}
logHealth('Tiger Mask', 100);

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}.`);
}
logDeath("Stone Cold", "The Rock");

const isDead = (health) => {
    return health <= 0 ? true : false;
}
console.log(isDead(-5));

function fight(player1, player2, player1Health, player2Health){

    console.log(`Tonight's matchup is ${player1} vs. ${player2}! FIGHT!!`);
    
    while (true) {
        const attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
        }
    }
}

fight(`Sasha Banks`, `Bull Nakano`, 100, 100);