var person = {
    name : "Jack",
    prop : {
        name : "Daniel",
        getName : function() {
            return this.name;
        }
    }
};

var name = person.prop.getName.bind(person);
console.log(name);

var  name = person.prop.getName();
console.log(name);
