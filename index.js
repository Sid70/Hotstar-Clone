let movies = [
    {
        name:"Lorem Ipsum",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos nobis animi veniam nisi ipsam facilis placeat doloremque, distinctio.",
        image:"Img/slider 2.png"
    },
    {
        name:"Lorem Ipsum",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos nobis animi veniam nisi ipsam facilis placeat doloremque, distinctio.",
        image:"Img/slider 3.png"
    },
    {
        name:"Lorem Ipsum",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos nobis animi veniam nisi ipsam facilis placeat doloremque, distinctio.",
        image:"Img/slider 4.png"
    },
    {
        name:"Lorem Ipsum",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos nobis animi veniam nisi ipsam facilis placeat doloremque, distinctio.",
        image:"Img/slider 5.png"
    }
];

const caraousal = document.querySelector('.caraousal');
let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
    if ( slideIndex >= movies.length)
    {
        slideIndex = 0;
    }

    //create DOM Elements
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    caraousal.appendChild(slide);

    //setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //setting elements classname
    slide.className = "slider";
    content.className = "slider-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);

    if (sliders.length)
    {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30*(sliders.length - 2)}px)`;
    }
}

for ( let i = 0 ; i < 3 ; i++ )
{
    createSlide();
}

setInterval(()=>{createSlide();},3000);


//card slider

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let conatinerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click',() => {
        item.scrollLeft += conatinerWidth - 200;
    });

    preBtns[i].addEventListener('click',() => {
        item.scrollLeft -= conatinerWidth + 200;
    });
    
});
