import React, { Component, ReactNode } from 'react'

interface Props {
    title:string,
}
interface State {
    color:'red'|'green',
}

class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
    
        this.state = {
            color:'red'
        }
    }
    render(): ReactNode {
        const { color } = this.state;
        const { title } = this.props;
        return (
            <div>
                <span style={{color:color}}>{title}</span>
                <br></br>
                <button onClick={this.changeColor}>
                    change color
                </button>
            </div>
        )
    }
    // 改变颜色
    changeColor = ():void=>{
        const { color } = this.state;
        if(color === 'red'){
            this.setState({
                color:'green',
            })
        }else{
            this.setState({
                color:'red',
            })
        }
    }
}

export default Home
