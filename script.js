function mostrarTodo() {
    document.getElementById("liga").style.display = "block";
    document.getElementById("bNacional").style.display = "block";
    document.getElementById("libertadores").style.display = "block";
    document.getElementById("Sudamericana").style.display = "block";
}
function mostrarBNacional() {
    document.getElementById("liga").style.display = "none";
    document.getElementById("bNacional").style.display = "block";
    document.getElementById("libertadores").style.display = "none";
    document.getElementById("Sudamericana").style.display = "none";
}
function mostrarLibertadores() {
    document.getElementById("liga").style.display = "none";
    document.getElementById("bNacional").style.display = "none";
    document.getElementById("libertadores").style.display = "block";
    document.getElementById("Sudamericana").style.display = "none";
}
function mostrarLiga() {
    document.getElementById("liga").style.display = "block";
    document.getElementById("bNacional").style.display = "none";
    document.getElementById("libertadores").style.display = "none";
    document.getElementById("Sudamericana").style.display = "none";
}
function mostrarSudamericana() {
    document.getElementById("liga").style.display = "none";
    document.getElementById("bNacional").style.display = "none";
    document.getElementById("libertadores").style.display = "none";
    document.getElementById("Sudamericana").style.display = "block";
}

function mostrarProductos() {
    document.getElementById("buzocampera").style.display = "block";
    document.getElementById("remera1").style.display = "block";
    document.getElementById("remera2").style.display = "block";
    document.getElementById("pantalon1").style.display = "block";
    document.getElementById("pantalon2").style.display = "block";
}
function mostrarBuzoCampera() {
    document.getElementById("buzocampera").style.display = "block";
    document.getElementById("remera1").style.display = "none";
    document.getElementById("remera2").style.display = "none";
    document.getElementById("pantalon1").style.display = "none";
    document.getElementById("pantalon2").style.display = "none";
}
function mostrarRemera() {
    document.getElementById("buzocampera").style.display = "none";
    document.getElementById("remera1").style.display = "block";
    document.getElementById("remera2").style.display = "block";
    document.getElementById("pantalon1").style.display = "none";
    document.getElementById("pantalon2").style.display = "none";
}
function mostrarPantalon() {
    document.getElementById("buzocampera").style.display = "none";
    document.getElementById("remera1").style.display = "none";
    document.getElementById("remera2").style.display = "none";
    document.getElementById("pantalon1").style.display = "block";
    document.getElementById("pantalon2").style.display = "block";
}


function irForo() {
    window.location.href = "foro.html";
}
function irPartidos() {
    window.location.href = "index.html";
}
function irNoticias() {
    window.location.href = "noticias.html";
}
function irLogin() {
    window.location.href = "login.html";
}

//chat foro
function cargarForo() {
    if (localStorage.getItem('msg1') !== null) {
        const chatContainer = document.getElementById('chatContainer');
        const messages = chatContainer.querySelectorAll('.message');
        messages[0].innerHTML = localStorage.getItem('msg1');
        messages[0].className = localStorage.getItem('msg1Class');
        messages[1].innerHTML = localStorage.getItem('msg2');
        messages[1].className = localStorage.getItem('msg2Class');
        messages[2].innerHTML = localStorage.getItem('msg3');
        messages[2].className = localStorage.getItem('msg3Class');
        messages[3].innerHTML = localStorage.getItem('msg4');
        messages[3].className = localStorage.getItem('msg4Class');
    }else{
        const chatContainer = document.getElementById('chatContainer');
        const messages = chatContainer.querySelectorAll('.message');
        messages[0].innerHTML = '<div class="avatar"><img src="img/equipos/belgrano.png" alt="" style="width: 40px;height: 40px;"></div><div class="message-content"><strong>Bautista</strong><p>Gente, me corté el pelo.</p></div><span class="time">14:26</span>'
        messages[1].innerHTML = '<div class="avatar"><img src="img/equipos/estudiantes.png" alt="" style="width: 40px;height: 40px;"></div><div class="message-content"><strong>Bautista</strong><p>neishe.</p></div><span class="time">14:26</span>'
        messages[2].innerHTML = '<div class="avatar"><img src="img/equipos/river.png" alt="" style="width: 40px;height: 40px;"></div><div class="message-content"><strong>Bautista</strong><p>imaginate ser de lanussss</p></div><span class="time">14:26</span>'
        messages[3].innerHTML = '<div class="avatar"><img src="img/equipos/Boca.png" alt="" style="width: 40px;height: 40px;"></div><div class="message-content"><strong>Bautista</strong><p>sape</p></div><span class="time">14:26</span>'
        guardarMSGS();
    }
}

