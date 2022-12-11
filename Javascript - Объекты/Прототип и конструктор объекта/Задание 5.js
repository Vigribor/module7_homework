class Lamp {
    static power() {
        console.log('power')
    }
    static turn() {
        console.log('turn');
    }
}

class pc extends Lamp {
    static manufacturer() {
        console.log('manufacturer')
    }
}


Lamp.power();
pc.power();
Lamp.turn();
