

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    // Loop to create 256 div elements
    for (let i = 0; i < 256; i++) {
        // Create a new div element
        let div = document.createElement("div");
        
        // Append the div element to the body of the webpage
        document.body.appendChild(div);
        container.appendChild(div);
        console.log(container);
    }
});