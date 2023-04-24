console.log("Aplicação iniciada")

const mgs = process.argv[2]
if(!mgs){
    console.log("Argumentos invalidos")
}else{
    console.log(mgs)
}