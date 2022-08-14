window.onscroll = () =>{
    checkHeader();
}

function checkHeader(){
    let header = document.querySelector('.head');
    
    console.log(getYPosition());

    if(getYPosition() >= 200){
        header.classList.add('head-full');
    }else{
        header.classList.remove('head-full');
    }
}

function getYPosition(){
    var top  = window.pageYOffset || document.documentElement.scrollTop
    return top;
}

