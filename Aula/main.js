const os = require ('os');
const {soma,multiplicacao,divisao} = require('./util');


//console.log('Sistema operecional: ', os.p);
//console.log('Tempo ligado: ', os.uptime());
//console.log('Versão:', os.release());
//console.log('Memoria Livre', os.freemem());


console.log('Soma', soma(3,2));

console.log('Multiplicação', multiplicacao(3,2));

console.log('Divisão', divisao(10,2));
