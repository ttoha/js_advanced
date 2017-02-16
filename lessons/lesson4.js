function Product(param){
    this.name = param.name;
    this.brand = param.brand;
    this.prize = param.prize;
    this.avalible = param.avalible;
    this.showInfo = function(){
        console.log("Имя:" +this.name+ "цена:" +this.prize)
    }
}

var product = new Product({
    name:'product1',
    brand:'brand1',
    prize:'prize1',
    avalible:true
})

function Car(param){
    Product.call(this, param);
    var getPrivateVar="move";
    this.wheel = param.wheel;
    this.showInfo = function(){
        return getPrivateVar;
    }
    this.setPrivateVar=function(value){
        getPrivateVar = value;
    }
}

var a6 = new Car({
    name:'a6',
    brand:'audi',
    prize:1000,
    wheel:5,
    avalible:true
})

function Clothes(param){
    Product.call(this, param);
    this.type = param.type
}

console.log(a6 instanceof Product)


 function Machine() {
     var enabled = false;

     this.enable = function() {
         enabled = true;
         console.log('enabled');
     };

     this.disable = function() {
         enabled = false;
         console.log('disabled');
     };
    this.isEnable = function(){
        return enabled;
    }
 }

 function CoffeeMachine(power) {
     Machine.call(this);

     var waterAmount = 0;

     this.setWater = function(water){
         waterAmount = water
     }
     var WATER_HEAT_CAPACITY = 4200;
     // расчёт времени для кипячения
     function getBoilTime() {
         // return 1000;
          return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
     }

     // что делать по окончании процесса
     function onReady() {
         console.log('Кофе готово!');
         coffeeMachine.disable();
     }

     this.run = function() {
         console.log(this.isEnable)
         if(waterAmount>0 && this.isEnable()){
            setTimeout(onReady, getBoilTime());
         } else {
             if(!waterAmount>0){
                 console.log('налей води');
                 return false;
             }
             if(!this.isEnable()){
                 console.log('включи кофе машину');
                 return false;
             }
         }
         // setTimeout - встроенная функция,
         // она запустит onReady через getBoilTime() миллисекунд
     };
 }

 var coffeeMachine = new CoffeeMachine(100);
 coffeeMachine.setWater(1);
 coffeeMachine.enable();

 coffeeMachine.run();
