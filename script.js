var t1 = gsap.timeline()
t1.from(".page1 h1, .page1 span",{
    duration:0.4,
    x:100,
    opacity:0,
    stagger:0.2,
    scale:1,


})
t1.from(".logo h2,.navlinks ul,.navbuttons",{

    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.4
})
t1.from(".image img",{
    x:-50,
    opacity:0,
    duration:0.4,
    scale:0.8,
    blur:2
})
t1.from(".content h2,.content h3",{
    y:50,
    duration:0.4,
    opacity:0,
    stagger:0.5
})
t1.from(".bottom-content",{
    y:-100,
    opacity:0,
    duration:0.2,
})



