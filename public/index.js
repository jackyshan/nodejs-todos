var app = new Vue({
    el: '.container',
    data: {
        newPerson: {
            name: '',
            sex: 'male',
            age: 22,
        },
        todos: []
    },
    methods: {
        add: function () {

            axios.post('/todo', this.newPerson)
                .then((response)=> {
                    // _this.todos.push(response.data)
                    this.gettodo()
                })
        },
        gettodo: function () {
            axios.get('/todo')
                .then( (response) =>{
                    var list = response.data
                    this.todos = list
                    // console.log(response)
                })

        },
        deleteobj:function(obj){
            console.log(obj)

            axios.delete('/todo', {data: obj}).then((response)=>{
                // console.log(e)
                // this.todos.splice(index,1)
                this.gettodo()
            })
        }
    },
    created: function () {
        this.gettodo()
    }
})