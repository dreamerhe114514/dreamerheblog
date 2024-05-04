---
layout: post
title: 通过Git上传静态网站源码到Github
tags:
  - 教程
  - github
  - 网站
  - 源码
categories:
  - 网站
  - 教程
cover: >-
  https://www.jsdelivr.ren/gh/dreamerhe114514/baimgapi@main/cover/%E5%B0%86%E4%BD%A0%E7%9A%84%E9%9D%99%E6%80%81%E7%BD%91%E7%AB%99%E6%BA%90%E7%A0%81%20%E9%80%9A%E8%BF%87Git%E4%B8%8A%E4%BC%A0%E8%87%B3%20Github.png
abbrlink: 38730
date: 2024-04-20 10:10:05
---
心血来潮找了个个人主页的源码,上个星期天搞到了cf(cloudflare),但是发现修改下来极其不方便，所以便打算上传到Githb，好吧，也算是更新一波文章了，毕竟已经一个多月没更新了嘞，所以，废话不多说，如题，开始我们的教程
# 初始化git
git这个东西相信用过github/hexo/gitee的人应该都用过吧，安装教程就不多做描述了，首先我们要初始化git,在要上传的文件夹里打开git输入以下命令
``` bash
git init
```
![githubwebstep1.png](https://www.jsdelivr.ren/gh/dreamerhe114514/baimgapi@main/blogimggtihubwebstep1.png)
接下来吧我们的的网站文件添加到暂存区我们使用以下命令
``` bash
git add .
```
![githubwebstep2.png](https://www.jsdelivr.ren/gh/dreamerhe114514/baimgapi@main/blogimggtihubwebstep2.png)
# 新建一个库
新建库的方法也很简单，只需进入github看见主页的那个新建库了吗？我们打开就好了
![githubwebstep3.png](https://www.jsdelivr.ren/gh/dreamerhe114514/baimgapi@main/blogimggtihubwebstep3.png)
# 提交更新说明
使用
``` bash
git commit -m "1.0.0"
```
![githubwebstep4.png](https://www.jsdelivr.ren/gh/dreamerhe114514/baimgapi@main/blogimggtihubwebstep4.png)
来进行提交更新，引号里面的是更新说明
# 链接仓库
我们使用 git remote add origin https://github.com/dreamerhe114514/my-zhuye.git来进行链接仓库，origin后的地址改为自己的github仓库地址
如果这时出现**错误**，我们可以使用``` bash
git remote rm origin
```
和``` bash
git remote add origin 仓库地址
```
![githubwebstep5.png](https://www.jsdelivr.ren/gh/dreamerhe114514/baimgapi@main/blogimggtihubwebstep5.png)
# 获取远程库与本地同步
如果不这么做的话，后续会**失败**(由于此处是去csdn转载的，发现会报错没有这个命令，后续发现不要也可以)
``` bash
git pull --rebase origin master
```
# 推送分支
然后我们使用``` bash
git push -u origin master
```
不出意外的话就成功啦
![githubwebstep6.png](https://www.jsdelivr.ren/gh/dreamerhe114514/baimgapi@main/blogimggtihubwebstep6.png)

# 查看网站
然后我们去github里查看自己的网站是否上传成功，前往自己github的库
![githubwebstep7.png](https://www.jsdelivr.ren/gh/dreamerhe114514/baimgapi@main/blogimggtihubwebstep7.png)
![githubwebstep8.png](https://www.jsdelivr.ren/gh/dreamerhe114514/baimgapi@main/blogimggtihubwebstep8.png)
然后再去访问一下(当然我这波是以自己的导航网站举例)
发现也是上传成功了，然后我们如果有域名的话就可以去vercel或者其它托管平台，甚至就是github进行绑定域名，但是如果库名是username.github.io的话则不需要绑定域名
