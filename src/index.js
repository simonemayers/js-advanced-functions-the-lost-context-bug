let configuration = {
    frontContent: "Happy Birthday, Odin One-Eye!", 
    insideContent: "From Asgard to Nifelheim, you're the best all-father ever. \n\nLove,", 
    closing: {
        "Thor": "Admiration, respect, and love", 
        "Loki": "Your son"
    }, 
    signatories: [
        "Thor", 
        "Loki"
    ]
}

let printCard = function() {
    console.log(this.frontContent)
    console.log(this.insideContent)

    this.signatories.forEach(function(signatory){
        let message = `${this.closing[signatory]}, ${signatory}`
        console.log(message)
    }, this)
}
let printCard = function() {
    console.log(this.frontContent)
    console.log(this.insideContent)

    let contextBoundForEachExpr = function(signatory){
        let message = `${this.closing[signatory]}, ${signatory}`
        console.log(message)
    }.bind(this)
    this.signatories.forEach(contextBoundForEachExpr)
}

let printCard = function(){
    console.log(this.frontContent)
    console.log(this.insideContent)
    let outerContext = this
    this.signatories.forEach(function(signatory){
        let message = `${outerContext.closing[signatory]}, ${signatory}`
        console.log(message)
    })
}

let greeter = (nameToGreet) => {
    let message = `Good morning ${nameToGreet}`
    console.log(message)
    return "Greeted: " + nameToGreet
}
let result = greeter("Max")

let greeter = function(nameToGreet){
    let message = `Good morning ${nameToGreet}`
    console.log(message)
    return "Greeted: " + nameToGreet
}.bind(this)
letresult = greeter("Max Again")

let printCard = function(){
    console.log(this.frontContent)
    console.log(this.insideContent)
    this.signatories.forEach(s => console.log(`${this.closing[s]}, ${s}`))
}














