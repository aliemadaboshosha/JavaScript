import { Rectangle,Square } from "./Sqaures.js";
import {Circle} from"./Circle.js";
//import { Shap } from "./Shap.js";we don't need to call



let shapesArray=[new Rectangle("blue",4,8),
new Circle("red",4,3),
new Circle("red",8,6),
new Square(2,2),/*here an erro value so he will get the default value of color*/
new Rectangle("yellow",5,6),
//new Shap("white"),/*here an erro because we creat a condition in shape constractor that prevent you to creat an object from type Shep*/
new Square("green",4)]



for (let index = 0; index < shapesArray.length; index++) {
     console.log(shapesArray[index].getArea());

    
}
