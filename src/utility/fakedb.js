// use local storage to manage cart data

const addToDb = id => {
    let shoppingCard = {};
    
    //get the shopping card
    const storedCard = localStorage.getItem(shoppingCard);

    if (storedCard) { 
        shoppingCard = JSON.parse(storedCard);
    }
    else {
        shoppingCard = {};

    }


    // add quantity
    const quantity = shoppingCard[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCard[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    }
    else {
        // localStorage.setItem(id, 1);
        shoppingCard[id] = 1;
    }
    localStorage.setItem('shoppingCard', JSON.stringify(shoppingCard));
}

export{ addToDb };