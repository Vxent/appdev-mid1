// alert("Hello");

// 1st step - Movement animation to happen
//  const card = document.querySelector('.card');
const card = $('.card');

// const container = document.querySelector('.container');
const container = $('.container');

// 5th step - all items

/* I remove ALL documentquery or listener etch.. and change into jquery code that a dollar sign $ */
const photo = $('.photo img');
const title = $('.title');
const social = $('.social');
const info = $('.info h4');
const profile = $('.profile');

// 2nd step - Moving animation event

/*I just remove javascript like addeventListener and change into 'on' and card.css i just found a tutorial in youtube  */

// container.addEventListener('mousemove', (e) => {
//     let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
//     let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
//     card.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20;
    card.css('transform', `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
});
// 4th step - Adding animation in
// container.addEventListener('mouseenter', e => {
//     card.style.transform = "none";
//     // Popout animation for all items
//     photo.style.transform = "translateZ(50px)";
//     title.style.transform = "translateZ(50px)";
//     social.style.transform = "translateZ(50px)";
//     info.style.transform = "translateZ(50px)";
//     profile.style.transform = "translateZ(50px)";
// });
// In this phase like i did in other code just remove javascript use only JQUERY $ sign 
container.on('mouseenter', e => {
    card.css('transform', 'none');
    photo.css('transform', 'translateZ(50px)');
    title.css('transform', 'translateZ(50px)');
    social.css('transform', 'translateZ(50px)');
    info.css('transform', 'translateZ(50px)');
    profile.css('transform', 'translateZ(50px)');
});

// 3rd step - Removing animation in
// container.addEventListener('mouseleave', e => {
//     card.style.transform = "all 0.5s ease";
//     card.style.transform = `rotateY(0deg) rotateX(0deg)`;
// });

// IS THIS DEBUGGING SITUATION JUST TO BE NEED A TUTORIAL IN INTERNET TO LEARN THIS
container.on('mouseleave', e => {
    card.css('transform', 'all 0.5s ease');
    card.css('transform', 'rotateY(0deg) rotateX(0deg)');
});