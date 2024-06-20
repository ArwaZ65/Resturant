function myFunction() {
    var x = document.getElementById("nam");
    var y = document.getElementById("num");
    var text1 = "";
    var text2 = "";
    text1 = x.value;
    text2 = y.value;
    document.getElementById("demo").innerHTML = text1;
    document.getElementById("dem").innerHTML = text2;
}
function my() {
    var table = document.getElementById("mytable");
    var y = document.getElementById("product");
    var z = document.getElementById("number");
    var q = document.getElementById("quantity");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    text1 = "";
    text1 = y.value;
    text2 = "";
    text2 = z.value;
    text3 = "";
    text3 = q.value;

    cell1.innerHTML = text1;
    cell2.innerHTML = text2;
    cell3.innerHTML = text3;
    // var x = document.getElementById('f1');
    // var product = document.getElementById("product").value;
    // var number = document.getElementById("number").value;
    // var quantity = document.getElementById("quantity").value;

    // if (product == 0 || number === "" || quantity === "") {
    //     alert("please enter product")
    //     return;
    // }
    // var total = number * quantity;

    // for (var i = 0; i < x.length; i++) {

    //     total++;
    // }
    var table = document.getElementById('mytable'), total = 0;
    for (var i = 1; i < table.rows.length; i++) {
        total = total + parseInt(table.rows[i].cells[2].innerHTML) * parseInt(table.rows[i].cells[1].innerHTML);
    }

    document.getElementById("taotalsal").innerHTML = total;


}
