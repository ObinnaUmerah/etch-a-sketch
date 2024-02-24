

document.addEventListener("DOMContentLoaded", function() {
    //Accessed container element via querySelector
    const container = document.querySelector('.container');
    // Loop to create 256 div elements
    for (let i = 0; i < 256; i++) {
        // Create a new div element
        let div = document.createElement("div");
        
        // Append the div element to the body of the webpage
        document.body.appendChild(div);
        //Appended div to the container element
        container.appendChild(div);
        console.log(container);

        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'white';
        });

        div.addEventListener('mouseleave', () => {
            div.style.backgroundColor = 'lightgreen'
        });
    }
});

const square = document.querySelector('.container div');

square.addEventListener('mouseenter', () => {
    square.style.backgroundColor = 'red';
});

// square.addEventListener('mouseenter', () => {
//     square.style.backgroundColor = 'red';
// });