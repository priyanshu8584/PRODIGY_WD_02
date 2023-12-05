const startbutton=document.getElementById("play"),
reset=document.getElementById("reset")
const main=document.getElementsByClassName("main")[0];
const seconds=document.getElementsByClassName("seconds")[0];
const minutes=document.getElementsByClassName("minutes")[0];
const hours=document.getElementsByClassName("hours")[0];
const milliseconds=document.getElementsByClassName("milliseconds")[0];
const lapperhour=document.getElementsByClassName("lapper-hour")[0];
const lapperminute=document.getElementsByClassName("lapper-minute")[0];
const lappersecond=document.getElementsByClassName("lapper-second")[0];
const lappermillisecond=document.getElementsByClassName("lapper-millisecond")[0];
let Reset=document.getElementsByClassName("start");
 const lap=document.getElementsByClassName("lap")[0];
 const displayLap=document.getElementsByClassName("displayLap")[0];
 const clearAll=document.getElementsByClassName("lap-clear-button")[0];
let isplay=true;
let c=0;
let sec=0;
let m=0;
let millisec=0;
let minute=0;
let min=0;
let hr=0;
let hour=0;
reset.addEventListener("click",function()
{
  hours.innerHTML=`00:`;
  minutes.innerHTML=`00:`;
  seconds.innerHTML=`00:`,
  milliseconds.innerHTML=`00`
  hr=0;
  min=0;
  m=0;
  c=0;
  
})

startbutton.addEventListener("click",function(e)
{
  if(isplay)
  {
     reset.classList.remove("hidden");
     lap.classList.remove("hidden");

         startbutton.innerHTML=`PAUSE`;
         isplay=false;
        hour=setInterval(() => {
           hours.innerText=`${++hr}:`;
         },3600*1000);


         minute=setInterval(() => {
          if (min>58)
          {
            min=0;
          }
          if(min<9)
          {
            minutes.innerText=`0${++min}:`
          }
          else{
            minutes.innerText=`${++min}:`
          }
        },60*1000);
      
       sec=setInterval(() => {
    
        if(c>58)
        {
          c=0;
        }
        if(c<9)
        {
          seconds.innerText=`0${++c}:`
        }
        else{
          seconds.innerText=`${++c}:`
        }
       },1000);


      millisec=setInterval(() => {

        if(m>99)
        m=0;
        if(m<10)
        {
          milliseconds.innerText=`0${++m}`;
        }
        else{
          milliseconds.innerText=`${++m}`;
        }
      }, 10);
      
      

  }
  else{
    startbutton.innerHTML=`PLAY`;
   
    isplay=true;
    clearInterval(hour);
    clearInterval(sec);
    clearInterval(millisec);
   clearInterval(minute);
  }
})
let d=0;
lap.addEventListener("click",function()
{
 
  const li=document.createElement("li");
  const number=document.createElement("span");
  const timestamp=document.createElement("span");
 clearAll.classList.remove("hidden");
 
  li.setAttribute("class","lap-item");
  number.setAttribute("class","number");
  timestamp.setAttribute("class","timestamp");
  number.innerHTML=`#${++d}`
  timestamp.innerHTML=`${hr} :${min} :${c} :${m}`;
  li.append(number,timestamp);
  displayLap.append(li);
})

function clear(){clearAll.addEventListener("click",function()
{
  d=0;
  displayLap.innerHTML=``;
})
}
clear();