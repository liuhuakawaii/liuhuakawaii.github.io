---
title: redux使用以及源码
date: 2023-5-12
tags:
 - redux
categories:
 -  笔记
---

## redux使用

1. **redux的基本使用**            
    ```js
            import { createStore } from 'redux';
            /* 1.创建一个对象initialState，作为我们要保存的状态state */
            const initial = {
                  name: "chenyq",
                  age: 18
            }
            /* 2.创建STORE公共容器来存储这个initialState 
                  + 每一次dispatch派发，都会把reducer执行
                  + 第一次派发是在redux内部派发的，state是undefined，会赋默认值initial，type不会和任何逻辑匹配
                  + 此后的手动派发，会基于type来匹配业务逻辑
            */
            const reducer = function reducer(state = initial, action) {
                  let state = {...state} //避免直接修改，克隆一份整体return新值
                  switch(action.type){
                        case 'changeName':
                              state.name = 'xxx';
                              break;
                        case 'changeAge':
                              state.age = 16;
                              break;
                        default
                  }
                  return  state
            }
            const store = createStore(reducer);
            export default store;


            import store from '@/store'
            /* 3.通过 store.getState 来获取当前的state */
            let { name,age } = store.getState()

            /* 4.通过action来修改state  */
            store.dispatch({ type: "change_name", name: "abc" })
            
            /* 5. 通过store.subscribe()来控制更新 
                  方法一：通过控制数字自增，并且卸载前一个监听
                  方法二：通过用随机数控制更新
                  方法三：类组件更新方式
            */
           let [num,forceUpdate] = useState(0)
            useEffect(()=>{
                  let unsubscribe = store.subscribe(() => {
                        forceUpdate(num + 1 )
                  })
                  return ()=>{unsubscribe()} 
            },[num])

            let [_,forceUpdate] = setState(0)
            useEffect(()=>{
               store.subscribe(() => {
                        forceUpdate(+new Date())
                  })   
            },[])

             componentDidMount() {
                 const { store } = this.context;
                 store.subscribe(() => {
                     this.forceUpdate();
                 });
             }
    ```

2. **基于`context`来使用`store`**
      + 创建`ThemeContext.js`
          ```jsx
                  import {createContext} from 'react'
                  const ThemeContext = createContext()
                  export default ThemeContext
          ```
      + 在`index.jsx`中
          ```js
               import store from './store'
               import ThemeContext from './ThemeContext'
               root.render(
                  <ThemeContext.Provider
                        value={{store}}
                  >
                        <Root />
                  </ThemeContext.Provider>
               )
          ```
      + 获取`store`
          ```js
               /* 函数组件 */
               import {useContext} from 'react'
               import ThemeContext from './ThemeContext'
               const Root = function Root(){
                  const {store} = useContext(ThemeContext)
               }
               /* 类组件 */
               class Root extends React.Component{
                  static contextType = ThemeContext
                  render(){
                        const {store} = this.context
                  }
               }
          ```


3. **封装函数动态生成action**
    ```js
            // 创建修改name的action
            const changeNameAction = (name) => ({
            type: "change_name",
            name
            })
            // 创建修改age的action
            const changeAgeAction = (num) => ({
            type: "change_age",
            num
            })

            // 在派发action时, 我们就可以调用函数即可获取action
            store.dispatch(changeNameAction("aaa"))
            store.dispatch(changeNameAction("bbb"))
            store.dispatch(changeNameAction("ccc"))

            store.dispatch(changeAgeAction(10))
            store.dispatch(changeAgeAction(20))
            store.dispatch(changeAgeAction(30))
            store.dispatch(changeAgeAction(40))

    ```

## redux部分源码  

1. **源码基本实现**
    ```js
        import _ from './assets/utils';

        /* 实现redux的部分源码 */
        export const createStore = function createStore(reducer) {
            if (typeof reducer !== 'function') throw new Error("Expected the root reducer to be a function");

            let state, //存放公共状态
                listeners = []; //事件池

            /* 1.getState:获取公共状态 */
            const getState = function getState() {
                // 返回公共状态信息即可
                return state;
            };

            /* 2.subscribe:向事件池中加入让组件更新的方法 */
            const subscribe = function subscribe(listener) {
                // 规则校验
                if (typeof listener !== "function") throw new TypeError("Expected the listener to be a function");
                // 把传入的方法(让组件更新的办法)加入到事件池中「需要做去重处理」
                if (!listeners.includes(listener)) {
                    listeners.push(listener);
                }
                // 返回一个从事件池中移除方法的函数
                return function unsubscribe() {
                    let index = listeners.indexOf(listener);
                    listeners.splice(index, 1);
                };
            };

            /* 3.dispatch:派发任务通知REDUCER执行 */
            const dispatch = function dispatch(action) {
                // 规则校验
                if (!_.isPlainObject(action)) throw new TypeError("Actions must be plain objects");
                if (typeof action.type === "undefined") throw new TypeError("Actions may not have an undefined 'type' property");

                // 把reducer执行，传递：公共状态、行为对象；接收执行的返回值，替换公共状态；
                state = reducer(state, action);

                // 当状态更改，我们还需要把事件池中的方法执行
                listeners.forEach(listener => {
                    listener();
                });

                return action;
            };

            /* redux内部会默认进行一次dispatch派发，目的：给公共容器中的状态赋值初始值 */
            const randomString = () => Math.random().toString(36).substring(7).split('').join('.');
            dispatch({
                // type: Symbol()
                type: "@@redux/INIT" + randomString()
            });

            // 返回创建的STORE对象
            return {
                getState,
                subscribe,
                dispatch
            };
        };
    ```
