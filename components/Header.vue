<template>
    <div class="header">
        <img class="icon" src="~/assets/svg/menu.svg">
        <span class="hands-up">HandsUP</span>
        <img class="icon" src="~/assets/svg/leave.svg">
    </div>
</template>
<style lang="scss" scoped>
.header{
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    background: $primary;
    .icon {
        display: flex;
        flex-grow: 1;
        height: 32px;
        margin: 11px;
        margin-bottom: 12px ;
    }
    .hands-up{
        display: flex;
        flex-grow: 20;
        height: 42px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 42px;
        color: #FFFFFF;
    }
}
</style>