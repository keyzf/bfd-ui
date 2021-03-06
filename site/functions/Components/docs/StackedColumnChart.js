import React from 'react'
import Pre from 'public/Pre'
import { Props, Prop } from 'public/Props'
import StackedColumnChart from 'bfd/StackedColumnChart'
import Warn from 'public/Warn'

const code = `import StackedColumnChart from 'bfd-ui/lib/StackedColumnChart'

const App = React.createClass({
  render() {
    return <StackedColumnChart style={{height: 400}} category="name" cols={{x: '日环比新增', y: '系列新增', z: '进店新增', a: '消费新增'}} url="/data/columnChart.json"/>
  }
})`

const cols = {
  x: '日环比新增',
  y: '系列新增',
  z: '进店新增',
  a: '消费新增'
}

export default React.createClass({
  render() {
    return (
      <div>
        <h1>柱型图 @tenglong.jiang</h1>
        <Warn>暂停维护，建议使用 Echarts webpack 方式</Warn>
        <Pre>{code}</Pre>
        
        <StackedColumnChart style={{height: 400}} category="name" cols={cols} url="/data/columnChart.json"  />
        
        <Props>
          <Prop name="cols" type="Object" required>
            <p>y轴字段配置，比如：</p>
            <Pre>
{`{
  x: '日环比新增', 
  y: '系列新增',
  z: '进店新增',
  a: '消费新增'
}`}
            </Pre>
          </Prop>
          <Prop name="category" type="String" required>
            <p>x轴字段名，比如 'date'</p>
          </Prop>
          
          <Prop name="url" type="String">
            <p>数据源URL，data 格式要求数组，字段分别对应 cols 和 category</p>
            <Pre>
{`{
  "code": 200,
  "message": "当code不是200时，message信息会展示到页面",
  "data": [{
    x: 234,
    y: 255,
    z: 366,
    a: 198
    name: "01-01"
  }]
}`}
            </Pre>
          </Prop>
          <Prop name="data" type="Array">
            <p>数据源，格式与 url 方式返回的 data 格式一样</p>
            <Pre>
{`[{
  x: 234,
  y: 255,
  z: 366,
  a: 198
  name: "01-01"
}]`}
            </Pre>
            <div className="alert alert-warning">url 和 data 属性至少提供一个</div>
          </Prop>
        </Props>
      </div>
    )
  }
})