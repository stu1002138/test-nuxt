<template>
    <div class="sk-item-container">
        <div class="sk-check"  >
            <img class="sk-img" />
        </div>
        <span class="sk-text"></span>
        <div class="sk-remove">
            <img class="sk-remove-img" />
        </div>
    </div>
</template>
<script>
export default {
    props:['todoObj'],
    methods:{
        remove(){
            this.$store.commit('remove',this.todoObj);
        },
        update(){
            this.$store.commit('checked',this.todoObj);
        }
    }
}
</script>
<style lang="scss" scoped>
.sk-item-container{
    display: flex;
    width: 100%;
    align-items: center;
    padding: 10px 32px;

    .sk-check{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;

        .sk-img{
            width: 24px;
            height: 24px;
            background: $gray30;
        }
    }

    .sk-text{
        flex-grow: 10;
        background: $gray30;
        height: 21px;
    }

    .sk-remove{
        display: flex;
        height: 67px;
        justify-content: center;
        align-items: center;
        flex-grow: 1;

        .sk-remove-img{
            display: flex;
            width: 24px;
            height: 24px;
            background: $gray30;
        }
    }
}
</style>