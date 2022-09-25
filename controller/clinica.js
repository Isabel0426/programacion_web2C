const clinicaControll = {};
///pacientes',clinicaControll.create)
clinicaControll.create=(req,res) =>{
    let response={}
    let pesoTotal_actual = [];
    let PacienteObjetivo= [];
    let pesoPerdido =0
    let pesoPerdidoC= 0

let array_pacientes = req.body.pacientes

for (let index = 0; index < array_pacientes.length; index++) {//for para recorrer 
    const paciente = array_pacientes[index];
        //PACIENTE QUE SI GANO POR BAJAR DE PESO
    if (paciente.pesoInicial < paciente.pesoFinal) { 
        let pesoActual={}
        pesoActual['Nombre']=paciente.Nombre;
        pesoActual['peso_ganado']=paciente.pesoFinal-paciente.pesoInicial;
        pesoActual['Estado']="Ganado";
        pesoTotal_actual.push(pesoActual)
    }
    //PACIENTE QUE PERDIO POR SUBIR PESO
    if (paciente.pesoInicial > paciente.pesoFinal) {
        let pesoActual={}
        pesoActual['Nombre']=paciente.Nombre;
        pesoActual['peso_ganado']=paciente.pesoFinal-paciente.pesoInicial;
        pesoActual['Estado']="Perdido";
        pesoTotal_actual.push(pesoActual)
    }
   //CALCULAR EL PESO PERDIDO ENTRE EL INICIAL Y EL INTERMEDIO
   if (paciente.pesoInicial > paciente.pesoIntermedio) {
       pesoPerdidoC++;
   } 
   //Determine cuantos pacientes alcanzaron su objetivo.
   if (paciente.pesoInicial > paciente.pesoFinal && paciente.PacienteObjetivo=="sibajo") {
    let pacienteobjCumplido={}
     pacienteobjCumplido['Nombre']= paciente.Nombre;
     pacienteobjCumplido['pesoPerdido'] =paciente.pesoInicial-paciente.pesoFinal;
     pacienteobjCumplido['elObjetivo']="Cumplido";
     PacienteObjetivo.push(pacienteobjCumplido)

    
   }
}
    //RESPONSE response
    response['pesoTotal_actual']=pesoTotal_actual
    response['PacienteObjetivo']=PacienteObjetivo
    response['pesoPerdidoC']=pesoPerdidoC


        //obtener respuesta en formato json
        res.json(response);
}
module.exports= clinicaControll; //se exporta la clinica y se llama
//  let pesoGanado = {};
// En el body de postman 
// {
//    "estudiantes": [
//         {
//             "nombre":"juan",
//             "n1":1.5,
//             "n2":3,
//             "n3":4.5,
//             "n4":5,
//             "n5":3
//         }]
// }
// let pesoPerdido= {};necesito contar y acumular para obtener el resultado
// let pesoActual = [];ya esta
// let pacienteobjCumplido={}
// let pesoInicial={};
// let pesoFinal;
// let pesoIntermedio;

// let PacienteObjetivo = 0;// Determine cuantos pacientes alcanzaron su objetivo.
//perdieron peso entre la pesada inicial y la pesada intermedia.


                              //obtener la info del resquest y calcular cuantos pacientes 
                              
//                                peso_Controller.Peso = (req,res)=>{
//                               let array_pacientes=req.body.pacientes
//                               let pesoGanado = 0;
//                               for (let index = 0; index < array_pacientes.length; index++) {//Almacenar los datos del grupo de n pacientes  
//                                  const pacientes = array_pacientes[index];
                                               
                              
//                              let pesoGanado = (peso_inicial - peso_final)/100;
//                               //calcular el peso ganado
//                                let obj_pacientes={}
//                               obj_pacientes['nombre'] = pacientes.nombre;
//                                obj_pacientes['peso_Actual'] = pesoGanado;
//                                pesoActual.push(obj_pacientes);

//                               //let pesoPerdido; = (peso_inicial peso_intermedio)
//                               //calcular peso perdido
//                               let obj_pacientesp={}
//                               obj_pacientes['nombre'] = pacientes.nombre;
//                               obj_pacientes['peso_Actual'] = pesoPerdido;
//                               pesoActual.push(obj_pacientes);
//                               }
// }
//alcanzar su objetivo; if objetivo == bajar && bajar < peso_inicial
                              //entonces gano else objetivo == subir && subir > peso_inicial
                              //entonces Arrayobjetivos.push 


// } 
