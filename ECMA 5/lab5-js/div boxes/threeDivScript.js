
document.onclick = function(e){
    if(e.target.localName == "div"){
        let classes = e.target.classList;
        let clicked = false;
        
        for(let i=0 ; i<classes.length ; i++) {

            if(classes[i] == "clicked") {
                clicked = true;
                break;
            }
        }
        if(!clicked) {
            let box = document.createElement("div");
            box.className = e.target.className;
            document.body.append(box);
            e.target.classList.add("clicked");  
        }
    }
        
}