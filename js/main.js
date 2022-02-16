$(document).ready(function() {
    $("#btn-menu").click(function(){
        $("#nav").toggleClass("active");
    });


    $("#atm").submit(function(evt) {
        evt.preventDefault();
        let amount = parseInt($("#money").val());
        
        let myMap = new Map([[50000, 0], [20000, 0], [10000, 0], [5000, 0]]);
        if (amount%5000 == 0){
            for (var [key, value] of myMap) {
                let out = calculate(amount, key);
                myMap.set(key, out[0]);
                amount = out[1]
            }
            $("#fty").val(myMap.get(50000));
            $("#twny").val(myMap.get(20000));
            $("#tn").val(myMap.get(10000));
            $("#ft").val(myMap.get(5000));
            $("#msg").empty();
        }
        else{
            $("#msg").html("<h4>Solo se pueden ingresar cantidades multiplos de 5000$</h4>")
        }        
    });


});

function calculate(amount, key){
    let mod = amount, count = 0;
    if (amount >= key){
        count = parseInt((amount/key));
        mod = amount%key;
    }
    return [count, mod];
}