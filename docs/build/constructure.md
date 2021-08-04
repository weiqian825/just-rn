在了解了RN的总体的框架理念后，我们从第一个

## RN新架构图

<img src="https://formidable.com/uploads/webp/new-diagram-full.webp" alt="新RN架构">

新RN架构4个核心模块变化

React 层：react新特性及codegen工具。

> CodeGen的工具来自动生成JS和原生端的接口代码，借助于类型化JavaScript的可信任性，这个生成工具可以用来生成Fabric和TurboModules(新架构中的功能点，将在第三节中介绍)所需要的接口文件，从而实现更可靠的端之间数据传递。这种自动化也可以提高端之间数据传递的效率，因为可以避免每次都验证数据的合法性
<img src="https://formidable.com/uploads/webp/new-1.webp" alt="React层">

JavaScript 层：引入 JSI，允许替换不同的 JavaScript 引擎。

> 上层 JavaScript 代码需要一个运行时环境，在 React Native 中这个环境是 JSC（JavaScriptCore）。不同于之前直接将 JavaScript 代码输入给 JSC，新的架构中引入了一层 JSI（JavaScript Interface），作为 JSC 之上的抽象，用来屏蔽 JavaScript 引擎的差异，允许换用不同的 JavaScript 引擎（如最近推出的Hermes）。

> 有了 JSI 之后，JavaScript 还能持有 C++对象的引用，并调用其方法。

> 从而允许 JavaScript 与 Native 的直接调用，而不必通过跨线程消息通信，省去序列化/反序列化的成本，还能减轻 Bridge 的通信压力（如大量消息排队堵车）。

> 同时JSI 所在的 C++层也可以作为复用 Native 代码的一种方式，拥有 Native 的天然支持。

<img src="https://formidable.com/uploads/webp/new-2.webp" alt="JavaScript层">

Bridge 层：Fabric，它是 UI 管理器的重新架构，以及 TurboModules，它是与本地端交互的“新一代”实现。
<img src="https://formidable.com/uploads/webp/new-3.webp" alt="新RN架构 Fabric + TurboModules">

Native 层：精简核心模块，将非核心部分拆分出去作为社区模块独立更新维护。


## RN新架构完成情况

React  —— 完成 0.59以上版本支持React16.8
JSI  —— 完成 0.59及以上版本支持


## 参考资料

[ReactNative架构](https://formidable.com/blog/2019/react-codegen-part-1/)

[How React Native works right now](https://www.freecodecamp.org/news/how-react-native-constructs-app-layouts-and-how-fabric-is-about-to-change-it-dd4cb510d055/)

[react-native-new-architecture](http://www.ayqy.net/blog/react-native-new-architecture/)

[React Native's New Architecture](https://www.youtube.com/watch?v=UcqRXTriUVI)

[Cross-Platform](https://medium.com/airbnb-engineering/react-native-at-airbnb-the-technology-dafd0b43838#992a)

