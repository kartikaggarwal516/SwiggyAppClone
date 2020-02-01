const a=[1,1,2,2,2,3,4,4,4,4]
const b={}
a.map((n,i) => {
   if(b[n]){
       b[n] += 1
   }
   else{
       b[n]=1
   }
})
console.log(b)