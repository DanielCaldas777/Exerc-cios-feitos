function TesteValores(num1,num2){
    var str; 
    num1==num2? str= " ": str = " não ";
    var soma = num1+num2;
    var tam1,tam2;
    soma<10? tam1 = "menor" : tam1 = "maior"; 
    soma<20? tam2 = "menor": tam2 = "maior"; 

    return console.log("Os números " + num1 + " e " + num2 + "" 
    + str + "são iguais." + " Sua soma é " + soma + ", que é "
    + tam1 + " que 10 e " + tam2 + " que 20.");
}
console.log(TesteValores(23,10));
