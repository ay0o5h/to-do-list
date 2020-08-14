let inp_task=document.querySelector('#inp_task'),
    add   =document.querySelector('#add'),
	delete_all =document.querySelector('#delete-all'),
	  task_content=document.querySelector(".task-content"),
	  all_task=document.querySelector('.all-task span '),
	  complete=document.querySelector('.complete span ');
	  window.onload=function(){  
		 inp_task.focus(); 
	     inp_task.value=''; 
	  }
	  add.onclick=function(){
		  // check if input filed empty
		if(inp_task.value === ''){
		Swal.fire({
          title: 'please enter your task',
          showClass: {
          popup: 'animate__animated animate__fadeInDown'
           },
           hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
         }
       })	  
	  }
	  // check if the task already exist
	if(localStorage.getItem(inp_task.value)){
			 Swal.fire({
          title: 'this task already exist',
          showClass: {
          popup: 'animate__animated animate__fadeInDown'
           },
           hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
         }
       })	  
		  }
	  else{
		  //remove no task msg
		  document.querySelector('.no-task').remove();
		   //creat span for task content
        let mainContent=document.createElement("span");
		let span_text=document.createTextNode(inp_task.value);
		mainContent.className='text';
		mainContent.appendChild(span_text);
		//create delete button 
		 let delete_one=document.createElement("button");
		let btn_text=document.createTextNode("delete");
		delete_one.className='btn-delete';
		delete_one.appendChild(btn_text);
		mainContent.appendChild(delete_one);
		task_content.appendChild(mainContent);
		// store task in local storage
		localStorage.setItem(inp_task.value,'k');
		count_task();
		inp_task.value=''; 
		inp_task.focus();
		// delete all item
		delete_all.onclick=function(){
			let allel=document.querySelectorAll('.text');
			for(let i=0;i<allel.length;i++){
				allel[i].remove();
				localStorage.clear();
			}
		}
		//click on task to complete
	  mainContent.onclick=function(){
		 this.classList.toggle('finsh');
         count_task();	 
	  } 
	  }
	  
	  }
	  // button delete one item
	  document.addEventListener('click',function(e){
		  if(e.target.className === 'btn-delete'){
			  e.target.parentNode.remove();
			localStorage.removeItem(inp_task.value);
			count_task();
		  }
		  if(task_content.childElementCount === 1){	  
		message();
	 }
		  
	  })
	  // to show message no tasks yet after delete last-item
	  function message(){  
		  let no_msg=document.createElement("p");
		  let msg_text=document.createTextNode("no tasks yet.");
		  no_msg.appendChild(msg_text);
		  no_msg.className='no-task';
		  task_content.appendChild(no_msg);
	  }
	  // function to count all and complet tasks
	  function count_task(){
		  all_task.innerHTML=document.querySelectorAll('.task-content .text').length;
		   complete.innerHTML=document.querySelectorAll('.task-content .finsh').length; 
	  }
	