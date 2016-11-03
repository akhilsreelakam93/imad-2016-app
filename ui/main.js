	var a=[];
		var items= [];
		var dif=0;
		var won;
		var temparray=[];
		function randomm() 												
		{	
			
			if(dif=="1")
			{
				for(var m=1;m<=5;m++)
				{
					for(var n=1;n<=5;n++)
					{
						items.push(""+m+"_"+n);												
																						
					}
					
				}
				for(var q=1;q<=5;q++)
				{
					x = items[Math.floor(Math.random()*items.length)];						 
					for(var b=q-1;b>=0;b--)													
						{
							if(a[b]==x)
							{
								x = items[Math.floor(Math.random()*items.length)];		
								b++;														 
							}
						}
					a.push(x);																
				}
				
			}
			else
			if(dif=="2")										
																							
			{
				for(var o=1;o<=9;o++)
				{
					for(var p=1;p<=9;p++)
					{
						items.push(""+o+"_"+p);
					}
					
				}
				for(var s=1;s<=16;s++)
				{
					x = items[Math.floor(Math.random()*items.length)];
					for(var t=s-1;t>=0;t--)
						{
							if(a[t]==x)
							{
								x = items[Math.floor(Math.random()*items.length)];
								t++;
							}
						}
					a.push(x);
				}
				
			}
			else
			if(dif=="3")
			{
				for(var u=1;u<=15;u++)
				{
					for(var v=1;v<=15;v++)
					{
						items.push(""+u+"_"+v);
					}
					
				}
				for(var w=1;w<=45;w++)
				{
					x = items[Math.floor(Math.random()*items.length)];
					for(var z=w-1;z>=0;z--)
						{
							if(a[z]==x)
							{
								x = items[Math.floor(Math.random()*items.length)];
								z++;
							}
						}
					a.push(x);
				}
				
			}
			
		changebuttoncolours(a);															
		}
		function attain()																		
		{	a=[];
			items=[];
			won=0;																							 
			temparray=[];
			var i1=document.getElementById("img");
			var i2=document.getElementById("img1");
			 i1.style.visibility = 'hidden';
			 i2.style.visibility = 'hidden';
			document.getElementById("start").setAttribute("value","Restart the game");
			document.getElementById("start").setAttribute("class","commom");
			if(document.myform.difficulty.value=="-1")													
			alert("Please select the difficulty level");
			else
			if(document.myform.difficulty.value=="1")
			{dif=1;create(5,5);}
			else
			if(document.myform.difficulty.value=="2")
			{dif=2;create(9,9);}
			else
			if(document.myform.difficulty.value=="3")
			{dif=3;create(15,15);}
			
		}
		function create(r,c)																			 
		{
			var theader = '<table id="t1" border="1">\n';
			var tbody = '';
			for(var i=1;i<=r;i++)
				{
				tbody =tbody+ '<tr>';
				for( var j=1;j<=c;j++)
					{
						tbody =tbody+ '<td>';
						tbody += '<input style="padding-right:18px;padding-bottom:10px;" type="button" id="but'+i+'_'+j+'" name="butname'+i+'_'+j+'" onmousedown="numberingcells(event,name,id)" value="+">';
						tbody += '</td>'
					}
				tbody += '</tr>\n';
				}
			var tfooter = '</table>';
			var tlastline='<br><br><div style="font-size:10px;font-family:Broadway;color:grey;font-weight:1200;">Developed by Akhil Sreelakam</div>'
			document.getElementById('wrapper').innerHTML = theader + tbody + tfooter+tlastline;
			randomm();
		}
		function changebuttoncolours(params) 
		{	
			for ( var d=0; d<params.length; d++) 
			{
																								 
																							
				document.getElementById("but"+params[d]).setAttribute("name","bombid"+params[d]);
				
			}
			
		}
		function numberingcells(event,currentname,currentid) 										
																									
		{ 	
			
			if(event.button=="0")
			{		
					
					document.getElementById(currentid).style.backgroundImage = "url('')";
					if(currentname.substring(0, 4)!="bomb")													
					{	
						checkwon();
						document.getElementById(currentid).style.paddingRight =  "19px";																					//ALREADY CHANGED THE IDs OF CELLS WITH BOMB
						var digits=[];
						var newstr;
						var tens_str;
						var ones_str;
						var base_tens_str;
						var base_ones_str;
						var copy_base_tens_str;
						var copy_base_ones_str;
						insertintodigits(currentname);
						function insertintodigits(currentname) 
						{
									if(dif=="1" || dif=="2")
									{
										newstr=currentname.substring(7, 10);
									}
									else
									if(dif=="3")
									{
									
										if(currentname.length=="10")
										newstr=currentname.substring(7, 10);
										else
										if(currentname.length=="11")
										newstr=currentname.substring(7, 11);
										else
										newstr=currentname.substring(7, 12);
									}
									if(dif=="1" || dif=="2")
									{
										digits = (""+newstr).split("_");
									}
									else
									if(dif=="3")
									{
										if(currentname.length=="10")
										digits = (""+newstr).split("_");
										else
										if(currentname.length=="11")
										digits = (""+newstr).split("_");
										else
										{
											var str1=newstr.substring(0, 2);
											var str2=newstr.substring(3, 5);
											digits[0]=str1;
											digits[1]=str2;
										}
									}
									tens_str= digits[0];
									ones_str=digits[1];
						}
						base_tens_str=Number(tens_str);
						base_ones_str=Number(ones_str);
						copy_base_tens_str=base_tens_str;
						copy_base_ones_str=base_ones_str;
						var tens=Number(tens_str);
						var ones=Number(ones_str);
						findnearbombs(tens,ones);
						var count;
						var ctl,ctm,ctr,cmr,cdr,cdm,cdl,cml;
						function findnearbombs(tens,ones)
						{
							
							ctl=""+(tens-1)+"_"+(ones-1);
							ctm=""+(tens-1)+"_"+(ones);
							ctr=""+(tens-1)+"_"+(ones+1);
							cmr=""+(tens)+"_"+(ones+1);
							cdr=""+(tens+1)+"_"+(ones+1);
							cdm=""+(tens+1)+"_"+(ones);
							cdl=""+(tens+1)+"_"+(ones-1);
							cml=""+(tens)+"_"+(ones-1);
							count=0;
							for ( var hh=0; hh<a.length; hh++) 
							{
								if(a[hh]==ctl||a[hh]==ctm||a[hh]==ctr||a[hh]==cmr||a[hh]==cdr||a[hh]==cdm||a[hh]==cdl||a[hh]==cml)
								count++;
							}
						}
						if(count==0)
						{	
							silverset(currentid);
							function silverset(currentid)
							{		
									var sameid=0;
									document.getElementById(currentid).setAttribute("name","rev"+tens_str+"_"+ones_str);
									document.getElementById(currentid).style.paddingRight =  "26px";
									document.getElementById(currentid).style.background='#A9A9A9';
									document.getElementById(currentid).setAttribute("value","");
									temparray.push(currentid);
									for(var i=0;i<temparray.length;i++)
									{
										if(temparray[i]==currentid)
										sameid++;
									}
									if(sameid==1)
									won++;
									//alert("now updating "+won+" of "+currentid);
							}
							silversetoperations(currentid);
							function silversetoperations(currentid)
							{	
									var tm_currentid,mr_currentid,dm_currentid,ml_currentid,tm_currentname,mr_currentname,dm_currentname,ml_currentname,tens_str_numb,ones_str_numb;
									var n;
									if(dif=="1")n=5;
									else
									if(dif=="2")n=9;
									else
									if(dif=="3")n=15;
									gotop(base_tens_str,base_ones_str);
									function gotop(base_tens_str,base_ones_str)
									{
										while(base_tens_str>0)
										{	
											tm_currentid="but"+(base_tens_str-1)+"_"+(base_ones_str);
											tm_currentname = document.getElementById(tm_currentid).getAttribute("name");
											insertintodigits(tm_currentname);
											tens_str_numb=Number(tens_str);
											ones_str_numb=Number(ones_str);
											findnearbombs(tens_str_numb,ones_str_numb);
											if(count==0)
											{silverset(tm_currentid);base_tens_str--;}
											else
											if(count!=0)
											break;	
											if(base_tens_str==1)
											break;	
										}
									}
									base_ones_str=copy_base_ones_str;
									base_tens_str=copy_base_tens_str;
									while(base_ones_str<=n)
									{
										mr_currentid="but"+(base_tens_str)+"_"+(base_ones_str+1);
										mr_currentname = document.getElementById(mr_currentid).getAttribute("name");
										insertintodigits(mr_currentname);
										tens_str_numb=Number(tens_str);
										ones_str_numb=Number(ones_str);
										findnearbombs(tens_str_numb,ones_str_numb);
										if(count==0)
										{silverset(mr_currentid);base_ones_str++;}
										else
										if(count!=0)
										break;	
										if(base_ones_str==n)
										break;	
									}
									
									base_ones_str=copy_base_ones_str;
									base_tens_str=copy_base_tens_str;
									while(base_tens_str<=n)
									{
										dm_currentid="but"+(base_tens_str+1)+"_"+(base_ones_str);
										dm_currentname = document.getElementById(dm_currentid).getAttribute("name");
										insertintodigits(dm_currentname);
										tens_str_numb=Number(tens_str);
										ones_str_numb=Number(ones_str);
										findnearbombs(tens_str_numb,ones_str_numb);
										if(count==0)
										{silverset(dm_currentid);base_tens_str++;}
										else
										if(count!=0)
										break;	
										if(base_tens_str==n)
										break;	
									}
									
									base_ones_str=copy_base_ones_str;
									base_tens_str=copy_base_tens_str;
									while(base_ones_str>0)
									{
										ml_currentid="but"+(base_tens_str)+"_"+(base_ones_str-1);
										ml_currentname = document.getElementById(ml_currentid).getAttribute("name");
										insertintodigits(ml_currentname);
										tens_str_numb=Number(tens_str);
										ones_str_numb=Number(ones_str);
										findnearbombs(tens_str_numb,ones_str_numb);
										if(count==0)
										{silverset(ml_currentid);base_ones_str--;}
										else
										if(count!=0)
										break;	
										if(base_tens_str==1)
										break;	
									}	
							}
						}
						else
						{	
							document.getElementById(currentid).setAttribute("value",count);
							document.getElementById(currentid).setAttribute("class","boldclass");
							won++;//alert(won);
						}

					}
					else
					if(currentname.substring(0, 4)=="bomb")
					{	
						for(var e=0;e<a.length;e++)
						{	
							document.getElementById("but"+a[e]).style.backgroundImage = "url('bomb.png')";
							document.getElementById("but"+a[e]).style.backgroundRepeat = "no-repeat";
							
						}	
						gameover();
					}
			}
			else
			if(event.button=="1")
			{
				if(document.getElementById(currentid).value=="+"||document.getElementById(currentid).value=="")	
				{		
						if(document.getElementById(currentid).getAttribute("name").substring(0,3)!="rev")
						{
							document.getElementById(currentid).setAttribute("value",".");	
							document.getElementById(currentid).style.paddingRight =  "22px";
							document.getElementById(currentid).style.backgroundImage = "url('qmark.png')";
							document.getElementById(currentid).style.backgroundRepeat = "no-repeat";
						}
				}	
				else	
				if(document.getElementById(currentid).value==".")
				{
						document.getElementById(currentid).style.backgroundImage = "url('')";
						document.getElementById(currentid).style.paddingRight =  "18px";
						document.getElementById(currentid).setAttribute("value","+");
				}
			}
			else
			if(event.button=="2")
			{		
				
				if(document.getElementById(currentid).value=="+"||document.getElementById(currentid).value==".")	
				{		
						if(document.getElementById(currentid).getAttribute("name").substring(0,3)!="rev")
						{
							document.getElementById(currentid).setAttribute("value","");	
							document.getElementById(currentid).style.paddingRight =  "26px";
							document.getElementById(currentid).style.backgroundImage = "url('myflag.png')";
							document.getElementById(currentid).style.backgroundRepeat = "no-repeat";
						}
				}	
				else	
				if(document.getElementById(currentid).value=="")
				{
						document.getElementById(currentid).style.backgroundImage = "url('')";
						document.getElementById(currentid).style.paddingRight =  "18px";
						if(document.getElementById(currentid).getAttribute("name").substring(0,3)!="rev")
						document.getElementById(currentid).setAttribute("value","+");
						else
						document.getElementById(currentid).style.paddingRight =  "26px";
				}
					
					
			}
		}
		function gameover()
		{	
			document.getElementById("start").setAttribute("value","GAME OVER");
			document.getElementById("start").setAttribute("class","butstyle");
			document.getElementById("img1").src = "sad.jpeg";
			var theImg=document.getElementById("img1");
			theImg.style.visibility = 'visible';
			document.getElementById("img1").style.marginLeft = "10px";
			theImg.height = 45;
			theImg.width = 46;
		}
		function checkwon()
		{
			if(dif=="1")
			{
				if(won=="19")
				{
					document.getElementById("start").setAttribute("value","CONGRATULATIONS, YOU WON");
					document.getElementById("start").setAttribute("class","wonstyle");
					document.getElementById("img").src = "smiley.jpg";
					var theImg=document.getElementById("img");
					theImg.style.visibility = 'visible';
					theImg.height = 60;
					theImg.width = 75;
				}
			}
			else
			if(dif=="2")
			{
				if(won=="64")
				{
					document.getElementById("start").setAttribute("value","CONGRATULATIONS, YOU WON");
					document.getElementById("start").setAttribute("class","wonstyle");
					document.getElementById("img").src = "smiley.jpg";
					var theImg=document.getElementById("img");
					theImg.height = 60;
					theImg.width = 75;
				}
			}
			else
			if(dif=="3")
			{
				if(won=="179")
				{
					document.getElementById("start").setAttribute("value","CONGRATULATIONS, YOU WON");
					document.getElementById("start").setAttribute("class","wonstyle");
					document.getElementById("img").src = "smiley.jpg";
					var theImg=document.getElementById("img");
					theImg.height = 60;
					theImg.width = 75;
				}
			}
		}
