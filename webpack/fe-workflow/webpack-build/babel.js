module.exports = function() {
    return  {
        'presets': [
            [
                '@babel/preset-env',
                {
                    targets: {
                        chrome: 59, // 版本号大于59
                        edge: 13, // ie浏览器代号
                        firex: 50,
                        safari: 8, 
                    }
                }
            ]
        ]
    }
}