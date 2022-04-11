//Create a constructor with 4 properties and 3 methods
function MakeCar(carTransmission, carDrive, carEngineSize, carFuelType){
    this.trans = carTransmission
    this.drive = carDrive
    this.output = carEngineSize
    this.fuel = carFuelType
    this.exhaustNote = function(){
        alert('Deep Vroominess')
    }
    this.horn = function(){
        alert('Toooooooot!')
    }
}

let FordRanger = new MakeCar('manual', '4WD', '2.3L V6', 'Gas')