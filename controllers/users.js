import {v4 as uuidv4} from 'uuid';

//will give an error as users data is getting changed and not constant
let users = [];


export const newUrl = (req, res) => {
    res.send(users);
    res.send('hello users');
   
}


//create user with all properties
export const createUser = (req,res)=> { 
   
    const user = req.body;

    //first create a constant variable with userid
    // const userid = uuidv4();

    //now add this userid, when adding the user in line 19  
    // const userWithId = 
    // users.push(user);


    //uuidv use timestamp to create a unique id 

    //...user catches all  property of the user 
    //and add userid at the top of user object
    users.push({...user,id: uuidv4()});


    res.send(`users with username ${user.name} added to the db`); 
}

//get specific user with id
//without export keyword we cant import this function
export const getUserById = (req,res) => {

    //use this for debug
    //console.log(req.params);
    const {id} = req.params;
    // console.log({id});
    //in users find a user where user id == id in req.params
    const foundUser = users.find( (user) => user.id === id); 

    res.send(foundUser);
}

//delete user with specific id
export const deleteUserById = (req,res)=>{
    const {id} = req.params;

    // id to delete 123
    //john 123
    //jack 234

    //so john id is matched it will be filtered out, and removed
    //jack id is not matched so we will keep it in the users db 
    users = users.filter((user) => user.id != id);
    res.send(`User with  id ${id} deleted from the database.`);
}

//update user with id and body in json
export const updateUserById = (req,res)=>{
    const {id} = req.params;
    const userToBeUpdated = users.find((user)=> user.id === id);
    const {name,lastName,age} = req.body;

    if(name)
        userToBeUpdated.name = name;
    
    if(lastName)
        userToBeUpdated.lastName = lastName;
    
    if(age)
        userToBeUpdated.age = age;
    
    res.send(`User with id ${id} has been updated.`);
}