---
title: Pycharm
date: 2017-03-16 15:00:32
tags:
---
怎样在ubuntu14.04上安装pycharm
pycharm是一款为python开发而生的IDE。它已经被专家认为是最好的pythonIDE之一。pycharm有社区版和专业版两种。社区版是免费的。但是专业版有更多的功能。我在下面的教程中展示如何安装这两种pycharm。

pycharm特点
在展示如何安装pycharm之前，让我们看一看pycharm的特点：

语法高亮
自动缩进和代码格式化
代码补全
行、块注释
错误处高亮
代码预置
代码折叠
代码导航搜索
代码分析
配置语言内置
python重整
文档自动保存 
完整的功能列表都可以在这里找到。你可以阅读专业版与社区版的比较来决定哪个版本更适合你。
安装pycharm
使用umake来安装pycharm。

Ubuntu为开发者提供了一个完美的命令行工具——umake。umake可以让你在Ubuntu上轻松的安装一大堆开发工具。例如 Android Studio, Visual Studio Code, Ubuntu SDK, Eclipse, Arudino Software Distribution等等。pycharm也是其中之一。

首先你需要安装umake。一般来说，umake已经在Ubuntu上预先安装好了，但是如果没有安装的话（我的系统没有），可以使用PPA来得到umake最新的稳定版本。

sudo add-apt-repository ppa:ubuntu-desktop/ubuntu-make
sudo apt-get update
sudo apt-get install ubuntu-make
一旦你有了umake，可以使用以下命令来安装pycharm社区版：

umake ide pycharm
下面命令用来安装专业版：

umake ide pycharm-professional
安装完成之后，去Unity Dash 搜索Pycharm。

卸载pycharm
通过umake来卸载pycharm

umake -r ide pycharm
这就是你所要做的全部事情。希望这篇教程可以帮助完成安装pycharm！
