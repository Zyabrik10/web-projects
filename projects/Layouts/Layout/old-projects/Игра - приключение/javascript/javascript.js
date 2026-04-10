// This is my firsy game on javascript, jQuery librery.

// It`ll be funny... I think so!)

// Deliting startWindow by click the button to start the game.
 // $(".windowOffeaturesOfhero").hide();
 //  $(".choosenHero").hide();
 //  $(".startWindow").hide();

$(function(){

    $(".imgOfHeroFirst").css("width", window.innerWidth / $(".imgOfHeroFirst").length);
    $(".imgOfHeroFirst").css("height", window.innerHeight);
    $(".ulOfImgOfHero").css("height", window.innerHeight);
    // $(".img").hide()


let
    startWindow = $(".startWindow"),
    startButton = $(".startButton"),
    num         = 0;

// Animation while click on

$(document).click((event)=>{
    var
        block      = $("<div class='circleWhileClick'></div>"),
        coordinate = {
          x : event.pageX,
          y : event.pageY
        },
        colors = ["#F50001FF","#F77F02FF","#F7F603FF","#6CF769FF","#0FF7F7FF","#0606F6FF","#890088FF"];
    block.offset({top: coordinate.y - 25,left:coordinate.x - 25});
    if(num === 7)num = 0;
    else{
      block.css("background-color", colors[num]);
      num++;
      block.appendTo("body");
    }
    setTimeout(()=>{
      $(".circleWhileClick").remove();
    }, 10000)
});

startButton.click(()=>{
  startWindow.hide();
  	// сделать модальное окно
  alert("И так, игра сейчас начнется! Выбирите персонажа. Делайте это с умом, проверяйте характеристики. Они могут повлиять на исход боя или еще чего.");
});

// during mouse on the img, the img is changing


// opent window whith features of heros
$(".chooseHero ul .choosenHero").click((event)=>{
    if(event.target.getAttribute("name") == "Маг"){
       $(".wrapper").show();
       $(".Yukino").show();
    }else if(event.target.getAttribute("name") == "Хилитель"){
       $(".wrapper").show();
       $(".Rosa").show();
    }else if(event.target.getAttribute("name") == "Воин"){
       soundClick("../sounds/Воин.mp3")
       $(".wrapper").show();
       $(".Richard").show();
    }
    });

    // Close the window windowOffeaturesOfhero

    $(".buttonToClose").click(()=>{
       $(".Richard").hide();
       $(".Yukino").hide();
       $(".Rosa").hide();
       $(".wrapper").hide();
    });

    // Open Compare window

    $(".buttonToCompare").click(()=>{
      $(".compareWindow").show()
      $(".wrapper").css("z-index","3");
    });

    $(".wrapper").click(()=>{
      $(".compareWindow").hide()
      $(".wrapper").css("z-index","1");
    });

    // Start game

    $(".buttonToChoose").click((event)=>{
    if(event.target.getAttribute("name") == "Маг"){
      alert("Маг")
    }else if(event.target.getAttribute("name") == "Хилитель"){
      alert("Хил")
    }else if(event.target.getAttribute("name") == "Воин"){
       alert("Воин")
    }
    })

});
