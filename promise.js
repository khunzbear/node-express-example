const url = "kunzfile1";
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

downloading(url)
    .then((result) => {
        console.log(result); // Print the result if download is successful
    })
    .catch((error) => {
        console.error(error); // Print the error if download fails
    });
