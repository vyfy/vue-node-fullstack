const shallowObjClone = require('../shallowObjClone.js');

test('create a clone of the object parametr', () => {
    const myObj = {
        person: 'Hitchiker',
        number: 42,
    };
    expect(shallowObjClone(myObj)).toStrictEqual(myObj);
});
