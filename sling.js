class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 40
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var point_B = this.pointB;
            strokeWeight(2) 
            line(pointA.x, pointA.y, point_B.x, point_B.y);
           

            
        }
    }
    fly(){
        this.sling.bodyA=null;
    }
    attach(popo){
        this.sling.bodyA=popo;
    }
    
}