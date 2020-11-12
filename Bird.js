class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.path =[];
  }

  display() {
console.log(this.body.velocity.x)
  if(this.body.position.x >250 && this.body.velocity.x>5){
      var postion= [this.body.position.x,this.body.position.y];
        this.path.push(postion);
  }
        for(var i=0; i<this.path.length ; i++){
          image(this.image2,this.path[i][0],this.path[i][1]);
        }
        
    
    super.display();
  }
}
