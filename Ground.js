class Ground{
    constructor(){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(width/2,500,width,10,option);
        World.add(world,this.body);
        
    }
    show(){
        rectMode(CENTER);
        rect(width/2,500,width,10);
    }
}