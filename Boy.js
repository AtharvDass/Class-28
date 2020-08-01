class Boy{
    constructor(){
        
        this.img=loadImage("boy.png");
        
    }
    show(){
        
        imageMode(CENTER);
        image(this.img,240,400,90,180);
    }

}