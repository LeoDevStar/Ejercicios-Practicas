
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

function organizeInventory(inventoryArray){
    let organizedInventory = new Array();

    let object;
    
    if(inventoryArray.length > 0){
        inventoryArray.forEach(element => {
        
        let FindCategory = organizedInventory.find(category => category.name == element.category);
        
        
        if (!FindCategory){

            object = new Object();
            object.name = element.category;
            object.toys = new Array();

            toy = new Object();
            toy.name = element.name;
            toy.quantity = element.quantity;

            object.toys.push(toy);
            
            organizedInventory.push(object);
            
        }
        else if(!FindCategory.toys.find(toy => toy.name == element.name)) {
            toy = new Object();
            toy.name = element.name;
            toy.quantity = element.quantity;

            FindCategory.toys.push(toy);
        }else{
            FindCategory.toys.find(toy => toy.name == element.name).quantity += element.quantity;
        }
    });

    }
    
    console.log(organizedInventory);
}