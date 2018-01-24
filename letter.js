function Letter(wordChoice){
    this.array = [];
    this.answer = [];
    this.aZ = function (input) {
        var letterNumber = /^[0-9a-zA-Z]+$/;
        if(input.match(letterNumber)) {
            return true;
        } else { 
            return false;
        }
    }//close aZ function
    this.add = function() {
        for (i=0; i < wordChoice.length; i++){
            this.answer.push(wordChoice.charAt(i)); //add each letter to an array
            if( this.aZ(wordChoice.charAt(i)) ){
                this.array.push("_"); //add underscores to represent each letter to an array
            } else {
                this.array.push(wordChoice.charAt(i)); //if character is not a letter, add the symbol to the array
            }
        }//close for loop
    };// close .add method
}//close Letter constructor

Letter.prototype.search = function(x, i){
    var n = this.answer.indexOf(x, i+1)
    if(n !== -1){
        this.array[n] = x;
        this.search(x,n);
    } else {
        return -1
    }
};//close .search method

Letter.prototype.display = function(){
    var str = this.array
    str = str.toString();
    var res = str.replace(/,/g, " ");
    console.log(res);
};//close .display method

module.exports = Letter;
