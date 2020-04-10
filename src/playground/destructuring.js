/* 
console.log('where we shoul be');

const person = {
   name:'Lettie', //optional to comment this out 
    age: 52,
    location: {
        city: 'Philly',
        temp:76
    }
};
//could be let or var
const {name:first_name = 'Anonymous', age, location} = person;
const {city, temp:temperature} = person.location
console.log(`${first_name} is ${age}.`);

if (city && temperature) {
console.log(`It is ${temperature} degrees in ${city}`);

}

// 

const book = {
    author: 'Steven King',
    title: 'Cujo',
    publisher: {
        pub_name:'Doubleday'

    }

};


const {pub_name='Self Published'} = book.publisher;
console.log(`${pub_name}`);
 */

 const address = ['1534 McKinley','San Antonio','Texas','78210'];

 const [street,city,state,zip] = address;

 console.log(`${street} ${city} , ${state} ${zip}`);

 const item = ['coffee (hot)','2.00','2.50','2.75'];
 const [order, small, med] = item;
 console.log(`A med ${order} costs ${med}`);
