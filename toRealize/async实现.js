function asyncToGenerator(generatorFunc){
    return function(){
        return new Promise((resolve,reject)=>{
            let gen = generatorFunc(this,arguments);
            let generatorResult;
            function step(key,arg){
                try {
                    generatorResult = gen[key](arg);
                } catch (error) {
                    reject(error);
                }
                const{value,done} = generatorResult;
                if(done){
                    resolve(value)
                }else{
                    Promise.resolve(value).then(value => step('next',value),err => step('throw',err));
                }
            }
            step('next');
        })
    }
}

const getData1 = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000))

async function test1() {
  const data = await getData1()
  console.log('data: ', data);
  const data2 = await getData1()
  console.log('data2: ', data2);
  return 'success'
}

// 这样的一个函数 应该再1秒后打印data 再过一秒打印data2 最后打印success
test1().then(res => console.log(res))

// 实现async就是我们写一个方法,把generator函数作为参数传进去之后让其变为一个自动执行的函数,也就是返回一个函数,然后执行这个函数的时候返回一个promise,下面的test就是一个函数相当于变为了async函数,此时执行async就会自动执行并且返回一个promise

const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000))
  
var test = asyncToGenerator(
    function* testG() {
      // await被编译成了yield
      const data = yield getData()
      console.log('data: ', data);
      const data2 = yield getData()
      console.log('data2: ', data2);
      return 'success'
    }
)

test().then(res => console.log(res))

 

