/* 动态算rem */
(function (doc, win, undefined) {
  var docEl = doc.documentElement;
    resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (clientWidth === undefined) return;
      docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
    };
  if (doc.addEventListener === undefined) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);

window.onscroll=function(){
  var aImg=document.getElementById("aimg");
  var solution=document.getElementById("solution");
  var main=document.getElementById("main");
  var fibreTitle=document.getElementById("fibre_title");
  var advanceTitle=document.getElementById("advance_title");
  var data=document.getElementById("data");
  var analyse=document.getElementById("analyse");
  var modeling=document.getElementById("modeling");
  var point=document.getElementById("point");
  var wSolution=document.getElementById("w_solution");
  var core=document.getElementById("core");
  var content=document.getElementById("content");
  var person=document.getElementById("person");
  var introduce=document.getElementById("introduce");
  var threeD=document.getElementById("threeD");
  var ThreeD=document.getElementById("three_D");
  var project=document.getElementById("project");
  var wHeight=document.documentElement.clientHeight-400;
  var yHeight=document.documentElement.clientHeight;
  var zHeight=document.documentElement.clientHeight-100;
  var Stop=document.documentElement.scrollTop || document.body.scrollTop;
  if(aImg != null) {
    if (yHeight + Stop >= aImg.offsetTop) {
      $(".aimg1").addClass('animated slideInLeft');
      $(".aimg2").addClass('animated slideInRight');
      $(".abouttxt").addClass('animated slideInLeft')
    }
  }
  if(solution != null) {
    if (wHeight + Stop >= solution.offsetTop) {
      $(".imgtxt1").addClass('animated fadeInRightBig');
      $(".imgtxt2").addClass('animated fadeInLeftBig');
      $(".imgtxt3").addClass('animated fadeInUpBig')
    }
    if (yHeight + Stop >= solution.offsetTop) {
      $(".solution_title").addClass('animated fadeInDownBig')
    }
  }
  if(main !=null) {
    if (yHeight + Stop >= main.offsetTop) {
      $(".maintxt").addClass('animated slideInRight');
      $(".main h3").addClass('animated slideInRight')
    }
  }
  if (modeling != null) {
    if (yHeight + Stop >= modeling.offsetTop) {
      $(".modelingtxt").addClass('animated fadeInLeftBig')
    }
  }
  if(analyse !=null) {
    if (zHeight + Stop >= analyse.offsetTop) {
      $("#analyse>img").addClass('animated fadeInLeftBig')
    }
  }
  if(point !=null) {
    if (yHeight + Stop >= point.offsetTop) {
      $(".pz").addClass('animated fadeInLeftBig');
      $(".cj").addClass('animated fadeInRightBig')
    }
  }
  if(data !=null) {
    if (zHeight + Stop >= data.offsetTop) {
      $(".data").addClass('animated slideInLeft');
      $(".pro").addClass('animated fadeInUpBig');
      $(".resoult").addClass('animated fadeInUpBig');
      $(".qua").addClass('animated slideInRight')
    }
  }
  if(fibreTitle !=null) {
    if (yHeight + Stop >= fibreTitle.offsetTop) {
      $("#fibre_title").addClass('animated slideInLeft')
    }
  }
  if(advanceTitle !=null) {
    if (yHeight + Stop >= advanceTitle.offsetTop) {
      $("#advance_title").addClass('animated fadeInLeft')
    }
  }
  if(wSolution !=null) {
    if (yHeight +Stop >= wSolution.offsetTop) {
      $("#w_solution>h3").addClass('animated fadeInDown')
    }
  }
  if(core !=null) {
    if (yHeight + Stop >= core.offsetTop) {
      $("#core>h3").addClass('animated  fadeInLeft');
      $("#core_txt").addClass('animated  fadeInUp')
    }
  }
  if(content !=null) {
    if (yHeight + Stop >= content.offsetTop) {
      $("#content h3").addClass('animated  fadeInUp')

    }
  }
  if(person !=null) {
    if (yHeight + Stop >= person.offsetTop) {
      $("#person h3").addClass('animated  fadeInDown')
    }
    if (zHeight + Stop >= person.offsetTop) {
      $("#person p").addClass('animated  fadeInLeft')
    }
  }
  if(introduce !=null) {
    if (yHeight + Stop >= introduce.offsetTop) {
      $("#introduce").addClass('animated  fadeInRight')
    }
  }
  if(threeD !=null) {
    if (yHeight + Stop >= threeD.offsetTop) {
      $("#threeD h3").addClass('animated  fadeInDown')
    }
  }
  if(ThreeD !=null) {
    if (yHeight +Stop >= ThreeD.offsetTop) {
      $("#three_D h3").addClass('animated  fadeInDown')
    }
  }
  if(project !=null) {
    if (yHeight +Stop >= project.offsetTop) {
      $("#project h4").addClass('animated  fadeInDown')
    }
  }
}
