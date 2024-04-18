//Example promise

const url = "kunzfile1"
const connect = true

function downloading(url){

    return new Promise((resolve, reject) => {
        
        if (connect) {

            resolve(`Downloaded`)
            
        }
        else{

            reject("Failed to download")
        }

    })
}
