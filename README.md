<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h1> ¿quieres calcular tu finiquito? </h1> <br>
       <p> si al fin te liberaste de la explotacion laboral y quieres calcular tu parte correspondiente esto te ayudara <br>
        recuerda ser lo mas especifo y exacto en las cantidades para que tu finiquito sea exacto </p>
             <p> ¿cual es tu salario diario? <br> si no lo sabes solo divide tu salario mensual entre 30. </p>
             <p> 
                 <input type="number" id="sueldo diario">
                
             </p>
             <p>
                ¿cuantos dias de aguinaldo dan en tu empresa?
             </p>
             <p>
                <input type="number" id="diasaguinaldo">
             </p>
             
             <p>
                ¿cuantos meses del año en curso  trabajaste en la empresa? <br> 
                ejemplo: renuncie en noviembre, por lo tanto labore 11 meses de este año 
             </p>
             <p>
                <input type="number" id="mesestrabajados">
             </p>
             <p>
                ¿cuantos dias de vacaciones te corresponden? 
                <p>
                    <img src="vakaziones.jpg">
                </p>
                <input type="number" id="diasvacaciones">
             </p>
             <button onclick="suma()"> suma</button>
             <p finiquitototal>
            
             </p>

        <script src="calculadorafiniquito.js"> 
        </script>
    </body>
</html>