const url1 = "kunzfile1";
const url2 = "kunzfile2";
const url3 = "kunzfile3";
const url4 = "kunzfile4";
const connect = true;

function downloading(url) {
    return new Promise((resolve, reject) => {

        console.log("Start Dowloading...")
        setTimeout(() => {
            if (connect) {
                resolve(`Downloaded ${url}`); // Then
            } else {
                reject(`Failed to download ${url}`); // Catch
            }
        }, 2000);
    });
}

async function start() {

    console.log(await  downloading(url1))
    console.log(await  downloading(url2))
    console.log(await  downloading(url3))

}

start()
