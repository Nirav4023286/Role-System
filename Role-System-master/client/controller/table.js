function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var role=document.getElementById("name_row"+no);
 var status=document.getElementById("country_row"+no);
 var permission=document.getElementById("age_row"+no);
	
 var role_data=role.innerHTML;
 var status_data=status.innerHTML;
 var permission_data=permission.innerHTML;
	
 role.innerHTML="<input type='text' id='role_text"+no+"' value='"+role_data+"'>";
 status.innerHTML="<input type='text' id='status_text"+no+"' value='"+status_data+"'>";
 permission.innerHTML="<input type='text' id='permission_text"+no+"' value='"+permission_data+"'>";
}

function save_row(no)
{
 var role_val=document.getElementById("role_text"+no).value;
 var status_val=document.getElementById("status_text"+no).value;
 var permission_val=document.getElementById("permission_text"+no).value;

 document.getElementById("role_row"+no).innerHTML=role_val;
 document.getElementById("status_row"+no).innerHTML=status_val;
 document.getElementById("permission_row"+no).innerHTML=permission_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_role=document.getElementById("new_role").value;
 var new_status=document.getElementById("new_status").value;
 var new_permission=document.getElementById("new_permission").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='role_row"+table_len+"'>"+new_role+"</td><td id='status_row"+table_len+"'>"+new_status+"</td><td id='permission_row"+table_len+"'>"+new_permission+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_role").value="";
 document.getElementById("new_status").value="";
 document.getElementById("new_permission").value="";
}