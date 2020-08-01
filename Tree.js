class Tree{
    constructor(){
      
        this.image=loadImage("tree.png");
    }
    show(){
        imageMode(CENTER);
        image(this.image,900,270,300,height-50);
    }
}