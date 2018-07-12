function getname() {
    return "world"
}

function libused() {
    console.log("you are using lib");
    
}
libused()

global.x=10
module.exports={
    getname : getname,
    a:10
}
console.log("in lib " + x);