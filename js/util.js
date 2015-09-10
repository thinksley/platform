//until tool
function loadScript(url,callback)
{
	var script=document.createElement('script');
	script.type='text/javascript';
	
	if(script.readyState) //for ie
	{
	   script.onreadystatechange=function()
	   {
		   if(script.readyState=='loaded' || script.readyState=='complete')
		   {
		   		script.onreadystatechange=null;
		   		if(callback)
		   		{
		   		   callback();	
		   		}
		   }   
	   }	
	}
	else
	{
		script.onload=function()
		{
			if(callback)
		   	{
		   	   callback();	
		   	}
		}
	}

	script.src=url;
	document.getElementsByTagName('head')[0].appendChild(script);
}
/**/
function parseQueryString(url,para)
{
   var obj={};
   var keyvalue=[];
   var key="",value="";       
   var paraString=url.substring(url.indexOf("?")+1,url.length).split("&");
   
   for(var i in paraString)
   {
      keyvalue=paraString[i].split("=");
      key=keyvalue[0];
      value=keyvalue[1];
      obj[key]=value;            
   }        
   return obj[para];
}