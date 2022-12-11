function ElectricalAppliance (name, manufacturer, power, turn ){
    this.name= name,
    this.turn = function(){console.log(`The ${this.name} is switched ${turn}.`)}
    this.power = function(){console.log(`Power Consumption of the ${this.name} is ${power} W.`)}
    this.manufacturer = function(){
      
      console.log(`The ${name} is manufacturied by ${manufacturer}.`)
    }
  }
  
  const iron = new ElectricalAppliance('iron', 'Tefal');
  const power  = new ElectricalAppliance('iron', '', 650);
  const turn = new ElectricalAppliance('iron', '', '', 'on');
  iron.manufacturer();
  power.power();
  turn.turn();