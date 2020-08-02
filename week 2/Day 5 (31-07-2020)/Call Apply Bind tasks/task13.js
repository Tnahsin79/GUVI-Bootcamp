var zipcode = {
    checkZipcode : function() {
        console.log(this);
        var updateZipCode = function() {
            console.log(this);
        }.bind(this);
        updateZipCode();
    }
}
zipcode.checkZipcode();
