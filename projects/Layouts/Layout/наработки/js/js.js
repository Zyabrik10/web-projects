
// <!-- Типу як виглядає кнопка яка є саб меню -->

function getLengthMenuSubmenu(){
	const li = document.querySelectorAll(".menu-1__list > li");

	var arr = [];
	var subs = [];
	var sub_subs = [];

	for (i = 0; i < li.length;i++) {
		arr.push(li[i].querySelectorAll(".sub-menu-1__list > li"));
		subs.push(li[i].querySelectorAll(".sub-menu-1__list > li").length);		
	}

	for (i = 0; i < arr.length; i++){
		sub_subs[i] = [];
		for (j = 0; j < arr[i].length; j++){
			sub_subs[i].push(arr[i][j].querySelectorAll(".sub-sub-menu-1__list > li").length);
		}
	}

	var i, j;

	return [subs, sub_subs]
}

const menu = document.querySelector(".menu-1");

const subs = getLengthMenuSubmenu();

function cust(){
	for(var j = 0; j < subs[1].length; j++){
		for (var k = 0; k < subs[1][j]; k++){

		}
	}
}

// menu.addEventListener("mousemove", function(e){
// 	console.log(e.target);
// });

// <!-- /Типу як виглядає кнопка яка є саб меню -->


// <!-- CHEACKBOX -->

const checkbox_1 = document.querySelectorAll(".checkbox-1");
const checkbox_1_cr = document.querySelectorAll(".checkbox-1 .left-cr");

for (var i = 0; i < checkbox_1.length;i++){

	checkbox_1[i].addEventListener("click", function (){
		this.setAttribute("data-checked", !JSON.parse(this.getAttribute("data-checked")));

		if (JSON.parse(this.getAttribute("data-checked"))){
			this.style.animation = "background-checked .2s linear forwards";
			this.querySelector(".left-cr").style.animation = "big-cr-checked .3s ease forwards";
		}else{
			this.style.animation = "background-unchecked .2s linear forwards";
			this.querySelector(".left-cr").style.animation = "big-cr-unchecked .3s ease forwards";
			}
	})
}

// <!-- /CHEACKBOX -->