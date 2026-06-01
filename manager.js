const fs = require('fs');
const path = require('path');
const awaiting = path.join(__dirname, 'awaiting', 'awaiting.json');

async function add(action,user,reason){
    try{

        console.log("Adding to awaiting", {action, user, reason});

const contents = fs.readFileSync(awaiting);
let data = JSON.parse(contents);
data.awaiting.push({
    action: action,
    username: user,
    reason: reason,
    duration: duration ? duration : null,
    timestamp: Date.now()
});
fs.writeFileSync(awaiting, JSON.stringify(data, null, 2));
        console.log("Added to awaiting", {action, user, reason});

console.log(data)

    } catch (error) {
        console.error('Error adding to awaiting list:', error);
    }
}


async function process(action, username){
    try{

const contents = fs.readFileSync(awaiting);
let data = JSON.parse(contents);
data.awaiting = data.awaiting.filter(item => !(item.action === action && item.username === username));
fs.writeFileSync(awaiting, JSON.stringify(data, null, 2));
console.log(data)
    } catch (error) {
        console.error('Error processing awaiting list:', error);
    }
}



async function get(){
    try{
console.log("Called get processing list");
const contents = fs.readFileSync(awaiting);
let data = JSON.parse(contents);
console.log("Processing list:", data);

return data
    } catch (error) {
        console.error('Error getting processing list:', error);
    }
}

module.exports = {add,process,get};