# 4.

### `<article>`

- 代表一個完整且有獨立性的內容，如果把這裡面的內容從頁面中單獨拿到其他任何地方也是能夠讓人理解的。
- 通常是一篇文章或是文件，使用範圍比較精確。
- 如果不具有這樣的獨立性則使用 `<section>` 會較為合適。

```html
<article>
  <header>
    <h1>Artical title</h1>
    <h2>Artical subtitle</h2>
    <time>2023/10/10</time>
  </header>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
</article>
```

### `<section>`

- 代表頁面上的一個分區，通常是一個大區塊例如章節。
- 通常會有一個標題，但也可能沒有，單純是代表一個大區塊。
- 一個 `<section>` 內的內容通常會與其他 `<section>` 有所不同。

```html
<body>
  <header>
    <!-- page header -->
    <!-- logo image with some navigation links -->
    <img src="" />
    <nav>
      <ul>
        <li>
          <a href="">Some Link</a>
        </li>
      </ul>
    </nav>
  </header>

  <!-- page main content -->
  <main>
    <section>
      <!-- hero section -->
      <!-- a big hero image with some branding -->
      <img src="" />
      <h1>Some Branding</h1>
    </section>
    <section>
      <!-- who are we section -->
      <p>Some introductions...</p>
    </section>
    <section>
      <!-- our clients section -->
      <!-- some logos of our clients... -->
      <img src="" />
      <img src="" />
      <img src="" />
      <img src="" />
    </section>
  </main>

  <!-- page footer -->
  <footer>
    <!-- copyright or some informations with some navigation links -->
    <span>Copyright...etc</span>
    <nav>
      <ul>
        <li>
          <a href="">Some Link</a>
        </li>
      </ul>
    </nav>
  </footer>
</body>
```
