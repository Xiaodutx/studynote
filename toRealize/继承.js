function Father(name,age){
    this.name = name;
    this.age = age;
}

Father.prototype.say = function(){
    console.log(this.name)
}

function Son(name,age){
    Father.call(this,name,age)
}

Son.prototype = Object.create(Father.prototype,{
    constructor: {
        value: Son,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

let son = new Son(18,25)
son.say()

class Parent{
    constructor(value){
        this.value = value;
    }

    say(){
        console.log(this.value)
    }
}

class Child extends Parent{
    constructor(value){
        super(value)
    }
}

let child = new Child(1)
child.say() // 1
child instanceof Parent 