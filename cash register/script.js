let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
let cash = document.getElementById('cash')
let changeDue = document.getElementById('change-due')
let purchaseBtn = document.getElementById('purchase-btn')

class CashRegister{
    constructor(price, cid){
        this.price = price;
        this.cid = cid // precio en el cajon
    }
    compra(dinero){
        if(dinero > this.price){
            let vuelto = dinero - this.price
            return this.calcularCambio(vuelto)
        }else if(dinero < this.price){
            alert("Customer does not have enough money to purchase the item")
        }else if(dinero === price){
            changeDue.textContent = "No change due - customer paid with exact cash"
        }
    }
    calcularCambio(vuelto){
        //logica para calcular el cambio a devolver
    }
    fondosSuficiente(){
        let fondos = 0
        this.cid.forEach(element => {
            fondos+= element[1]
        });
        // logica para verificar si hay suficiente dinero
        return fondos
    }
}

const regitradora = new CashRegister(price, cid)
purchaseBtn.addEventListener('click', ()=>{
    regitradora.compra(cash.value)
})