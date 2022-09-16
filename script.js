var getprogressbar = document.querySelector('.progress-bar');
var getdownloadbtn = document.querySelector('.download-btn');
var seturl = "https://www.youtube.com/";

getdownloadbtn.addEventListener("click",function(){
    getdownloadbtn.setAttribute("disabled",true);
    var setwidth = 0 ;
    var setInt = setInterval(progressinc,100);
    function progressinc(){
        if(setwidth >= 100){
            clearInterval(setInt);
            setwidth = 0 ;
            window.location.href = seturl;
        }else {
            setwidth++;
            getprogressbar.style.width = `${setwidth}%`;
            getprogressbar.setAttribute('data-inc',`${setwidth}%`);
        }
    }
});

// 10PG 
