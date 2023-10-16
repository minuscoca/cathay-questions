## CSS 讀取順序為由上往下，根據精度決定 css property 的優先度

一般都是打開 dev tool 切換到 Styles 分頁，查看所選 element 的 CSS styles。

```html
<span id="tag" class="tag" style="background: lightblue;">tag</span>
```

CSS 的精度順序

- **!important** (1,0,0,0,0)

```css
.tag {
  background: pink !important;
}
```

- **Inline Style** (1,0,0,0)

```html
<span style="padding: 1rem;" />
```

- **Id Selector** (0,1,0,0)

```css
#tag {
  padding: 1rem;
}
```

- **Class Selector** (0,0,1,0)

```css
.tag {
  padding: 1rem;
}
```

- **Element Selector** (0,0,0,1)

```css
span {
  padding: 1rem;
}
```

- **Wildcard Selector** (0,0,0,0)

```css
* {
  padding: 1rem;
}
```

## 若有重複的 css property，在精度不同時，精度高的會取代精度低的

```html
<span id="tag" class="tag">tag</span>
```

```css
#tag {
  background: pink;
}

.tag {
  background: lightblue;
}
```

因為 `#tag` 為 id selecor、 `.tag` 為 class selector，
**若有重複的 css property，在精度不同時，精度高的 `#tag` 會取代精度低的 `.tag`**，
合併的結果為 `background: pink;`

## 若有重複的 css property，在精度相同時，後定義的會取代先定義的

```html
<div class="container-sm container-lg" />
```

```css
.container-sm {
  width: 100px;
  height: 100px;
  background: cyan;
}

.container-lg {
  width: 200px;
  height: 200px;
}
```

因為 `.container-sm` 和 `.container-lg` 精度同為 class selector，
**若有重複的 css property，在精度相同時，後定義的 `.container-lg` 會取代先定義的 `.container-sm`**，
合併的結果為 `background: cyan; width: 200px; height: 200px;`

## 結合不同的 selector 可以有更高的精度

```html
<span class="tag">tag</span>
```

```css
span.tag {
  background: pink;
}

.tag {
  background: lightblue;
}
```

因為 `span.tag` (0,0,1,1) 的精度比 `.tag` (0,0,1,0) 更高，
**若有重複的 css property，在精度不同時，精度高的 `span.tag` 會取代精度低的 `.tag`**，
合併的結果為 `background: pink;`

## 使用的原則

盡量全部使用 class selector，如果有必要提高精度再用 #id selector 或結合 element selector。盡量不要使用 element selector，絕對避免使用 !important。
