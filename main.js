console.log('Hello, world')

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_EWZan06wFP5a8vLluJLI3ZlFSdHJDt1ifb3m1K1g32j610wLFbqjnnYfZQA9xvIr';

// const btn = document.querySelector('#button');
// btn.addEventListener('click', alr);

// // This function calls the function called "ftc" which makes a fetch to show a random cat image
// function alr() {
//     ftc()
// }

// // This function makes a fetch for the random cat image of the API 
// function ftc() {
//     fetch(URL)
//       .then(res => res.json())
//       .then(data => {
//         const img = document.querySelector('img');
//         img.src = data[0].url;
//     });
// };

async function reload() {
    const res = await fetch(API_URL)
    const data = await res.json();

    console.log(data)
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
}

reload();