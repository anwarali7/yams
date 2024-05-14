
function de(){
    return Math.floor ( Math.random() * 6 ) + 1
}

function dice( n = 5 ){
    const d = []
    for (let i = 0; i < n; i++) d.push(de())
    
    return d 
}