$(function(){
  const visual = $("#brandVisual>ul>li");
  const button=$("#buttonList>li");
  let current =0; 
  let btnIdx=0; 
  let id; 
  const speed=3000;
  //버튼클릭함수
  button.click(function(){
    let btnIdx=$(this).index();
    button.removeClass("on");
    $(this).addClass("on");

    current=btnIdx;

    /* 클릭한 이미지 띄우기 */
    console.log(btnIdx)  //클릭한 버튼의 순서값
    for (let i = 0; i < 4; i++) { 
      if (btnIdx === i) { 
        visual.eq(i).css("left","100%").stop().animate({left:"0%"});
      } else { 
        visual.eq(i).css("left","100%").stop().animate({left:"-100%"});
      }
    }
 
  });

  //숫자를 i로 넣어서 1부터 6까지 함수식 하나로 만들 방법 찾기!!
  const tab1 =  $("#tab1");
  tab1.hover(function() {
    //마우스 올렸을때
    const tab1_depth = $("#tab1_depth");
    tab1_depth.css("display", "flex")
  }, function(){
    //마우스 떠났을때
    const tab1_depth = $("#tab1_depth");
    tab1_depth.css("display", "none")
  })
  const tab2 =  $("#tab2");
  tab2.hover(function() {
    //마우스 올렸을때
    const tab2_depth = $("#tab2_depth");
    tab2_depth.css("display", "flex")
  }, function(){
    //마우스 떠났을때
    const tab2_depth = $("#tab2_depth");
    tab2_depth.css("display", "none")
  })
  const tab3 =  $("#tab3");
  tab3.hover(function() {
    //마우스 올렸을때
    const tab3_depth = $("#tab3_depth");
    tab3_depth.css("display", "flex")
  }, function(){
    //마우스 떠났을때
    const tab3_depth = $("#tab3_depth");
    tab3_depth.css("display", "none")
  })
  const tab4 =  $("#tab4");
  tab4.hover(function() {
    //마우스 올렸을때
    const tab4_depth = $("#tab4_depth");
    tab4_depth.css("display", "flex")
  }, function(){
    //마우스 떠났을때
    const tab4_depth = $("#tab4_depth");
    tab4_depth.css("display", "none")
  })
  const tab5 =  $("#tab5");
  tab5.hover(function() {
    //마우스 올렸을때
    const tab5_depth = $("#tab5_depth");
    tab5_depth.css("display", "flex")
  }, function(){
    //마우스 떠났을때
    const tab5_depth = $("#tab5_depth");
    tab5_depth.css("display", "none")
  })
  const tab6 =  $("#tab6");
  tab6.hover(function() {
    //마우스 올렸을때
    const tab6_depth = $("#tab6_depth");
    tab6_depth.css("display", "flex")
  }, function(){
    //마우스 떠났을때
    const tab6_depth = $("#tab6_depth");
    tab6_depth.css("display", "none")
  })

  //시간마다실행 setInterval(함수,시간간격)이 들어갈 자리
  // timer();
  // function timer(){
  //   id=setInterval(function(){
  //     let next = current +1; //0+1
  //     // console.log(visual.length);
  //     if (next == visual.length){
  //       next = 0;
  //     }
  //     console.log(next);
  //     button.eq(next).trigger("click");
  //     // move(next);
  //     // console.log(current++)
  //   },speed)
  // };
  // //이동 슬라이드 이동시켜주는 역할만 함. 
  // move();
  // function move(){
  //     if(current==btnIdx)return;//이게 트루면 밑에 거 다 취소. 호출한 지점으로 다시 돌려 보낸다.
  //     //console.log("무브"+current);
  //     let cu=visual.eq(current);
  //     let ne=visual.eq(btnIdx); //의미 파악
  //     cu.css("left","0").stop().animate({left:"-100%"});
  //     ne.css("left","100%").stop().animate({left:"0%"});
  //     current=btnIdx //이거 쓰면 무한 반복 됨. cu에서 ne로 넘어갈 수 있게 됨.
  // }
  // //clearInterval
  // clearAuto();
  // function clearAuto(){
  //   $("#brandVisual, #buttonList, .controls").mouseenter(function(){
  //     clearInterval(id)
  //   })
  //   $("#brandVisual, #buttonList, controls").mouseleave(function(){
  //     timer();
  //   })
  // }
  
  // //좌우컨트롤버튼
  // controls()

  // function controls(){
  //   $('.controls .next').click(function(){
  //     btnIdx=btnIdx+1;
  //     if(btnIdx == visual.length){
  //       btnIdx=0;
  //     }
  //     button.removeClass("on");
  //     button.eq(btnIdx).addClass("on");
      
  //     let cu=visual.eq(current);
  //     let ne=visual.eq(btnIdx); //의미 파악
  //     cu.css("left","0").stop().animate({left:"-100%"});
  //     ne.css("left","100%").stop().animate({left:"0%"});
  //     current=btnIdx
  //   })
  // }

  
  // function controls(){
  //   $('.controls .prev').click(function(){
  //     // console.log(btnIdx=btnIdx-1);
  //     btnIdx=btnIdx-1;
  //     if(current == 0){
  //       btnIdx=visual.length-1;
  //     }
  //     button.removeClass("on");
  //     button.eq(btnIdx).addClass("on");
      
  //     let cu=visual.eq(current);
  //     let pr=visual.eq(btnIdx); //의미 파악
  //     cu.css("left","0").stop().animate({left:"100%"});
  //     pr.css("left","-100%").stop().animate({left:"0%"});
  //     current=btnIdx
  //   })
  // }

});
//jQuery

//javascript

// const visual=document.querySelectorAll
// document.addEventListner("DOMContentLoaded",function(){const visual=document.querySelector("#brandVisual>ul>li")
// visual.style.backgroundColor="white";})

// const visual=document.querySelectorAll

//document.addEventListner("DOMContentLoaded",function(){const visual=document.querySelector("#brandVisual>ul>li")
// visual.style.backgroundColor="white";});
// 
//여러개 요소를 전달받아야 할 때는 querySelectorAll을 적용시켜야 함. querySelector로는 불충분