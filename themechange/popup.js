let flag=false;
document.querySelector(".btncarl").style.display="flex"
        document.querySelector(".btnl").style.display="flex"
        document.querySelector(".btncarr").style.display="none"
        document.querySelector(".btnr").style.display="none"
        chrome.tabs.executeScript({
            file:"light.js"
        })
let mbtn=document.querySelector(".btnmain");
let changeflag=()=>{
    flag=!flag;
    if(flag){
        document.querySelector(".btncarl").style.display="none"
        document.querySelector(".btnl").style.display="none"
        document.querySelector(".btncarr").style.display="flex"
        document.querySelector(".btnr").style.display="flex"
        chrome.tabs.executeScript({
            file:"dark.js"
        })
    }else{
        document.querySelector(".btncarl").style.display="flex"
        document.querySelector(".btnl").style.display="flex"
        document.querySelector(".btncarr").style.display="none"
        document.querySelector(".btnr").style.display="none"
        chrome.tabs.executeScript({
            file:"light.js"
        })
    }
    console.log(flag)
}
mbtn.addEventListener("click",changeflag)


