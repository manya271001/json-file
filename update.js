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
let uid = null
async function update(id){
   let data = await fetch(`http://localhost:4000/product/${id}`)
    let response = await data.json();
  uid = id
  let selectedform = document.querySelector('#upform')
  selectedform.style.display="block"
  document.querySelector("#imgurl").value=response.imgurl
  document.querySelector("#name").value=response.name
  document.querySelector("#bname").value=response.bname
  document.querySelector("#price").value=response.price
}
function finalupdate(){
  let img = document.querySelector('#imgurl').value
  let NAME = document.querySelector('#name').value
  let BName = document.querySelector('#bname').value
  let Price = document.querySelector('#price').value
  let obj={
    "imgurl":img,
    "name":NAME,
    "bname":BName,
    "price": Price
  }
  console.log(obj)
      fetch(`http://localhost:4000/product/${uid}`,{
        method:"PUT",
        body:JSON.stringify(obj)
    })

}


async function run(){
    let data = await fetch('http://localhost:4000/product')
    let response = await data.json(); // json by default stores data in string  formate and this .json convert string data type into object data type
    console.log(data)
    console.log(response)
    let selecteddata = document.querySelector("#tabledata")
    selecteddata.innerHTML=response.map((item)=>`
         <tr>
            <td>${item.id}</td>
            <td><img src="${item.imgurl}" width="100px" height="100px" style="border-radius: 12px;"></td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.bname}</td>
            <td><button onclick="del(${item.id})">DELETE</button></td>
            <td> <button onclick="update(${item.id})">UPDATE</button></td>

        </tr>
    `).join(" ")
}