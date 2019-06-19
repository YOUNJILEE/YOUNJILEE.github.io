        
         

            var $tabMenu = document.querySelector("#tab-menu");
            var $tabMenuEl = $tabMenu.querySelectorAll('a'); //list. [... ... ... ...];
            var $tabContent = document.getElementsByClassName('tab-content'); //list [... ... ... ...];

                var $tab1 =document.querySelector("#tab1");
                var $tab2 =document.querySelector("#tab2");
           
        
            var $music =document.querySelector("#mv");
            var $music_1 =document.querySelector("#mv_1");

            var $section = document.querySelector("section");

            $music.addEventListener("click", music);
    function music(event) {
    window.open("https://youtu.be/Q97zByOS-V4", "팬 뮤비", "width=500, height=300, toolbar=no, menubar=no, scrollbars=no, resizable=yes" );  

  
}

$music_1.addEventListener("click", music_1);
function music_1(event) {
    window.open("https://playerui.music.naver.com/", "팬 뮤비", "width=500, height=300, toolbar=no, menubar=no, scrollbars=no, resizable=yes" );  

  
}




$tab1.addEventListener("click", bg_1);
function bg_1(event) {
    console.log( $section);
    $section.style.background="url(img/bg02_3-min.gif)no-repeat center center fixed/cover";
  
}

$tab2.addEventListener("click", bg_2);
function bg_2(event) {
    console.log( $section);
    $section.style.background="url(img/bg02_1-min.gif)no-repeat center center fixed/cover";
  
}




            console.log( $tab1);
            // console.log($tabMenu, $tabMenuEl);
            // console.log($tabContent);
            for(var i = 0; i < $tabMenuEl.length; i++){
              tabMenuClick(i);
            }
            function tabMenuClick(index){
              //i 의 순서를 체크할 수 있게 index 의 전달인자로 할당.
              $tabMenuEl[index].addEventListener('click', function(e) {
                e.preventDefault();
                for(var i = 0; i < $tabMenuEl.length; i++){
                  //모든 요소에서 .selected 를 삭제.
                  $tabMenuEl[i].classList.remove('selected');
                  $tabContent[i].classList.remove('selected');

          
                  if(i === index){
                    //for 반복문이 실행될 때, 자신의 순서와 i 의 일치 여부를 체크.
                    //같은 경우에 .selected 를 요소에 추가.
                    $tabMenuEl[i].classList.add('selected');
                    $tabContent[i].classList.add('selected');
                    $tabContent[i].classList.add('selected');
                    $tabContent[i].classList.add('selected');


               

                  }
                }
                // for(var i = 0; i < $tabContent.length; i++){
                //   $tabContent[i].classList.remove('selected');
                //   if(i === index){
                //     $tabContent[i].classList.add('selected');
                //   }
                // }
              });
            }


            function openNavbar() {
  document.querySelector("#navbar").style.width = "100%";
  document.querySelectorAll(".open")[0].style.opacity = 0;
}
function closeNavbar() {
  document.querySelector("#navbar").style.width = "0";
  document.querySelectorAll(".open")[0].style.opacity = 1;
}


var music = document.getElementById("music");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var playhead = document.getElementById("elapsed");
var timeline = document.getElementById("slider");
var timer = document.getElementById("timer");
var duration;
pauseButton.style.visibility = "hidden";

var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
music.addEventListener("timeupdate", timeUpdate, false);

function timeUpdate() {
	var playPercent = timelineWidth * (music.currentTime / duration);
	playhead.style.width = playPercent + "px";

	var secondsIn = Math.floor(((music.currentTime / duration) / 3.5) * 100);
	if (secondsIn <= 9) {
		timer.innerHTML = "0:0" + secondsIn;
	} else {
		timer.innerHTML = "0:" + secondsIn;
	}
}

playButton.onclick = function() {
	music.play();
	playButton.style.visibility = "hidden";
	pause.style.visibility = "visible";
}

pauseButton.onclick = function() {
	music.pause();
	playButton.style.visibility = "visible";
	pause.style.visibility = "hidden";
}

music.addEventListener("canplaythrough", function () {
	duration = music.duration;
}, false);
 