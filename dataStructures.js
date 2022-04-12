// level 2 

// 1. Write a function to remove all even numbers from an Array.


function removeEven(arr){
 const result =  arr.filter(element => element%2 !== 0 )
 return result;
}

// console.log(removeEven(arr))



// 2. Replace all the vowels in a string with uppercase vowels.

 let str = "Elie"

  function UpperLetter(str){
       let ans = "";

      for(var i=0; i< str.length-1; i++){
          if(str[i] == 'a' || str[i] == "e" || str[i] == "i" || str[i] == "0" || str[i] == "u" ){
             ans = ans.concat(str[i].toUpperCase())
          }else {
            ans = ans.concat(str[i])

          }
      }
      return ans;
  }

//    console.log(UpperLetter(str))

//    3. Write a function to find the maximum number in an array.


  function Max(arr){
      let max = 0;
      for(let i =0; i< arr.length; i++){
          if(arr[i]> max ){
              max = arr[i];
          }
      }
      return max;
  }

//   console.log (Max(arr))