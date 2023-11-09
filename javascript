//typewriting animation
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Important?";
    }, 0);
   
}

textLoad();
setInterval(textLoad, 12000);

//image gallery slider
(function() {
    function scrollH(e) {
        // Prevent scroll default
        e.preventDefault();
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector('.slidea').scrollLeft -= (delta * 40);
    }
    if (document.querySelector('.slidea').addEventListener) {
        document.querySelector('.slidea').addEventListener('mousewheel', scrollH, false);
        document.querySelector('.slidea').addEventListener('DOMMouseScroll', scrollH, false);
    }
})();

//image gallery slider
(function() {
    function scrollH(e) {
        // Prevent scroll default
        e.preventDefault();
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector('.slideb').scrollLeft -= (delta * 40);
    }
    if (document.querySelector('.slideb').addEventListener) {
        document.querySelector('.slideb').addEventListener('mousewheel', scrollH, false);
        document.querySelector('.slideb').addEventListener('DOMMouseScroll', scrollH, false);
    }
})();


//image gallery slider
(function() {
    function scrollH(e) {
        // Prevent scroll default
        e.preventDefault();
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector('.slidec').scrollLeft -= (delta * 40);
    }
    if (document.querySelector('.slidec').addEventListener) {
        document.querySelector('.slidec').addEventListener('mousewheel', scrollH, false);
        document.querySelector('.slidec').addEventListener('DOMMouseScroll', scrollH, false);
    }
})();


//image gallery slider
(function() {
    function scrollH(e) {
        // Prevent scroll default
        e.preventDefault();
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector('.slided').scrollLeft -= (delta * 40);
    }
    if (document.querySelector('.slided').addEventListener) {
        document.querySelector('.slided').addEventListener('mousewheel', scrollH, false);
        document.querySelector('.slided').addEventListener('DOMMouseScroll', scrollH, false);
    }
})();


//image gallery slider
(function() {
    function scrollH(e) {
        // Prevent scroll default
        e.preventDefault();
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector('.slidee').scrollLeft -= (delta * 40);
    }
    if (document.querySelector('.slidee').addEventListener) {
        document.querySelector('.slidee').addEventListener('mousewheel', scrollH, false);
        document.querySelector('.slidee').addEventListener('DOMMouseScroll', scrollH, false);
    }
})();


//animated words to appear on screen when scrolling 
const container = document.querySelector('.animation-scroll');
const animation = container.querySelector('sl-animation');
const box = animation.querySelector('.box');

const observer = new IntersectionObserver(entries => {
    if (entries [0].isIntersecting) {
        //start the animation when the box enters viewpoint 
        animation.play = true;
    } else{
        animation.play = true;
        animation.currentTime = 0;
    }
});
observer.observe(box);






