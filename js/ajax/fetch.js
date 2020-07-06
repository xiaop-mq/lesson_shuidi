const controller = new AbortController()
const signal = controller.signal
fetch('./data.json', { signal })
   .then((res) => {})
   .catch((req) =>{
       if(err.name === 'AbortError'){
           console.log('Fetch aborted')
       } else {
           console.log('Another error')
       }
   })
setTimeout(() =>{ controller.abort() }, 3 * 1000)