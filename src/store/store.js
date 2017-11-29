import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        clicks: 0
    },
    getters: {
        clicks: state => state.clicks,
        counter: state => state.counter,
        doubleCounter: state => state.counter * 2,
        stringCounter: state => state.clicks + ' Clicks'
    },
    mutations: {
        increment: (state, payload) => state.counter += payload || 1,
        decrement: (state, payload) => state.counter -= payload || 1,
        click: state => state.clicks++
    },
    actions: {
        click: ({commit}) => {
            commit('click');
        },
        increment: ({commit}, payload) => {
            commit('increment', payload = 0);
            commit('click');
        },// ({commit}) == (context.commit) it's es6 destructurisation
        decrement: ({commit}, payload = 0) => {
            commit('decrement', payload);
            commit('click');
        },
        asyncIncrement: ({commit}) => {
            setTimeout(() => {
                commit('increment');
                commit('click');
            }, 1000)
        },
        asyncDecrement: ({commit}) => {
            setTimeout(() => {
                commit('decrement');
                commit('click');
            }, 1000)
        }
    }
});