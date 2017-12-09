---
title: ipfs blog
date: 2017-12-09 14:53:23
tags:
---



### 1、操作过程
####  1.1 安装IPFS

``` bash
1、安装ipfs-update [下载地址](https://dist.ipfs.io/#ipfs-update), 下载解压后，直接运行Instal.sh
2、$ ipfs-update install latest //安装ipfs
```

#### 1.2 IPFS相关命令

``` bash
$ ipfs init //初始化IPFS,第一次使用ipfs时执行，每个OS只需执行一次
$ ipfs daemon //将本地的文件系统上线
```

#### 1.3 将博客发布到IPFS

``` bash
$ ipfs add -r public //public目录为hexo生成的静态页面目录,终端会返回public的hash值
```
可以通过下面两个URL访问你的站点
   - https://ipfs.io/ipfs/[hash of public]
   - http://localhost:8080/ipfs/$[hash of public]


#### 1.4 使用IPNS
由于ipfs的hash对应着一个不可变的内容，每次更新网站之后，站点的hash都会变。旧的link不能访问到新的内容。
ipfs提供了ipns来解决更新的问题.
``` bash
$ ipfs name publish [hasf of public] //成功后可以通过/ipns/[NodeId]访问public下的文件
```

通过上述方式，就完成了站点和一个固定的link的绑定.此后，可以通过以下URL访问站点(注意是ipns, 不是ipfs):
   - https://ipfs.io/ipns/[NodeId]
   - http://localhost:8080/ipns/[NodeId]



NodeId可以通过一下命令查看
``` bash
$ipfs id
{
	"ID": "QmTANdLHYHrKHNvQVxXVqaipv4ULeoSPE97SNSx686ZtHy",
	"PublicKey": "",
	"Addresses": [
		"/ip4/127.0.0.1/tcp/4001/ipfs/QmTANdLHYHrKHNvQVxXVqaipv4ULeoSPE97SNSx686ZtHy",
		"/ip4/192.168.1.5/tcp/4001/ipfs/QmTANdLHYHrKHNvQVxXVqaipv4ULeoSPE97SNSx686ZtHy",
		"/ip6/::1/tcp/4001/ipfs/QmTANdLHYHrKHNvQVxXVqaipv4ULeoSPE97SNSx686ZtHy",
		"/ip4/101.87.132.67/tcp/4001/ipfs/QmTANdLHYHrKHNvQVxXVqaipv4ULeoSPE97SNSx686ZtHy",
		"/ip4/101.87.132.67/tcp/32782/ipfs/QmTANdLHYHrKHNvQVxXVqaipv4ULeoSPE97SNSx686ZtHy"
	],
	"AgentVersion": "go-ipfs/0.4.13/",
	"ProtocolVersion": "ipfs/0.1.0"
}
```

#### 1.5 添加域名解析
记住hash值，很不方便。可以通过在域名服务器上添加一个类型为TXT的解析，来解决。

| 域名    | 类型      |   值           |
| :-----: |:---------:|:--------------:|
| james.act101.cn | TXT | dnslink=/ipns/[NodeId] |


可以通过下面命令检查解析是否添加成功:
``` bash
$host -t TXT [域名] 
```
后续可以通过以下URL访问站点:
   - http://ipfs.io/ipns/james.act101.cn

### 2 问题
#### 2.1 可以访问index.html，但页面中引用的图片、css资源文件无法加载
``` bash
解决方法:
将: 
    <img src="/img/head.jpg" class="js-avatar">
改成:
    <img src="./img/head.jpg" class="js-avatar">

此处需要修改node_modules目录下hexo的相关js文件
```

### 3 后续问题
   - 如何在两台机器上更新博客？
   - ipfs网关？


### 引用站点
   - [Hexo+IPFS搭建个人免服务器独立博客](http://esgbox.com/20170413.html）
   - [IPFS](https://ipfs.io/)
