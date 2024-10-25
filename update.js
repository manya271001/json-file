//PERFORMING DELETE OPERATION
function del(arg){
    let res  = window.confirm("do you really want to delet the response")
  if(res){
    fetch(`http://localhost:4000/product/${arg}`,{
        method:"DELETE"
    })
  } 
  else{
    window.alert("wrong input")
  } 

}

// PERFORMING UPDATE OPERATION


async function run(){
    let data = await fetch('http://localhost:4000/product')
    let response = await data.json(); // json by default stores data in string  formate and this .json convert string data type into object data type
    console.log(data)
    console.log(response)
    let selecteddata = document.querySelector("#tabledata")
    selecteddata.innerHTML=response.map((item)=>`
         <tr>
            <td>${item.id}</td>
            <td><img src="${item.imgurl}" width="100px" height="100px"></td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.bname}</td>
            <td><button onclick="del(${item.id})">DELETE</button></td>

        </tr>
    `).join(" ")
}