2. **存在问题**
    + `getState`不应该直接返回公共状态，应该返回克隆的堆内存
    + 每一次派发action会把事件池中所有的任务都执行

## redux工程化

1. **目录划分**
    |-src
       |-store
          |-reducers
              index.js
              xxxReducer.js
          |-actions
              index.js
              xxxAction.js
          index.js
          action-type.js

2. **`reducer`模块划分**      
    + `reducer`模板
        ```js
            import _ from '@/assrts/utils'
            //导入所有的变量 赋值给TYPES
            import * as TYPES from '../action-types'
            const initial = {}
            export default function xxxReducer(state = initial,action){
                state = _.clone(true,state)//深克隆
                switch(action.type){
                    case TYPES.VOTE_OPP: //写的时候还有提示不容易出错
                        state.xxx = action.xxx
                        break;
                    case TYPES.VOTE_SUP:
                        state.xxx = action.xxx
                        break;
                    default
                }
                return state
            }
        ```
    + 合并`reducer`
        ```js
            import {combineReducers} from 'redux'
            import xxxReducer from './xxxReducer'

            const reducer = combineReducers({
                xxx:xxxReducer,
                ...
            })
            export default reducer
        ```

3. **派发行为表示宏管理**
    + 每一次`dispatch`派发的时候，都会去每个模块的`reducer`中找一遍，把所有和派发行为表示匹配的所有逻辑执行，所以可能会出现冲突！
    + 基于宏管理（统一管理）：让所有派发行为标识唯一
    + `action-type.js`
        ```js
            /* 统一管理需要派发的行为标识：
                 + 为了保证不冲突，我们一般都是这样命名：模块名_派发的行为标识（大写）
                 + 变量和存储的值是一致的
                 + 所有需要派发的行为标识，都在这里定义
             */
            export const VOTE_SUP = 'VOTE_SUP'
            export const VOTE_OPP = 'VOTE_OPP'
            export const MAIN_SUP = 'MAIN_SUP'
            export const MAIN_OPP = 'MAIN_OPP'
            ...
        ```

4.  **`actionCreator`的创建**
    + `index.js` ： 把各个板块的`action`合成为一个`action`
        ```js
            import voteAction from './voteAction'

            const action = {
                vote:voteAction,
                personal:personalAction
            }
            export default action
        ```
    + `vote`板块要派发的行为对象管理
        ```js
            import * as TYPES from '../action-types'
            /*  
                包含多个方法，每个方法执行，都返回要派发的行为对象
            */      
        const voteAction = {
            support(){
                return {
                    type:TYPES.VOTE_SUP
                }
            },
            oppose(){
                return {
                    type:TYPES.VOTE_OPP
                }
            }
        }
        export default voteAction
        ```

5. **`index.js`**
    ```js
        import { createStore } from 'redux';
        import reducer from './reducers';

        const store = createStore(reducer);
        export default store;
    ```

6. **使用方法**
    ```js
        import * as TYPES from '../action-types'
        import action from '../store/actions'

        store.getState().xxx  //xxx为模块名
        store.dispatch({
            type:TYPES.VOTE_OPP  
        })
        store.dispatch(action.vote.support())
    ```

## combineReducers源码

+ 源码实现
    ```js
        const combineReducers = function combineReducers(reducers) {
            // reducers是一个对象，以键值对存储了：模块名 & 每个模块的reducer
            let reducerskeys = Reflect.ownKeys(reducers);
            // reducerskeys:['vote','personal']
            /* 
                返回一个合并的reducer 
                    + 每一次dispatch派发，都是把这个reducer执行
                    + state就是redux容器中的公共状态
                    + action就是派发时候传递进来的行为对象
            */
            return function reducer(state = {}, action) {
                // 把reducers中的每一个小的reducer（每个模块的reducer）执行；把对应模块的状态/action行为对象传递进来；返回的值替换当前模块下的状态！！
                let nextState = {};
                reducerskeys.forEach(key => {
                    // key:'vote'/'personal'模块名
                    // reducer:每个模块的reducer
                    let reducer = reducers[key];
                    nextState[key] = reducer(state[key], action);
                });
                return nextState;
            };
        };
        export default combineReducers;

        /* store.dispatch({
            type: TYPES.VOTE_SUP
        }); */
    ```

