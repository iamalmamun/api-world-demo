const loadApi = async() =>{
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data);
}

const displayApi = Chatgpt =>{
    console.log(Chatgpt);
}

loadApi();