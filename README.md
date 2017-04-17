# 妹 Blog - GitHub Pages 特别版

![GitBlog](http://ww4.sinaimg.cn/large/a15b4afegw1ew1dr2td51g20m80b4glv)

# 这是一个**无需生成器**的静态 GitHub 博客！

因 `GitHub Pages` 只能托管静态内容，所以以往搭建在 GitHub 上的博客程序多是通过客户端生成 HTML 之后，再同步到 GitHub Pages 上实现的博客功能。妹 Blog 通过 `GitHub HTTP API` 实现了无需客户端转义的纯 MarkDown 博客程序。

1. 相比同类 Github 静态博客更快的展示速度
2. 更清晰的二次开发方式
3. 无需跳页的 hash 路由
4. 共 `8KB` 大小 


## 如何使用 「妹 Blog - GitHub Pages 特别版」

1. fork 当前分支到个人仓库中，并设置  `github.io` 域名
2. 修改 `index.html` 中的 `gitConfig.ssh` 地址
3. 博客搭建完成！

## 如何更新文章？
使用任意 `MarkDown` 编辑器，在 `markdown` 目录下新建 `.md` 格式文档，通过 `Git` 更新到线上即可。

## 如何绑定个性域名？
修改 `CNAME` 文件中的域名信息，并将您绑定的域名 通过 `cname` 的方式指向 `您的用户名.github.io`

## 如何修改博客名称？
修改 `index.html` 中的 `title` 和 `h1` 标签内容即可

## 这个版本和「妹 Blog」正式版 什么关系？
没任何关系！如果对速度要求更高，并且更喜欢折腾的同学可以围观 https://github.com/itorr/imouto

## 预览地址
http://im.front.dog

## Git 地址
https://github.com/itorr/itorr.github.io