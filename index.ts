import inquirer from "inquirer";


interface Answers  {
    todo:string,
    addmore:boolean
}
let todos: string[] = [];
let Addmore :boolean = true;
while(Addmore){
let answers : Answers = await inquirer.prompt([
    {
        type:"string",
        name:"todo",
        message:"Enter your todo"
    },
    {
        type :"confirm",
        name:"addmore",
        message:"Add more todo list",
        default: false,
        when(Answers) {
            return Answers.todo;            
        }
    }

]);
 const {todo,addmore} = answers;
 Addmore = addmore
 if (todo){
    todos.push(todo)
} else {
    console.log("Kindly write any input")
 }
if (todos.length > 0){
    console.log("Your todo list: ")
    todos.forEach((t) => console.info(t))
} else {
    console.log ("No todos in the list");
}



}
