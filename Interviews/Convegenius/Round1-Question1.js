function validParen(s){
    let stack=[]
    let map=new Map()
    map.set('}','{')
    map.set(')','(')
    map.set(']','[')

    for(let i of s){
        if(i==='{' || i=='(' || i=='['){
            stack.push(i)
        }
        else if(map.has(i)){
            if(stack.length===0) return false
            if(map.get(i) == stack[stack.length-1]) stack.pop()
            else if(map.get(i) != stack[stack.length-1]) return false
        }
    }

    return stack.length===0
}

console.log(validParen("[(]"))
console.log(validParen("[()]"))
console.log(validParen("[(}]"))
console.log(validParen("[{(})]"))