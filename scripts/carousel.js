document.addEventListener('DOMContentLoaded',initCarousel);

var carouselCurrentPageIds = [];

//Initialize every carousel
function initCarousel(){

    //Get Every Carousels in the DOM
    let carousels = document.getElementsByClassName('carousel');
    //console.log(carousels);
    //Loop through each carousel and initialize it
    for(let i = 0; i < carousels.length; i++){
        carouselStart(carousels[i] , i);    
        carouselCurrentPageIds[i] = 0;
    }
}

//Initialize a single carousel
function carouselStart(carousel, carouselId){
    
    //Get All of the carousels-items within the carousel
    let carouselItems = carousel.getElementsByClassName('carousel-item');

    //Get the element for the controls
    let carouselControls = carousel.getElementsByClassName('carousel-controls')[0];
    let prevButton = carouselControls.getElementsByClassName('prev')[0];
    let nextButton = carouselControls.getElementsByClassName('next')[0];
    let pageIndicator = carouselControls.getElementsByClassName('indicator')[0];

    let setPageButtons = carousel.getElementsByClassName('set-page');
   // setTheActivePage(carouselItems,toSetActive);
    
   

   //Set the controls function
       if(prevButton != null)
    prevButton.addEventListener('click',() =>{
        //Decrement the carousels Current page id
        let targetPageId = carouselCurrentPageIds[carouselId];
        targetPageId = unaryLimiter(false,targetPageId,0,carouselItems.length-1);
        carouselCurrentPageIds[carouselId] = targetPageId;
        
        //Set the current page
        setTheActivePage(carouselItems, targetPageId);
        
        //Set the page number
        if(pageIndicator != null) pageIndicator.textContent = ++targetPageId;


        //console.log(carouselCurrentPageIds[0]);

    });

        if(nextButton != null)
    nextButton.addEventListener('click',() =>{
        //Increment the carousels Current page id
        let targetPageId = carouselCurrentPageIds[carouselId];
        targetPageId = unaryLimiter(true,targetPageId,0,carouselItems.length-1);
        carouselCurrentPageIds[carouselId] = targetPageId;
        
        //Set the current page
        setTheActivePage(carouselItems, targetPageId);

        //Set the page number
        if(pageIndicator != null) pageIndicator.textContent = ++targetPageId;


        //console.log(carouselCurrentPageIds[0]);
    });


    //How to use ---- 
    //First class = set-page
    //Second class = [$page-number]
    //Specific-Page Button
    if(setPageButtons != null)
    for(let i = 0; i < setPageButtons.length; i++){
        //Iterate through all the set-page buttons
        setPageButtons[i].addEventListener('click',() => {
            
            //Get the target page
            let targetPage = setPageButtons[i].classList[1];

            //Save the current page
            carouselCurrentPageIds[carouselId] = targetPage - Number(1);
            
            console.log(targetPage - Number(1));
            //Set the current page
            setTheActivePage(carouselItems, carouselCurrentPageIds[carouselId]);
    
            //Set the page number
            if(pageIndicator != null) pageIndicator.textContent = ++targetPage;
            
        });
    }

}



//Add a min and max for the unary operators
//--isIncrement = Do you want the number to be incremented?
function unaryLimiter(isIncrement, numbers, min, max){

    if(isIncrement){
        //Increment the number
        if(numbers >= max){
            numbers = min;
        }else{
            numbers++;
        }

    }else{
        //Decrement the numbers
        if(numbers <= min){
            numbers = max;
        }else{
            numbers--;
        }
        
    }
    return numbers;
}

//Hide every other item in the array that isn't the given parameter
function setTheActivePage(itemsList, activeIndex){

    //Iterate every item and hide it
    for(let i = 0; i < itemsList.length;i++){
        itemsList[i].classList.remove('hidden');
        itemsList[i].classList.add('hidden');
    }

    //Enable the element that is the activeIndex
    itemsList[activeIndex].classList.remove('hidden');

}