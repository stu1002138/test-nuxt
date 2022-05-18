<template>
    <div class="todo-container">
        <span class="title">Todo List</span>
        <Item v-for="item in todolist"  :key="item.time" :todoObj="item"/>
        <SkeletonItem v-show="true"/>
        <div class="input-area">
            <div class="input-container">
                <input v-model="todos" type="text" placeholder="請輸入要做的事情">
            </div>
            <div class="add" @click="addTodo"><img class="icon" src="~/assets/svg/add.svg"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        let todos = '';
        return {
            todos
        }
    },
    computed:{
        todolist(){
            return this.$store.state.list
        },
        loading(){
            return this.$store.state.isLoading
        }
    },
    methods:{
        addTodo(){
            this.$store.dispatch('handAdd',this.todos);
            this.todos = '';
        }
    }
    
}
</script>
<style lang="scss" scoped>
.todo-container{
    display: flex;
    width: 80%;
    flex-direction: column;
    margin-top: 71px;
    background: $white;
    border: 1px solid $gray20;
    border-radius: 4px;

    .title{
        display: flex;
        width: 100%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 42px;
        color: $black;
        margin-top: 33px;
        margin-left: 30px;
        margin-bottom: 20px;
    }
    .input-area{
        display: flex;
        width: 100%;
        height: 54px;
        align-items: center;

        .input-container{
            display: flex;
            flex-grow: 0.98;
            height: 34px;
            margin: 10px 17px;
            border: 1px solid $gray20;
            border-radius: 4px;

            input{
                display: flex;
                width: 100%;
                margin: 0 14px;
                outline: none;
                border-style:none; 
                background-color:transparent;
            }
        }

        .add{
            display: flex;
            flex-basis: 35px;
            height: 34px;
            background: $primary;
            border-radius: 4px;
            justify-content: center;
            align-items: center;

             img{
                display: flex;
                width: 21px;
                height: 20px;
            }
        }
    }
}
</style>