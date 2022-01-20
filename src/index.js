// // Core Deliverables
// As a user, I can:

//1. See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
//2.  Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
//3. Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

const ramenURL = 'http://localhost:3000/ramens'
// run when content has finished loading on the screen
document.addEventListener('DOMContentLoaded', ()=> {
    // gather ramen from given database and render on the page 
    fetchRamen();

    //identify form element and add event listener for new ramen submission
    const form = document.getElementById('new-ramen');
    form.addEventListener('submit', (event)=>{
        // stop page from refreshing
        event.preventDefault();
        // add new ramen to page 
        addNewRamen();
        // reset the input form for addition
        form.reset();
    })

})

// fetch ramen from database
const fetchRamen = () => {
    fetch(ramenURL)
    .then(resp=> resp.json())
    .then(json=> renderRamen(json))

}

// from database, render ramen on page 
const renderRamen = (noodles) => {
    // identify where to place ramen on page
    const menu = document.getElementById('ramen-menu');
    //iterate through noodle elements and peform the following actions
    for (noodle of noodles){
        //create indidivual ramen elements
        const img = document.createElement('img');
        // store ramen information in img element for display
        img.src=noodle.image;
        img.id=`ramen-${noodle.id}`;
        img.ramenName=noodle.name;
        img.restaurant= noodle.restaurant;
        img.rating= noodle.rating;
        img.comment=noodle.comment;
        // add event listener for displaying ramen upon click
        img.addEventListener('click',(event)=>{
            displayRamen(event);
        })
        // add ramen to page
        menu.appendChild(img);
    }
}

// function to display specified ramen
const displayRamen = (event) => {
    //gather elements needed to change display and update then based on selected ramen
    const ramenImage = document.querySelector('.detail-image');
    ramenImage.src =event.target.src;

    const ramenName = document.querySelector('.name');
    ramenName.textContent= event.target.ramenName;

    const ramenRestaurant = document.querySelector('.restaurant');
    ramenRestaurant.textContent=event.target.restaurant;

    const ramenRating = document.getElementById('rating-display');
    ramenRating.textContent=event.target.rating;

    const ramenComment = document.getElementById('comment-display');
    ramenComment.textContent=event.target.comment;
}

//add new ramen based on given inputs to form element
const addNewRamen = () => {
    //indentify specific input fields to gather information from
    const newRamenName = document.getElementById('new-name').value;
    const newRamenRestaurant = document.getElementById('new-restaurant').value;
    const newRamenImage = document.getElementById('new-image').value;
    const newRamenRating = document.getElementById('new-rating').value;
    const newRamenComment = document.getElementById('new-comment').value;

    
    //create indidivual ramen elements
    const img = document.createElement('img');
    // store ramen information for display
    img.src=newRamenImage;
    img.ramenName=newRamenName;
    img.restaurant=newRamenRestaurant;
    img.rating=newRamenRating;
    img.comment=newRamenComment;
    //add event lister to display ramen on page upon click
    img.addEventListener('click',(event)=>{
        displayRamen(event);
    })
    //identify where to add new ramen and add to page
    const menu = document.getElementById('ramen-menu');
    menu.appendChild(img);
}

// updates the default image to show the first ramen element
const updateDefault = () => {
    const ramen = document.getElementById('1');
    // const ramenImage = document.querySelector('.detail-image');
    // ramenImage.src =event.target.src;

    // const ramenName = document.querySelector('.name');
    // ramenName.textContent= event.target.ramenName;

    // const ramenRestaurant = document.querySelector('.restaurant');
    // ramenRestaurant.textContent=event.target.restaurant;

    // const ramenRating = document.getElementById('rating-display');
    // ramenRating.textContent=event.target.rating;

    // const ramenComment = document.getElementById('comment-display');
    // ramenComment.textContent=event.target.comment;
}