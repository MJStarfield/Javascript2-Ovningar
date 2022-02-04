var globalVar = "";

// Uppgift 1a1:
function buttonAction1() {
  //Kod här!
  alert(Date());
} // Slut!

// Uppgift 1a2 här:
function buttonAction2() {
  //Kode här
  globalVar = prompt();
  alert(globalVar.toLocaleUpperCase());
} // Slut!

// Uppgift 1a3 här:
function buttonAction3() {
  //Kode här!
  document.getElementById("result3").innerHTML = globalVar.toLocaleLowerCase();
} // Slut!

// Uppgift 1a4 här:
function buttonAction4() {
  //Kode här!
  let t1 = new Date();
  let stopWatch = function () {
    let t2 = new Date();
    let result = t2 - t1;
    alert(result / 1000 + " sekunder!");
    document.getElementsByName("button4")[0].onclick = buttonAction4;
  };
  document.getElementsByName("button4")[0].onclick = stopWatch;
} // Slut!

// Uppgift 1a5 här:
function buttonAction5() {
  //Kode här!
  if (
    isNaN(document.getElementById("number1").value) ||
    isNaN(document.getElementById("number2").value) ||
    document.getElementById("number1").value.length == 0 ||
    document.getElementById("number2").value.length == 0 ||
    document.getElementById("number1").value > 1000 ||
    document.getElementById("number1").value < 0 ||
    document.getElementById("number2").value > 1000 ||
    document.getElementById("number2").value < 0
  ) {
    alert("Please input valid numbers!");
  } else {
    document.getElementById("result5").innerHTML =
      parseInt(document.getElementById("number1").value) *
      parseInt(document.getElementById("number2").value);
  }
} // Slut!

// Uppgift 1a6 här:
function buttonAction6() {
  //Kode här!
  document.getElementById("wordCount").innerHTML =
    document.getElementById("textInput").value.split(" ").length - 1;
} // Slut.

// Uppgift 1a7 här:
function buttonAction7() {
  //Kode här!
  let msg = prompt();
  let msgLoop = "";
  for (let i = 0; i < 10; i++) {
    msgLoop += msg + " ";
  }
  alert(msgLoop);
} // Slut! :)

// Uppgift 1a8 här:
function buttonAction8() {
  //Kode här!
  document.getElementById("hiddenButton").style.visibility =
    document.getElementById("hiddenButton").style.visibility != "visible"
      ? "visible"
      : "hidden";
} //Slut!

// Sista proceduren: Placera data i en tabell som byggs upp
function buttonAction9() {
  //Kode här
  let tc = document.getElementById("tableContainer");
  let textArr = document.getElementById("arrayInput").value.split(",");
  let textString = "";

  textString += "<table>" + "<tr>";

  for (var i = 0; i < textArr.length; i++) {
    if (i % 7 == 0) {
      textString += "</tr>";
      textString += "<tr>";
    }
    textString += "<td>" + textArr[i] + "</td>";
  }

  textString += "</tr>" + "</table>";
  tc.innerHTML = textString;
  createFloor();
} //Slut! Nu kan ni kolla över eran kod och lämna in. Gott jobbat!

function createFloor() {
  let floor = document.getElementById("floor");

  let textString = "";

  textString += "<table>" + "<tr>";

  for (var i = 0; i < 400; i++) {
    if (i % 20 == 0) {
      textString += "</tr>";
      textString += "<tr>";
    }
    textString += "<td></td>";
  }

  textString += "</tr>" + "</table>";
  floor.innerHTML = textString;
}

/*
 * Detta är en färdig procedur (funktion) som kopplar ihop händelsehanteraren
 * för alla knappar med de funktioner som ni har till uppgift att göra
 * NI SKALL INTE RÖRA NÅGOT HÄR:
 */

function onDoneLoadingHtml() {
  document.getElementsByName("button1")[0].onclick = buttonAction1;
  document.getElementsByName("button2")[0].onclick = buttonAction2;
  document.getElementsByName("button3")[0].onclick = buttonAction3;
  document.getElementsByName("button4")[0].onclick = buttonAction4;
  document.getElementsByName("button5")[0].onclick = buttonAction5;
  document.getElementsByName("button6")[0].onclick = buttonAction6;
  document.getElementsByName("button7")[0].onclick = buttonAction7;
  document.getElementsByName("button8")[0].onclick = buttonAction8;
  document.getElementsByName("button9")[0].onclick = buttonAction9;
  document.getElementById("hiddenButton").onclick = function () {
    alert("Neeeej!, \n du startade precis...\nKaffekokaren!");
  };
}

/*
 * Anger att när webläsaren är klar med att läsa in html, css ska den
 * köra funktionen onDoneLoadingHtml
 */
window.onload = onDoneLoadingHtml;
