function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
}
function weight(){
    //to convert kilograms to pounds
    //kg * 2.2
    var k = document.getElementById("kilo").value;
    var p = k * 2.2
    document.getElementById("pounds").value = p
}
function Distance(){
    //to convert kilometre to miles
    //kms * 0.62137
    var kms = document.getElementById("kms").value;
    var m = kms * 0.62137
    document.getElementById("miles").value = m
}