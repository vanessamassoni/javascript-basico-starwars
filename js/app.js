console.log('Java script')

var usuario = 'Vanessa'

document.getElementById('name').innerHTML=usuario



function boasVindas(nome){
   alert(nome  + ' , boas vindas')
}

boasVindas('Vanessa')


var personagens=['personagem 1', 'personagem 2', 'personagem 3', 'personagem 4']

personagens = personagens.filter(function(p){
   return p !== 'personagem 3'
})

console.log(personagens)

personagens = personagens.filter(function(p){
    return p === 'personagem 2'
 })

 console.log(personagens)