var secretMessage
secretMessage=['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop(); //push method is used to remove the last element in array

//Desplay the new elements of secretMessage array
secretMessage.length;

//insert to and program elements to the end of secretMessage array
secretMessage.push("to","program");

//replace easily to right element
for (var i=0; i<secretMessage.length; i++){
    if(secretMessage[i] === 'easily'){
        secretMessage[i] = 'right';
    }
}

//remove first element of secretMessage array 'Learning' element will be removed
secretMessage.shift();

//Use an array method to add the string Programming to the beginning of the array
secretMessage.unshift('Programming');

//Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.
secretMessage.splice(6,5,'know');

;
console.log(secretMessage.join());