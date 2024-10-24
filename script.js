async function run(){
    let data = await fetch('http://localhost:4000/product')
    let response = await data.json(); // json by default stores data in string  formate and this .json convert string data type into object data type
    console.log(data)
    console.log(response)
    let selecteddata = document.querySelector("#tabledata")
    selecteddata.innerHTML=response.map((item)=>`
         <tr>
            <td>${item.id}</td>
            <td><img src="${item.imgurl}" width="200px"></td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.bname}</td>

        </tr>
    `).join(" ")
}