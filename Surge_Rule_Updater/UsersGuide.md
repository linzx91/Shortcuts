# 用户指南
* **导入节点**
    * [自动从托管地址提取](#automatic_add_proxy)
    * [手动输入代理服务器](#manual_add_proxy)
* **高级配置**
    * [自定义策略组](#custom_group)
    * [添加代理规则](#addrule)
    * [替换默认规则](#replace)
    * [更多自定义配置](#custom)

<br>

-------

<br>

### 自动从托管地址提取
<a id="automatic_add_proxy"></a>

> 首先我们需要确定自己使用的机场（代理服务商）是支持 Surge 托管的。然后你需要从服务商的网站中把加密方式和混淆信息等修改成 SS 协议的，因为大多数机场为了方便新手使用，基本上默认都设置为 SSR 协议，但是 Surge 并不支持 SSR 协议！
> 
> **具体需要怎么改请咨询你的代理服务商。**

**这里我们随便找一个支持 Surge 托管的机场来作为示范，请看下图：**

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Proxy.png)

**这里拷贝到的链接就是 Surge 的托管地址！**

> 由于不同服务商的网站设计可能有所不同，实际情况请根据你所使用的机场网站为准。

**最后我们再把刚刚拷贝到的托管地址粘贴到快捷指令的输入框中即可。**

<br>

-------

<br>

### 手动输入代理服务器
<a id="manual_add_proxy"></a>

#### Surge 3 Pro 支持以下的代理类型

* **代理类型：HTTP**

> Proxy Name = http, SERVER ADDRESS, GENERATED PORT, username = USERNAME, password = PASSWORD

<br>

* **代理类型：HTTPS**

> Proxy Name = https, SERVER ADDRESS, GENERATED PORT, username = USERNAME, password = PASSWORD

<br>

* **代理类型：SOCKS5**

> Proxy Name = socks5, SERVER ADDRESS, GENERATED PORT, username = USERNAME, password = PASSWORD

<br>

* **代理类型：SOCKS5 over TLS**

> Proxy Name = socks5-tls, SERVER ADDRESS, GENERATED PORT, username = USERNAME, password = PASSWORD, skip-common-name-verify=true

<br>

* **代理类型：Snell**

> Proxy Name = snell, SERVER ADDRESS, GENERATED PORT, psk=GENERATED PSK, obfs=http

<br>

* **代理类型：Shadowsocks（新版写法）**

> Proxy Name = ss, SERVER ADDRESS,GENERATED PORT, encrypt-method = ENCRYPT METHOD, password = PASSWORD

<br>

* **代理类型：Shadowsocks（旧版写法）**

> Proxy Name = custom, SERVER ADDRESS, GENERATED PORT, ENCRYPT METHOD, PASSWORD, http://omgib13x8.bkt.clouddn.com/SSEncrypt.module

<br>

**具体写法如下所示：**

```
🇭🇰 HK = custom,hk.com,1234,rc4-md5,password,http://omgib13x8.bkt.clouddn.com/SSEncrypt.module
🇺🇸 US = custom,us.com,1234,rc4-md5,password,http://omgib13x8.bkt.clouddn.com/SSEncrypt.module
🇯🇵 JP = custom,jp.com,1234,rc4-md5,password,http://omgib13x8.bkt.clouddn.com/SSEncrypt.module
🇸🇬 SG = custom,sg.com,1234,rc4-md5,password,http://omgib13x8.bkt.clouddn.com/SSEncrypt.module
```

<br>

-------

<br>

### 自定义策略组
<a id="custom_group"></a>

```
🎬 Netflix = url-test, 🇭🇰 香港 01, 🇭🇰 香港 02, 🇭🇰 香港 03, 🇭🇰 香港 04, 🇭🇰 香港 05, url = http://www.gstatic.com/generate_204, interval = 600
```

<br>

> **默认策略组名称可在词典 "GroupName" 目录中进行更改，如下图所示：**

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Group_Name.png)

<br>

-------

<br>

### 添加代理规则
<a id="addrule"></a>

**首先点击快捷指令右上角的 `⋯` 然后找到 "词典" 的模块；如下图所示**

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_01.png)
<br>

**再进入到词典的 "Ruleset" 目录中选择 `添加"新项目"`**

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_02.png)
<br>

**类型选择 "词典" ，"键" 可以随便输入一个名称**

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_03.png)
<br>

**再进入到刚刚添加的词典项目中再添加一个新项目，类型选择 "文本"**

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_04.png)
<br>

**这里的 "键" 可以不用填，直接在后面的文本中输入规则内容（每个项目只能添加一条规则，建议使用 `list` 规则集。）**

<br>

**规则集的写法如下所示：**

```
RULE-SET,https://raw.githubusercontent.com/linzx91/Shortcuts/master/Surge_Rule_Updater/Ruleset/Media/Netflix.list,🎬 Netflix,update-interval=3600
```

[获取更多媒体规则集](https://github.com/linzx91/Shortcuts/tree/master/Surge_Rule_Updater/Ruleset/Media)

<br>

**最后再将自定义添加的项目全部拖到列表顶部即可生效。**

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_05.png)

<br>

-------

<br>

### 替换默认规则
<a id="replace"></a>

> 如果你有第三方规则需求，则可以在词典的 "Ruleset" 目录中找到你要替换的规则，而且只需要将项目中原来的规则地址替换成对应的规则地址即可；但需要注意尽量使用 list 类型的规则来进行替换，避免配置内容出错。
> 
> RULE-SET,`规则地址`,`策略名`,update-interval=`自动更新间隔时间 (秒)`

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_06.png)

<br>

-------

<br>

### 更多自定义配置
<a id="custom"></a>

**更多自定义配置请参考下图所示**

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Custom.png)

<br>

-------

<br>

如有其它问题或建议可通过 [Issues](https://github.com/linzx91/Shortcuts/issues) 留下你的意见。