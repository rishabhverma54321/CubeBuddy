// Level 2 

function fibonacci(n){
    let i;
    let ans = 0;
for(i=1;  i <= n; i++){

     ans += Math.round((Math.pow(((1+ Math.sqrt(5))/2),i))/Math.sqrt(5))
}
  return ans;

}

console.log(fibonacci(6))