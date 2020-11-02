export const templateDefault = `
<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Plantilla de prueba</title>
    </head>
    
    <body style="font-family: Arial, Helvetica, sans-serif; font-size: .8em">
        <div style="padding: 0px 60px">
           
            <div id="pageFooter" style="text-align: center; font-size: .7em; color: #FF842A">
                <div>Nombre del centro</div>
                <div>Dirección del centro</div>
                <a href="link">Página web</a>
                <div>subtitulo</div>
            </div>

            <div id="pageHeader" style="text-align: center; font-size: .7em; color: #FF842A; margin-top: 20px">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/1045px-Sena_Colombia_logo.svg.png" alt="logo sena" style="width: 70px; height: auto; float: left; margin-left: 60px" />
                <img src="https://www.mintrabajo.gov.co/image/journal/article?img_id=60724738&t=1572456922228&fileName=logo-gobierno-duque.png" style="width: 150px; height: 30px; float: right; margin-top: 22px; margin-right: 60px" alt="logo min trabajo" />
            </div>

            <div style="width: 100%;text-align: center">
                Ciudad
            </div>
    
            <div style="margin-top: 20px;">Aprendices</div>
            <div style="margin: 0; padding: 0">
                %{appreticesHtml}
            </div>
            <div>Asunto: </div>
    
            <p>Por medio de esta comunicación, le informamos que el instructor líder %{leader}, ha solicitado que se le convoque a un comité de evaluación y seguimiento debido a incumplimiento con el reglamento al aprendiz.</p>
    
            <p>Dichos comportamientos constituyen falta al Reglamento del Aprendiz, que establece: %{motivo_o_prohibicion}</p>
            
            <p>Por lo anterior, y ante la situación actual del país con la emergencia sanitaria y de confinamiento obligatorio, y de las medidas ordenadas por el Decreto 457 de 22 de marzo de 2020; en consonancia con lo prescrito en el Artículo 63 de la Ley 1437 de 2011, que reza así; “<strong>ARTÍCULO 63. SESIONES VIRTUALES</strong>. Los comités, consejos, juntas y demás organismos colegiados en la organización interna de las autoridades, podrán deliberar, votar y decidir en conferencia virtual, utilizando los medios electrónicos idóneos y dejando constancia de lo actuado por ese mismo medio con los atributos de seguridad necesarios”, se le está citando a Comité de Evaluación y Seguimiento, que <strong>se realizará el %{date}.</strong></p>
    
            <p>Para el efecto será contactada diez minutos antes del inicio de la sesión por medios virtuales de la plataforma TEAMS de Gmail con el siguiente link: <a href="%{meetingLink}" target="_blank">Clic Aquí</a>. si no tiene acceso le realizaremos videollamada a su número de contacto registrado en la Plataforma Sofíaplus, para ello, Usted puede elaborar y entregar por escrito el informe de descargos, anexando las pruebas correspondientes con anterioridad o aportarlas en el desarrollo de la sesión.</p>
    
            <p>Atentamente,</p>
    
            <div style="margin-top: 50px;padding-left: 230px;">
    
                <div>
                    <strong>Elkin Darío Tobón Tamayo</strong>
                    <div>Subdirector</div>
                    <div>Centro Tecnológico del Mobiliario</div>
                </div>
            </div>
            <div style="margin-top: 50px; font-size: .7em">
                <sub style="display: block">CC. Comité de Evaluación y Seguimiento - <a href="mailto:ComiteAprendices@sena.edu.co">ComiteAprendices@sena.edu.co</a></sub>
                <sub style="display: block">Proyectó: Edén Natalia Álvarez</sub>
                <sub style="display: block">Vo. Bo. Gloria Sánchez</sub>
                <sub style="display: block">Revisó: Luis Fernando Vallejo</sub>
            </div>
    
        </div>
    </body>
    
    </html>
`;