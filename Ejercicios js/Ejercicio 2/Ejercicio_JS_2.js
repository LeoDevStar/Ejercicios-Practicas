
const inventory = [
    {name: 'doll', quantity: 5, category: 'toys'},
    {name: 'car', quantity: 3, category: 'toys'},
    {name: 'ball', quantity: 2, category: 'sports'},
    {name: 'car', quantity: 2, category: 'toys'},
    {name: 'racket', quantity: 4, category: 'sports'}
]

const inventory2 = [
    {name: 'book', quantity: 10, category: 'education'},
    {name: 'book', quantity: 5, category: 'education'},
    {name: 'paint', quantity: 3, category: 'art'}
]

const inventory3 = []

function Stack(name, objects){
    this.name = name;
    this.objects = objects;
}

function InventoryObject(name, quantity){
    this.name = name;
    this.quantity = quantity;
}


function organizeInventory(inventoryArray){

    let organizedInventory = [];

    let localObject;
    let localStack;

    if (inventoryArray.length > 0){
        inventoryArray.forEach(element =>{
            let findStack = organizedInventory.find(stack => stack.name == element.category);
            

            if (!findStack){

                localObject = new InventoryObject(element.name, element.quantity);
                localStack = new Stack(element.category, [localObject]);
                organizedInventory.push(localStack);

            }else if(!findStack.objects.find(object => object.name == element.name)){

                localObject = new InventoryObject(element.name, element.quantity);
                findStack.objects.push(localObject);

            }else{

                findStack.objects.find(object => object.name == element.name).quantity += element.quantity;
                
            }
        })
    }

    console.log(organizedInventory);   
}