function qs(element){
    return document.querySelector(element)
}

window.addEventListener('load', function(){

    let body = qs('body')


    var timeoutInMiliseconds = 6000;
    var timeoutId; 

    function resetTimer() { 
        window.clearTimeout(timeoutId)
        startTimer();
    }
    
    function startTimer() { 
        timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
    }
    
    function doInactive() {
        console.log('inactividad')
        body.classList.add('guide-div')
        body.addEventListener('click', function(){
            body.classList.remove('guide-div')
        })
    }
    
    function setupTimers () {
        document.addEventListener("mousemove", resetTimer, false);
        document.addEventListener("mousedown", resetTimer, false);
        document.addEventListener("keypress", resetTimer, false);
        document.addEventListener("touchmove", resetTimer, false);

        startTimer();
    }
    
    $(document).ready(function(){     
        setupTimers();
    })
})    