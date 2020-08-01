class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body=Bodies.circle(x,y,10,options);
        this.r=10;
        World.add(world,this.body);
        this.img=loadImage("mango.png");

    }
    show(){
        this.pos=this.body.position;
        push();
        translate(this.pos.x,this.pos.y)
        imageMode(CENTER);
        image(this.img,0,0,40,50);
      
        pop();
    }
}