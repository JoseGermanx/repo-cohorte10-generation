
const task1 = require('./task1');
const task2 = require('./task2');
const task3 = require('./task3');
const task4 = require('./task4');
const task5 = require('./task5');
const task6 = require('./task6');
const task7 = require('./task7');

const readline = {
  question: jest.fn(),
};

describe('Pruebas con Jest', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Caso 1: costCalculator', () => {
    // Configuración de entrada para la prueba
    readline.question.mockReturnValueOnce('124'); // Simula la entrada del usuario

    // Ejecutar la función y verificar el resultado
    expect(task1(readline.question())).toBe(128.24);
  });

  test('Caso 2: FriendNames', () => {
    // Configuración de entrada para la prueba
    readline.question.mockReturnValueOnce('Karim').mockReturnValueOnce('Uli').mockReturnValueOnce('Georgina');

    // Ejecutar la función y verificar el resultado
    const result = new task2(readline.question(), readline.question(), readline.question());
    expect(result).toEqual({name1: 'Karim', name2: 'Uli', name3: 'Georgina'});
  });

  test('Caso 3: ageCalculator', () => {
    // Configuración de entrada para la prueba
    readline.question.mockReturnValueOnce('2001').mockReturnValueOnce('12').mockReturnValueOnce('25');

    // Ejecutar la función y verificar el resultado
    let actualYear = new Date().getFullYear()
    expect(task3(readline.question(), readline.question(), readline.question())).toBe(2001 - actualYear);
  });

  test('Caso 4: FriendAge', () => {
    // Configuración de entrada para la prueba
    readline.question.mockReturnValueOnce('John').mockReturnValueOnce('1990').mockReturnValueOnce('01').mockReturnValueOnce('15');

    // Ejecutar la función y verificar el resultado
    const friend = new task4(readline.question(), readline.question(), readline.question(), readline.question());
    expect(friend.returnAge()).toBe(/* Resultado esperado */);
  });

  test('Caso 5: rubricPassFail', () => {
    // Configuración de entrada para la prueba
    readline.question.mockReturnValueOnce('7');

    // Ejecutar la función y verificar el resultado
    expect(task5(readline.question())).toBe(/* Resultado esperado */);
  });

  test('Caso 6: rubricExcellent', () => {
    // Configuración de entrada para la prueba
    readline.question.mockReturnValueOnce('10');

    // Ejecutar la función y verificar el resultado
    expect(task6(readline.question())).toBe(/* Resultado esperado */);
  });

  test('Caso 7: rubricPerfect', () => {
    // Configuración de entrada para la prueba
    readline.question.mockReturnValueOnce('11');

    // Ejecutar la función y verificar el resultado
    expect(task7(readline.question())).toBe(/* Resultado esperado */);
  });
});
