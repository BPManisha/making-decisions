/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
// define variables Jonand Jamies Attack power
let jonSnowAttack = 25;
let jamieLannisterAttack = 45;

//Before the battle begins, Jon and Jamie decide to compare attack strengths to get insight into who might win this battle. Using an if-else statement, console.log who has the greater attack strength.
//What if we have a tie? Our code would actually give the win to Jamie, which is no good. Add in an else if to resolve this.
if (jonSnowAttack > jamieLannisterAttack) {
  console.log(`Jon Snow has better attack than Jamie`);
} else if (jamieLannisterAttack > jonSnowAttack) {
  console.log(`Jamie has a better attack than Jon`);
} else {
  console.log(`Jon and Jamie have the same attack`);
}

//Jamie, knowing he is the superior, initiates a fight with Jon. Let's create some additional stats for Jon Snow so we can see how this plays out.
let jonSnowHealth = 100;
let jonSnowDefense = 0;

//Jamie attacks first - use an if/else to determine if Jon Snow can survive the attack. If he does not, console.log "Jon Snow has been slain." Otherwise, console.log Jon Snow's health.

if (jonSnowHealth <= jamieLannisterAttack) {
  console.log(`Jon Snow has been slained`);
} else {
  // jonSnowHealth = jonSnowHealth - jamieLannisterAttack
  jonSnowHealth -= jamieLannisterAttack;
  console.log(`Jon Snow's health is down to ${jonSnowHealth}`);
  // console.log('Jon Snows health is down to ' + jonSnowHealth)
}

//Jon Snow, adamant he does not want to fight Jamie (can you blame him?), picks up a shield to help defend himself. Increase Jon's defense by 25.
// jonSnowDefense = jonSnowDefense + 25
jonSnowDefense += 25;

//Jamie attacks again - use an if/else to determine if Jon Snow can survive the attack. Make sure to account for Jon's defense. If he does not, console.log "Jon Snow has been slain." Otherwise, console.log Jon Snow's health.

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
  console.log(`Jon Snow has been slained`);
} else {
  // jonSnowHealth = jonSnowHealth - jamieLannisterAttack
  jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
  console.log(`Jon Snow's health is down to ${jonSnowHealth}`);
  // console.log('Jon Snows health is down to ' + jonSnowHealth)
}
