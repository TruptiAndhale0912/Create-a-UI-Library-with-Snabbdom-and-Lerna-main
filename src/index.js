import { h, init } from 'snabbdom';
import propsModule from 'snabbdom/modules/props';
import eventListenersModule from 'snabbdom/modules/eventlisteners';

const patch = init([propsModule, eventListenersModule]);
let state = { count: 0 };
let vnode;

export function render() {
    vnode = patch(vnode, view(state));
}

function view(state) {
    return h('div', [
        h('h1', `Count: ${state.count}`),
        h('button', { on: { click: handleClick } }, 'Add')
    ]);
}

function handleClick() {
    updateState({ count: state.count + 1 });
}

function updateState(newState) {
    state = {...state, ...newState };
    render();
    console.log('State updated:', state);
}

vnode = document.getElementById('app');
render();