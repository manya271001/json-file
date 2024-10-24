async function run(){
    let data = await fetch('http://localhost:4000/product')
    let response = await data.json(); // json by default stores data in string  formate and this .json convert string data type into object data type
    console.log(data)
    console.log(response)
    let selecteddata = document.querySelector("#output")
    selecteddata.innerHTML=response.map((item)=>`
          
        <div id="card">
        <div><img src="${item.imgurl}" alt="" height="200px" width="200px"></div>
        <div><h4>${item.name}</h4></div>
        <div><h4>${item.bname}</h4></div>
        <div><h4>${item.price}</h4></div>
        </div>
    `).join(" ")
}