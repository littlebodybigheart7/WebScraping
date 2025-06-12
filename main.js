function baixarImagem(urlimg){
    fetch(urlimg)
        .then(resp =>{
            return resp.blob()
        })
        .then(blob => {
            const imageObjectURL = URL.createObjectURL(blob)
            let img = document.createElement("img")
            img.src = imageObjectURL
            document.querySelector("#res").appendChild(img)
        })
        catch(err => {
            document.querySelector("res") = err.message;
        })
}

function testeImagem(){
    const cursos = ["2/2a/4-374eb7be0bf6f36b_1526634037", "5/57/3-15dd6d3f92fe4898_1526634037","4/4e/16-4b2f253d0cbad9a2_1526634039","e/e2/13-d689107c75a973f0_1526634039","0/07/100925-081f980fb9b9fb07_1678802590","5/5c/100927-bf34d054b23a4129~1682413849"]
    cursos.forEach(curso => {
        baixarImagem("https://static.wikia.nocookie.net/amordoce/images/"+curso+".jpg/revision/latest/scale-to-width-down/150?cb=20210316062711")
    })
}

function teste (){
    fetch("https://amordoce.fandom.com/wiki/Categoria:Respostas")
        .then(resp => {
            if(resp.status != 200){
                throw new Error("Problemas no servidor")
            }
            return resp.text()
        })
        .catch(err => {
            document.querySelector("res").innerHTML = err.message;
        })
}

function main(){
    document.querySelector("#btnimg").addEventListener("click",testeImagem)
}
window.onload = main
