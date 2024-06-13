view_counter = document.getElementById("view");
async function updateCounter() {
    let response = await fetch("https://uyyazp3oiaurforp5micdjahqa0nyuzg.lambda-url.us-east-2.on.aws/");
    let data = await response.text();
    console.log(data);
    view_counter.innerHTML = data;
}

updateCounter();
