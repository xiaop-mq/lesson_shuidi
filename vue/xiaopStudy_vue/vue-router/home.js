// 通过注入路由器,我们可以在任何组件内通过this.$router访问路由器
// 也可以使用this.$router访问当前路由
export default{
    computed: {
        username(){
            // 我们很快知道params是什么?
            return this.$router.params.username
        }
    },
    methods:{
        goBack(){
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }
}

