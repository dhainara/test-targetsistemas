
//a)
const a = [1,3,5,7]
const proximoA = a[a.length - 1]+2
console.log(proximoA)

//b)
const b = [2,4,8,16,32,64]
const proximoB = b[b.length - 1]*2
console.log(proximoB)

//c)
const c = [0, 1, 4, 9, 16, 25, 36]
const proximoC = (c.length +1)**2
console.log(proximoC)

//d) 
const d = [4,16,36,64]
const proximoD = Math.pow(Math.sqrt(d[d.length - 1]) + 2, 2)
console.log(proximoD)

//e)
const e = [1, 1, 2, 3, 5, 8]
const proximoE = e[e.length - 1] + e[e.length - 2]
console.log(proximoE)

//f)
const f = [2, 10, 12, 16, 17, 18, 19]
f.push(200)
console.log(f)