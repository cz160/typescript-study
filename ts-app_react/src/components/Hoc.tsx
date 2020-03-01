/**
 * 高阶组件
 */
import React,{ Component,Fragment,ComponentType } from 'react';

class App extends Component{
    render(){
        return (
            <div>
                <h1>reatc</h1>
                <p>react.js是一个构建用户洁面的库</p>
            </div>
        )
    }
}

export const WithCopyRight = (WrapCompoent:ComponentType)=>{
    return class extends Component{
        render(){
            return (
                <Fragment>
                    <WrapCompoent/>
                    <div>@copyright版权所有：陈昭</div>
                </Fragment>
            )
        }
    }
}
const copyrightApp = WithCopyRight(App);

export default copyrightApp;
