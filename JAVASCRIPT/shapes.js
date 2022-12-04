let rd 
function setup() {
  createCanvas(400, 400);
  
  rd = createRadio()
  rd.option("Rect")
  rd.option("RoundRect")
  rd.option("Circle")
  rd.position(80,20)
  rd.selected("Circle")

}

function draw() {
  background(220);
  
  if(rd.value()=="Rect")
  {
    rect(100,100,50,50)
  }
  
    if(rd.value()=="RoundRect")
  {
    rect(100,100,50,50,12)
  }
  
    if(rd.value()=="Circle")
  {
    circle(100,100,50)
  }



}