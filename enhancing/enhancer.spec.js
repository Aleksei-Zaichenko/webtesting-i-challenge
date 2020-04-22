const enhancer = require('./enhancer.js');
// test away!

describe('.enhancer.js', ()=>{

    //for stretch
    //testing .get function from enhancer
    // describe('enhancer.get',() => {
    //     it('.get function must be called and return some values', ()=>{
    //         expect(enhancer.get(1,2,2,2)).toBeTruthy();
    //     })

    // })

    //testing .repair function from enhancer
    describe('enhancer.repair', () => {
        it('.repair function must be called and return an object with durability property equals to 100', ()=>{
            expect(enhancer.repair({
                name: 'axe', 
                durability: 98, 
                enhancement: '20'
            })).toMatchObject({
                name: 'axe', 
                durability: 100, 
                enhancement: '20'
            });

            expect(enhancer.repair({
                name: 'axe', 
                durability: 57, 
                enhancement: '20'
            })).toMatchObject({
                name: 'axe', 
                durability: 100, 
                enhancement: '20'
            });
        })
    })

    //testing .succeed function from enhancer
    describe('enhancer.succeed',() => {
        it('.succeed function must be called and return a new object with enhancement property increased by 1', () => {
            expect(enhancer.succeed({
                name: 'axe', 
                durability: 100, 
                enhancement: 20
            })).toMatchObject({
                name: 'axe', 
                durability: 100, 
                enhancement: 20
            });

            expect(enhancer.succeed({
                name: 'axe', 
                durability: 57, 
                enhancement: 19
            })).toMatchObject({
                name: 'axe', 
                durability: 57, 
                enhancement: 20
            });

            expect(enhancer.succeed({
                name: 'axe', 
                durability: 57, 
                enhancement: 2
            })).toMatchObject({
                name: 'axe', 
                durability: 57, 
                enhancement: 3
            });
        })
    })

    //testing .fail function from enhancer
    describe('enhancer.fail',() => {
        it('.fail function must be called and return some values', ()=>{
            expect(enhancer.fail(1,2,2,2)).toBeTruthy();
        })
    })
})