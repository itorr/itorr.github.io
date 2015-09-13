var 
GitBlog=function($){


var 
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
listCache=function(){
	var 
	posts=localStorage['posts']

	if(!posts)
		return lostLoad();

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
			url:o.html_url,
			title:o.name.replace(/\.md$/,''),
			size:o.size
		})

	localStorage['posts']=JSON.stringify(posts)

	listShow(posts)
},
listShow=function(posts){

	MD('section',posts);

	if(!loadJson)
		setTimeout(lostLoad,1e3)
},
loadJson=0,
lostLoad=function(){
	loadJson=1,
	$.j('https://api.github.com/repos/'+gitConfig.url+'/contents/markdown?callback=GitBlog.listUpdata')
};




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



listCache();

return {
	listUpdata:listUpdata
}

}(iTorr);


// git add -A;git commit -m "欢迎使用 GitBlog";git push