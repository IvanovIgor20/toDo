var ul = document.getElementById('list'),
	removeAll = document.getElementById('removeAll'),
	add = document.getElementById('add');

	add.onclick = function (){
		addLi(ul);
	}

	function addLi(targetUI){
		var inputText = document.getElementById('text').value,
			li = document.createElement('li'),
			textNode = document.createTextNode(inputText + " "),
			removeButton = document.createElement('button');
			if(inputText.length === 0){
			alert("there is no input in box");
			return false;
		}
		document.getElementById('text').value = "";
		
		removeButton.classname = 'removeMe';
		removeButton.innerHTML = "DONE!";
		removeButton.setAttribute("onclick","removeMe(this)");
		
		li.appendChild(textNode);
		li.appendChild(removeButton);
		targetUI.appendChild(li);
	}

	function removeMe(item){
		var parent = item.parentElement;
		parent.parentElement.removeChild(parent);
	}
	
	removeAll.onclick = function(){
		ul.innerHTML = "";
	}