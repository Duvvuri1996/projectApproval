class Check {
    constructor(value){
        this.value = value
    }

 trim(){
    this.value = String(this.value).replace(/^\s+|\s+$/gm, '')
    return this.value
 } 

 isEmpty(){
    if(this.value === null || this.value === undefined || this.value.length === 0 ) {
        return true 
    } else {
        return false
    }
   }
}

module.exports = {
    Check : Check
}

