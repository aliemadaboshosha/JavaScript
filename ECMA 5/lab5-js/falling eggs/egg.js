let top1=1;
let eggObject=document.images[0];
let basketObject=document.images[1];
// $(document).on('mousemove',function(e){
//     basketObject.css('left',e.pagex);
// });

       basketObject.style.top= window.innerHeight-100;
       eggObject.style.left=Math.ceil(Math.ceil(Math.random()*window.innerWidth));
            

       let egg= setInterval(function()
       {
           eggObject.src="./images/1182.png";
           top1+=1
            
            if((window.innerHeight-eggObject.height)<top1)
            {
                clearInterval(egg);
                eggObject.src="./images/Uovo_sorridente.png";
                
                eggObject.hidden=(Number(eggObject.style.top.split('p')[0])>=window.innerHeight-110)&&(Number(eggObject.style.left.split("p")[0])>Number(basketObject.style.left.split("p")[0])-basketObject.width&&Number(eggObject.style.left.split("p")[0])<Number(basketObject.style.left.split("p")[0])+basketObject.width);
  

              
                
               
               
            }
           

            eggObject.style.top=top1+"px";

            

       
        },5);


     basketObject.style.left=Math.ceil(Math.ceil(Math.random()*window.innerWidth));;
     let moveBy=50;
     window.addEventListener('keyup',function(e){
        switch(e.key){
            case'ArrowLeft':
            basketObject.style.left=parseInt(basketObject.style.left)-moveBy +'px';
            break;
            case'ArrowRight':
            basketObject.style.left=parseInt(basketObject.style.left)+moveBy +'px';
            break;


        }
        





     })

    //  if(Number(eggObject.style.left.split("p")[0])>Number(basketObject.style.left.split("p")[0])-100&&Number(eggObject.style.left.split("p")[0])<Number(basketObject.style.left.split("p")[0])+100)
     
    //    {
    //         if(Number(eggObject.style.top.split('p')[0])>=window.innerHeight-110)
    //        {
               
    //        }
              
    //     }
       
    //     let left=0;
    //     let basket=setInterval(function(){


    //         left+=1
    //         if (left>window.innerWidth-105) {
    //             clearInterval(basket);
                
    //         }

    //         basketObject.style.left=left+'px';
    //     },1)
        
 