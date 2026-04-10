	$(()=>{

class Game{
	constructor(features){
		this.name = features.name,
		this.health = features.health,
		this.defense = features.defense,
		this.damage = features.damage,
		this.bonus = features.bonus,
		this.class = features.class;
	}
}
var move = 0;

let hero = new Game({
	class: ".hero",
	health: 1000,
	defense: 10,
	damage: 100,
	bonus: 10
});

let enemy = new Game({
	class: ".enemy",
	health: 1000,
	defense: 0,
	damage: 10,
	bonus: 30
});

$(".enemy").attr("max", enemy.health);
$(".enemy").attr("value", enemy.health);
$(".hero").attr("max", hero.health);
$(".hero").attr("value", hero.health);

// Удалил функцию

function damageEnemy(gg,en) {
	$(en.class).attr("value", en.health - (gg.damage - (gg.damage * en.defense) / 100));
    en.health -= gg.damage - (gg.damage * en.bonus) / 100;
}

function play(){
if(move >= 3){
	move = 0;
    hero.defense =  hero.defense;
    $(".defense").attr("disabled", false);
}
move++;
    $(".damage").attr("disabled", true);

damageEnemy(hero, enemy);

setTimeout(()=> {

damageEnemy(enemy, hero);

$(".damage").attr("disabled", false);

if(enemy.health <= 0){
	alert("Won")
	$(".damage").attr("disabled", true)
	return;
}else if(hero.health <= 0){
	alert("Lose")
	$(".damage").attr("disabled", true)
	return;
};

},1000);
		
}

$(".damage").bind("click", play);

// $(".defense").click(()=>{
// $(".defense").attr("disabled", true);
// hero.defense += hero.bonus;
// console.log(enemy.health - (hero.damage - (hero.damage * enemy.defense)/100));

// damageEnemy(enemy, hero);

// 	    console.log(hero);
// 		console.log(enemy);
// 		console.log(move);
// });
});