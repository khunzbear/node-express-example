//Example callback

const url = "kunzfile1"

function downloading(url,callback){
    console.log(`กำลังโหลด ${url}`)
  setTimeout(() => {
    callback(url)
  }, 1000);
    
}
downloading(url, function(result) {

    console.log(`ดาวน์โหลด ${result}เรียบร้อย`) // Inside callback
    
})
