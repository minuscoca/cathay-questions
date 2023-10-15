# Q1.

## Explain why does this color not works, and how to fix make it work on 1st list

為什麼不生效：

`.container .shop-list li.item` 的精度 (0,0,1,1) 比 `.container .shop-list .item` 的精度 (0,0,1,0) 更高，
因為除了相同層級的 class selector 還多了 element selector，
所以相同的 css property (color) 精度低的會被精度高的取代，
最後的結果為 color: green;

修改的方向：

- 第一個 list \<ol> 內 \<li> 的 color 要是 blue
- 其他 \<li> 的 color 要是 green

將 color: green; 設定在較低的精度，
並將 color: blue; 設定在較高的精度，
這邊是透過增加 element selector 的方式選擇 \<ol>。
再由於 color 會 inherit 所以其實可以移除 .item class。

```css
.container .shop-list {
  color: green;
}
.container ol.shop-list {
  color: blue;
}
```

# Q2.

## Write styling make every other line give background color to next one

若需求為每隔一行有背景顏色，可以使用 `:nth-child()` selector 達成，假設奇數行要有 background-color: lightgray 的話可以新增以下 style：

```css
li:nth-child(odd) {
  background-color: lightgray;
}
```
