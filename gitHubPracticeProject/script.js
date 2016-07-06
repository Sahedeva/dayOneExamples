// get reference to element containing toppings checkboxes
var el = document.getElementById('checking');

// get reference to input elements in toppings container element
var list = el.getElementsByTagName('input');

// assign function to onclick property of each checkbox
for (let i=0, len=list.length; i<len; i++) {
    if ( list[i].type === 'checkbox' ) {
        list[i].onclick = function() {
          console.log(list[i].checked);
            if (list[i].checked){
              console.log("checked is true");
              list[i].parentNode.className ="lineThrough";
            } else {
              console.log("checked is false");
              list[i].parentNode.className = "";
            }
        }
    }
}
