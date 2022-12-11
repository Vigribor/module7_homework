function Lighting (name, manufacturer, power, led){
  this.name= name,
  this.led = function(){console.log(`The ${this.name} is ${led}.`)}
  this.manufacturer = function(){console.log(`The ${this.name} is manufacturied by ${manufacturer}.`)}
  this.power = function(){console.log(`Electricity consumption of the ${this.name} is ${power} W.`)}
}

const lamp = new Lighting('lamp', 'IKEA');
const power  = new Lighting('lamp','', 50);
const led = new Lighting('lamp','', '', 'LED');
power.power();
lamp.manufacturer();
led.led();