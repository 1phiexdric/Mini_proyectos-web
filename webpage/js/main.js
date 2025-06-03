const theme = $('#theme')

$(function(){
    const savedTheme = localStorage.getItem('tema')
    if(savedTheme){
        theme.attr('href', `css/${savedTheme}.css`)
    }
    if(window.location.href.indexOf('index') >-1){

    $('.bxslider').bxSlider({
      captions: false,
      slideWidth: 0,
      speed: 800,
      adaptiveHeight: true,
      responsive: true,
    });
    }
  });

  //*posts



//*colocar post
if(window.location.href.indexOf('index') > -1){
      const posts = [
    {
        title: 'Prueba de titulo 1',
        date: moment().format("MMMM Do YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut placeat reiciendis nulla, natus expedita ab consequuntur nam? Sint doloribus blanditiis facilis, nobis pariatur nam voluptatum, harum voluptates, natus veniam tempore."
    },
    {
        title: 'Prueba de titulo 2',
        date: moment().format("MMMM Do YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut placeat reiciendis nulla, natus expedita ab consequuntur nam? Sint doloribus blanditiis facilis, nobis pariatur nam voluptatum, harum voluptates, natus veniam tempore."
    },
    {
        title: 'Prueba de titulo 3',
        date: moment().format("MMMM Do YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut placeat reiciendis nulla, natus expedita ab consequuntur nam? Sint doloribus blanditiis facilis, nobis pariatur nam voluptatum, harum voluptates, natus veniam tempore."
    },
    {
        title: 'Prueba de titulo 4',
        date: moment().format("MMMM Do YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut placeat reiciendis nulla, natus expedita ab consequuntur nam? Sint doloribus blanditiis facilis, nobis pariatur nam voluptatum, harum voluptates, natus veniam tempore."
    },
]
posts.forEach((Element, index) =>{
    let post = 
    `<article class="post">
    <h2>${Element.title}</h2>
    <time ${new Date()}>${Element.date}</time>
    <p>${Element.content}</p>
    <a href="#" class="btn_more">Leer mas</a>
    </article>`

    //obtener elemento con jquery
    $('#posts').append(post)

    /*
    <article class="post">
                    <h2>Titulo</h2>
                    <time datetime="2018-04-11">Fecha de publicación</time>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut placeat reiciendis nulla, natus expedita ab consequuntur nam? Sint doloribus blanditiis facilis, nobis pariatur nam voluptatum, harum voluptates, natus veniam tempore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consectetur libero facere alias nulla ratione est quas cum atque voluptatum debitis animi odit illum, consequatur dicta quibusdam doloribus maiores reiciendis!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure labore quibusdam, repellendus omnis laborum neque adipisci unde accusantium tempore est quam praesentium impedit consectetur nisi dolorum blanditiis. Consectetur, nemo exercitationem?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ipsa ducimus autem sed assumenda alias veniam quisquam pariatur velit. Deleniti velit voluptate quos consequuntur asperiores ad saepe, id quod modi?
                    </p>
                    <a href="#" class="btn_more">Leer mas</a>
                </article>
    */
})
}
//*Seleccionar tema
$('#to-red').click(function(){
    theme.attr('href', 'css/red.css')
    localStorage.setItem('tema', 'red')
})

$('#to-blue').click(function(){
    theme.attr('href', 'css/blue.css')
    localStorage.setItem('tema', 'blue')
})
$('#to-green').click(function(){
    theme.attr('href', 'css/green.css')
    localStorage.setItem('tema', 'green')
})

//scroll arriba de la pagina

$('.subir').click(function(e){
    e.preventDefault()
    $('html, body').animate({
        scrollTop: 0
    }, 500, 'swing')
})

// login falso

$('#login-form').submit(function(e){
    const name = $('#name').val()
    localStorage.setItem('nombre', name)
    const email = $('#email').val()
    localStorage.setItem('email', email)
    const password = $('#password').val()
    localStorage.setItem('password', password)
})

const user = localStorage.getItem('nombre')
if(user != null && user != undefined){
    let aboutP = $('#about p')
    aboutP.html(`Bienvenido <strong>${user}</strong>`).css('text-align', 'center')
    aboutP.append('<a href="#" id="logout">Cerrar sesion</a>')
    $('#login').hide()
    $('#logout').click(function(){
        localStorage.clear()
        location.reload()//actualiza la ventana
    })
}

if(window.location.href.indexOf('about_me') > -1){
    $('#acordeon').accordion({
        
    })
}