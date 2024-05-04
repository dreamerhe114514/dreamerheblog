---
title: Markdown书写教程
abbrlink: 53128
date: 2024-03-23 12:44:41
tags: [教程,Markdown]
categories: [教程,博客]
cover: https://img.qianxun7747.eu.org/file/a3a4e1f3b1b30f771e9c7.png
---
# 前言
如标题所见，今天我们要来学习Markdown的书写格式语法(说白了是从Markdown官方里复制粘贴再修改一些没有的啦~)![出家人](https://cdn.jsdelivr.net/gh/zhheo/Sticker-Heo@latest/Sticker/出家人.png)
# Markdown书写语法

# Markdown标题

要创建标题，请在单词或短语前面添加井号 (#) 。# 的数量代表了标题的级别。例如，添加三个 # 表示创建一个三级标题 (<h3>) (例如：### My Header)。

| Markdown语法   | HTML             | 预览效果       |
| -------------- | -----------------| -------------- |
| # Heading level 1 | <h1>Heading level 1</h1> | Heading level 1 |
| ## Heading level 2 | <h2>Heading level 2</h2> | Heading level 2 |
| ### Heading level 3 | <h3>Heading level 3</h3> | Heading level 3 |
| #### Heading level 4 | <h4>Heading level 4</h4> | Heading level 4 |
| ##### Heading level 5 | <h5>Heading level 5</h5> | Heading level 5 |
| ###### Heading level 6 | <h6>Heading level 6</h6> | Heading level 6 |
# Markdown 换行语法

在一行的末尾添加两个或多个空格，然后按回车键,即可创建一个换行(<br>)。

| Markdown语法 | HTML | 预览效果 |
| -------------- | -----------------| -------------- |
| This is the first line.  | <p>This is the first line.<br>And this is the second line.</p> | This is the first line. <br> And this is the second line. |
# Markdown 强调语法

## 粗体（Bold）

要加粗文本，请在单词或短语的前后各添加两个星号（asterisks）或下划线（underscores）。如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号（asterisks）。

Markdown语法 | HTML | 预览效果
--------------|------|-----------
I just love **bold text**. | I just love <strong>bold text</strong>. | I just love bold text.
I just love __bold text__. | I just love <strong>bold text</strong>. | I just love bold text.
Love**is**bold | Love<strong>is</strong>bold | Loveisbold

### 粗体（Bold）用法最佳实践
Markdown 应用程序在如何处理单词或短语中间的下划线上并不一致。为兼容考虑，在单词或短语中间部分加粗的话，请使用星号（asterisks）。

✅  Do this  
Love**is**bold

❌  Don't do this  
Love__is__bold

## 斜体（Italic）

要用斜体显示文本，请在单词或短语前后添加一个星号（asterisk）或下划线（underscore）。要斜体突出单词的中间部分，请在字母前后各添加一个星号，中间不要带空格。

Markdown语法 | HTML | 预览效果
--------------|------|-----------
Italicized text is the *cat's meow*. | Italicized text is the <em>cat's meow</em>. | Italicized text is the cat’s meow.
Italicized text is the _cat's meow_. | Italicized text is the <em>cat's meow</em>. | Italicized text is the cat’s meow.
A*cat*meow | A<em>cat</em>meow | Acatmeow

### 斜体（Italic）用法的最佳实践
要同时用粗体和斜体突出显示文本，请在单词或短语的前后各添加三个星号或下划线。要加粗并用斜体显示单词或短语的中间部分，请在要突出显示的部分前后各添加三个星号，中间不要带空格。

✅  Do this  
A*cat*meow

❌  Don't do this  
A_cat_meow

## 粗体（Bold）和斜体（Italic）

要同时用粗体和斜体突出显示文本，请在单词或短语的前后各添加三个星号或下划线。要加粗并用斜体显示单词或短语的中间部分，请在要突出显示的部分前后各添加三个星号，中间不要带空格。

Markdown语法 | HTML | 预览效果
--------------|------|-----------
This text is ***really important***. | This text is <strong><em>really important</em></strong>. | This text is really important.
This text is ___really important___. | This text is <strong><em>really important</em></strong>. | This text is really important.
This text is __*really important*__. | This text is <strong><em>really important</em></strong>. | This text is really important.
This text is **_really important_**. | This text is <strong><em>really important</em></strong>. | This text is really important.
This is really***very***important text. | This is really<strong><em>very</em></strong>important text. | This is reallyveryimportant text.

### 粗体（Bold）和斜体（Italic）用法的最佳实践
Markdown 应用程序在处理单词或短语中间添加的下划线上并不一致。为了实现兼容性，请使用星号将单词或短语的中间部分加粗并以斜体显示，以示重要。

✅  Do this  
This is really***very***important text.

❌  Don't do this  
This is really___very___important text.
Markdown 引用语法
要创建块引用，请在段落前添加一个 > 符号。

> Dorothy followed her through many of the beautiful rooms in her castle.
渲染效果如下所示：

Dorothy followed her through many of the beautiful rooms in her castle.

#多个段落的块引用
块引用可以包含多个段落。为段落之间的空白行添加一个 > 符号。

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
渲染效果如下：

Dorothy followed her through many of the beautiful rooms in her castle.

The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

#嵌套块引用
块引用可以嵌套。在要嵌套的段落前添加一个 >> 符号。

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
渲染效果如下：

Dorothy followed her through many of the beautiful rooms in her castle.

The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

#带有其它元素的块引用
块引用可以包含其他 Markdown 格式的元素。并非所有元素都可以使用，你需要进行实验以查看哪些元素有效。

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
渲染效果如下：

The quarterly results look great!
Revenue was off the chart.
Profits were higher than ever.
Everything is going according to plan.

## 有序列表（编号）
要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 1 起始。

1. First item
2. Second item
3. Third item
4. Fourth item

1. First item
1. Second item
1. Third item
1. Fourth item

1. First item
8. Second item
3. Third item
5. Fourth item

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item

## 有序列表最佳实践
CommonMark 和其他一些轻量级标记语言允许使用括号（例如，1) First item）作为分隔符，但并非所有Markdown应用都支持这种方式。为了更好的兼容性，请仅使用句点。

✅  这样做
1. First item
2. Second item

❌  不要这样做
1) First item
2) Second item

