//constructor function
function helper (name, age, description, year){
    this.name=name,
    this.age=age;
    this.description=description;
    this.year=year;
    this.performfunction= function(){
        alert("may i which function i have to perform");
        pickupme();
        moveBy();
    }
}
function pickupme(){
    alert("task executed");
}
function move(){
    alert("i have followed the command");
}

// to initialise the object 
var helper1= new helper("hari",12,"black",10);
var helper2= new helper("hariom",10,"black",100);

