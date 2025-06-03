//reloj

setInterval(()=>{
    let reloj = moment().format('hh:mm:ss');
    $('#reloj').html(reloj)
}, 1000)