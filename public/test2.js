// const url="http://127.0.0.1:8000/Welcome?name=unkle"
const url="https://dogapi.dog/api/v2/facts?limit=1"
fetch(url)
    .then(response => response.json()) // Parse the JSON from the response
    .then(data => {
        const ndata=data.data[0].attributes.body
        console.log(ndata)
    })