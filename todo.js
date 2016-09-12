		/*Focusing on first input field*/
		document.getElementById("taskttl").focus();

		/*Main Function*/
		function addTask(){
			var tTitle = document.getElementById("taskttl").value;
			var tSummary = document.getElementById("tasksmry").value;
			var tDesc = document.getElementById("taskdesc").value;

			var obj = "";

			if(tTitle!=="" && tSummary!=="" && tDesc!==""){
				obj = '<div class="tasks" title="'+tSummary+'">'+ tTitle +'</div>';
				document.getElementById("allTasks").innerHTML += obj;
			}else{
				console.log("Please fill all the fields.");
				document.getElementById("taskttl").focus();
			}
		}