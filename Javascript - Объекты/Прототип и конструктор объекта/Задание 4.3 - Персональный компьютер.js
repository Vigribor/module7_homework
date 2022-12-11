function PC (name, manufacturer, display, power){
    this.name= name,
    this.display = display,
    this.power = power,
    this.manufacturer = function(){console.log(`The ${this.name} is manufacturied by ${manufacturer}. 
    Display is ${this.display}'. Power is ${this.power} W.`)}
  }
  
  const comp = new PC('computer', 'IBM', 17, 220);
  
  comp.manufacturer();