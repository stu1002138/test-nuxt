<template>
    <div class="item-container">
        <div class="check" @click="update()" >
            <img v-if="todoObj.checked" class="icon" src="~/assets/svg/checked.svg"> 
            <img v-if="!todoObj.checked" class="icon" src="~/assets/svg/non-check.svg"> 
        </div>
        <span v-bind:style="[todoObj.checked?{'color':'#8DC8FF'}:{}]">{{todoObj.memo}}</span>
        <div class="remove" @click="remove">
            <img class="icon" src="~/assets/svg/remove.svg"> 
        </div>
    </div>
</template>
<script>
export default {
    props:['todoObj'],
    methods:{
        remove(){
            this.$store.dispatch('handRemove',this.todoObj);
        },
        update(){
            this.$store.commit('checked',this.todoObj);
        }
    }
}
</script>
<style lang="scss" scoped>
.item-container{
    display: flex;
    width: 100%;
    align-items: center;
    padding: 10px 32px;

    .check{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;

        img{
            display: flex;
            width: 24px;
            height: 24px;
        }
    }

    span{
        flex-grow: 10;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: $black;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .remove{
        display: flex;
        flex-grow: 1;
        height: 67px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        
        img{
            display: flex;
            width: 24px;
            height: 24px;
        }
    }
}
</style>