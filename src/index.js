import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//curso react intro es6+
//sirve para mostrar mensajes en la consola del navegador
console.log("curso react");
var mivariable1 = 1;
console.log(mivariable1);
var mivariable1 = "Elena";
console.log(mivariable1);

//variables con es6
let variable2=2;
console.log("variable2", variable2);
variable2="Elena2";
console.log("variable2", variable2);
 
//constantes
var miConstante = 3.1416 //PI
miConstante = "PI";
//constantes es6
const miConstantePI = 3.14155;
//miConstantePI = "PI";

//funciones
function suma(a, b){
  //console.log("a+b=",a+b);
  return a+b;
}
console.log("a+b = ",suma(2,3));

//funciones arrow (flecha) es6
//const suma2 = (a,b) => a+b;
const suma2 = (a,b) => {return a+b};
console.log("2 + 3 = ", suma2(2,3));

//template literal es6
const hola = "hola";
const nombre = "Jose";
const edad = 21;
console.log(hola+" mi nombre es: "+nombre + " y tengo "+ edad + " años");
//en es6+
console.log(`${hola} mi nombre es: ${nombre} y tengo ${edad} años`);

//arrays es6
/* const alumnos1 = ["jose","alan", "maria"];
const alumnos2 = ["emilio", "gabriela", "javier"]; */

//const alumnos3 = ["jose","alan", "maria", "emilio", "gabriela", "javier"];
//let alumnos3 = [];
//tarea hacer el algoritmo de union
/* for (let index = 0; index < alumnos1.length + alumnos2.length ; index++) {
  if(alumnos1.length - 1 > index){
    alumnos3[index] = alumnos1[index];
  }else if(alumnos2.length -1 > index){
    alumnos3[index] = alumnos2[index];
  }
} */

//spread operator
/* const alumnos3 = [...alumnos1, ...alumnos2];
console.log("alumnos3 = ", alumnos3); */

//objetos es6
const departamento = {
  superficie: 100,
  habitaciones: 3,
  banos: 2,
 /*  ubicacion: "prado",
  constructora: "dominic" */
}

const edificio = {
  ubicacion: "prado",
  constructora: "dominic"
}

const detalle = {...departamento, ...edificio};

console.log("detalle: ", detalle);

//iteradores
const alumnos1 = ["jose","alan", "maria"];
/* for (let index = 0; index < alumnos1.length; index++) {
 console.log(alumnos1[index]);
  
} */
alumnos1.map(alumno => console.log(alumno));

//filtros
const alumnos2 = ["emilio", "gabriela", "javier"];
const existeAlumno = alumnos2.findIndex(alumno => alumno == "javier")
console.log("existeAlumno: javier",existeAlumno >= 0 ? "si": "no" );

const alumnosNotas = [
  {
    nombre: "javier",
    nota: 80
  },
  {
    nombre: "ana",
    nota: 50
  },
  {
    nombre: "carlos",
    nota: 70
  },
  {
    nombre: "helen",
    nota: 50
  },
]

//buscar todos los que tiene la nota de 50
console.log(alumnosNotas.filter(alumnonota => alumnonota.nota == 50 ))

//clases
var Autito = function (marca){
  this.marca =  marca;
}
//clases es6+
class Auto {
  constructor(marca, modelo, ano){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
  }
  mostrar(){
    console.log(`${this.marca} ${this.modelo}`);
  }
}

//ejercicio crear un sistema de parqueo donde se parquean autos
class Parqueo {
  //Auto autos  = [];
  constructor(capacidad, libres){
    this.capacidad = capacidad
    this.libres = libres
  }
}

function main (){
  const parqueo = new Parqueo(5,5);
  const auto = new Auto("Toyota", "hilux", 2002);
  parqueo.libres = parqueo.libres  - 1;
  const autoMazda = new Auto("Mazda", "mazda 3", 2002);
  parqueo.libres = parqueo.libres  - 1;
  console.log("espacios disponibles = ", parqueo.libres); 
}

main();

//manejo de asincronia en es6
//simulando una llamada al servidor para traer datos

const llamdaALservidor = async () => {
  return new Promise(resolve => setTimeout(resolve, 4000));
}

const proceso = async () => {
  
  /* llamdaALservidor().then(function (){
    console.log("continuacion del flujo del programa");
  }) */

  await llamdaALservidor();
  console.log("continuacion del flujo del programa");
  
}

proceso();








