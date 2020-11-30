class Form

{
constructor()
{
  this.title = createElement('h2');
  this.input = createInput("Enter Your Username");
  this.button = createButton("Submit");
  this.Greet = createElement('h1');

}

display()
{
    this.title.html("WELCOME TO THE RACE GAME!!!")
    this.title.position(400,400);
    this.input.position(400,375);
    this.button.position(400,350);
    this.button.mousePressed(()=>
    {
      this.input.hide();
      this.button.hide();
      this.title.hide();
      player.name  = this.input.value()
      count+=1;
      player.index = count;
      player.Update(count)
      player.Personlize();
      this.Greet.html("Welcome "+ player.name+" To This Race Game c:")
      this.Greet.position(400,400);
      
    })
}
invisible()
{
  this.Greet.hide()
}
}