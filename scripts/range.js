var output = document.getElementById("output");



var slider = document.getElementById("myrange").oninput = function(){

    var value = (this.value-this.min)/(this.max-this.min)*10

    output.innerHTML = this.value;
}