window.onload = function() {
    cargarForo();
}




function enviarMSG() {
    const chatContainer = document.getElementById('chatContainer');
    const messages = chatContainer.querySelectorAll('.message');
    var mensaje = document.getElementById("msgForo").value;
    messages[0].innerHTML = messages[1].innerHTML;
    messages[0].className = messages[1].className;

    messages[1].innerHTML = messages[2].innerHTML;
    messages[1].className = messages[2].className;

    messages[2].innerHTML = messages[3].innerHTML;
    messages[2].className = messages[3].className;

    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    messages[3].innerHTML = '<div class="avatar"><img src="img/equipos/belgrano.png" alt="" style="width: 40px;height: 40px;"></div><div class="message-content"><strong>Bautista</strong><p>' + mensaje + '</p></div><span class="time">'+horas+':'+minutos+':'+segundos+'</span>';
    messages[3].className = 'message own-message';
    document.getElementById("msgForo").value = ''; 
    guardarMSGS();
    //que tarde un segundo en llamar a nuevoMSG
    setTimeout(function() {
        nuevoMSG();
    }, 1000);
}

function nuevoMSG() {

    const chatContainer = document.getElementById('chatContainer');
    const messages = chatContainer.querySelectorAll('.message');
    var mensajes = ["Holaaaaaaaaaaaaaaaa","imaginate ser de lanussss", "qonda pa", "riberrrrrr", "quien juega hoy", "fuster agarrate", "oso zebra leon", "PAPI", "kkkkkkkkkkk", "vamoooooooo", "alta facha bro", "hoy juega messi?", "te caes a pedazos", "rta pa", "diosssssss", "no te la puedo", "nunca creí ver esto", "asjdhaksjhd", "JAJAJAJAAJAJA", "el que no salta es un ingles", "de unaaaaaa", "banco fuerte", "NAAAAAAAA", "andaaaaaaa", "nos vemos en disney", "puro humo", "miralo a este", "volvio el rey", "lo de este tipo", "altisimo", "qué haces máquina", "papáaaaaaa", "dale campeón", "bien ahí", "quien pudiera", "ojalá algún día", "qué nivel", "una bestia", "jajsdhjasdhas", "tremendo", "sin palabras", "mamita", "de qué planeta viniste", "nivel dios", "sublime", "así no se puede", "todo mal", "no me sorprendería", "te sale todo", "SEEEEEEE", "ni la vio", "le pasó el trapo", "explota la bombonera", "NOOOOOOO", "un crack", "modo diablo", "anda a cantarle a gardel", "se picó", "tiren paredes", "QUÉ PASÓ?", "alto flash", "pintó la épica", "no te la robo", "MODO LEYENDA", "messi mi pastor", "se nos va", "una locura", "full magia", "acá no se negocia", "lo lleva en la sangre", "es hoy", "nunca vi algo igual", "mamma mia", "no te duermas", "insoportable", "chupate esa mandarina", "jugá y callate", "se la creyó", "por escándalo", "una fiesta", "el pibe", "SE FUE TODO AL CARAJO", "re manija", "cósmico", "campeones del mundo", "arrancamos mal", "me vuelvo loco", "yendo sin mirar atrás", "se despertó la bestia", "qué máquina", "no apto para cardíacos", "nos vemos", "así sí", "rompela toda", "de otro planeta", "increíble pero real"];
    var nombres = ["Bautista", "Fuester", "RiverTeFuisteALaBBurro", "jose", "bocateamo", "veggetta7778777", "user40348832", "usernotfound", "balsheet", "kinglion", "pablito", "elrasta", "userdeleted", "messi10", "scaloneta", "fideo11", "user1221", "matefan", "panchitox", "eltriki", "zlatanx", "ronaldoced", "usereliminado", "santiaguin", "bosterito", "riverpuro", "ramongallardo", "marianitox", "masterchief", "tomasito", "carpdelalma", "user99999", "perritofiel", "charlygarcia", "vamoarribaa", "pulpitox", "aguantelavida", "copalibertadores", "serginio", "julianalvarez", "uachamo", "ricardofort", "fortinite", "santihero", "ulisesbue", "gianmarco", "userarchived", "luchoelcrack", "pinturicchio", "d10smessi", "pauloshadow", "usernamerandom", "aestheticuser", "juancito2025", "anonimo404", "misterx", "sniperpro", "elmaquinon", "leomessi", "misteriosa", "soyundios", "victorvaldez", "rambo23", "nachit0", "alan_walker", "lukitasss", "julitocapo", "faculion", "pedroelvago", "rinoceronte", "coder123", "pruebadeusuario", "torito", "mandarinaboy", "seba22", "goku_ultrainstinct", "gianpiero", "ultramasivo", "nuncalose", "random_user", "jack_black", "elviejodelboliche", "ultrapr0", "pepeargento", "tinchoboss", "gambetita", "copadelfutbol", "elpresi", "futbolsinlimites", "mariamorenita", "elcaporal", "userprueba123", "yaelcrack", "estebang", "diablomessi", "fieritacatalano"];
    var imagenes = ["img/equipos/belgrano.png","img/equipos/Boca.png","img/equipos/centralCordoba.png","img/equipos/chacarita.png","img/equipos/Club_santelmo_logo.png","img/equipos/Defensores_unidos_logo.png","img/equipos/Escudo_Botafogo.png","img/equipos/estudiantes.png","img/equipos/river.png","img/equipos/rosarioCentral.png","img/equipos/temperley.png","img/equipos/velez.png"];
    messages[0].innerHTML = messages[1].innerHTML;
    messages[0].className = messages[1].className;

    messages[1].innerHTML = messages[2].innerHTML;
    messages[1].className = messages[2].className;

    messages[2].innerHTML = messages[3].innerHTML;
    messages[2].className = messages[3].className;

    var randomMSG = Math.floor(Math.random() * mensajes.length);
    var randomNombre = Math.floor(Math.random() * nombres.length);
    var randomIMG = Math.floor(Math.random() * imagenes.length);

    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');


    messages[3].innerHTML = '<div class="avatar"><img src="'+imagenes[randomIMG]+'" alt="" style="width: 40px;height: 40px;"></div><div class="message-content"><strong>'+nombres[randomNombre]+'</strong><p>' + mensajes[randomMSG] + '</p></div><span class="time">'+horas+':'+minutos+':'+segundos+'</span>';
    messages[3].className = 'message'; 
    guardarMSGS();
}

function guardarMSGS() {
    const chatContainer = document.getElementById('chatContainer');
    const messages = chatContainer.querySelectorAll('.message');
    localStorage.setItem('msg1', messages[0].innerHTML);
    localStorage.setItem('msg1Class', messages[0].className);
    localStorage.setItem('msg2', messages[1].innerHTML);
    localStorage.setItem('msg2Class', messages[1].className);
    localStorage.setItem('msg3', messages[2].innerHTML);
    localStorage.setItem('msg3Class', messages[2].className);
    localStorage.setItem('msg4', messages[3].innerHTML);
    localStorage.setItem('msg4Class', messages[3].className);
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('show');
}

