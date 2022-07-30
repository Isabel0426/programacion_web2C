const peso_Controller = {};
const pacientesp={};
 let pesoGanado = {};
let pesoPerdido= {};
let pesoActual = [];
let pesoInicial={};
let pesoFinal;
let pesoIntermedio;
let PacienteObjetivo = 0;// Determine cuantos pacientes alcanzaron su objetivo.
//perdieron peso entre la pesada inicial y la pesada intermedia.


                              //obtener la info del resquest y calcular cuantos pacientes 
                              
                               peso_Controller.Peso = (req,res)=>{
                              let array_pacientes=req.body.pacientes
                              let pesoGanado = 0;
                              for (let index = 0; index < array_pacientes.length; index++) {//Almacenar los datos del grupo de n pacientes  
                                 const pacientes = array_pacientes[index];
                                               
                              
                             let pesoGanado = (peso_inicial - peso_final)/100;
                              //calcular el peso ganado
                               let obj_pacientes={}
                              obj_pacientes['nombre'] = pacientes.nombre;
                               obj_pacientes['peso_Actual'] = pesoGanado;
                               pesoActual.push(obj_pacientes);

                              //let pesoPerdido; = (peso_inicial peso_intermedio)
                              //calcular peso perdido
                              let obj_pacientesp={}
                              obj_pacientes['nombre'] = pacientes.nombre;
                              obj_pacientes['peso_Actual'] = pesoPerdido;
                              pesoActual.push(obj_pacientes);
                              }
}
//alcanzar su objetivo; if objetivo == bajar && bajar < peso_inicial
                              //entonces gano else objetivo == subir && subir > peso_inicial
                              //entonces Arrayobjetivos.push 


// } 
