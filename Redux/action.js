
let noteID = 3;

export const Add = (title,description)=>{
return {
    type :"Add",
    payload:{
        title:title,
        description:description,
        id:++noteID

    }
}
};

export const Delete = (id)=>{
    return {
        type :"Delete",
           payload:{
            id:id
        }
    }
    }