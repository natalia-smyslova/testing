/**
 * @jest-environment jsdom
 */


import Moon from "../Moon";
import validateCardType from "../validators";

// Тест на алгоритм Луна (правильный номер карты)

test('it should return true for valid Moon algorithm', () => {

    const card_number = "3544586219675001";

    expect(Moon(card_number)).toBe(true);
});

// Тест на алгоритм Луна (неправильный номер карты)

test('it should return false for invalid Moon algorithm', () => {

    const card_number = "3544";

    expect(Moon(card_number)).toBe(false);
});


// Тест МИР


test.each([
    ['true for valid MIR', '2773661742265499', true],
    ['true for valid MIR', '2541069310634909', true],
    ['true for valid MIR', '2128692774135955', true],

])(('it should be %s'), (_, input, expected) => {
    expect(validateCardType(input)).toBe(expected);
});

// Тест Visa

test.each([
    // Тест Visa начинается с 4
    ['true for valid Visa', '4539247490400651', true],

    // Тест Visa начинается с 4917
    ['true for valid Visa', '4917181299000499', true],

    // Тест Visa начинается с 4508
    ['true for valid Visa', '4508015190206406', true],

    // Тест Visa число символов 19
    ['true for valid Visa', '4024007110805111479', true],

])(('it should be %s'), (_, input, expected) => {
    expect(validateCardType(input)).toBe(expected);
});

// Тест Dinners Club

test.each([
    // Тест Dinners Club начинается с 305
    ['true for valid Dinners Club', '30561572652258', true],

    // Тест Dinners Club начинается с 303
    ['true for valid Dinners Club', '30320741176008', true],

    // Тест Dinners Club начинается с 36
    ['true for valid Dinners Club', '36673467167310', true],

    // Тест Dinners Club начинается с 354
    ['true for valid Dinners Club', '5480401619655846', true],

])(('it should be %s'), (_, input, expected) => {
    expect(validateCardType(input)).toBe(expected);
});


// Тест Discover


test.each([
    // Тест Discover начинается с 6011
    ['true for valid Discover', '6011300051574083', true],

])(('it should be %s'), (_, input, expected) => {
    expect(validateCardType(input)).toBe(expected);
});


// Тест JSB 

test.each([
    // Тест JSB первые цифры 3528 to 3589
    ['true for valid JSB', '3544586219675001', true],

    // Тест JSB первые цифры 3528 to 3589
    ['true for valid JSB', '3536943663056206', true],

    // Тест JSB первые цифры 3528 to 3589
    ['true for valid JSB', '3543215424647951754', true],

])(('it should be %s'), (_, input, expected) => {
    expect(validateCardType(input)).toBe(expected);
});


// Тест MasterCard 

test.each([
    // Тест MasterCard начинается с 52
    ['true for valid MasterCard', '5269839718773605', true],

    // Тест MasterCard начинается с 55
    ['true for valid MasterCard', '5576493539514547', true],

    // Тест MasterCard начинается с 53
    ['true for valid MasterCard', '5313643888594759', true],

])(('it should be %s'), (_, input, expected) => {
    expect(validateCardType(input)).toBe(expected);
});


// Тест American Express начинается с 34

test.each([
    // Тест American Express начинается с 34
    ['true for valid American Express', '346885517787187', true],

    // Тест American Express начинается с 37
    ['true for valid American Express', '373534686120681', true],

])(('it should be %s'), (_, input, expected) => {
    expect(validateCardType(input)).toBe(expected);
});


// Неизвестная платежная система

// test.each([
//     // Maestro
//     ['true for valid unknown card', '6384019370783105', true],

//     // InstaPayment
//     ['true for valid unknown card', '6392898668227473', true],

// ])(('it should be %s'), (_, input, expected) => {
//     expect(validateCardType(input)).toBe(expected);
// });

