function configureListeners() {
    //let images = // select img elements 
    let images = document.getElementsByTagName('img');
    
     for (var i = 0; i < images.length; i++) {        
       
        // iterate over images and add mouseover event listeners  
        let object = images[i];
        object.addEventListener("mouseover", addOpacity);
        object.addEventListener("mouseout", removeOpacity);

    
    } 
}

function addOpacity(event) {

    // add appropriate CSS class
    getProductInfo(event.target.id);
    let pnl = document.getElementById(event.target.id);
    pnl.style.opacity = "0.1555";
    
}

function removeOpacity(event) {
     //remove appropriate CSS class
    let pnl = document.getElementById(event.target.id);
    pnl.style.opacity = "1";

  

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price     
            colorName =' lime green';
            price - '$14.99';
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price    
            colorName = 'medium Brown';
            price = '$11.14';
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            colorName = 'Royal Blue';
            price = '$22.99';
            break;   
        case 'pn4':
            colorName ='solid black';
            price = '$4.99';
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            colorName ='solid cyan';
            price ='$8.99';
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            colorName ='purple';
            price ='$11.99';
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            colorName ='solid red';
            price ='$13.42';
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            colorName ='solid white';
            price ='$21.99';
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            colorName ='solid yellow';
            price ='$14.99';
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:     
          colorName =' Select a Color';
          colorPrice = '$$';         
    }

  updatePrice(colorName,price);
}
function updatePrice(colorName, price)
{       
    let colorPrice = document.getElementById('color-price');
    colorPrice.textContent = price;

     // select element with corresponding id
    // display price
    
    let color = document.getElementById('color-name');
    color.textContent= colorName;
    // select element with corresponding id
    //display color name
}
