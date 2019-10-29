
var tl = new TimelineMax();
tl
.from(".projects", .5, {x:-400, y:-400, opacity:0}) 
.from(".aboutMe", .5, {x:400, y:-400, opacity:0}, .3)
.from(".contact", .5, {x:-400, y:400, opacity:0}, .6)
.from(".opinions", .5, {x:400, y:400, opacity:0}, .9)
.from(".header", .7, {y:-500, ease:Back.easeOut}, 1)
.from(".title", .8, {opacity:0, scale:0, ease:Elastic.easeOut }, 1.5)