## 无序列表（项目符号）
要创建无序列表，请在每个列表项前面添加破折号 (-)、星号 (*) 或加号 (+) 。缩进一个或多个列表项可创建嵌套列表。

- First item
- Second item
- Third item
- Fourth item

* First item
* Second item
* Third item
* Fourth item

+ First item
+ Second item
+ Third item
+ Fourth item
## 有序列表（编号）
要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 1 起始。

1. First item
2. Second item
3. Third item
4. Fourth item

1. First item
1. Second item
1. Third item
1. Fourth item

1. First item
8. Second item
3. Third item
5. Fourth item

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item

## 有序列表最佳实践
CommonMark 和其他一些轻量级标记语言允许使用括号（例如，1) First item）作为分隔符，但并非所有Markdown应用都支持这种方式。为了更好的兼容性，请仅使用句点。

✅  这样做
1. First item
2. Second item

❌  不要这样做
1) First item
2) Second item

## 无序列表（项目符号）
要创建无序列表，请在每个列表项前面添加破折号 (-)、星号 (*) 或加号 (+) 。缩进一个或多个列表项可创建嵌套列表。

- First item
- Second item
- Third item
- Fourth item

* First item
* Second item
* Third item
* Fourth item

+ First item
+ Second item
+ Third item
+ Fourth item

## 有序列表（编号）
要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 1 起始。

1. First item
2. Second item
3. Third item
4. Fourth item

1. First item
1. Second item
1. Third item
1. Fourth item

1. First item
8. Second item
3. Third item
5. Fourth item

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item

## 有序列表最佳实践
CommonMark 和其他一些轻量级标记语言允许使用括号（例如，1) First item）作为分隔符，但并非所有Markdown应用都支持这种方式。为了更好的兼容性，请仅使用句点。

✅  这样做
1. First item
2. Second item

❌  不要这样做
1) First item
2) Second item

## 无序列表（项目符号）
要创建无序列表，请在每个列表项前面添加破折号 (-)、星号 (*) 或加号 (+) 。缩进一个或多个列表项可创建嵌套列表。

- First item
- Second item
- Third item
- Fourth item

* First item
* Second item
* Third item
* Fourth item

+ First item
+ Second item
+ Third item
+ Fourth item

Markdown 链接语法
链接文本放在中括号内，链接地址放在后面的括号中，链接title可选。

超链接Markdown语法代码：[超链接显示名](超链接地址 "超链接title")

对应的HTML代码：<a href="超链接地址" title="超链接title">超链接显示名</a>

