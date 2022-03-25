window.addEventListener('scroll',animation);
let WindowHeight = window.innerHeight;


let audio = document.getElementById('audio');
let buttonplaypause = document.getElementById('playpause');
let count = 0;
function toggleplay(){
    if (count ==0){
        count=1;
        audio.play();
        buttonplaypause.innerHTML = "Stop &#9611";
    }
    else{
        count=0;
        audio.pause();
        buttonplaypause.innerHTML = "Play &#9658";
    }
}

// COVER
let body = document.querySelector('body');
let cover = document.querySelector('.cover');
let coverbutton = document.querySelector('.cover .container button');
coverbutton.addEventListener('click',function(){
    cover.style.top = '110vh';
    cover.style.opacyti = '0';
    cover.style.zIndex = '-1';
    body.classList.remove('overclosed');
})

// HOME
const home = document.querySelector('.home');

for(let i=0; i<40; i++){
    let starDiv = document.createElement("div");
    let starImg = document.createElement("img");
    starImg.src = "img/star.png";
    starImg.style.width = `${Math.floor(Math.random()*10 + 10)}px`;
    starDiv.appendChild(starImg);
    starDiv.classList.add("star");
    starDiv.style.left = `${Math.floor(Math.random()*95)}%`;
    starDiv.style.animation = `starAnimation ${Math.floor(Math.random()*10 + 5) }s ${Math.floor(Math.random()*10)}s linear infinite`;
    home.appendChild(starDiv);
}


// COUPLE
const titleCouple = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.couple .head .title').classList.add('titleFadeIn');
            document.querySelectorAll('.couple .head section p')[0].classList.add('textFadeIn');
            document.querySelectorAll('.couple .head section p')[1].classList.add('textFadeIn');
        }
        else{
            document.querySelector('.couple .head .title').classList.remove('titleFadeIn');
            document.querySelectorAll('.couple .head section p')[0].classList.remove('textFadeIn');
            document.querySelectorAll('.couple .head section p')[1].classList.remove('textFadeIn');

        }
    })
})
titleCouple.observe(document.querySelector('.couple'));


const ManCouple = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.couple .profil .man').classList.add('manFadeIn');
        }
        else{
            const ManCoupleFadeOut = new IntersectionObserver(p =>{
                p.forEach(e =>{
                    if(e.isIntersecting){
                        document.querySelector('.couple .profil .man').classList.remove('manFadeIn');
                    }
                })
            })
            ManCoupleFadeOut.observe(document.querySelector('.section1 .info-prokes .head'));
        }
    })
})
ManCouple.observe(document.querySelector('.couple .profil .man h1'));

const WoManCouple = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.couple .profil .woman').classList.add('woManFadeIn');
        }
        else{
            const ManCoupleFadeOut = new IntersectionObserver(p =>{
                p.forEach(e =>{
                    if(e.isIntersecting){
                            document.querySelector('.couple .profil .woman').classList.remove('woManFadeIn');
                    }
                })
            })
            ManCoupleFadeOut.observe(document.querySelector('.section1 .info-prokes .head'));
        }
    })
})
WoManCouple.observe(document.querySelector('.couple .profil .woman h1'));


// EVENT
const eventBox = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll('.event .boxEvent section')[0].classList.add('boxEventFadeIn');
            document.querySelectorAll('.event .boxEvent section')[1].classList.add('boxEventFadeIn');
            document.querySelectorAll('.event .boxEvent section')[2].classList.add('boxEventFadeIn');
        }
        else{
            const ManCoupleFadeOut = new IntersectionObserver(p =>{
                p.forEach(e =>{
                    if(e.isIntersecting){
                        document.querySelectorAll('.event .boxEvent section')[0].classList.remove('boxEventFadeIn');
                        document.querySelectorAll('.event .boxEvent section')[1].classList.remove('boxEventFadeIn');
                        document.querySelectorAll('.event .boxEvent section')[2].classList.remove('boxEventFadeIn');
                    }
                })
            })
            ManCoupleFadeOut.observe(document.querySelector('.couple .head'));
        }
    })
})
eventBox.observe(document.querySelector('.event .boxEvent section h1'));

// STORY
const story = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.story .slider').classList.add('sliderFadeIn');
        }
        else{
            const ManCoupleFadeOut = new IntersectionObserver(p =>{
                p.forEach(e =>{
                    if(e.isIntersecting){
                            document.querySelector('.story .slider').classList.remove('sliderFadeIn');
                    }
                })
            })
            ManCoupleFadeOut.observe(document.querySelector('.event .boxEvent section h1'));
        }
    })
})
story.observe(document.querySelector('.story .slider'));

