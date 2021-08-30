/*
    CALCULATE GROCERIES COST
*/
const groceries = {
    "Orange Juice": {
        "price" : 1.5,
        "discount": 10, 
        "bogof": false
    },
    "Chocolate": {
        "price" : 2,
        "discount" : 0,
        "bogof": true
    },
    "Sweetcorn": {
        "price" : 4,
        "discount" : 15,
        "bogof": false
    },
    "Pears": {
        "price" : 1.2,
        "discount" : 5,
        "bogof": true
    },
    "Apples": {
        "price" : 3,
        "discount" : 2,
        "bogof": true
    }
}

const shoppingListCost = arr => {
    const sum = arr.reduce((acc, [product, quantity]) => {
        const { price, discount, bogof } = groceries[product];
        const pricePerItem = price * (100 - discount)/100;

        if (bogof) {
            quantity = Math.ceil(quantity / 2);
        } 
        
        return acc += pricePerItem * quantity;
      }, 0)

      console.log(parseFloat(sum.toFixed(2)));
}

shoppingListCost([["Orange Juice", 100]]) 
shoppingListCost([["Pears", 4],["Chocolate", 87],["Sweetcorn", 3]])
shoppingListCost([["Sweetcorn", 12],["Pears", 6],["Apples", 5]])
shoppingListCost([["Chocolate", 3],["Apples", 8],["Orange Juice", 15],["Pears",1]])
