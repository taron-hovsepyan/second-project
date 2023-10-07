import { action, flow, makeObservable, observable } from "mobx";

class CountStore{
    count = 0;
    todos = []
    
    constructor(){
        makeObservable(this, {
            count: observable,
            todos: observable,
            setCount: action.bound,
            increment: action.bound,
            decrement: action.bound,
            getTodo: flow.bound
        })
    }

    setCount(value){
        this.count = value
    }

    increment(){
        this.count++
    }
    decrement(){
        this.count--
    }

    setTodos(data){
        this.todos = data
    }

    *getTodo(){
        const respones = yield fetch('https://jsonplaceholder.typicode.com/todos');
        const data = yield respones.json()
        this.setTodos(data)
    }

}

export const countStore = new CountStore()