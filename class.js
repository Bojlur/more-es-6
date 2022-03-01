class Support{
    name;
    designation = 'Support web dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address
    }

    startSession(){
        console.log(this.name, 'start a support session');
    }
}
const aamir = new Support('Aamir Khan', 'Bd');
const salman = new Support('Salman Khan', 'USA');
const srk = new Support('SRK', 'USA');
// aamir.startSession();
 console.log(aamir, salman, srk);