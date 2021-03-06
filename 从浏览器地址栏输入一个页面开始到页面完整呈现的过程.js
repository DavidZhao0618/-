// 这个过程可以大致分为两个部分：网络通信和页面渲染。

// 一、网络通信
// 互联网内各网络设备间的通信都遵循TCP/IP协议，利用TCP/IP协议族进行网络通信时，会通过分层顺序与对方进行通信。
// 分层由高到低分别为：应用层、传输层、网络层、数据链路层。发送端从应用层往下走，接收端从数据链路层网上走。

// 1.在浏览器地址栏输入url
// 用户输入url，例如http://www.baidu.com。其中http为协议，www.baidu.com为网络地址。网络地址可以为域名或IP地址。
// 使用域名是为了方便用户记忆，但是为了让计算机理解这个地址还需要把它解析为IP地址。


// 2.应用层DNS解析域名
// 浏览器首先查询本地的缓存，如果有该项纪录，则直接将查询的结果返回。

// 本地缓存的查询过程：(1)通过浏览器缓存；
// (2)如果在浏览器缓存中没有，浏览器做一个系统调用来查找系统缓存；
// (3)如果在系统缓存中没有，检查路由器缓存。

// 若本地都没有则请求上级DNS服务器。客户机和服务器之间的查询是递归查询，DNS服务器接收到客户机请求，
// 必须返回一个准确的查询结果，如果DNS 服务器本地没有存储查询DNS信息，那么该服务器会询问其他服务器，
// 并将返回的查询结果提交给客户机；服务器之间的查询是迭代查询，当客户机发送查询请求时，DNS 服务器并不直接回复查询结果，
// 而是告诉客户机另一台DNS 服务器地址。


// 3.应用层客户端发送HTTP请求
// HTTP请求包括请求报头和请求主体两个部分，
// 请求报头包括请求的方法（GET / POST）、目标url、遵循的协议（http / https / ftp等）、
// 返回的信息是否需要缓存，以及客户端是否发送cookie等。


// 4.传输层TCP传输报文
// 传输层的TCP协议为传输报文提供可靠的字节流服务。它为了方便传输，将大块的数据分割成以报文段为单位的数据包进行管理，
// 并为它们编号，方便服务器接收时能准确地还原报文信息。TCP协议通过“三次握手”等方法保证传输的安全可靠。 


// 5.网络层IP协议查询MAC地址
// IP协议的作用是把TCP分割好的各种数据包传送给接收方。而要保证确实能传到接收方还需要接收方的MAC地址，也就是物理地址。
// IP地址和MAC地址是一一对应的关系，ARP协议可以将IP地址解析成对应的MAC地址。
// 当通信的双方不在同一个局域网时，需要多次中转才能到达目的，在中转的过程中需要通过下一个中转站的MAC地址来搜索下一个中转目标。


// 6.数据到达数据链路层
// 在找到对方的MAC地址后，就将数据发送到数据链路层传输。这时，客户端发送请求的阶段结束。


// 7.服务器接收数据
// 接收端的服务器在链路层接收到数据包，再层层向上直到应用层。这过程中包括在运输层通过TCP协议将分段的数据包重新组成原来的HTTP请求报文。


// 8.服务器响应请求
// 服务接收到客户端发送的HTTP请求后，查找客户端请求的资源，并返回响应报文，响应报文中包括状态码。
// 状态码由三位数字组成，200表示请求成功；301表示永久重定向；301响应报文会附带重定向的url，
// 客户端接收到后将http请求的url做相应的改变再重新发送；404 not found表示客户端请求的资源找不到。


// 9. 服务器返回相应文件
// 请求成功后，服务器会返回相应的HTML文件。



// 二、页面渲染
// 浏览器渲染页面的过程：解析HTML以构建DOM树——构建渲染树——布局渲染树——绘制渲染树。
// DOM树是由HTML文件中的标签排列组成；
// 渲染树是在DOM树中加入CSS或HTML中的style样式而形成。
// 渲染树只包含需要显示在页面中的DOM元素，像<head>元素或display属性值为none的元素都不在渲染树中。

// 在浏览器还没接收到完整的HTML文件时，就开始渲染页面了，在遇到外部链入的脚本标签或样式标签或图片时，会再次发送HTTP请求重复上述的步骤。
// 在收到CSS文件后会对已经渲染的页面重新渲染，加入它们应有的样式，图片文件加载完立刻显示在相应位置。
// 在这一过程中可能会触发页面的重绘或重排。