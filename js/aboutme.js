
//header animatie 

var tl = new TimelineMax()
.from(".me", 1, {y:-1000, ease:Back.easeOut})
.from(".header", .5, {y:-100, ease:Back.easeOut}, .5)


//einde header animatie
  
  var q1 = $(".q1");
  var q2 = $(".q2");
  var q3 = $(".q3");
  var q4 = $(".q4");
  var q5 = $(".q5");
  var q6 = $(".q6");
  var q7 = $(".q7");
  var q8 = $(".q8");
  var q9 = $(".q9");
  var qback = $(".qback");
  var isTouch

  TweenMax.set(q1, {css:{
          transformStyle:"preserve-3d",
          z:0
        }}); 

  TweenMax.set(q2, {css:{
          transformStyle:"preserve-3d",
          z:0
        }}); 
  TweenMax.set(q3, {css:{
          transformStyle:"preserve-3d",
          z:0
        }}); 

  TweenMax.set(q4, {css:{
          transformStyle:"preserve-3d",
          z:0
        }}); 

  TweenMax.set(q5, {css:{
          transformStyle:"preserve-3d",
          z:0
        }}); 

  TweenMax.set(q6, {css:{
           transformStyle:"preserve-3d",
          z:0
        }}); 

  TweenMax.set(q7, {css:{
          transformStyle:"preserve-3d",
          z:0
          }}); 

  TweenMax.set(q8, {css:{
          transformStyle:"preserve-3d",
          z:0
          }}); 

  TweenMax.set(q9, {css:{
          transformStyle:"preserve-3d",
          z:0
          }}); 


  TweenMax.set(qback, {css:{
    rotationY:-180
  }});

  function flipQ1(e) {
    TweenMax.to(q1, 1, {css:{
      rotationY:"+=180"
    }, onComplete:enableUI, ease:Bounce.easeOut});
    TweenMax.to(q1, 1, {css:{
      z:"-=100"},
      yoyo:true,
      repeat:1,
      ease:Power2.easeInOut
    });
  } 

    function flipQ2(e) {
    TweenMax.to(q2, 1, {css:{
      rotationY:"+=180"
    }, onComplete:enableUI, ease:Bounce.easeOut});
    TweenMax.to(q2, 1, {css:{
      z:"-=100"},
      yoyo:true,
      repeat:1,
      ease:Power2.easeInOut
    });
  } 

    function flipQ3(e) {
    TweenMax.to(q3, 1, {css:{
      rotationY:"+=180"
    }, onComplete:enableUI, ease:Bounce.easeOut});
    TweenMax.to(q3, 1, {css:{
      z:"-=100"},
      yoyo:true,
      repeat:1,
      ease:Power2.easeInOut
    });
  } 

      function flipQ4(e) {
    TweenMax.to(q4, 1, {css:{
      rotationY:"+=180"
    }, onComplete:enableUI, ease:Bounce.easeOut});
    TweenMax.to(q4, 1, {css:{
      z:"-=100"},
      yoyo:true,
      repeat:1,
      ease:Power2.easeInOut
    });
  } 

      function flipQ5(e) {
    TweenMax.to(q5, 1, {css:{
      rotationY:"+=180"
    }, onComplete:enableUI, ease:Bounce.easeOut});
    TweenMax.to(q5, 1, {css:{
      z:"-=100"},
      yoyo:true,
      repeat:1,
      ease:Power2.easeInOut
    });
  } 

      function flipQ6(e) {
    TweenMax.to(q6, 1, {css:{
      rotationY:"+=180"
    }, onComplete:enableUI, ease:Bounce.easeOut});
    TweenMax.to(q6, 1, {css:{
      z:"-=100"},
      yoyo:true,
      repeat:1,
      ease:Power2.easeInOut
    });
  } 

      function flipQ7(e) {
    TweenMax.to(q7, 1, {css:{
      rotationY:"+=180"
    }, onComplete:enableUI, ease:Bounce.easeOut});
    TweenMax.to(q7, 1, {css:{
      z:"-=100"},
      yoyo:true,
      repeat:1,
      ease:Power2.easeInOut
    });
  } 

      function flipQ8(e) {
    TweenMax.to(q8, 1, {css:{
      rotationY:"+=180"
    }, onComplete:enableUI, ease:Bounce.easeOut});
    TweenMax.to(q8, 1, {css:{
      z:"-=100"},
      yoyo:true,
      repeat:1,
      ease:Power2.easeInOut
    });
  } 

      function flipQ9(e) {
    TweenMax.to(q9, 1, {css:{
      rotationY:"+=180"
    }, onComplete:enableUI, ease:Bounce.easeOut});
    TweenMax.to(q9, 1, {css:{
      z:"-=100"},
      yoyo:true,
      repeat:1,
      ease:Power2.easeInOut
    });
  } 

//algemene functie, geldt voor alle 9 q's 

  isTouch = ("touchstart" in document.documentElement);

  function enableUI() {
    if(isTouch){
      q1.one("touchend", onMouseDown);
    } else {
      q1.one("click", onMouseDown);
    }
  }





