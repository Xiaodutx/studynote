class LazyManClass {
    constructor(name) {
        this.taskList = [];
        this.name = name;
        console.log(`Hi I am ${this.name}`);
        setTimeout(() => {
            this.next();
        }, 0);
    }
    eat(name) {
        var that = this;
        var fn = function () {
            console.log(`I am eating ${name}`)
            that.next();
        }
        this.taskList.push(fn);
        return this;
    }
    sleepFirst(time) {
        var that = this;
        var fn = function () {
                setTimeout(() => {
                    console.log(`等待了${time}秒...`)
                    that.next();
                }, time * 1000);
            }
        ;
        this.taskList.unshift(fn);
        return this;
    }
    sleep(time) {
        var that = this
        var fn =  function () {
                setTimeout(() => {
                    console.log(`等待了${time}秒...`)
                    that.next();
                }, time * 1000);
            }
       
        this.taskList.push(fn);
        return this;
    }
    next() {
        var fn = this.taskList.shift();
        fn && fn();
    }
}

function LazyMan(name) {
    return new LazyManClass(name);
}
LazyMan('Tony1').eat('lunch1').eat('dinner1').sleepFirst(5).sleep(4).eat('junk food1');