function nivelDoHeroi (numerodevitorias , numerodederrotas) {
    
 
    let valor = (numerodevitorias - numerodederrotas)
    let nivel = ""
    
    

    if (valor < 10) {
        nivel = "ferro" ;
    } else if (valor > 11 && valor <= 20) {
        nivel = "bronze" ;
    } else if (valor > 21 && valor <= 50) {
        nivel = "prata"
    } else if (valor > 51 && valor <= 80) {
        nivel = "ouro"
    } else if (valor > 81 && valor <= 90) {
        nivel = "diamante"
    } else if (valor > 91 && valor <= 100) {
        nivel = "lendario"
    } else if (valor >= 101) {
        nivel = "imortal"
    }

    return nivel
    
}

nivelDoHeroi(130 - 45)
let resultado = nivelDoHeroi(130, 45)

console.log("O Heroi tem de saldo de " + (130 - 45) + " esta no nivel de " + resultado )
