export const state = () =>({
    list:[],
    isLoading:false
})

export const actions = {
    handAdd({commit},memo){
        commit('setLoading',true);
        setTimeout(()=>{
            commit('add',memo);
        },1000);
    },
    handRemove({commit},{time}){
        setTimeout(()=>{
            commit('remove',time);
        },1000);
    }
}

export const mutations = {
    setLoading(state,loadingState){
        state.isLoading = loadingState;
    },
    add(state,memo){
        state.list.push({memo,checked:false,time:new Date().getTime()});
        state.isLoading = false;
    },
    remove(state,time){
        state.list = state.list.filter((item)=>item.time !=time);
    },
    checked(state,{time}){
        state.list.forEach(element => {
            if(element.time===time){
                element.checked = !element.checked;
            }
        });
    }
}