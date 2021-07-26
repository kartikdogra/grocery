import React from 'react'
import { FcAutomotive} from "react-icons/fc";
import 'font-awesome/css/font-awesome.min.css';

window.addEventListener('click', (event) => {
  
  if(event.target.classList.contains('fa-trash'))
  {
      if(window.confirm("are you sure to delete"))
      {
        var l=event.target.parentElement;
        
        l.remove();
        
      }
      }

      else if(event.target.classList.contains('fa-edit'))
      {
          
        var x= document.getElementById(event.target.id).contentEditable="true"
        console.log(x);
        if (x.contentEditable === "false") {
  
        x.contentEditable = "true";
  
        } 
  else {
    x.contentEditable = "true";
  }
          }
          totall();

    
});




function add(e)
{
  
   

  e.preventDefault();
  
  
  var list=document.getElementById('item');

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
  li3.id="items2"
  li4.id="items2"
 
  li.contentEditable="false";
  li1.contentEditable="false";
  li2.contentEditable="false";
  
  
  
  l.id="myP";
 
  
  li3.className="fa fa-edit";
  li4.className="fa fa-trash";
  

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

export default function grocery() {
    return (
        <>
        
        <div className="container">
        <div className="grocery">
        <h2 >Grocery Shopping  <FcAutomotive size={25} /></h2>
            <h4>Add Item</h4>
  
      <div className="form" id="formadd">
        
              Item name <input type="text" className="form-item"  id="item-name" />
  
              units <input type="text" className="form-item" id="item-unit" />
              Price <input type="text" className="form-item" id="item-total" />
             <button onClick={add}>Submit</button>
             
                      </div>
                  <table  id="item">
      <tbody>
  <tr>
  <th> {"Item"}</th>
  <th>{"Unit"}</th>
  <th>{"Total"}</th>
  <th> {"Edit"}</th>
  </tr>
  
  </tbody>
  </table>
  <table id="item" >
    <tbody>

    <tr>
  
    <th> Total units
      <input className="form-item1" name="tot_amount" id="tot_unit" type="text" readOnly/></th>
    <th >Total Price <input className="form-item1" name="tot_amount" id="tot_amount" type="text" readOnly /></th>
  
    </tr>
    </tbody>
    
    </table>
        </div>
      </div>
      
    </>
  
    )
}
