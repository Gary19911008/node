
## process.nextTick setImmediate  setTimeout(call,0) 区别

* process.nextTick() 添加的回调函数会在事件循环返回之前就执行，是直接插入到队列的最前边（没有在队列中）
* setImmediate(callback)  setTimeout(callback, 0) 都是将任务添加到了任务队列的尾部，但是执行顺序不确定

源代码分析： https://www.zhihu.com/question/23028843
