const prompt = require('prompt-sync')()



async function trans(pus){
    const options = {
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
        }
      }
      try{
    const response = await fetch("https://translation.googleapis.com/language/translate/v2?q="+pus+"&target=es&key=AIzaSyDF19gAWKhkgNqxhzE4sq8zbicCuQrW-to", options)
    if(response.ok === false){
      console.log("HTTP error! status: "+ response.status)

    }
    const data = await response.json()
    console.log(data.data.translations[0].translatedText)
  } catch(error){
    console.log("an error occured:" + error.message)
  }
}



// trans()

async function open(imgd){
  const options = {
      method: 'POST',
      headers:{
        Authorization:'Bearer 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',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(imgd)
    }

    try{
  const response = await fetch("https://api.openai.com/v1/images/generations", options)
  if(response.ok === false){
    console.log("HTTP error! status: "+ response.status)}
  const data = await response.json()
  console.log(data.data[0].url)
} catch(error){
  console.log("an error occured:" + error.message)
}
}

open({
  prompt: "Spain, Mexico, Costa Rica, El Salvador, Guatemala, Honduras, Nicaragua, Panama, Cuba, Dominican Republic, Puerto Rico, Argentina, Bolivia, Chile, Colombia, Ecuador, Paraguay, Peru, Uruguay, Venezuela, and Equatorial Guinea countries flags "
})


const pu = prompt('Enter the sentence you want to be translated:')
trans(pu)











