class Shap{


    #color="black";

    constructor(_color)
    {
        this.Color=_color;
         if (new.target==Shap) 
        {
        throw Error("Shape is an abstract Class...you can't Create an object from it");
        }
    }
    set Color(_color){
    if(_color&&isNaN(_color))
        this.#color=_color;
    }

    get Color(){
        return this.#color;
    }
    DrawShape(){
        return ` Color is ${this.Color}`;
    }
}

export{Shap}