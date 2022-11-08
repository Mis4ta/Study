# Object.defineProperty( )

​	里面有一个get(){}函数你访问这个数据,它就给调用get函数返回这个值的参数, 不需要传参

​	set()函数,就是当你去修改他的值时候调用,需要传递一个参数,修改的参数就是传递进来的参数



# SSR

把html加载的内容,或请求放到服务器加载,加载完成之后,浏览器就会收到一个完整的html内容,使其效率更高



# 跨域

## 为什么会跨域

如果协议+域名+端口不一样的时候,进行请求的时候,就会产生跨域

## 跨域的解决方法

1.cors,通过后端设置响应头Access-control-allow-origin:xxx.com

2.json转换为jsonp

​	利用script/img  的src 属性可以引入跨域资源的行为

3.代理服务器, node的proxy nginx数据的转发,使得用户请求的协议(协议+域名)是统一的



# 可能造成内存泄漏的情况:

闭包,setTimeOut没有清理,全局变量var

# 权限控制

1.动态路由

2.路由守卫

3.条件判断

# $nextTick

vue.$nextTick中所指定的回调函数会在dom节点更新之后再执行



# call apply bind的区别

都是改变内部的this指向

call 和 apply 会调用函数,区别是传参的不同, call接受的是一个参数列表,apply 接受的是一个数组

bind 和这两个的区别是 bind 会有一个返回值返回是改变了this指向的一个函数,之后才能调用, 而另外两个会直接调用

...

# 闭包

一个函数返回一个内部函数,内部函数使用外部函数的变量

使得外部函数延长变量的生命周期

# this指向

???

# Window.onload 和Jquery.ready区别

Onload 页面资源刚加载完成

jQuery ready 值的是dom已经渲染



# hash 模式和history 

## hash模式 特点是后面有个#  不够美观 但是兼容性好 #后面的hash值都不会带给服务器

## 若以后将地址通过第三方手机app分享,若app校验严格,则地址会被标记为不合法





## historyt 特点是后面没有#	比较美观 但是兼容性差

## 应用部署上线时需要后端人员支持,解决刷新页面404的问题









# 双向绑定原理

借助Object.defineProperty()的set方法对数据进行劫持,结合发布-订阅者模式

实现数据的双向绑定



# $set原理

由于js的限制,Vue不能检测数组和对象的变化,但是官方还是想办法回避这些限制,并保证他们的响应式.

对于对象而言,

Vue无法检测propert的添加或移除,由于 Vue 会在初始化实例时对 property 执行 getter/setter 转化，所以 property 必须在 `data` 对象上存在才能让 Vue 将它转换为响应式的 (不是添加的响应式数据,不会渲染)

对于数组

Vue 不能检测以下数组的变动

​	修改数组的中 单个元素,

​	修改数组的长度

所以当然触发不了Object.defineProperty()的set方法,实现不了双向绑定,所以,数据更新页面不会被渲染

当遇到这些问题的时候,我们用$set去给目标添加一个响应式数据即可



# null 和undefined

区别:

null表示一个"无"的空对象(空对象指针),转换为数值时为0,

undefined表示一个"无"的原始值,转为数值时为NaN,而且是基本类型

# 异步加载js

async defer

defer :等html全部解析完成,才会执行js,依次执行js脚本的

async:async是和html解析同步的(一起的),不是依次执行js脚本(谁先加载完谁先执行)



# js执行顺序

同步执行完之后加入事件循环,事件循环包含宏任务微任务,所有微任务执行完才执行宏任务

# 作用域

1.除了函数外,js没有块级作用域

2.作用域链:内部可以访问外部,但是外部不能访问外部

注意:如果内部有,优先查找内部的,没有就找外部的,依次查找

3.注意声明变量是用var 还是没写 没写就是(window)

4.js有变量提升的机制

5.优先级 ： 声明变量  > 声明普通函数 >参数 >变量提升

 

```js
function c(){
  var b=1
  function a(){
    console.log(b);  //1  undefined
    var b=2
    console.log(b); // 2  2
  }
  a()
  console.log(b);  // 3  1
}
c()
```

