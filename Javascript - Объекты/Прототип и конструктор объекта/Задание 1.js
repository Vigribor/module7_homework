const hidden = Symbol.for('hidden');
const obj = {
 key_a: 'value_a',
 key_b: 'value_b',
 [hidden]: 'hidden_value'
};
// Выведет все ключи объекта
console.log(Object.keys(obj));
// Выдаст все собственные свойства объекта
console.log(Object.getOwnPropertyDescriptors(obj));