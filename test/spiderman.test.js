// Testing Spiderman
const Spiderman = require('./../app/spiderman')

describe('Unit Test for Spiderman Class', () => {
  test('1) Create a spiderman object', () => {
    // Instancia del objeto como normalmente se hace
    const andrew = new Spiderman("Amazing Spiderman", 31, "Andrew Garfield", 3, "Sony")

    // Se valida que el código funcione como debería
    expect(andrew.name).toBe('Amazing Spiderman')
    expect(andrew.age).toBe(31)
    expect(andrew.actor).toBe('Andrew Garfield')
    expect(andrew.movies).toBe(3)
    expect(andrew.studio).toBe('Sony')
  });

  test('2) Using get with Spiderman Class', () => {
    const tom = new Spiderman("Spiderman", 25, "Tom Holland", 5, "Marvel Studios")
    expect(tom.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studios")
  });

})