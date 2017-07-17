/*
 * ✒️ 妹 Blog - GitHub Pages 特别版
 * @卜卜口<http://github.com/itorr>
 * 2015-09-14 凌晨
 */

var 
GitBlog=function($,W){


var 
html=$('html'),
en=encodeURIComponent,
de=decodeURIComponent,
getM=function(X){
	return function(xid){
		if(X[xid])
			return X[xid]

		return X[xid]=$('xmp[xid="'+xid+'"],'+xid+' xmp').innerHTML
	}
}({}),
MD=function(name,data,antic){
	var 
	templet=getM(name)

	if(!antic)
		antic=function(i){return i}

	$(name).innerHTML=模板.运转(templet,antic(data))
	// $(name).innerHTML=Mustache.render(templet,antic(data))
},
listCache=function(){
	var 
	posts=localStorage['posts']

	if(!posts)
		return listLoad()

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
			size:Math.floor(o.size/2)
		})

	localStorage['posts']=JSON.stringify(posts)

	listShow(posts)
},
listShow=function(posts){

	MD('section',{posts:posts})

	if(!listLoaded)
		setTimeout(listLoad,1e3)
},
listLoaded=0,
listLoad=function(){
	listLoaded=1,
	$.j('https://api.github.com/repos/'+gitConfig.url+'/contents/markdown?callback=GitBlog.listUpdata')
},
getHome=function(){
	html.setAttribute('step','home')
	document.title=$('h1 a').innerHTML
},
postShow=function(url){
	html.setAttribute('step','article')

	MD('.article',{
		text:'<h1>😋😠😪😇</h1>',
		size:'233'
	})
	console.log(url)
	$.x('markdown/'+en(url),function(text){
		document.title=text.match(/^.+?(?=\n)/)
		
		MD('.article',{
			text:markdownToHtml(text),
			size:text.length
		})
	},getHome)
}




/* 配置项预处理 */

if(!gitConfig.ssh)
	return console.error('请设置 gitConfig.ssh 地址')

gitConfig.url=gitConfig.ssh.match(/[\w\-_]+\/[\w\-_]+\.github\.io/i)+''



setTimeout(function(){
	$.j('i/fastclick.js',function(){
		FastClick.attach(document.html)
	})
},1e3)


var 
ROOT,
pop=function(){
	try{
		ROOT=de(location.hash.substr(2))
	}catch(e){
		ROOT='home'
	}

	if(!ROOT||ROOT=='home'||!ROOT.match(/\.md$/))
		return getHome()
	else
		return postShow(ROOT)
}

W.onhashchange=pop

pop()

listCache()

return {
	listUpdata:listUpdata
}

}(iTorr,this)