/* This is an array with all commands existing*/
var commands = ["!help", "!resumee", "!contact"];

/*This function will print on screen char by char 'Welcome' */
function first(){
    var i = 0;
    var txt = " Welcome";
    var speed = 100;
    document.getElementById("1").innerHTML += "guess@tdrweb.ro:~$ ";
    function typeWriter(){
        if(i < txt.length){
            document.getElementById("1").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}

function second(){
    var i = 0;
    var txt = " I tried to present my resumee in an interactive way. I hope you'll like it.";
    var speed = 100;
    document.getElementById("2").innerHTML += "guess@tdrweb.ro:~$ ";
    function typeWriter(){
        if(i < txt.length){
            document.getElementById("2").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();

}


function third(){
    var i = 0;
    document.getElementById("3").innerHTML += "guess@tdrweb.ro:~$ ";
    var txt = " For more details press key 'TAB' and write !help";
    var speed = 100;

    function typeWriter(){
        if(i < txt.length){
            document.getElementById("3").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}


var index = 1;
while (index <= 3){
    if (index == 1){first();}
    if (index == 2){setTimeout(second, 1500);}
    if (index == 3){setTimeout(third, 9500);}
    index++;
}

/**
 * 
 * @param {*} referenceNode 
 * @param {*} newNode 
 * insert newNode after referenceNode
 */

function insertAfter(referenceNode, newNode){
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


function updateInput(content){
    var last = document.getElementById("background").lastChild;
    last.parentNode.removeChild(last);
    last = document.getElementById("background").lastChild;
    last.parentNode.removeChild(last);

    var p = document.createElement("p");
    p.innerHTML = " guess@tdrweb.ro:~$ " + content;
    last = document.getElementById("background").lastChild;
    insertAfter(last, p);
}

function help(){
    var txt =   "<p style='padding-left:2%; padding-right:2%;' >!resumee             <span style='float:right;'>shows the resumee</span></p>" +                
                "<p style='padding-left:2%; padding-right:2%;'>!contact         <span style='float:right;'>shows the contact details</span></p>";
    return txt;
}

function resumee(){
    var txt =   "<div style='width:60%; display: flex; height:200px;border: 1px solid white; margin:auto; maring-top: 10px;'>" +
                    "<div style = 'flex:34%; height:200px;'><img style='height:200px;' src = './images/profile.png'></div>" +
                    "<div style = 'flex:67%; height:200px; text-align:center; padding-top:90px;'><h1>Toader Ionut-Serban</h1></div>" +
                "</div>" +
                "<div style='width:80%; height:100%; margin: auto; margin-top:20px; margin-bottom: 20px;'>" +
                    "<div style='height:40px; border-bottom: 1px solid white; font-size:25px;'><p> PERSONAL INFORMATION</p></div>"+
                    "<div style='margin-top:5px'>"+
                        "<p>Gender: Male</p>" +
                        "<p>Dare of birth: 30/09/2000</p>" +
                        "<p>Nationality: Romanian</p>" +
                        "<p>1st Adress: Husului Street, Unit 137, Apartament 1, Vaslui</p>" +
                        "<p>2nd Adress: Fabricii de zahar Street, 115, Cluj-Napoca</p>" +
                        "<p>E-Mail: toader.ionut.serban@gmail.com</p>" +
                    "</div>" + 
                    "<div style='height:40px; border-bottom: 1px solid white; margin-top:20px; font-size:25px;'><p>WORK EXPERIENCE</p></div>"+
                    "<div style = 'margin-top:5px;'><p></p></div>"+
                    "<div style='height:40px; border-bottom: 1px solid white; margin-top:20px; font-size:25px;'><p>EDUCATION</p></div>"+    
                    "<div style='margin-top: 5px;'>" +
                        "<p>Sep 2007 - July 2015 : 'Mihai Eminescu' School, Vaslui</p>" +
                        "<p>Sep 2015 - July 2019 : 'Mihail Kogalniceanu' High School, Vaslui</p>" +
                        "<p>Oct 2019 - : Babes-Bolyai University, Faculty of Mathematics and Computer Science</p>" +
                    "</div>" +    
                    "<div style='height:40px; border-bottom: 1px solid white; margin-top:20px; font-size:25px;'><p>LANGUAGE SKILLS</p></div>"+     
                    "<div style='margin-top:5px;'>" +
                        "<p>Mother tongue: Romanian</p>" +
                        "<p>Other languages: English-{ 'Listening, Reading'=B2, 'Speaking'=B2, 'Writing'=B2 }</p>" +
                    "</div>" +    
                    "<div style='height:40px; border-bottom: 1px solid white; margin-top:20px; font-size:25px;'><p>DIGITAL SKILLS</p></div>"+
                    "<div style='margin-top:5px;'>" +
                        "<p>Microsoft Office</p>" +
                        "<p>Social Media</p>" +
                        "<p>Programming languages: Python, C++, Java, JavaScript, PHP, C# } ENTRY LEVEL</p>" +
                        "<p>Others: MySql, Sql, HTML, CSS } ENTRY LEVEL</p>" +
                    "</div>" +
                    "<div style='height:40px; border-bottom: 1px solid white; margin-top:20px; font-size:25px;'><p>CONTACT</p></div>"+
                    "<div style='margin-top:5px;'>" +
                        "<p>LinkedIn: <a href='https://www.linkedin.com/in/ionut-toader-6a7151205' target='_blank'>Ionut Toader</a></p>" +
                        "<p>GitHub: <a href='https://github.com/IonutTDR' target='_blank'>IonutTDR</a></p>" +
                        "<p>Phone: +40 0730063736 </p>" +
                        "<p>E-Mail: toader.ionut.serban@gmail.com</p>"
                    "</div>" +      
                "</div>";
    return txt;
}
function verifyInput(text){
    var content = text;
    var last;
    if(!commands.includes(content)){
        updateInput(content);
        var p = document.createElement("p");
        p.innerHTML = " guess@tdrweb.ro:~$ This command does not exist. Try !help.";
        last = document.getElementById("background").lastChild;
        insertAfter(last, p);
    }
    else{
        var txt = content;
        switch (content){
            case "!help":
                txt = help();
                break;
            case "!resumee":
                txt = resumee();
                break;            
        }
        updateInput(content);
        var div = document.createElement("div");
        div.innerHTML = txt;
        last = document.getElementById("background").lastChild;
        insertAfter(last, div);


    }

}

function createInput(index){
    var label = document.createElement("label");
    label.innerHTML = "guess@tdrweb.ro:~$ ";
    label.id = index.toString();
    var last = document.getElementById("background").lastChild;
    
    insertAfter(last, label);

    var input = document.createElement("input");
    input.autocomplete = "off";
    input.setAttribute("type", "text");
    input.style.backgroundColor = "black";
    input.style.border = "0px solid black";
    input.id = index.toString();
    input.style.outline = "none";
    input.style.caret = "underscore";
    input.style.width = "75%";
    insertAfter(label, input)
    input.autofocus = true;

    input.addEventListener("keyup", function(event){
        input.focus();
        if(event.key === "Enter"){
            verifyInput(input.value);
            index ++;
            createInput(index);
        }
    });



}

function run(){
    createInput(1);
}


setTimeout(run, 15000);
