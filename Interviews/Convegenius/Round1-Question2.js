// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position
// you have return boolean if you can reach last index or not
// [2,3,1,1,4]


function reachLastIndex(array){
    let max=0

    for(let i=0;i<array.length;i++){
    if(i>max) return false
      max=Math.max(max,i+array[i])
   if(max>=array.length-1) return true
    }

return false
}

console.log(reachLastIndex([2,3,1,1,4]))
console.log(reachLastIndex([1,1,1,1,0,1,1,1]))



