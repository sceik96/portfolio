
var tl = new TimelineMax();
tl
.from(".header", .5, {y:-100, ease:Back.easeOut})
.from(".content", .5, {y:700, opacity:0}, .3) 
.from(".title", .8, {opacity:0, scale:0, ease:Elastic.easeOut }, .8)
.from(".process", .8, {opacity:0, scale:0, ease:Elastic.easeOut }, 1)