## **redux中间件**      

1. `redux-logger`：
    + 每一次派发，在控制台输出派发日志，方便对redux的操作进行调试
    + 输出的内容：派发之前的状态，派发的行为，派发后的状态

2. `redux-thunk`、`redux-promise`
    + 实现异步派发，每一次派发的时候，需要传递给reducer的action对象中的内容，是需要异步获取的

3. `redux-saga`

4. 使用方法
    ```jsx
        /* src/store/index.js */
        import { createStore, applyMiddleware } from 'redux';
        import reducer from './reducers';
        import reduxLogger from 'redux-logger';
        import reduxPromise from 'redux-promise';
        import reduxThunk from 'redux-thunk';

        const store = createStore(
            reducer,
            applyMiddleware(reduxLogger, reduxPromise, reduxThunk)
        );
        export default store;

        //默认不支持异步派发，被async修饰，派发出去的是promise实例pending
        
        /* redux-promise */
        const action = {
            async support(){
                await delay() 
                return {
                    type:TYPES.VOTE_SUP
                }
            }
        }
        /* redux-thunk */
        const action = {
             support(){
                /* reduxThunk语法：
                    + 返回一个函数，reduxThunk内部会重写disptch，第一次不会去匹配type，不会报错，所以第一次不会修改任何状态
                    + 把返回的函数执行，把派发的方法disptch传递给函数
                    + 我们在函数中进行异步操作，手动disptch即可
                    + 总共派发两次
                */
                return async(disptch)=>{
                    await delay()
                    disptch({ type:TYPES.VOTE_SUP})
                }
            }
        }   
    ```

## Redux Toolkit(RTK) 

1. 概念：基于切片机制，把`reducer`和`actionCreator`混合在一起了

2. 目录结构
    |- src
        |-store
            |-features
                taskSlice.js
            index.js

3. `index.js`
    ```jsx
        import { configureStore } from '@reduxjs/toolkit'
        import reduxLogger from 'redux-logger'
        import reduxThunk from 'redux-thunk'
        import taskSliceReducer from './features/taskSlice'

        const store = configureStore({
            /* 1.指定reducer */
            reducer:{
                //按模块管理各个切片
                task:taskSliceReducer
            }，

            /* 2.使用中间件，默认配置reduxThunk，可覆盖替换 */  
            middleware:[reduxLogger,reduxThunk]

        })
        export default store
    ```

4. 切片模板
    ```js
        /* TAXK板块的切片 包含reducer & actionCreator */
        import { createSlice } from '@reduxjs/toolkit'
        const taskSlice = createSlice({
            //设置切片名字
            name:'task',
             //设置切片对应reducer中的初始状态
            initialState:{
                taskList:null
            }，
           //编写不同业务逻辑下，对公共状态更改的方法
            reducers:{
                getAllTaskList(state,action){
                    //state:redux中的公共状态信息（基于immer库管理，无需自己克隆了）
                    //action:派发的行为对象，我们无需考虑行为标识的问题了，传递的其他信息，都是以action.payload传递进来
                    state.taskList = action.payload
                }
                removeTask(state,{payload}){
                    let taskList = state.taskList
                    if(!Array.isArray(taskList)) return
                    state.taskList =taskList.filter(item=>{
                        //删除对应传入进来payload的id项
                        return +item.id != +payload
                    })
                }
            }
        })

        //从切片中获取actionCreator：此处解构的方法和上面reducers中的方法，仅仅是函数名字相同；方法执行会返回需要派发的行为对象，后期我们可以基于disptch进行任务派发即可
        export let {getAllTaskList，removeTask} = taskSlice.actions

        //实现异步派发
        export const getListAsync = ()=>{
            return async disptch =>{
                let list = []
                try{
                    list = await api.query().result    
                }catch(_){}
                disptch(getAllTaskList(list))  
            }
        }
        export default taskSlice.reducer
    ```

5. 使用
    ```jsx
        /* index.jsx */
        import store from './store';
        import { Provider } from 'react-redux';
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <ConfigProvider locale={zhCN}>
                <Provider store={store}>
                        <Task />
                </Provider>
            </ConfigProvider>
        )

        /* Task.jsx 
            + useSelector:获取公共状态
            + useDispatch：进行任务派发
        */
        import { useSelector, useDispatch } from 'react-redux'
        import { getAllTaskListAsync, removeTaskAction, updateTaskAction } from '../store/features/taskSlice'
        const Task = function Task () {
            /* 获取公共状态和派发的方法 */
            let { taskList } = useSelector(state => state.task),
                dispatch = useDispatch()
            useEffect(() => {
                (async () => {
                    if (!taskList) {
                        setTableLoading(true)
                        await dispatch(
                            getAllTaskListAsync()
                        )
                        setTableLoading(false)
                    }
                })()
            }, [])
        }
    ```