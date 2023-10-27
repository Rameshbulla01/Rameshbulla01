const ob = {
    add (x,y){
        return x+y;
    },
   product:function(x,y){
    return x-y;
   },
   mod:(x,y)=>{
     return x%y;
   }            
}
console.log(ob.add(10,20));
console.log(ob.product(30,20));
console.log(ob.mod(40,30));
