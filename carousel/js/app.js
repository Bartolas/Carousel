const reviews=[{
    'img':'img/1.png',
    'name':'Jonh Doe',
    'profession':'Web Developer',
    'review':'Our job is to build good products to ensure a good experience to our customer and make them happy!'

},
{
    'img':'img/2.png',
    'name':'Katharine Gun',
    'profession':'Translater',
    'review':'I worked as translator at governament headquarters and i leaked a memo about war in Iraq,I am responsible to stop that crime'
},
{
    'img':'img/3.png',
    'name':'Rosa Ramos',
    'profession':'Journalist',
    'review':'I wanna bring the latest news to all people around the world in order to help them be up-to-date about what is going on here and out there'
},
{
    'img':'img/4.png',
    'name':'Bartolas Branco',
    'profession':'UX/UI Design',
    'review':'I really like so much this carreer,I want help big techs to offer build products to our market in order to engage and to make lif of our users easier'
}];


const btnNext=document.querySelector('.btn-next');
const btnPrevious=document.querySelector('.btn-previous');
const btnSurprise=document.querySelector('.btn-surprise');
const article=document.querySelector('article');
let currentReview=0;
console.log(article);

//show next review
btnNext.addEventListener('click',function(){
    
    if(currentReview < 3){
        currentReview++;
        changeReview(currentReview);
       
    }    

});

//show previous review
btnPrevious.addEventListener('click',function(){
    
    if(currentReview > 0){
        currentReview--;
    changeReview(currentReview);
    }

});

//show random review
btnSurprise.addEventListener('click',function(){
    const randomPos=Math.floor(Math.random()*reviews.length);
    changeReview(randomPos);

});


function changeReview(pos){
    let img= article.children[0].firstElementChild;
    let name=article.children[0].firstElementChild.nextElementSibling;
    let profession=article.children[0].lastElementChild;
    let review=article.children[1].firstElementChild;
    img.src=reviews[pos].img;
    name.textContent=reviews[pos].name;
    profession.textContent=reviews[pos].profession;
    review.textContent=reviews[pos].review;

}