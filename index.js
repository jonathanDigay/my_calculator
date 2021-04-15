



class calculator{
    constructor(currentOperand,previousOperand){
        this.currentOperand=currentOperand,
        this.previousOperand=previousOperand,
        this.clear()
    }

    clear(){
        this.current="",
        this.previous="",
        this.operation=undefined
    }

    setvalue(value){
        if(value=="." && this.current.includes("."))return
        this.current= this.current.toString() + value.toString()
        
    }
    delete(){
        this.current=this.current.slice(0,-1)
    }

    setOperation(operator){
        this.operation=operator
        this.previous=this.current;
        this.current=""

        if(this.previous !== ""){
            this.compute()
        }
    }

    compute(){
         let computation;

         const prev=parseFloat(this.previous)
         const current=parseFloat(this.current)
         console.log(prev)
         console.log(current)
         if(isNaN(prev) || isNaN(current))return
          switch(this.operation){
              case '+':
              computation=prev + current;
              break
              case '-':
              computation=prev - current;
              break
              case '/':
              computation=prev / current;
              break
              case '*':
              computation=prev * current;
              break
              case '%':
              computation=prev % current;
              break
              default:return 
          }
          this.previous=''
          this.current=computation
          this.operation=undefined
         
    }
    display(){
      
        this.currentOperand.innerText=this.current
        this.previousOperand.innerText=this.previous
    
    }
}



const currentOperand=document.querySelector("[current_operand]")
const previousOperand=document.querySelector("[previous_operand]")
const number=document.querySelectorAll("[data_number]")
const operation=document.querySelectorAll("[data_operation]")
const equals=document.querySelector("[data_equals]")
const clear =document.querySelector("[data_clear]")
const  del=document.querySelector("[data_delete]")

const Calculator=new calculator(currentOperand,previousOperand)

clear.addEventListener("click",()=>{
    Calculator.clear()
    Calculator.display()
})

del.addEventListener("click",()=>{
     Calculator.delete()
     Calculator.display()

     console.log("delete")
})

number.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        Calculator.setvalue(btn.innerText)
        Calculator.display()
    })
})
operation.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        Calculator.setOperation(btn.innerText)
        Calculator.display()
    })
})

equals.addEventListener("click",()=>{
    Calculator.compute()
    Calculator.display()
})
