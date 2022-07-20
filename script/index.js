(function() { var w = window; if (w.ChannelIO) { return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.'); } var ch = function() { ch.c(arguments); }; ch.q = []; ch.c = function(args) { ch.q.push(args); }; w.ChannelIO = ch; function l() { if (w.ChannelIOInitialized) { return; } w.ChannelIOInitialized = true; var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js'; s.charset = 'UTF-8'; var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x); } if (document.readyState === 'complete') { l(); } else if (window.attachEvent) { window.attachEvent('onload', l); } else { window.addEventListener('DOMContentLoaded', l, false); window.addEventListener('load', l, false); } })(); ChannelIO('boot', { "pluginKey": "e143f2cc-742e-4bfb-82c6-75c392919391" });


let menuChecked = true
const menu = document.getElementsByClassName("menuItem")



function mainPage(){
    location.href = "https://objective.tk";
}

function movePage(href){
    location.href = href;
}

window.onload = async()=>{
    const modal = document.getElementById("modal")
    const req1 = await fetch(`https://objective.scratcher5-23.repl.co/bots/5-23`)
    let res1 = await req1.json()
    document.getElementById("description523").innerHTML = `${res1.data.servers}개의 서버에서 투표를 하고있는있는 5-23봇!`

    const req2 = await fetch(`https://objective.scratcher5-23.repl.co/bots/hello`)
    let res2 = await req2.json()
    document.getElementById("descriptionHELLO").innerHTML = `${res2.data.servers}개의 서버에서 놀아주고있는 안녕봇!`

    // const req3 = await fetch(`https://objective.scratcher5-23.repl.co/servers/bot`)
    // let res3 = await req3.json()
    // document.getElementById("descriptionHELLO").innerHTML = `${res2.data.members}개의 서버에서 놀아주고있는 안녕봇!`
}

function menuCheck(){
    if (menuChecked){
        menuChecked = false
        menu[0].style.transform += `translateY(16px) rotateZ(45deg)`
        menu[1].style.opacity = `0`
        menu[2].style.transform += `translateY(-16px) rotateZ(-45deg)`

        modal.style.display = `block`
    }else{
        menuChecked = true
        
        for (i = 0;i<3;i++){
            menu[i].style.transform = `rotateZ(0deg)`
        }
        menu[1].style.opacity = `1`

        modal.style.display = `none`
    }
}