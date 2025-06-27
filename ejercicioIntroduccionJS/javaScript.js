
// Variables primitivas
const clase = 'Introducción a JS';
let texto = 'Kenne Arenas';
let age = 42;
isActive = true;
let indefinido;
let city = null;
let simbolo = Symbol('simbolo');

// Mostrar
console.groupCollapsed('Valores Iniciales de Tipos Primitivos');
console.log('clase:', clase);
console.log('Name:', texto);
console.log('Age:', age);
console.log('clase:', clase);
console.log('Indefinido:', indefinido);
console.error('Nulo:', city);
console.debug('Símbolo:', simbolo);
console.groupEnd();

// Cambiar los valores
texto = 'Arley Peña';
age = 56;
isActive = false;
indefinido = 'Ahora definido';
city = 'Ya no es nulL';
simbolo = Symbol('@');

// Agrupamos cambios
console.groupCollapsed('Valores Modificados');
console.log('clase:', clase);
console.log('Name:', texto);
console.log('Age:', age);
console.debug('clase:', clase);
console.error('Indefinido:', indefinido);
console.debug('Nulo:', city);
console.debug('Símbolo:', simbolo);
console.groupEnd();
