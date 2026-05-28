const fs = require('fs');
const awaiting = './awaiting/awaiting.json';
async function add(action,user,reason){
    try{

const contents = fs.readFileSync(awaiting);
let data = JSON.parse(contents);
data.awaiting.push({
    username: user,
    reason: reason,
    timestamp: Date.now()
});
fs.writeFileSync(awaiting, JSON.stringify(data, null, 2));

console.log(data)

    } catch (error) {
        console.error('Error adding to awaiting list:', error);
    }
}


async function process(user){
    try{

const contents = fs.readFileSync(awaiting);
let data = JSON.parse(contents);
data.awaiting = data.awaiting.filter(item => item.username !== user);
fs.writeFileSync(awaiting, JSON.stringify(data, null, 2));
added
    } catch (error) {
        console.error('Error adding to awaiting list:', error);
    }
}


module.exports = {add,process};