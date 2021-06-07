class FastFood{
    constructor(order) {
        this.order = order
    }
    get resources(){
        return[
            { id: 1, title: "French fries" },
            { id: 2, title: "Burger" },
            { id: 3, title: "Pizza" }
        ]  
    }
    get order(){
        let orderResult=this.resources;
        orderResult.forEach(e1 => {
            this.order.forEach(e2 => {
               if (e2[0]==e1["id"]){
                   e1["count"]=e2[1]
               }
            });
        }); 
        return orderResult;
    }

}
class SuchiRestaurant {
    constructor(id,count) {
        this.id = id
        this.count=count
    }
    get order(){
        let orderResult=this.resources
        for (let index = 0; index < this.id.length; index++) {
            orderResult.forEach(el=>{
                if(el["id"]==this.id[index]){
                    el["count"]=this.count[index]
                }
            })
            
        }
        
        return orderResult;
    }

    get resources() {
        return [
            { id: 1, title: "Sushi philadelphia" },
            { id: 2, title: "Sushi california" },
            { id: 3, title: "Sushi with crab" }
        ];
    }
}
 class UkrainianRestaurant  {
    constructor(array) {
        this.array = array
        this.setArray=new Set(array)
    }
    get resources () {
        return[
        { id: 1, title: "Borsh" },
        { id: 2, title: "Vareniks" },
        { id: 3, title: "Donuts with garlic" }
        ];
    }
    get order(){
        let orderResult=this.resources
        findCount=(arr,num)=>{
            return arr.filter(el => el===num).length;
        }
        this.setArray.forEach(element => {
            orderResult.forEach(el=>{
                if(el["id"]==element){
                    el["count"]=findCount(this.array,element);
                }
            });
        });
        return orderResult
    }
};


class Restaurant {
    constructor(type) {
        switch (type) {
            case "fastfood":
                this._find = this._findFastfood;
                break;
            case "suchiRestaurant":
                this._find = this._findSuchi
                break;
            case "ukrainianRestaurant":
                this._find = this._findUkrainian
                break;
            default:
                throw new Error("No type set!");
        }

    }
    
    _findFastfood(order) {
        const a = new FastFood(order);
        return a.order;
    }
    _findSuchi(id,count) {
        const a = new SuchiRestaurant(id,count);
        return a.order;
    }
    _findUkrainian(order) {
        const a = new UkrainianRestaurant(order);
        return a.order;
    }
}
export default Restaurant;
let obj =new Restaurant("suchiRestaurant"); 
console.log(obj._find([1,3],[2,5]));


