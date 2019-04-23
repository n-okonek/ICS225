$(document).ready(function(){
    $('.transition').css("display", "none");
    $('.transition').fadeIn(1000);
});

$.preloadImages = function(){
    for (var i = 0; i < arguments.length; i++){
        $("<img />").attr("src", arguments[i]);
    }
}

$.preloadImages('images/about-down.png', 'images/contact-down.png', 'images/crew-down.png', 'images/listen-down.png');

// closeDesign is just a function to close the design concepts window which is unable to be closed by clicking the details summary normally.
function closeDesign(){
    document.getElementsByClassName('design-concepts')[0].removeAttribute('open');
}

// livestream function will be updated to add an event listener for a live stream connection
function livestream(){
    alert("Functionality work in progress. For now this will toggle the state from On Air to Off Air");
    document.getElementsByClassName('air-status')[0].children[0].attributes[0].nodeValue = "images/Off-Air.png";
    document.getElementsByClassName('air-status')[0].children[1].setAttribute('style', 'display: none;');
}

//reset liveStream will be refactored once event listener for live stream is running
function resetLiveStream(){
    document.getElementsByClassName('air-status')[0].children[0].attributes[0].nodeValue = "images/On-Air.png";
    document.getElementsByClassName('air-status')[0].children[1].setAttribute('style', 'display: visible;');
}

// setAction tracks the value fo the select box on the contact form to direct the message of the contact form, will need separate cgi to hide emails from spiders and spam bots
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

function submitForm(){
    var form = document.getElementById('contact-form'),
        thanks = document.getElementById('thanks');
  
    form.hidden = true;
    thanks.hidden = false;
}

//validate email does exactly that on the contact form, validates email and if invalid displays a warning directly below the email input
function ValidateEmail(mail){
    var em = document.getElementById('email-invalid');
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail)){
        em.hidden = true;
        return (true)
    }else if(mail === ""){
            em.hidden = true;
            return (true)
    }else{
        em.hidden = false;
        return (false)
    }
}

// 
$('a.hptonav').click(function(event){
    event.preventDefault();
    $('.hp').animate({
        left: 0,
        top: 175,
        paddingLeft: 30,
        width: 330
    }, 1000);
    $('.hp > h2').animate({
        fontSize: '3em'
    }, 1000);
    $('.hptonav').animate({
        paddingLeft: 150,
        paddingTop:46,
        height: 75
    }, 1000);
    $('.hp li').attr('style','float: none;');
    $('.hp').attr('style','text-align: left;');
    redirectPage(this.href);
});

$('a.navtohp').click(function(event){
    event.preventDefault();
    $('.content-background').slideUp();
    $('.nav').animate({
        left: 950,
        top: 330,
        width: 610,
        paddingLeft: 0
    }, 1000);
    $('.nav > h2').animate({
        fontSize: '5rem'
    }, 1000);
    $('.navtohp').animate({
        paddingTop:120,
        paddingLeft:0,
        height:150
    }, 1000);
    $('.nav li').attr('style', 'float: left;');
    $('.nav').attr('style', 'text-align: center;');
    $('body').fadeOut(1000);
    redirectPage(this.href);
});

$('a.navtonavh').click(function(event){
    event.preventDefault();
    $('.content-background').slideUp();
    $('.nav').animate({
        top: 0,
        position: 'fixed',
    }, 1000);
    $('.nav > h2').animate({
        fontSize: "2em",
        color: "rgb(213, 201, 201)",
        textShadow: "0px 0px 20px rgb(255,255,255)"
    }, 1000);
    $('.nav li').animate({
        width: 75,
        height: 75
    }, 1000);
    $('.button-1').attr('style', 'background: url("images/listen-up.png") 0px/75px no-repeat;');
    $('.button-2').attr('style', 'background: ur;("images/crew-up.png") 0px/75px no-repeat;');
    $('.button-3').attr('style', 'background: ur;("images/about-up.png") 0px/75px no-repeat;');
    $('.button-4').attr('style', 'background: ur;("images/contac-up.png") 0px/75px no-repeat;');
    $('.nav li').attr('style', 'float: left;')
    $('.nav > ul > li > a').animate({
        fontSize: "2em",
        paddingTop: 65,
        opacity: 0
    }, 1000);
    redirectPage(this.href);
});

$('a.navhtonav').click(function(event){
    event.preventDefault();
    $('#join').slideUp();
    $('.content-background').slideUp();
    $('#breadcrumb').animate({
        left: -350,
    }, 1000);
    $('.nav-h').attr('style', 'text-align: left;');
    $('.nav-h').animate({
        left: 0,
        top: 175,
        paddingLeft: 30,
        width: 330
    }, 1000);
    $('.nav-h > h2').animate({
        fontSize: '3em',
        textShadow: '3px 2px 20px rgb(255, 255, 255)',
        color: 'rgb(0, 0, 0)'
    },1000);
    $('.button-1').attr('style', 'background: url("images/listen-up.png") no-repeat; float: none;');
    $('.button-2').attr('style', 'background: url("images/crew-up.png") no-repeat; float: none;');
    $('.button-3').attr('style', 'background: url("images/about-up.png") no-repeat; float: none;');
    $('.button-4').attr('style', 'background: url("images/contac-up.png") no-repeat; float: none;');
    $('.nav-h li').animate({
        width: 150,
        height: 150
    }, 1000);
    $('.nav-h > ul > li > a').animate({
        fontSize: "3em",
        paddingLeft: 150,
        paddingTop:46,
        height: 75,
        opacity: 1
    }, 1000);
    $('.crew-background.sitemap').animate({
        width: 0
    }, 1000);
    redirectPage(this.href);
});

$('a.navhtohp').click(function(event){
    event.preventDefault();
    $('body').fadeOut(1000);
    redirectPage(this.href);
});

$('a.navtonav').click(function(event){
    event.preventDefault();
    $('.content-background').slideUp(1000);
    redirectPage(this.href);
});

$('a.navhtonavh').click(function(event){
    event.preventDefault();
    $('.crew-background.sitemap').animate({
        width: 0
    }, 1000);
    redirectPage(this.href);
})

function redirectPage(link){
    setTimeout(function(){
        window.location = link;
    }, 1000);
}