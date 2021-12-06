let risu = document.querySelector('select');
let VM = document.querySelector('.ae1');
let KM = document.querySelector('.ae2');
let VO = document.querySelector('.ae3');
let iput = document.querySelector('.koe');
document.getElementById('irh').disabled = true;
let button = document.querySelector('button');
document.getElementById('suzu').disabled = true;
let o = document.querySelector('.aqua');
let d = document.querySelector('.shion');
let t = document.querySelector('.hakos');
let c = document.querySelector('.sna');
let e = iput.value;

button.onclick = function () {
    if (risu.value === (document.getElementById("ia").value = risu.value) || risu.value === (document.getElementById("fe").value) || risu.value === (document.getElementById("de").value ))
    {
        document.getElementById("suzu").value = 600;
        console.log(risu.value);
    }
    if(risu.value === (document.getElementById("in").value = risu.value) || (risu.value === document.getElementById("il").value) || risu.value === (document.getElementById("av").value ))
    {
        document.getElementById("suzu").value = "300";
    }
    if(risu.value === (document.getElementById("in").value = risu.value) || (risu.value === document.getElementById("il").value) || (risu.value === (document.getElementById("av").value ) || (risu.value === (document.getElementById("in").value = risu.value) || (risu.value === document.getElementById("il").value) || (risu.value === (document.getElementById("av").value )
    {
        document.getElementById("suzu").value = "400";
    }
    else {
        
    }
    
}
document.getElementById("laplase").onclick = function () {
    document.getElementById("irh").value = "";
    document.getElementById("momo").value = "";
    document.getElementById("suzu").value = "";
    document.getElementById("beya").value = "";
    document.getElementById("baelz").value = "";
}