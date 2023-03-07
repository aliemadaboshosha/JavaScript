import { Shap } from "./Shap.js";
 class Circle extends Shap{
    #radiusX=0;
    #radiusY=0;
    constructor(_color,_radiusX,_radiusY){
        super(_color);
        this.RadiusX=_radiusX;
        this.RadiusY=_radiusY;

    }
    set RadiusX(_radiusX)
    {if (_radiusX&&!isNaN(_radiusX)&&_radiusX>0) 
        this.#radiusX=_radiusX;

    }
    get RadiusX(){
        return this.#radiusX;
    }

    set RadiusY(_radiusY)
    {if (_radiusY&&!isNaN(_radiusY)&&_radiusY>0) this.#radiusY=_radiusY

    }
    get RadiusY(){
        return this.#radiusY;
    }
    getArea(){ 
         let Radius=Math.sqrt(Math.pow(this.RadiusX,2)+Math.pow(this.RadiusY,2));

        return`Circle${super.DrawShape()} the area of Circle is ${Radius*Radius*3.14}`
    }
}

// let c1=new Circle(3);
// console.log(c1);
// console.log(c1.calcArea());



 export{Circle}
