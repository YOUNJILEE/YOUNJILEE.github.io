       var $tabMenu = document.querySelector("#tab-menu");
            var $tabMenuEl = $tabMenu.querySelectorAll('a'); //list. [... ... ... ...];
            var $tabContent = document.getElementsByClassName('tab-content'); //list [... ... ... ...];

            var $tab1 =document.querySelector("#tab1");
            var $tab2 =document.querySelector("#tab2");
            var $tab3 =document.querySelector("#tab3");
            var $tab4 =document.querySelector("#tab4");
            var $tab5 =document.querySelector("#tab5");


            var $section = document.querySelector("section");





$tab1.addEventListener("click", bg_1);
function bg_1(event) {
    console.log( $section);
    $section.style.background="url(img/bg02_1-min.gif)no-repeat center center fixed/cover";
  
}

$tab2.addEventListener("click", bg_2);
function bg_2(event) {
    console.log( $section);
    $section.style.background="url(img/bg02_2-min.gif)no-repeat center center fixed/cover";
  
}

$tab3.addEventListener("click", bg_3);
function bg_3(event) {
    console.log( $section);
    $section.style.background="url(img/bg02_3-min.gif)no-repeat center center fixed/cover";
  
}


$tab4.addEventListener("click", bg_4);
function bg_4(event) {
    console.log( $section);
    $section.style.background="url(img/bg02_4-min.gif)no-repeat center center fixed/cover";
  
}

$tab5.addEventListener("click", bg_5);
function bg_5(event) {
    console.log( $section);
    $section.style.background="url(img/bg02_5-min.gif)no-repeat center center fixed/cover";
  
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
