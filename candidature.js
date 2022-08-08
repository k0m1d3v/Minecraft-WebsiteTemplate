whurl = "https://discord.com/api/webhooks/1001619976647622807/3gTsFFnsOL0rQkPvRTEOhZ55vrDci9jJuH6ib9HW9IZW1yROxE9YegLhwL0Zlrzg2DtM"

var name= "";
var discord_tag= "";
var eta= "";
var tempo_gioco= "";
var modalita= "";
var ore_online= "";
var staff_exp= "";
var insulti_staff="";
var razzismo="";
var why_staff="";
var more_than_others="";
var telegram_tag="";
var str= "";

function f1(){
    name = "Candidature Web";

    //strpuzzle
    discord_tag = document.getElementById("DsTag").value;
    eta = document.getElementById("Eta").value;
    tempo_gioco = document.getElementById("PlayedTime").value;
    modalita = document.getElementById("Modalita").value;
    ore_online = document.getElementById("TimeOnline").value;
    staff_exp = document.getElementById("StaffExp").value;
    insulti_staff = document.getElementById("InsultiStaff").value;
    razzismo = document.getElementById("Razzismo").value;
    why_staff = document.getElementById("WhyStaff").value;
    more_than_others = document.getElementById("OtherApplier").value;
    telegram_tag = document.getElementById("TelegramTag").value;


    //strfinal

    str = "```Tag Discord:" + "\r\n" + discord_tag + "\r\n" + "Età:" + "\r\n" + eta + "\r\n" + "Tempo giocato sul server:" + "\r\n" + tempo_gioco + "\r\n" + "Modalità designata:" + "\r\n" + modalita + "\r\n" + "Tempo disponibile online:" + "\r\n" + ore_online + "\r\n" + "Esperienze staff:" + "\r\n" + staff_exp + "\r\n" + "Cosa faresti se degli utenti ti insultassero:" + "\r\n" + insulti_staff + "\r\n" + "Cosa faresti se degli utenti assumessero comportamenti razzisti:" + "\r\n" + razzismo + "\r\n" + "Perché vuoi entrare nello staff:" + "\r\n" + why_staff + "\r\n" + "Cosa pensi di avere in più rispetto ad altri candidati:" + "\r\n" + more_than_others + "\r\n" + "@telegram:" + "\r\n" + telegram_tag + "```" ;
    console.log(document.getElementById("DsTag").value);
}

function Send(){
    f1();
    const msg = {
        "content": str,
        "username": name
    };
    console.log(msg)
    if(str == ""){
        document.getElementById("Message1").style.opacity = 1;
        setTimeout(function(){
            document.getElementById("Message1").style.opacity = 0;
        }, 4000)
        console.log("ERROR")
        return;
    }
    try{
        fetch(whurl + "?wait=true", {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)});
        document.getElementById("InputField").value = "";
        document.getElementById("MessageSent").style.opacity = 1;
        setTimeout(function(){
            document.getElementById("MessageSent").style.opacity = 0;
        }, 4000)

    } catch(e){
        document.getElementById("MessageFailed").style.opacity = 1;

        setTimeout(function(){
            document.getElementById("MessageFailed").style.opacity = 0;
        }, 4000)
    }
  }
