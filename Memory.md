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
     
   - Mark-and-Sweep 演算法解決 "循環參考" 問題
