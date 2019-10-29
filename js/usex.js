
var tl = new TimelineMax();
tl
.from(".header", .5, {y:-100, ease:Back.easeOut})
.from(".surf", .5, {x:-400, opacity:0}, .3) 
.from(".nettie", .5, {x:400, opacity:0}, .6)
.from(".ro", .5, {x:-400, opacity:0}, .9)
.from(".title", .8, {opacity:0, scale:0, ease:Elastic.easeOut }, 1.4)

