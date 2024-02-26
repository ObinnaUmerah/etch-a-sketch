

document.addEventListener("DOMContentLoaded", function() {
    // Maximum width for the container
    const maxWidth = 960; // Change this value as needed
    
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

    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
    let number = parseInt(prompt('Enter the number of squares that you would like per row.'));
        while(number > 100 ){
    number = parseInt(prompt('Please enter no larger than 100.'));
    }

    container.innerHTML = '';

    // Calculate the width for each square
    const squareWidth = Math.floor(maxWidth / number) - 10;
    
    // container.innerHTML = '';

    for(let i = 0; i < number * number; i++) {
        let div = document.createElement("div");
        
        // Append the div element to the body of the webpage
        // document.body.appendChild(div);

        div.style.width = squareWidth + 'px';
        div.style.height = squareWidth + 'px';
        div.style.backgroundColor = 'lightgreen';
        div.style.margin = '5px';
        
        //Appended div to the container element
        container.appendChild(div);


        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'white';
        });

        div.addEventListener('mouseleave', () => {
            div.style.backgroundColor = 'lightgreen'
        });

    }

    // const squares = document.querySelectorAll('.container div');
    // squares.forEach(square => {
    //     square.style.width = squareSize + 'px';
    //     square.style.height = squareSize + 'px';
    //     square.style.margin = '1px'; // Adjust the margin as needed
    // });
    // // const firstChild = container.firstChild;
    // console.log(firstChild);
    // container.removeChild(firstChild);
    
    // divs.length = 0;
});

  
});