这是一个链接 [Markdown语法](https://markdown.com.cn)。
渲染效果如下：

这是一个链接 Markdown语法。

#给链接增加 Title
链接title是当鼠标悬停在链接上时会出现的文字，这个title是可选的，它放在圆括号中链接地址后面，跟链接地址之间以空格分隔。

这是一个链接 [Markdown语法](https://markdown.com.cn "最好的markdown教程")。
渲染效果如下：

这是一个链接 Markdown语法。

#网址和Email地址
使用尖括号可以很方便地把URL或者email地址变成可点击的链接。

<https://markdown.com.cn>
<fake@example.com>
渲染效果如下：

https://markdown.com.cn
fake@example.com

#带格式化的链接
强调 链接, 在链接语法前后增加星号。 要将链接表示为代码，请在方括号中添加反引号。

I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).
渲染效果如下：

I love supporting the EFF.
This is the Markdown Guide.
See the section on code.

#引用类型链接
引用样式链接是一种特殊的链接，它使URL在Markdown中更易于显示和阅读。参考样式链接分为两部分：与文本保持内联的部分以及存储在文件中其他位置的部分，以使文本易于阅读。

#链接的第一部分格式
引用类型的链接的第一部分使用两组括号进行格式设置。第一组方括号包围应显示为链接的文本。第二组括号显示了一个标签，该标签用于指向您存储在文档其他位置的链接。

尽管不是必需的，可以在第一组和第二组括号之间包含一个空格。第二组括号中的标签不区分大小写，可以包含字母，数字，空格或标点符号。

以下示例格式对于链接的第一部分效果相同：

[hobbit-hole][1]
[hobbit-hole] [1]
#链接的第二部分格式
引用类型链接的第二部分使用以下属性设置格式：

放在括号中的标签，其后紧跟一个冒号和至少一个空格（例如[label]:）。
链接的URL，可以选择将其括在尖括号中。
链接的可选标题，可以将其括在双引号，单引号或括号中。
以下示例格式对于链接的第二部分效果相同：

[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle
[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"
[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle 'Hobbit lifestyles'
[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle (Hobbit lifestyles)
[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"
[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> 'Hobbit lifestyles'
[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> (Hobbit lifestyles)
可以将链接的第二部分放在Markdown文档中的任何位置。有些人将它们放在出现的段落之后，有些人则将它们放在文档的末尾（例如尾注或脚注）。

#链接最佳实践
不同的 Markdown 应用程序处理URL中间的空格方式不一样。为了兼容性，请尽量使用%20代替空格。

✅  Do this	
[link](https://www.example.com/my%20great%20page)
❌  Don't do this
	[link](https://www.example.com/my great page)

# Markdown 图片语法
要添加图像，请使用感叹号 (!), 然后在方括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本。

插入图片Markdown语法代码：`![图片alt](图片链接 "图片title")`。

对应的HTML代码：`<img src="图片链接" alt="图片alt" title="图片title">`

示例`![184064200](https://emotion.acs.pw/emotion/Arcaea/184064200.png)`
其中如果要改变图片大小可以用html格式`<img src="https://emotion.acs.pw/emotion/Arcaea/184064200.png" width="400px">`
效果![184064200](https://emotion.acs.pw/emotion/Arcaea/184064200.png)
<img src="https://emotion.acs.pw/emotion/Arcaea/184064200.png" width="400px">
其中width为宽度当然还可以有高，不做过多解释

# Markdown 分隔线语法
要创建分隔线，请在单独一行上使用三个或多个星号 (***)、破折号 (---) 或下划线 (___) ，并且不能包含其他内容。

***

---

_________________
以上三个分隔线的渲染效果看起来都一样：

#分隔线（Horizontal Rule）用法最佳实践
为了兼容性，请在分隔线的前后均添加空白行。
✅  Do this	
Try to put a blank line before...

---

...and after a horizontal rule.

❌  Don't do this
Without blank lines, this would be a heading.
---
Don't do this!

# Markdown 链接语法
链接文本放在中括号内，链接地址放在后面的括号中，链接title可选。

超链接Markdown语法代码：[超链接显示名](超链接地址 "超链接title")

对应的HTML代码：<a href="超链接地址" title="超链接title">超链接显示名</a>

这是一个链接 [Markdown语法](https://markdown.com.cn)。
渲染效果如下：

这是一个链接 Markdown语法。

#给链接增加 Title
链接title是当鼠标悬停在链接上时会出现的文字，这个title是可选的，它放在圆括号中链接地址后面，跟链接地址之间以空格分隔。

这是一个链接 [Markdown语法](https://markdown.com.cn "最好的markdown教程")。
渲染效果如下：

这是一个链接 Markdown语法。

#网址和Email地址
使用尖括号可以很方便地把URL或者email地址变成可点击的链接。

<https://markdown.com.cn>
<fake@example.com>
渲染效果如下：

https://markdown.com.cn
fake@example.com

#带格式化的链接
强调 链接, 在链接语法前后增加星号。 要将链接表示为代码，请在方括号中添加反引号。

I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).
渲染效果如下：

I love supporting the EFF.
This is the Markdown Guide.
See the section on code.

#引用类型链接
引用样式链接是一种特殊的链接，它使URL在Markdown中更易于显示和阅读。参考样式链接分为两部分：与文本保持内联的部分以及存储在文件中其他位置的部分，以使文本易于阅读。

#链接的第一部分格式
引用类型的链接的第一部分使用两组括号进行格式设置。第一组方括号包围应显示为链接的文本。第二组括号显示了一个标签，该标签用于指向您存储在文档其他位置的链接。

尽管不是必需的，可以在第一组和第二组括号之间包含一个空格。第二组括号中的标签不区分大小写，可以包含字母，数字，空格或标点符号。

以下示例格式对于链接的第一部分效果相同：

[hobbit-hole][1]
[hobbit-hole] [1]
#链接的第二部分格式
引用类型链接的第二部分使用以下属性设置格式：

放在括号中的标签，其后紧跟一个冒号和至少一个空格（例如[label]:）。
链接的URL，可以选择将其括在尖括号中。
链接的可选标题，可以将其括在双引号，单引号或括号中。
以下示例格式对于链接的第二部分效果相同：

[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle
[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"
[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle 'Hobbit lifestyles'
[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle (Hobbit lifestyles)
[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"
[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> 'Hobbit lifestyles'
[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> (Hobbit lifestyles)
可以将链接的第二部分放在Markdown文档中的任何位置。有些人将它们放在出现的段落之后，有些人则将它们放在文档的末尾（例如尾注或脚注）。

#链接最佳实践
不同的 Markdown 应用程序处理URL中间的空格方式不一样。为了兼容性，请尽量使用%20代替空格。

✅  Do this	
[link](https://www.example.com/my%20great%20page)	
❌  Don't do this
[link](https://www.example.com/my great page)

# Markdown 转义字符语法
要显示原本用于格式化 Markdown 文档的字符，请在字符前面添加反斜杠字符 \ 。
\* Without the backslash, this would be a bullet in an unordered list.
#可做转义的字符

以下列出的字符都可以通过使用反斜杠字符从而达到转义目的。

Character | Name
--------- | ----
\         | backslash
\`        | backtick (see also escaping backticks in code)
\*        | asterisk
\_        | underscore
\{ \}     | curly braces
\[ \]     | brackets
\( \)     | parentheses
\#        | pound sign
\+        | plus sign
\-        | minus sign (hyphen)
\.        | dot
\!        | exclamation mark
\|        | pipe (see also escaping pipe in tables)
# 特殊字符自动转义

在 HTML 文件中，有两个字符需要特殊处理： < 和 & 。 < 符号用于起始标签，& 符号则用于标记 HTML 实体，如果你只是想要使用这些符号，你必须要使用实体的形式，像是 &lt; 和 &amp;。

& 符号其实很容易让写作网页文件的人感到困扰，如果你要打「AT&T」 ，你必须要写成「AT&amp;T」 ，还得转换网址内的 & 符号，如果你要链接到：

http://images.google.com/images?num=30&q=larry+bird

你必须要把网址转成：

http://images.google.com/images?num=30&amp;q=larry+bird

才能放到链接标签的 href 属性里。不用说也知道这很容易忘记，这也可能是 HTML 标准检查所检查到的错误中，数量最多的。

Markdown 允许你直接使用这些符号，它帮你自动转义字符。如果你使用 & 符号的作为 HTML 实体的一部分，那么它不会被转换，而在其它情况下，它则会被转换成 &amp;。所以你如果要在文件中插入一个著作权的符号，你可以这样写：

\&copy;

Markdown 将不会对这段文字做修改，但是如果你这样写：

AT&amp;T

Markdown 就会将它转为：

AT&amp;amp;T

类似的状况也会发生在 < 符号上，因为 Markdown 支持 行内 HTML ，如果你使用 < 符号作为 HTML 标签的分隔符，那 Markdown 也不会对它做任何转换，但是如果你是写：

4 &lt; 5

Markdown 将会把它转换为：

4 &amp;lt; 5

需要特别注意的是，在 Markdown 的块级元素和内联元素中， < 和 & 两个符号都会被自动转换成 HTML 实体，这项特性让你可以很容易地用 Markdown 写 HTML。（在 HTML 语法中，你要手动把所有的 < 和 & 都转换为 HTML 实体。）