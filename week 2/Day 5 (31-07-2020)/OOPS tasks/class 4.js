class Bank{
    var code;
    var address;
    function manages(){}
    function maintains(){}
}

class atm{
    var location;
    var managedby;
    function identifies(){}
    function transactions(){}
}

class customer{
    var name;
    var dob;
    var address;
    var card_number;
    var pin;
    function verifyPassword(){}
} 

class account{
    var number;
    var balance;
    function deposit(){}
    function withdraw(){}
    function create_transactons(){}
}

class atm_transactions{
    var transaction_id;
    var date;
    var type;
    var amount;
    var postbalance;
    function modifies(){}
}

class currentAccount extends account{
    var accountnumber;
    var balance;
    function withdraw(){}
}

class savingAccount extends account{
    var accountnumber;
    var balance;
}
