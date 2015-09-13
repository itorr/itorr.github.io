var 
GitBlog=function($,W){


var 
body=document.body,
getM=function(X){
	return function(xid){
		if(X[xid])
			return X[xid];

		return X[xid]=$('xmp[xid="'+xid+'"],.'+xid+' xmp,'+xid+' xmp').innerHTML;
	}
}({}),
MD=function(name,data,antic){
	var 
	templet=getM(name);

	if(!antic)
		antic=function(i){return i}

	$(name).innerHTML=Mustache.render(templet,antic(data));
};



var 
en=encodeURIComponent,
de=decodeURIComponent,
listCache=function(){
	var 
	posts=localStorage['posts']

	if(!posts)
		return listLoad();

	posts=JSON.parse(posts)

	listShow(posts)
},
listUpdata=function(_posts){
	_posts=_posts.data

	var 
	posts=[]

	var i=0,o
	while(o=_posts[i++])
		posts.push({
			url:o.name,//o.html_url,
			title:o.name.replace(/\.md$/,''),
			size:o.size
		})

	localStorage['posts']=JSON.stringify(posts)

	listShow(posts)
},
listShow=function(posts){

	MD('section',posts);

	if(!listLoaded)
		setTimeout(listLoad,1e3)
},
listLoaded=0,
listLoad=function(){
	listLoaded=1,
	$.j('https://api.github.com/repos/'+gitConfig.url+'/contents/markdown?callback=GitBlog.listUpdata')
};

var 
getHome=function(){
	body.setAttribute('step','home');
},
postShow=function(url){
	body.setAttribute('step','article');
	$.x('markdown/'+url,function(text){
		document.titl=text.match(/$.+?(?=\n)/);
		MD('.article',{
			text:text,
			size:text.length
		})
	},getHome);
}



//$.j('http://1.mouto.org/x.js');






/* 配置项预处理 */

if(!gitConfig.ssh)
	return console.error('请设置 gitConfig.ssh 地址');

gitConfig.url=gitConfig.ssh.match(/\w+\/\w+\.github\.io/i)+''





setTimeout(function(){
	$.j('http://sojo.im/base/fastclick.m.js',function(){
		FastClick.attach(document.body);
	});
},1e3)


var 
ROOT,
pop=function(){
	ROOT=de(location.hash.substr(2))

	if(!ROOT||ROOT=='home'||!ROOT.match(/\.md$/))
		return getHome()
	else
		return postShow(ROOT)
};

W.onhashchange=pop;

pop();

listCache();

return {
	listUpdata:listUpdata
}

}(iTorr,this);


// git add -A;git commit -m "欢迎使用 GitBlog";git push