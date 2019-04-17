function closeDesign(){
    document.getElementsByClassName('design-concepts')[0].removeAttribute('open');
}


function livestream(){
    alert("Functionality work in progress. For now this will toggle the state from On Air to Off Air");
    document.getElementsByClassName('air-status')[0].children[0].attributes[0].nodeValue = "images/Off-Air.png";
    document.getElementsByClassName('air-status')[0].children[1].setAttribute('style', 'display: none;');
}

function resetLiveStream(){
    document.getElementsByClassName('air-status')[0].children[0].attributes[0].nodeValue = "images/On-Air.png";
    document.getElementsByClassName('air-status')[0].children[1].setAttribute('style', 'display: visible;');
}

function setAction(selectObject){
    var direction = selectObject.value,
        form = document.getElementById('contact-form');
    switch (direction){
        case '': alert("Please select where we should direct your message.");
        case 'feedback':
            form.setAttribute('action', "feedback"); // mailto:feedbackaddress@something.com
            break;
        case 'compliments':
            form.setAttribute('action', "compliment"); //mailto:complimentaddress@something.com
            break;
        case 'request':
            form.setAttribute('action', "request"); //mailto:requestaddress@something.com
            break;
        case 'complaint':
            //insert code to roll up scroll and make it walk the plank
            document.getElementById('direct').children[4].setAttribute('disabled',true);
            break;
    }
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

/* function getHash(){
    var loc = location.hash;
    loadFlag();
    if l
    setCrewDisplay(loc);
} 

function setCrewDisplay(loc){
    switch (loc){
        case '':
            var menu = document.getElementsByClassName('menu')[0];
            menu.classList = 'menu nav';
            document.getElementsByTagName('title')[0].textContent = "The Crew | Jolly Roger Radio";
            document.getElementsByClassName('site-name')[0].hidden=true;
            document.getElementsByClassName('site-name')[0].textContent = "The Crew";
            document.getElementsByClassName('site-name')[0].hidden=false;
            document.getElementById('join').hidden = true;
            document.getElementById('join-form').hidden = true;
            document.getElementsByClassName('join')[0].hidden = false;
            for (i = 0; i < document.getElementsByClassName('bio').length; i++){
                document.getElementsByClassName('bio')[i].hidden = false;
            }
            break;
        
        case '#join':
            var menu = document.getElementsByClassName('menu')[0];
            menu.classList.remove('nav');
            menu.classList.add('nav-h');
            document.getElementsByTagName('title')[0].textContent = "Join The Crew | Jolly Roger Radio";
            document.getElementsByClassName('site-name')[0].hidden=true;
            document.getElementsByClassName('site-name')[0].textContent = "Join The Crew";
            document.getElementsByClassName('site-name')[0].hidden=false;
            document.getElementById('join').hidden = false;
            document.getElementsByClassName('join')[0].hidden = true;
            for (i = 0; i < document.getElementsByClassName('bio').length; i++){
                document.getElementsByClassName('bio')[i].hidden = true;
            }
            break;
    }
}

window.addEventListener('hashchange', getHash, false);
window.addEventListener('load', getHash, false); */
