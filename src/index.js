import rootReducer from "../redux/rootReducer.js";
import createStore from "./createStore.js";

const incrementButton = document.getElementById('inc');
const decrementButton = document.getElementById('dec');
const asyncButton = document.getElementById('async');
const themeButton = document.getElementById('theme');
const counter = document.getElementById('count')

const store = createStore(rootReducer, 0)

window.store = store

incrementButton.addEventListener("click", () => {
    store.dispatch({type: "INCREMENT"})
});

decrementButton.addEventListener("click", () => {
    store.dispatch({type: "DECREMENT"})
});

asyncButton.addEventListener("click", () => {

});

themeButton.addEventListener("click", () => {
    // document.body.classList.toggle('dark');
});

store.subscribe(() => {
    counter.innerHTML = store.getState()
})

store.dispatch({type: "INITIAL STATE"})