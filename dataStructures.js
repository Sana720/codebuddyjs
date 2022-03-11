// level {2}
//Remove Even
function removeEvens(numbers) {
    return number.filter(n => n%2 !==0);
}
const oddsN=removeEvens([1, 3, 4, 6, 7, 8]);
console.log(oddsN);

//Replace all the vowels in a string with uppercase vowels.
function vowUpp(str){
    var n=str.length;
    for (i=0;i<n;i++){
        if ( 
            str[i]="a"|| 
            str[i]="e"||
            str[i]="i"||
            str[i]="o"||
            str[i]="u"||
        ){
            console.log(str[i].toUpperCase());
        }else {
            console.log(str[i]);
        }
    }
}
vowUpp(Elie);

//Write a function to find the maximum number in an array.
const array =[1, 3, 4, 6, 7, 8, 2, 5];

let max=array[0];
for(let i=0;i<array.length;i++){
    if (array[i]>max){max=array[i];}
}
console.log(max);