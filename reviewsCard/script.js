/*
* https://vanilla-js-basic-project-3-reviews.netlify.app/
*The play button will evoke a function which calls itself with setInterval
*
*/
const reviews = [
    {
        id: 1, 
        name: "Susan Smith", 
        job: "Web Developer", 
        img: "./person-1.jpg", 
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, assumenda debitis. Ipsam, quis rerum! Incidunt eos est atque mollitia a labore cumque, dolor fugit molestias quaerat dignissimos quam velit veniam!"
    }, 
    {
        id: 2, 
        name: "Anna Johnson", 
        job: "Web Designer", 
        img: "./person-2.jpg",
        review: `Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.`
    }, 
    {
        id: 3, 
        name: "Peter Jones", 
        job: "intern", 
        img: "./person-3.jpg",
        review: `Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.!`
    }, 
    {
        id: 4, 
        name: "Bill Anderson", 
        job: "the boss", 
        img: "./person-4.jpg",
        review: `Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.!`
    }];

    const img = document.getElementById("img");
    const nameP = document.getElementById("name");
    const job = document.getElementById("job");
    const review = document.getElementById("info");

    const prev = document.getElementById("btn-prev");
    const play = document.getElementById("play");
    const next = document.getElementById("btn-next");

    let counter = 1;
    let interval = 0;

    function change(mode) {
        if(mode === 'next') counter == reviews.length ? counter = 1 : counter++;
        if(mode === 'prev') counter == 1 ? counter = reviews.length : counter--;

        let obj = reviews.filter(e => e.id === counter);
            nameP.innerHTML = obj[0].name;
            job.innerHTML = obj[0].job;
            img.src = obj[0].img;
            review.innerText = obj[0].review;
    }

    prev.onclick = ()=> change('prev');
    next.onclick = ()=> change('next');

    play.onclick = ()=> {
        if(interval === 0){
            interval = setInterval(()=>{change('next')}, 1000);
            play.children[0].classList.remove("fa-play");
            play.children[0].classList.add("fa-pause");
        }else {
            clearInterval(interval);
            play.children[0].classList.remove("fa-pause");
            play.children[0].classList.add("fa-play");
            interval = 0;
        }
    };