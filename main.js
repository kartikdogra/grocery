var form=document.getElementById('formadd');
var list=document.getElementById('item');


form.addEventListener('submit',add);
list.addEventListener('click',removed)


const stored=localStorage.getItem("newItem")
const stored1=localStorage.getItem("newItem1")
const stored2=localStorage.getItem("tot")

  if(stored)
  {
    
    
    for(var i=0;i<localStorage.length;i++)
    {
      
      
      var l=document.createElement('tr');
      var li=document.createElement('td')
      var li1=document.createElement('td')
      var li2=document.createElement('td')
      var li3=document.createElement('i')
      var li4=document.createElement('i')
      li.id="items"
      li1.id="items"
      li2.id="items"
      
      li.contentEditable="false";
  li1.contentEditable="false";
  li2.contentEditable="false";
      
      
      
      l.id="myP";
      li3.className="fas fa-edit";
      li4.className="fas fa-trash";
      li.appendChild(document.createTextNode(stored));  
      li1.appendChild(document.createTextNode(stored1));
      li2.appendChild(document.createTextNode(stored2));
      l.appendChild(li)
      l.appendChild(li1)
      l.appendChild(li2)
      l.appendChild(li3)
      l.appendChild(li4)
      
      
    }
    
    list.appendChild(l);
    totall();
  }










function add(e)
{
  e.preventDefault();
  
  
     

    var newItem=document.getElementById('item-name').value;
    var newItem1=document.getElementById('item-unit').value;
    var tot=document.getElementById("item-total").value*newItem1;
    
  
    localStorage.setItem("newItem",newItem);
    localStorage.setItem("newItem1",newItem1);
    localStorage.setItem("tot",tot);
  

  var l=document.createElement('tr');
  var li=document.createElement('td')
  var li1=document.createElement('td')
  var li2=document.createElement('td')
  var li3=document.createElement('i')
  var li4=document.createElement('i')
  li.id="items"
  li1.id="items"
  li2.id="items"
  
  li.contentEditable="true";
  li1.contentEditable="true";
  li2.contentEditable="true";
  
  
  
  l.id="myP";
  
  li3.className="fas fa-edit";
  li4.className="fas fa-trash";


  li.appendChild(document.createTextNode(newItem));  
  li1.appendChild(document.createTextNode(newItem1));
  li2.appendChild(document.createTextNode(tot));
  
  
 l.appendChild(li)
 l.appendChild(li1)
 l.appendChild(li2)
 l.appendChild(li3)
 l.appendChild(li4)
 list.appendChild(l);
 totall();
}
function totall()
{

    var u=document.getElementById("tot_unit");
    var a=document.getElementById("tot_amount");
    var table=document.getElementById("item"),sumPrice=0,sumUnit=0; 

    for(var i=1;i<table.rows.length;i++)
    {
        sumPrice=sumPrice+parseInt(table.rows[i].cells[2].innerHTML);
        sumUnit=sumUnit+parseInt(table.rows[i].cells[1].innerHTML);
    }
  u.value=sumUnit;
  a.value=sumPrice;
}


function removed(e)
{
    if(e.target.classList.contains('fa-trash'))
    {
        if(confirm("are you sure to delete"))
        {
            var l=e.target.parentElement;
            console.log(localStorage.removeItem("newItem"));
            list.removeChild(l);

            
            
            
        }
    }
    else if (e.target.classList.contains('fa-edit'))
    {
       var x= document.getElementById("myP").contentEditable="false";
if (x.contentEditable === "true") {

  x.contentEditable = "false";

} 
else {
  x.contentEditable = "true";
}
        
    }

    totall();
}

