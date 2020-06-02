import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  // egg 大型的node开发项目
  graphql: {
    // 打开
    enable: true,
    // 插件由哪个包提供
    package: '@switchdog/egg-graphql',
  },
  
  ejs: {
    enable: true,
    package: 'egg-view-ejs'
  }
};

export default plugin;
