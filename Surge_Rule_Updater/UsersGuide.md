# 用户指南

* **自定义配置**
    * [代理服务器的写法](#proxy)
    * [策略组的写法](#group)
    * [添加代理规则](#addrule)
    * [替换默认规则](#replace)

-------

### 代理服务器的写法
<a id="proxy"></a>

* **代理类型：HTTP**

> Proxy Name = http, SERVER ADDRESS, GENERATED PORT, username = USERNAME, password = PASSWORD

<br />

* **代理类型：HTTPS**

> Proxy Name = https, SERVER ADDRESS, GENERATED PORT, username = USERNAME, password = PASSWORD

<br />

* **代理类型：SOCKS5**

> Proxy Name = socks5, SERVER ADDRESS, GENERATED PORT, username = USERNAME, password = PASSWORD

<br />

* **代理类型：SOCKS5 over TLS**

> Proxy Name = socks5-tls, SERVER ADDRESS, GENERATED PORT, username = USERNAME, password = PASSWORD, skip-common-name-verify=true

<br />

* **代理类型：Snell**

> Proxy Name = snell, SERVER ADDRESS, GENERATED PORT, psk=GENERATED PSK, obfs=http

<br />

* **代理类型：Shadowsocks（新版写法）**

> Proxy Name = ss, SERVER ADDRESS,GENERATED PORT, encrypt-method = ENCRYPT METHOD, password = PASSWORD

<br />

* **代理类型：Shadowsocks（旧版写法）**

> Proxy Name = custom, SERVER ADDRESS, GENERATED PORT, ENCRYPT METHOD, PASSWORD, http://omgib13x8.bkt.clouddn.com/SSEncrypt.module

<br />

**具体写法如下所示：**

```
🇭🇰 HK = custom,hk.com,1234,rc4-md5,password,http://omgib13x8.bkt.clouddn.com/SSEncrypt.module
🇺🇸 US = custom,us.com,1234,rc4-md5,password,http://omgib13x8.bkt.clouddn.com/SSEncrypt.module
🇯🇵 JP = custom,jp.com,1234,rc4-md5,password,http://omgib13x8.bkt.clouddn.com/SSEncrypt.module
🇸🇬 SG = custom,sg.com,1234,rc4-md5,password,http://omgib13x8.bkt.clouddn.com/SSEncrypt.module
```
<br />

-------

### 策略组的写法
<a id="group"></a>

```
📺 Netflix = url-test, 🇭🇰 香港 01, 🇭🇰 香港 02, 🇭🇰 香港 03, 🇭🇰 香港 04, 🇭🇰 香港 05, url = http://www.gstatic.com/generate_204, interval = 600
```

<br />

> **默认策略组名称可在词典 "GroupName" 目录中进行更改，如下图所示：**

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Group_Name.png)
<br />

-------

### 添加代理规则
<a id="addrule"></a>

首先点击快捷指令右上角的 `⋯` 然后找到 "词典" 的模块；如下图所示

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_01.png)
<br />

再进入到词典的 "Ruleset" 目录中选择 `添加"新项目"`（如需添加新规则）

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_02.png)
<br />

类型选择 "词典" ，"键" 可以随便输入一个名称

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_03.png)
<br />

再进入到刚刚添加的词典项目中再添加一个新项目，类型选择 "文本"

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_04.png)
<br />

这里的 "键" 可以不用填，直接在后面的文本中输入规则内容（每个项目只能添加一条规则，建议使用 `list` 规则集。）

<br />

**规则集的写法如下所示：**

```
RULE-SET,https://raw.githubusercontent.com/linzx91/Shortcuts/master/Surge_Rule_Updater/Ruleset/Media/Netflix.list,🎬 Media,update-interval=3600
```

[获取更多媒体规则集](https://github.com/linzx91/Shortcuts/tree/master/Surge_Rule_Updater/Ruleset/Media)

<br />

最后再将自定义添加的项目全部拖到列表顶部即可生效。

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_05.png)
<br />

-------

### 替换默认规则
<a id="replace"></a>

> 如果你有第三方规则需求，则可以在词典的 "Ruleset" 目录中找到你要替换的规则，而且只需要将项目中原来的规则地址替换成对应的规则地址即可；但需要注意尽量使用 list 类型的规则来进行替换，避免配置内容出错。

RULE-SET,`规则地址`,`策略名`,update-interval=`自动更新间隔时间 (秒)`

![](https://raw.githubusercontent.com/linzx91/Shortcuts/master/Images/Add_Rules_06.png)
<br />

-------

如有其它问题或建议请在我的 [GitHub/Issues](https://github.com/linzx91/Shortcuts/issues) 中留言。