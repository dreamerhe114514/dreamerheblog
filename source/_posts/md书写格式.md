---
layout: post
title: md书写格式
tags:
  - 教程
  - md
  - 书写格式
  - markdown
categories:
  - 文章
  - 教程
cover: >-
  https://www.jsdelivr.ren/gh/dreamerhe114514/baimgapi@main/logoMarkdown%E4%B9%A6%E5%86%99%E6%95%99%E7%A8%8B%20(1).png
abbrlink: 45290
date: 2024-05-04 13:07:53
---
# 前言
这次开了个新坑{%link 追梦之境-梦想二都, https://testblog.dreamerhe.cn/, https://www.jsdelivr.ren/gh/dreamerhe114514/baimgapi@main/logologo222.png %}，拿来做测试的用，比如这期，在主博客里写了后会在此博客写一遍效果截图，然后放在主博客当效果，那么废话不多说，开始我们的教程！
# Markdown段落
MD的段落为#,从上往下分为六个，分别是#,##,###,####,#####,######,{% psw (这只是一般情况，HEXO可不认这个，你就是干到第#######################都没有问题) %}
# Markdown字体加粗
MD的字体加粗为两个星号+字+两个星号，也就是这样子 **粗体字**
``` Markdown
**粗体字**
```
# Markdown字体颜色
Markdown也支持变换字体颜色，具体样式如下<font color=red> 这是红色字 </font>
``` markdown
<font color=red> 这是红色字 </font>
```
要更改只需要更改color中的red就好了
# HEXO特殊的隐藏语法
此次需要安装butterfly的tag插件
``` bash
npm install hexo-butterfly-tag-plugins-plus --save
```
这边建议卸载原版插件然后再安装另一个版本
``` bash
npm uninstall hexo-renderer-marked --save
```

``` bash
npm install hexo-renderer-kramed --save
```
然后我们再引用
``` markdown
{% psw (这一堆是你要隐藏的字哦~包括括号) %}
```
示例在这啦！{% psw (这一堆是你要隐藏的字哦~包括括号) %}
# markdown斜体字
markdown的斜体字也很好搞啦，只需要一个*就好了
``` markdown
*斜体*
```
示例: *斜体*

# markdown表格
markdown的表格语法为
```
|学号|姓名|
|----|----|
|1|张三|
|2|李四|
|3|王五|
```
展现出来就是这个啦

|学号|姓名|
|----|----|
|1|张三|
|2|李四|
|3|王五|

# markdown图片
md的图片也很简单啦，代码是这个
```
![图片描述](图片链接)
```
这是效果
![头像](https://www.jsdelivr.ren/gh/dreamerhe114514/baimgapi@main/image/tx.png)
但是这个很不方便，无法调整大小，这个时候就可以使用HTML的语法了，虽然我们说的是MD语法，但是md与html也是互不干扰的啦~
``` html
<img src="图片链接" width="50%">
```
宽度为百分之50当然也可以有hight高
``` html
<img src="https://www.jsdelivr.ren/gh/dreamerhe114514/baimgapi@main/image/tx.png" width="50%">
```
html高度50效果<img src="https://www.jsdelivr.ren/gh/dreamerhe114514/baimgapi@main/image/tx.png" hight="50%">
html宽度50效果<img src="https://www.jsdelivr.ren/gh/dreamerhe114514/baimgapi@main/image/tx.png" width="50%">
html高度宽度一起效果<img src="https://www.jsdelivr.ren/gh/dreamerhe114514/baimgapi@main/image/tx.png" width="304" height="228">
<img src="https://www.jsdelivr.ren/gh/dreamerhe114514/baimgapi@main/image/tx.png" width="50%" height="50%">

# markdown代码块格式
md的代码格式为
三个`也就是```来渲染，然后后面要带你的代码类型，比如```html，最后再以```结束
也就是这样{% psw ```html 然后空格下一行输入代码或者文字，再空格下一行然后再以```结尾 %}
示例
``` md
![图片名](图片链接)
```
# 等待更新
因为差不多hexo能用上的只有这些了(虽然还有视频等等,但是都要装插件，比如店长的那个可以直接使用，但是这里就不想多写了)，以后有机会的话我会继续更新滴~