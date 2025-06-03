window.addEventListener('load', function(){
    const wheel = document.getElementById('wheel');
    const spinBtn = document.getElementById('spin-btn');
    const finalWinner = document.getElementById('final-winner');
    const div1 = document.querySelector('.sorteo.div1');
    let parrafo = document.createElement('p');
    console.log(div1)
    let myChart;
    //const display = document.querySelector('.hidden');
    //display.style.display = "none";
    let elementos = ["Pedro","Santiago", "el Anciano","Juan","Andrés","Bartolomé","Santiago", "el Menor","Judas Iscariote","Judas Tadeo","Mateo","Felipe","Simón","Tomás"]
    generarRuleta(elementos);
    const form = document.querySelector("#ruleta_form");
    form.addEventListener('submit', function(){
        let participantes = []
        event.preventDefault();//previene que se enive el formulario
        participantes = document.getElementById("personas").value
        elementos = participantes.split("\n").filter((elemento) => !elemento == "")
        if(participantes.length != 0){
            generarRuleta(elementos);
            clean()
        }else{
            div1.appendChild(parrafo);
            parrafo.innerHTML = `<span style="color: red; margin: auto">Introdusca los participantes</span>`
        }
        
        
    });
    function clean(){
        div1.removeChild(parrafo)
        parrafo.innerHTML = ""
    }
    function generarRuleta(elementos){
        if (myChart) {
            myChart.destroy(); // Destruye el gráfico existente
        }
        //display.style.display = "block";
        const data = elementos.map(() => 1);
    
    // Colores de cada sector
    let colores = elementos.map(() => {
        let simbolos = '0123456789ABCDEF';
        let color = '#';
    
        for (let i = 0; i < 6; i++) {
            color += simbolos[Math.floor(Math.random() * 16)];
        }
        return color.toString();
    });
    
    // Crear el gráfico
    myChart = new Chart(wheel, {
        plugins: [ChartDataLabels],
        type: "pie",
        data: {
            labels: elementos, // Usa el array de elementos como etiquetas
            datasets: [
                {
                    backgroundColor: colores,
                    data: data, // Tamaños de los sectores
                },
            ],
        },
        options: {
            responsive: true,
            animation: { duration: 0 },
            plugins: {
                tooltip: false,
                legend: {
                    display: false
                },
                datalabels: {
                    color: "#fff", // Color del texto
                    formatter: (_, context) => {
                        // Muestra el nombre del elemento tal como está en el array
                        return context.chart.data.labels[context.dataIndex];
                    },
                    font: {
                        size: 16 // Tamaño de la fuente
                    },
                    align: 'end',
                    rotation: (context) => {
                        // Calcula la rotación para cada etiqueta
                        const chart = context.chart;
                        const meta = chart.getDatasetMeta(0); // Obtiene los metadatos del dataset
                        const sector = meta.data[context.dataIndex]; // Obtiene el sector actual
                        const angle = (sector.startAngle + sector.endAngle) / 2; // Ángulo medio del sector
                        return (angle * 180 / Math.PI); // Convierte a grados y ajusta la rotación
                    }
                }
            }
        }
    });
    

    let count = 0;
    
    let resultValue = 101;
    
    //girar la ruleta
    
    spinBtn.addEventListener('click', () => {
        spinBtn.disabled = true;
        //vaciar valor final
        finalWinner.innerHTML = `<p>Buena Suerte!</p>`;
        //generar un grado aletario para la rotacion
        let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
        //intervalor para la animacion de rotacion
        let rotationInterval = window.setInterval(() => {
        //Set rotation for piechart
        /*
        Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
        */
        myChart.options.rotation = myChart.options.rotation + resultValue;
        //actualizar el chart con el nuevo valor
        myChart.update();
        //si la rotacion es mayor a 360, reiniciarla
        if(myChart.options.rotation >= 360){
            count += 1;
            resultValue -= 5;
            myChart.options.rotation = 0;
        }else if(count>15 && myChart.options.rotation == randomDegree){
            clearInterval(rotationInterval);
            finalWinner.innerHTML = `<p>Felicitaciones</p>`;
            count = 0;
            resultValue = 101;
            spinBtn.disabled = false;
        }
        }, 10);
    });
    
    }});
