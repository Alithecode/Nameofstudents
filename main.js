var name_array=[]

function submit(){

    var name_1=document.getElementById("nos1").value
    var name_2=document.getElementById("nos2").value
    var name_3=document.getElementById("nos3").value
    var name_4=document.getElementById("nos4").value

    name_array.push(name_1+" ")
    name_array.push(name_2+" ")
    name_array.push(name_3+" ")
    name_array.push(name_4+" ")

    console.log(name_array)

    document.getElementById("displayname").innerHTML=name_array

    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block"
    
}

function sorting(){
     name_array.sort();
     console.log(name_array)
     document.getElementById("displayname").innerHTML=name_array;
}
