# 5.

CSS Box Model 是一個網頁設計與實做佈局的基礎，其由內而外由以下四個部位組成：

1. Content： 區塊的內容
2. Padding： 區塊的內邊距，指 Content 到 Border 之間應該要有多少距離
3. Border： 區塊的邊框，圍繞著 Padding 和 Content
4. Margin： 區塊的外邊距，指 Border 之外距離其他 element 應該要有多少距離

透過對這四個部位的控制可以調整網頁的外觀與佈局。
一般都是打開 dev tool 切換到 Computed 分頁，查看所選 element 的 CSS box model。

例如一個 `<div>` 有以下 css style

```css
div {
  width: 60px;
  padding: 8px;
  border-width: 2px;
  margin: 10px;
}
```

則 box-sizing 預設為 content-box 的情況下，若要得到 `<div>` box model 的寬度就需要將以上四個部位都列入計算。

`100px = 60px(width) + 8px(padding-left) + 8px(padding-right) + 2px(border-left-width) + 2px(border-right-width) + 10px(margin-left) + 10px(margin-right)`

但是一般會將 box-sizing 設為 border-box，如此可以直接設定 width height 至包含 Border 區塊以內，可以省去很多計算更方便排版。

`80px = 60px(width) + 10px(margin-left) + 10px(margin-right)`
