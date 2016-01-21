## 百分点前端UI组件库

### 安装

```sh
$ npm install --save bfd-ui
```

### 使用

```javascript
import { render } from 'react-dom'
import LineChart from 'bfd-ui/lib/lineChart'

render(<LineChart config={config}/>, mountNode)
```

### 开发者说明

#### 开发环境安装

```sh
$ git clone http://git.baifendian.com/front-end/bfd-ui.git

$ cd bfd-ui

$ npm install
```
#### 如何添加新组件？

`src/yourComponent`

注意：`index.jsx` 为组件的入口


#### 如何测试、查看效果？

```sh
$ npm start
```

[查看详细说明](site/README.md)