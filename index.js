

let array=[];
let b=[];

let init=0;


function clean()
{
	

	document.getElementById("list").value="";



}




function f()
{


	let x=document.getElementById("list").value;
	document.getElementById("list").value="";

	
	
	array.push(x);
	b.push(0);

if(init==0)
	{
		show();
	}
	else if(init==1)
	{
done();
	}
	else if(init==2)
	{
		undone();
	}


	

}


function check(s)
{
	b[s]=1;
	
	if(init==0)
	{
		show();
	}
	else if(init==1)
	{
done();
	}
	else if(init==2)
	{
		undone();
	}
}

function del(s)

{
	
array.splice(s,1);
b.splice(s,1);


if(init==0)
	{
		show();
	}
	else if(init==1)
	{
done();
	}
	else if(init==2)
	{
		undone();
	}


 
 console.log("hre"+s);
}


function done()
{
	init=1;

document.getElementById("todos").innerHTML="<ul>";	


	for(let i=0; i<array.length; i++)
	{
if(b[i]==1)
{
	document.getElementById("todos").innerHTML=document.getElementById("todos").innerHTML+	"<button class=mark onclick=check("+i+")>x</button>"
	+"<li class=hor>"+array[i]+
	"<button class=delete onclick=del("+i+")>x</button>" +
	 "</li><br>";
	}
}

document.getElementById("todos").innerHTML=document.getElementById("todos").innerHTML+"</ul>";
}

function undone()
{
init=2;

document.getElementById("todos").innerHTML="<ul>";	


	for(let i=0; i<array.length; i++)
	{
if(b[i]==0)
{
	document.getElementById("todos").innerHTML=document.getElementById("todos").innerHTML+	"<button class=mark onclick=check("+i+")>x</button>"
	+"<li class=hor>"+array[i]+
	"<button class=delete onclick=del("+i+")>x</button>" +
	 "</li><br>";
	}
}

document.getElementById("todos").innerHTML=document.getElementById("todos").innerHTML+"</ul>";
}


function show()
{
	init=0;
		document.getElementById("todos").innerHTML="<ul>";	


	for(let i=0; i<array.length; i++)
	{

	document.getElementById("todos").innerHTML=document.getElementById("todos").innerHTML+	"<button class=mark onclick=check("+i+")>x</button>"
	+"<li class=hor>"+array[i]+
	"<button class=delete onclick=del("+i+")>x</button>" +
	 "</li><br>";
	
}

document.getElementById("todos").innerHTML=document.getElementById("todos").innerHTML+"</ul>";

}

