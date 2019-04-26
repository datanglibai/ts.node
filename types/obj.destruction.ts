interface Data {
    id:number;
    name:string;
    description: string;
}

const data : Data = {
    id: 3,
    name: "alice",
    description: "hr"
}

function composeData(data : Data)
{
    return `${data.id}, ${data.name}`;
}

function composeDataWithDestruction({id, name}: any){
    return `${id}, ${name}`;
}
console.log(composeData(data));
console.log(composeDataWithDestruction(data));