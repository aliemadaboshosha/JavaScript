import { Shap } from "./Shap.js";
  class Rectangle extends Shap{
    #width=0;
    #length=0
    constructor(_color,_width,_length){
        super(_color)
        this.Width=_width;
        this.Length=_length;
    }
    set Width(_width){
        if(_width&&!isNaN(_width)&&_width>0) 
        this.#width=_width;
        
    }
    get Width(){
        return this.#width
    }

    set Length(_length){
        if(_length.trim()&&!isNaN(_length)&&_length>0) 
        this.#length=_length;
        
    }
    get Length(){
        return this.#length
    }
    getArea(){
        return`${super.DrawShape()} the Area is ${this.Width*this.Length} `
    }

}


 class Square extends Rectangle{
    constructor(_color,_length){
        super(_color,_length,_length);

    }


}
// let s1=new Square("red",2);
// console.log(s1.getArea());
//  let r1=new Rectangle(12,3);
// r1.Width=10
// console.log(r1);
// console.log(r1.calcArea());


export{Rectangle,Square}