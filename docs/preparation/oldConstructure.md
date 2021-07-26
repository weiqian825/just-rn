在上一节中我们了解了`ReactNative`的理念，简单概括就是**跨平台**。

本节我们先聊聊它的老架构，是如何解决跨平台问题的，又引发了什么新问题，以至需要重构。

## RN旧架构图

<img src="https://formidable.com/uploads/webp/old-diagram-full.webp" alt="老RN架构">

老的RN架构可以分为4个核心模块：
- React 层 —— 执行JS业务代码
- Javascript —— JavaScript 引擎。
- Bridge —— 负责JS业务代码和Native的通信。
- Native —— 执行Bridge发出的指令，运行原生代码。

简单描述原理：
- 第一步 —— React业务代码，经过打包工具Metro编译成一个JSBundle，APP负责拉取JSBundle，并创建一个JS执行环境 JSContent，然后JS代码传给JSCore(JS引擎)执行。
- 第二步 —— JS将执行的结果发送给Bridge，Bridge将消息转换为JSON，通过异步在2端传递。
- 第三步 —— Native执行Bridge发出的指令，渲染原生页面。

## RN旧架构线程模型
<img src="https://cdn-media-1.freecodecamp.org/images/1*fKuJS2I7kvpcyII3x0Mxww.jpeg" alt="RN线程图">

- JS Thread —— 执行JS代码的线程。
- Shadow Thread —— React Native使用的后台线程，用来计算你使用React库创建的布局。（Native内有自己的布局实现，并不遵循RN代码里的flex布局，shadow thread内使用了一个名为Yaga的布局引擎，它将flexbox布局转换为Native可以理解的布局系统）
- UI Thread —— Android/iOS应用运行的主应用线程，负责原生渲染部分。

## RN旧架构渲染页面流程
假设你想在屏幕中央绘制一个红色框
```js
<View style={{width: 100, height: 100, color: 'red'}} />
```
JS Thread会先对其序列化，形成一条消息
```js
UIManager.createView([343,"RCTView",31, {"backgroundColor":-16181,"width":100,"height":100}])
```
- 消息通过Bridge发到ShadowThread。ShadowTread接收信息后，先反序列化形成ShadowTree，然后传给Yoga，形成原生布局信息。
- 一旦获得Yoga的渲染标记，这些信息再次通过Bridge传给UIThread。
- UIThread收到到消息后先反序列化，然后根据所给布局信息，进行绘制。
<img src="https://cdn-media-1.freecodecamp.org/images/1*jsICCO6sFLBZt1Bd0VNPfQ.jpeg" alt="RN线程图">

## RN旧架构问题
从上面的页面渲染流程可以看出，线程之间所有的通信都发生在bridge，会有如下问题

1. 传输大量数据很慢。
2. 所有的通信都是异步的，JS线程无法同步更新UI线程，无法保证渲染的实时性能（尤其在Flatlist渲染）。
3. 通过JSON来传递消息需要一直序列化和反序列化，开销很大。

基于上面的Bridge问题，RN团队推出了RN新架构，我们会在下一节讲到。

## 参考资料

[ReactNative架构](https://formidable.com/blog/2019/react-codegen-part-1/)

[How React Native works right now](https://www.freecodecamp.org/news/how-react-native-constructs-app-layouts-and-how-fabric-is-about-to-change-it-dd4cb510d055/)

[React Native架构一览](http://www.ayqy.net/blog/react-native-architecture-overview/)




