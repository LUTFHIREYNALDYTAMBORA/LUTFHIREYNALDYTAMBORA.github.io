window.onbeforeunload = () => {
  if (window.scrollTo) window.scrollTo(0, 0);
};

(function () {
  let preload = document.getElementById('preloading');
  let loading = 0;
  let id = setInterval(frame, 64);
  let header = document.querySelector('body');

  function frame() {
    if (loading === 0) {
      clearInterval(id);
      preload.remove();
      header.style.overflow = 'auto';
      // window.open("welcome.html", "_self")
    } else {
      header.style.overflow = 'hidden';
      loading = loading + 1;
      if (loading == 90) {
        preload.style.animation = 'fadeout 1s ease';
      }
    }
  }
})();


var x = window.matchMedia("(max-width: 700px)")
mediaFunction(x) // Call listener function at run time
x.addListener(mediaFunction);

function mediaFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "pink";
  }
}

window.onscroll = () => {
  myFunction();
};

myFunction = () => {
  var x = window.matchMedia("(max-width: 864px)")
  let header = document.querySelector('header');
  let aBrand = document.getElementsByClassName('brand')[0];
  let navLi = document.getElementsByClassName('nav-btn')[0];
  // let ia = navLi.querySelector('i')
  // console.log(ia);
  let brand = document
    .getElementsByClassName('brand')[0]
    .getElementsByTagName('a')[0];
  let nav = document.querySelector('nav');
  let aNav = nav.parentNode.getElementsByTagName('a');

  console.log(navLi);

  // if (document.body.scrollTop === 0 && document.documentElement.scrollTop === 0) {
  //   for (var i = 0, len = aNav.length; i < len; i++) {
  //     aNav[i].style.color = '#FFF';
  //   }
  //   for (var i = 0, len = navLi.length; i < len; i++) {
  //     navLi[i].style.color = '#000';
  //   }
  // } 
  // else if (document.body.scrollTop === 0 && document.documentElement.scrollTop === 0 && x.matches) {
  //   for (var i = 0, len = aNav.length; i < len; i++) {
  //     aNav[i].style.color = '#FFF';
  //   }
  // }
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.background = '#FFF';
    // aBrand.setAttribute("style", "background: red");
    navLi.style.background = '#000'
    brand.innerHTML = "LRT"
    brand.setAttribute("style", "font-size: 40px");
    for (var i = 0, len = aNav.length; i < len; i++) {
      aNav[i].style.color = '#000';
    }
    for (var a = 0, len = navLi.length; a < len; a++) {
      navLi[a].style.background = '#FFF';
    }

    
  } else {
    header.style.background = 'transparent';
    brand.innerHTML = "Lutfhi."
    brand.setAttribute("style", "font-size: 40px");
    for (var i = 0, len = aNav.length; i < len; i++) {
      aNav[i].style.color = '#FFF';
    }

    
    // for (var i = 0, len = aNav.length; i < len; i++) {
    //   aNav[i].style.color = '#000';
    // }
  }
}
