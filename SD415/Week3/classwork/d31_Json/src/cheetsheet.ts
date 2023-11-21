function ask(question: string, yes: ()=> void, no: () => void): void{
    // question = "yes";
    if(question === "yes") yes();
    else no();
  }
   
  function yes(): void{
    console.log("You Agree!");
  }
  
  function no(): void{
    console.log("No You dont agree!");
  }
  
  ask("Do you agree?", yes, no);
  
  // 4. replace the showCancel and showOk function declaration with arrow functions in the ask call
  ask("Do you agree?", 
    function ():void{console.log("Agree");},
     ():void => {console.log("Disagree");});
  

// // 12.
// function executor(operator: (num1: number, num2: number)=>number, num1: number, num2: number): number{
//   return operator(num1, num2);
// }
// function sum(num1: number, num2: number):number{
//   return num1 + num2;
// }
// function mult(num1: number, num2: number):number{
//   return num1 * num2;
// }

// console.log(executor(sum,5,10));
// console.log(executor(mult,5,10));

// // 13
// let calculator = {
//   operand1: 0,
//   operand2: 0,
//   setValue:function(x: number, y: number): void {
//     this.operand1 = x;
//     this.operand2 = y;
//   },
//   sum: function ()  {return this.operand1 + this.operand2},
//   mul: function ()  {return this.operand1 * this.operand2},
// };

// calculator.setValue(2,3);
// console.log("Expeted 5",calculator.sum());
// console.log("Expeted 6",calculator.mul());     




// Timer
      function timer41(time: number): void {
        let timerId: NodeJS.Timeout;
      
        function tick(): void {
          if (time >= 0) {
            console.log(time);
            time--;
          } else {
            clearInterval(timerId);
          }
        }
      
        timerId = setInterval(tick, 1000);
      }      

      type TreeNode = {
        name: string;
        value: string | null;
        children: TreeNode[] | null;
      };
      
      const node4 = { name:"label", value: "Name", children: null };
      const node5 = { name:"input", value: "this was typed by user", children: null };
      const node3 = { name:"p", value: "this is text in the paragarph", children: null };
      const node2 = { name:"div", value: null, children: [node4, node5] };
      const node1 = { name:"body", value: null, children: [node2, node3] };
      node1;
        
      function nodeWalker(node: TreeNode | null) {
        if (!node) return;
        console.log(node.name);
        if (node.children && node.children.length > 0) {
          node.children.forEach((child) => {
            nodeWalker(child);
          });
        }
      }
      // nodeWalker(node1);
      nodeWalker;

         


//calculator
type Item = {
    item: string;
    price: number;
  };
  
  type Cart = {
    addItem: (item: string, price: number) => void;
    removeItem: (item: string) => void;
    getTotal: () => number;
  };
  
  function createShoppingCart(): Cart{
    //Clouser
    const myCart: Item[] = [];
  
    return {
      addItem: (item: string, price: number ): void => {
        myCart.push({item: item, price: price});
      },
      removeItem: (itemToRemove: string): void => {
        const index = myCart.findIndex((i) => i.item === itemToRemove);
        if (index >= 0 )   myCart.splice(index,1);
      },
      getTotal: () => {
        return myCart.reduce((total, item) => total + item.price, 0);
      },
    }
  }

  // Bank Same as cart;
// export function makeBank() {
//     const transDB = [
//         { customerId: 1, customerTransactions: [10, 50, -40] },
//         { customerId: 2, customerTransactions: [10, 10, -10] },
//         { customerId: 3, customerTransactions: [5, -5, 55] }
//     ];
  
//     const bank = {
//       getBalance : function (id: number){
//         const customer = transDB.find(cid => cid.customerId === id);
//         if(!customer) return 0;
//         return customer.customerTransactions.reduce( (total , trans) => total + trans, 0);
//       },
//       bankBalance: function (){
//         return transDB.reduce((acc, customer) => acc + this.getBalance(customer.customerId), 0);
//       }
//     }
    
//     return bank;
//   }
  
//   const myBank = makeBank();
  
//   // Example usage:
//   console.log("Customer 1 Balance:", myBank.getBalance(1));
//   console.log("Bank Balance:", myBank.bankBalance());


  type Person = {
    name: string;
    age: number;
  }
  
  const array: Person[] = [
    {name: "ram", age:29},
    {name: "shyam", age:40},
    {name: "ram", age:19},
  ]
  
  function getAverageAge( arr: Person[]): number{
     return Number(
      (arr.map(({age}) => age)
      .reduce((total, age) => 
      total + age, 0)/ arr.length).toFixed(2));
  }
  getAverageAge;
  // console.log("Avg: ", getAverageAge(array));   

  function getTotalSum(dataArray: OuterObject[]): number{
    let valueArr:number[] = [];
    dataArray.forEach(({data}) => {
      ( data.map(({value}) => valueArr.push(value)));
    });
    return valueArr.reduce((total, value) => total + value,0);
  }

  getTotalSum;
  // console.log("Expectiong : 100 ",  getTotalSum(dataArray));
  
  GPT;
  // function getTotalSum(dataArray: OuterObject[]): number {
  //   return dataArray
  //     .map(({ data }) => data.map(({ value }) => value))
  //     .flat()
  //     .reduce((total, value) => total + value, 0);
  // }
  // console.log("Expecting: 100", getTotalSum(dataArray));
  