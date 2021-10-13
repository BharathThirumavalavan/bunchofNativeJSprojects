const taskBox = document.querySelector('#addTask')
const header = document.createElement('h3');
let addList = document.createElement('li')
header.innerHTML = `Current Tasks`;
taskBox.append(header);
let URL = '/api/v1/tasks';
const jokes = async (URL)=>{
     const response = await fetch(URL,{
         method:'GET'
});

const resJSON = response.json(); 
resJSON.then(res=>
    {
        for (let index = 0; index < res.length; index++) {
            let addList = document.createElement('li');
            addList.innerHTML += res[index].name ; 
            console.log(res[index]);
            taskBox.append(addList);
        }
    }
    )
}

jokes(URL)
