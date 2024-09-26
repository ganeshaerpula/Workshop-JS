var add =document.getElementById("btn")
sum=0
var obj={income:0,expense:0}

add.addEventListener("click",()=>{
    var title=document.getElementById("desc").value 
    var amount=document.getElementById("amt").value 
    var date=document.getElementById('date').value 
    var category=document.getElementById("type").value
    var del=document.createElement("button")
    del.innerText="delete"

    obj[category]+=Number(amount)
    console.log(obj)


    del.addEventListener("click",()=>{
        obj[category]-=Number(amount)
        sum-=Number(amount)

        total.innerText=sum
        document.body.removeChild(para)
        update()
    })

    sum+=Number(amount)
    var para=document.createElement("p")
    total.innerText=sum
     

    para.appendChild(del)
    document.body.appendChild(para)
    update()

    
