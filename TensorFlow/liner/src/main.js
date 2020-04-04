import * as tf from '@tensorflow/tfjs'; // 模型
import * as tfvis from '@tensorflow/tfjs-vis';// 可视化包 利与分析 新建模型训练模型
// 一一线性相关的 分布在一条线上 数据先进行可视化
// xy都要给模型学习
const xs = [1, 2, 3, 4];  // x 输入
const yx = [1, 3, 5, 7];  // y 输出

window.onload = async () => {
// 可视化出来 就要用tfvis的一个api来渲染（render） scatterplot波点图
// 散点图 把坐标换成坐标点放在坐标系中 有name配置 图标名字
  tfvis.render.scatterplot(
    {
      name: '数据集',
    },
    {
      // value 数组 嵌套 有x,y的嵌套起来的数组
      // map函数生成一个数组 每一项都是一个对象  还有一个索引
      values: xs.map((x, i) => {
        return {
          x,
          y: yx[i]
        }
        // 得到：[{x: 1, y: 1}, {x: 2, y: 3}]
      })
    }
  )
  // 新建一个模型 模型名字sequential
  const model = tf.sequential();
  // 单层单个 神经元
  model.add(tf.layers.dense({
    units: 1,
    inputShape: 1
  }))
  // 损失函数 告诉错了 错得有多离谱
  // MSD 均方误差 meanSquaredError
  // optimizer: 优化器-》怎么调整，调整多少
  model.compile({
    // loss 损失
    loss: tf.losses.meanSquaredError,
    optimizer: tf.train.sgd(0.1)
  })
  // 让机器自己学习
  // 数据转换一下ts.js格式
  const input = tf.tensor(xs), labels = tf.tensor(yx);
  // 学习
  // batchSize: 每一批数据的大小 每次学习几个
  // epochs: 学习多少轮
  // 超参数：动态调整 不是死的
  // await返回一个promise 所以就将function -> async
  await model.fit(input, labels, {
    batchSize: 4,
    epochs: 100,
    // 渲染效果
    callbacks: tfvis.show.fitCallbacks(
      { name: '训练过程'}, 
      ['loss']   // loss
    )
  })
  // 测试数据
  const ouput = model.predict(tf.tensor([5]))
  console.log(ouput.dataSync());
}
