function addHeading(){
    var input1 = document.getElementById("input")
    var headingH1 = document.getElementById("headingH1")
    if(input1.value === ""){
        headingH1.innerHTML = "Undefined"
    }
    else{
        headingH1.innerHTML = input1.value
    }
    input1.value = ""

}
function editHeading(){
    var promp = prompt("Edit Heading")
    var headingH1 = document.getElementById("headingH1")
    if(promp === ""){
        headingH1.innerHTML = "Undefined"
    }
    else{
        headingH1.innerHTML = promp
    }
}
function mainFunc(){
    var input2 = document.getElementById("input2")
    var emptyDiv = document.getElementById("emptyDiv")

    var mainDiv = document.createElement("div")
    mainDiv.setAttribute("class","flex")

    var div1 = document.createElement("div")
    div1.setAttribute("class","div1")
    var div2 = document.createElement("div")
    div2.setAttribute("class","div2")
    var div3 = document.createElement("div")
    div3.setAttribute("class","div3")

    var div1P = document.createElement("p")
    var div2Button = document.createElement("button")
    var div3Button = document.createElement("button")

    div2Button.setAttribute("onclick","dltFunc(this)")

    div3Button.setAttribute("onclick","editSome(this)")

   
    var div2ButtonImg = document.createElement("img")
    div2ButtonImg.src = "images/delete-icons.png"
    div2ButtonImg.setAttribute("class","width")

    var div3ButtonImg = document.createElement("img")
    div3ButtonImg.src = "images/pencil.png"
    div3ButtonImg.setAttribute("class","width")


  if(input2.value === ""){
         var div1PNode = document.createTextNode("Undefined")
      }
  else{
         var div1PNode = document.createTextNode(input2.value)
     }


    
    div1P.appendChild(div1PNode)
    div2Button.appendChild(div2ButtonImg)
    div3Button.appendChild(div3ButtonImg)

    div1.appendChild(div1P)
    div2.appendChild(div2Button)
    div3.appendChild(div3Button)

    mainDiv.appendChild(div1)
    mainDiv.appendChild(div2)
    mainDiv.appendChild(div3)
    emptyDiv.appendChild(mainDiv)

    input2.value = ""

}


function clrAll(){
    var emptyDiv = document.getElementById("emptyDiv")
    emptyDiv.innerHTML = ""
}


function dltFunc(f){
     f.parentNode.parentNode.remove()
}

function editSome(o){
     var changeName = prompt("Enter Name",o.parentNode.parentNode.childNodes[0].firstChild.firstChild.nodeValue)
    if(changeName === ""){
        o.parentNode.parentNode.childNodes[0].firstChild.firstChild.nodeValue = "Undefined"
    }
    else{
        o.parentNode.parentNode.childNodes[0].firstChild.firstChild.nodeValue = changeName
    }
}


