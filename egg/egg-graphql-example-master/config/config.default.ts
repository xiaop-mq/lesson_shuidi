import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588841843406_1416';

  // add your egg config in here
  // 启动中间件
  config.middleware = [ 'graphql' ];
  
  config.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
    // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
    graphiql: true,
    apolloServerOptions: {
      tracing: true, // 设置为true时，以Apollo跟踪格式收集和公开跟踪数据
      debug: true, // 一个布尔值，如果发生执行错误，它将打印其他调试日志记录
    },
  };

  config.security = {
    csrf: {
      ignore: () => true
    }
  }

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.github = {
    login_url: 'https://github.com/login/oauth/authorize',
    client_id: '4670085dbd6bddb191ec',
    client_secret: '49eee8d443bcd6ff4b6aa8af6c1ab025b31c3446',
    scope: ['user']
  }

  config.view = {
    mapping: {
      '.html': 'ejs'
    }
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
