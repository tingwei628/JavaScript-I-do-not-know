> Thanks to [How JavaScript works: memory management + how to handle 4 common memory leaks@Alexander Zlatkov](https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec)


## 記憶體洩漏

 ### 記憶體使用過程

分配 => 使用 => 釋放

 ### 分配的種類
 
  * 靜態: complied time 會指定好記憶體位置和大小, 在stack(堆疊)上
  
  * 動態: run time 不規則指定記憶體位置和大小, 在heap(堆積)上

 ### 記憶體釋放
   
   - 當物件不再被參考時候, 被GC
     但是, 遇到循環參考問題, 發生記憶體洩漏....
     
   - Mark-and-Sweep 演算法解決 "循環參考" 問題, 因為沒被Mark到, 就會被掃除


 ### JS 發生記憶體情境
 
   - 全域變數的property
   - 事件的handler內, 使用DOM node, 但事件取消時, 尚未移除其事件handler (removeEventListener)
     導致其DOM-node一直被參考



     ```js
      
      
     var node = document.getElementById("myId");
     function onClick() { node.innerHTML = '123' };
     node.addEventListener('click', onClick);

     //
     node.removeListener('click', onClick); // <--- 記得要移除
     
     
     ```
