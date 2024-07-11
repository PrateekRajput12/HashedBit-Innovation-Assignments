//Write your code here
function createDiv(width, height, text) {

    const newDiv = document.createElement('div');
    
   
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
    
    newDiv.textContent = text;
    
    const container = document.getElementById('container');
    container.appendChild(newDiv);



    
}
createDiv(200,50,"Hello World")

// Do not change this code
Window.createDiv = createDiv;