// GALLERY
let imgGallery = document.querySelectorAll('.gallery .pict section img');
let countDelayTrantition = 0.2;
imgGallery.forEach(function(e){
    e.style.transitionDelay = countDelayTrantition+'s';
    if(countDelayTrantition==0.8){
        countDelayTrantition=0;
    }
    countDelayTrantition+=0.2;
});

const gallery = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            imgGallery.forEach(function(e){
                e.classList.add('imgFadeIn');
            })
        }
        else{
            const ManCoupleFadeOut = new IntersectionObserver(p =>{
                p.forEach(e =>{
                    if(e.isIntersecting){
                        imgGallery.forEach(function(e){
                        e.classList.remove('imgFadeIn');
                        })
                    }
                })
            })
            ManCoupleFadeOut.observe(document.querySelector('.story img'));
        }
    })
})
gallery.observe(document.querySelector('.gallery .pict section img'));

// TIME
const time = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelector('.containerTime .time').classList.add('timeFadeIn');
        }
        else{
            const ManCoupleFadeOut = new IntersectionObserver(p =>{
                p.forEach(e =>{
                    if(e.isIntersecting){
                            document.querySelector('.containerTime .time').classList.remove('timeFadeIn');
                    }
                })
            })
            ManCoupleFadeOut.observe(document.querySelector('.gallery .pict section img'));
        }
    })
})
time.observe(document.querySelector('.containerTime .time'));


function animation(){     

    // NAV BOTTOM

    let idGuestBook = document.getElementById('guest-book');
    let idGallery = document.getElementById('gallery');
    let idEvent = document.getElementById('event');
    let idCouple = document.getElementById('couple');
    let idStory = document.getElementById('story');
    let idHome = document.getElementById('home');

    let guestBook = document.querySelector('.navBottom .nav-item .Navguest-book');
    let gallery = document.querySelector('.navBottom .nav-item .Navgallery');
    let event = document.querySelector('.navBottom .nav-item .Navevent');
    let couple = document.querySelector('.navBottom .nav-item .Navcouple');
    let story = document.querySelector('.navBottom .nav-item .Navstory');
    let home = document.querySelector('.navBottom .nav-item .Navhome');

    let jarakIdGuestBook = (document.getElementById('guest-book')).getBoundingClientRect().top;
    let jarakIdGalery = (document.getElementById('gallery')).getBoundingClientRect().top;
    let jarakIdEvent = (document.getElementById('event')).getBoundingClientRect().top;
    let jarakIdCouple = (document.getElementById('couple')).getBoundingClientRect().top;
    let jarakIdStory = (document.getElementById('story')).getBoundingClientRect().top;
    let jarakIdHome = (document.getElementById('home')).getBoundingClientRect().top;

    if(jarakIdGuestBook < WindowHeight - 200){
        guestBook.classList.add('navNow');
        gallery.classList.remove('navNow');
        event.classList.remove('navNow');
        couple.classList.remove('navNow');
        story.classList.remove('navNow');
        home.classList.remove('navNow');
    }
    else if(jarakIdGalery < WindowHeight - 200){
        gallery.classList.add('navNow');
        guestBook.classList.remove('navNow');
        event.classList.remove('navNow');
        couple.classList.remove('navNow');
        story.classList.remove('navNow');
        home.classList.remove('navNow');
    }
    else if(jarakIdStory < WindowHeight -200){
        story.classList.add('navNow');
        guestBook.classList.remove('navNow');
        gallery.classList.remove('navNow');
        event.classList.remove('navNow');
        couple.classList.remove('navNow');
        home.classList.remove('navNow');
    }
    else if(jarakIdEvent < WindowHeight -200){
        event.classList.add('navNow');
        guestBook.classList.remove('navNow');
        gallery.classList.remove('navNow');
        couple.classList.remove('navNow');
        story.classList.remove('navNow');
        home.classList.remove('navNow');
    }
    else if(jarakIdCouple < WindowHeight - 200){
        couple.classList.add('navNow');
        guestBook.classList.remove('navNow');
        gallery.classList.remove('navNow');
        event.classList.remove('navNow');
        story.classList.remove('navNow');
        home.classList.remove('navNow');
    }
    else if(jarakIdHome < WindowHeight - 200){
        home.classList.add('navNow');
        story.classList.remove('navNow');
        guestBook.classList.remove('navNow');
        gallery.classList.remove('navNow');
        event.classList.remove('navNow');
        couple.classList.remove('navNow');
    }
}

function popUpHadiah(){
    let popUp = document.querySelector('.popUpHadiah');
    let body = document.querySelector('body');
    popUp.classList.toggle('hiddenPopUp');
    body.classList.toggle('overflowHidden');
}