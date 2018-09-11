//STOP LOOKING AT THE SOURCE CODE
			var money = 100;
			var bank = 0;
			var moneycase = 0;
			var interest = 2;
			var timer = setInterval(onesec, 100);
			var interest = setInterval(interesttimer, 5000);
			
			document.getElementById("upgrades").style.display = "none";
			
			function onesec(){
				document.getElementById("money").innerHTML = "$" + money + "";
				document.getElementById("bank").innerHTML = "$" + bank + "";
				document.getElementById("interest").innerHTML = "" + interest + "00%";
				document.getElementById("camount").innerHTML = "" + moneycase + " CASE(S)";
			}
			
			function interesttimer(){
				bank *= interest
			}
			
			function buycase(){
				if(money < 6){
					alert("NO MONEY");
				}
				if(money >= 6){
					money -= 6;
					moneycase += 1;
				}
			}
			
			function opencase(){
				if(moneycase < 1){
					alert("NO CASES");
				}
				
				if(moneycase >= 1){
					var recieved = Math.floor((Math.random() * 10) + 1);
					alert("Recieved $" + recieved + "");
					moneycase -= 1;
					bank += recieved;
				}
			}
			
			function transfer(){
				money += bank;
				bank -= bank;
			}
			
			function transferprompt(){
				var mount = prompt("AMOUNT:");
				var amount = parseInt(mount, 10);
				if(amount >= bank){
					money += bank;
					bank -= bank;
				}
				
				if(amount <= bank){
					money += amount;
					bank -= amount;
				}
			}
			
			function unlock(){
				if(money < 20){
					alert("NOT ENOUGH MONEY");
				}
				if(money >= 20){
				  $("#upgrades").show();
					money -= 20;
				}
			}
			
			
		