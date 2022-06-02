function myAlert(a, c, d) {
    let b = `<p class="${c}">${a} ${c}</p>`
    document.querySelector(d).innerHTML = b
}

myAlert('Class', 'orange', '.test')
myAlert('Class', 'pink', '.test2')





let mObj = new Alert('My message', 'orange', '.test3');

console.log(mObj);

mObj.showAlert()

let m2 = new Alert2('My message 2', 'pink', '.test', 'assistant_direction')

m2.showIconAlert()


let goods = new Goods('good', 'apples', '2kg', 'img/apples.jpg', '88')

console.log(goods);
goods.draw()

let goods2 = new Goods('out-4', 'apples', '4kg', 'img/apples.jpg', '11')
console.log(goods2);
goods2.draw()

let goods3 = new Goods2('out-5', 'apples', '4kg', 'img/apples.jpg', '11', false)
console.log(goods3);
goods3.draw()

let goods4 = new Goods2('out-6', 'apples', '4kg', 'img/apples.jpg', '11')
console.log(goods4);
goods4.draw()

let valid = new Valid('pavel@gg.com', 'aqwe11788')
console.log(valid);
valid.validate()

let valid2 = new Valid('shulio@ggo.com', '11788')
console.log(valid2);
valid2.validate()

let valid3 = new Valid('33shulio@ggo.com', '1178dssdsffdfdf8')
console.log(valid3);
valid3.validate()
console.log('=========================================');
let valid4 = new Valid('44shulio@ggo.com', '1178z8')
valid4.validate()
console.log(valid4.isValid);

console.log('=========================================');

let valid5 = new Valid2('qwe@mail.yy', '12345')
console.log('valid5');
console.log(valid5)
valid5.validate()

console.log('=========================================');

let valid6 = new Valid2('qwe@mail.yy', '12345678')
console.log('valid6');
console.log(valid6)
valid6.validate()