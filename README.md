# mpvue-skeleton - 小程序骨架屏实现

> A Mpvue project

## Start

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## How 2 Use

  - 引入`skeleton`组件
  - 在`<template>`>`<div>`后插入

  ```vue
  <skeleton selector="skeleton"
              loading="spin"
              bgcolor="#FFF"
              v-if="showSkeleton"></skeleton>
  ```

  - 给`.container`加上`.skeleton`样式
  - 给需要使用骨架屏的`.vue`的`data`中添加`showSkeleton: true`
  - 在`created`生命周期中加入
  ```js
  setTimeout(() => {
      this.showSkeleton = false;
    }, 2000);
  ```
