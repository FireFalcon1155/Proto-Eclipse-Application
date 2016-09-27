    	$(document).ready(function(){
            $('#but').click(function(e) {
                e.preventDefault(); 
                console.log("in function");
                var ID=$('input[name=u]').val();
                var password = $('input[name=p]').val();
                if(personnel[ID]){
                    console.log("first if working");
                    if(personnel[ID].password === password){
                        window.open("Workspace/index.html");
                                window.close();
                    }
                    else{
                        alert("Incorrect ID Or Password");
                        console.log("second failing")
                    }

                }
                else{
                    alert("Incorrect ID Or Password")
                    console.log("failing")
                }
            });
        });
