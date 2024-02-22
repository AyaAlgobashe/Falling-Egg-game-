let eggImage=document.querySelector(".egeImg");
let basketImage=document.images[1]

let source="images/brokenEgg.png";

let moveEgeright=(imageEgge,left)=>{
    let goleft=setInterval(()=>{
        let left=Math.random()*window.innerWidth;
        if(left<(window.innerWidth-imageEgge.width)){
         imageEgge.style.left=left+"px";
         moveButton(eggImage,0)
         clearInterval(goleft)
    
        }
       
         else
        {
            eggImage.style.left=0+"px"
            disaperEgg(eggImage,basketImage)
            // clearInterval(changeImage)
            // clearInterval(goleft)
           
        
        }
        

},1000)
}
let moveButton=function (imageEgge,top){
    let egg=setInterval(()=>{
        top=top+10;
        
        if(top>window.innerHeight-imageEgge.height){
            imageEgge.style.top=0+"px";
            
             
                imageEgge.style.visibility="hidden"
                // setTimeout(()=>{
                    
                // },800)
                
             
             clearInterval(egg)
        }
        else{
            imageEgge.style.top=top+"px";
            

        }
    },100)
}
window.addEventListener("keydown",function(event){
   
    let pageWidth=window.innerWidth-basketImage.width;
    let leftImage=parseInt(basketImage.style.left)||0;
    


    if(event.key==="ArrowRight"&&leftImage<pageWidth ){
        leftImage+=10
        basketImage.style.left=leftImage+"px"

    }
    if(event.key==="ArrowLeft" && leftImage>=0){
        leftImage-=10;
        basketImage.style.left=leftImage+"px"

    }
})
let disaperEgg=function(imageEgge,basketOpject){
    const eggCordenate=imageEgge.getBoundingClientRect();
    const basketCordenate=basketOpject.getBoundingClientRect();

    console.log(eggCordenate)
    
    let horzont=(eggCordenate.right>=basketCordenate.left)&&(eggCordenate.left<=basketCordenate.right)
    console.log(horzont)
    if(((window.innerHeight-eggCordenate.bottom)<=basketCordenate.top)&&horzont){
        console.log("hidden")
        imageEgge.style.visibilit="hidden"
    }

}

let changeImage=setInterval(()=>{
    eggImage.src=source;
  
},6300)





