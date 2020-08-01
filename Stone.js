class Stone{
    constructor(){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(200,200,30,options);
        this.r=30;
        World.add(world,this.body);
        this.image=loadImage("stone.png");
    }
    show(){
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER);
        image(this.image,0,0,60,60);
    }
}