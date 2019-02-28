var container = document.getElementById("container");
var table = document.createElement("table");
var tr1 = document.createElement("tr");
tr1.setAttribute("id", "main1");

var tr2 = document.createElement("tr");
tr2.setAttribute("id", "main2");

var tr3 = document.createElement("tr");
tr3.setAttribute("id", "main3");

container.appendChild(table);

table.appendChild(tr1);
table.appendChild(tr2);
table.appendChild(tr3);


var box1 = document.createElement("td");
box1.setAttribute("id", "box1");
box1.setAttribute("class", "box");
box1.setAttribute("onCLick", "replace('box1')")
var box2 = document.createElement("td");
box2.setAttribute("id", "box2");
box2.setAttribute("class", "box");
box2.setAttribute("onCLick", "replace('box2')")
var box3 = document.createElement("td");
box3.setAttribute("id", "box3");
box3.setAttribute("class", "box");
box3.setAttribute("onCLick", "replace('box3')")
var box4 = document.createElement("td");
box4.setAttribute("id", "box4");
box4.setAttribute("class", "box");
box4.setAttribute("onCLick", "replace('box4')")
var box5 = document.createElement("td");
box5.setAttribute("id", "box5");
box5.setAttribute("class", "box");
box5.setAttribute("onCLick", "replace('box5')")
var box6 = document.createElement("td");
box6.setAttribute("id", "box6");
box6.setAttribute("class", "box");
box6.setAttribute("onCLick", "replace('box6')")
var box7 = document.createElement("td");
box7.setAttribute("id", "box7");
box7.setAttribute("class", "box");
box7.setAttribute("onCLick", "replace('box7')")
var box8 = document.createElement("td");
box8.setAttribute("id", "box8");
box8.setAttribute("class", "box");
box8.setAttribute("onCLick", "replace('box8')")
var box9 = document.createElement("td");
box9.setAttribute("id", "box9");
box9.setAttribute("class", "box");
box9.setAttribute("onCLick", "replace('box9')")
var array = [];
var counter = 0;
function replace(id) {
    var select = document.getElementById(id);
    select.style.backgroundColor = "orange";
    var randomNumber = Math.floor((Math.random() * 9) + 1);
    var text = document.createTextNode(randomNumber);
    select.appendChild(text);
    array.push(select.innerText);
    select.removeAttribute('onClick');
    counter++
    for (var i = 0; i <= array.length; i++) {
        for (var j = i; j <= array.length; j++) {
            for (var x = 0; x <= array.length; x++) {
                if ((i != j && i != x && j != x) && (array[i] == array[j] && array[i] == array[x]) && array[j] == array[x]) {
                    var a = array[j];
                    swal({
                        title: "Congratulation!",
                        text: "You Win!",
                        icon: "success",
                    });
                    counter = 0;
                    var td = document.getElementsByTagName('td');
                    for (var i = 0; i < td.length; i++) {
                        td[i].removeAttribute('onClick')
                    }
                    for (var i = 0; i < td.length; i++) {
                        if (a === td[i].innerText) {
                            td[i].style.backgroundColor = "green";
                        }
                    }
                    break;
                }
            }
        }
    }
    if (counter > 8) {
        for (var i = 0; i <= array.length; i++) {
            for (var j = i; j <= array.length; j++) {
                for (var x = 0; x <= array.length; x++) {
                    if ((i != j && i != x && j != x) && (array[i] != array[j] && array[i] != array[x]) && array[j] != array[x]) {
                        counter = 0;
                        var a = 1;
                        break;
                    }
                }
            }
        }
        if (a === 1) {
            swal({
                title: "Sorry Bad luck!",
                text: "Try Again",
                icon: "error",
            })
            var td = document.getElementsByTagName('td');
            for (var i = 0; i < td.length; i++) {
                var d = "box" + (i + 1);
                td[i].setAttribute("onClick", "replace(" + "'" + d + "'" + ")");
                td[i].style.backgroundColor = "rgb(34, 34, 185)";
                td[i].innerText = "";
                array = [];
            }

            // console.log(container);

        }
    }
}
tr1.appendChild(box1);
tr1.appendChild(box2);
tr1.appendChild(box3);
tr2.appendChild(box4);
tr2.appendChild(box5);
tr2.appendChild(box6);
tr3.appendChild(box7);
tr3.appendChild(box8);
tr3.appendChild(box9);
