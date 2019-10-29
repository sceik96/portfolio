
var tl = new TimelineMax();
tl
.from(".img1", .5, {x:400, opacity:0})
.from(".text1", .5, {opacity:0}, .3)
.from(".img2", .5, {x:-400, opacity:0}, .6) 
.from(".text2", .5, {opacity:0}, .9)
.from(".img3", .5, {x:400, opacity:0}, 1.2)
.from(".text3", .5, {opacity:0}, 1.5)
.from(".img4", .5, {x:-400, opacity:0}, 1.8)
.from(".text4", .5, {opacity:0}, 2.1)
.from(".video", .8, {opacity:0, scale:0, ease:Elastic.easeOut }, 1.4)

