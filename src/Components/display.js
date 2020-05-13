import React from 'react';


class Sample1 extends React.Component{
    render(){
        return <div className='sample-one'>
            {this.props.props.map((val) =>{
                return <input type='text'   onChange={this.props.handleChange}></input>
    })}
            </div>
    }
}

class Sample2 extends React.Component {
    render(){
        return <div className='sample-two'>
            {this.props.props.map((val) => {
                return <input type='text'  onChange={this.props.handleChange}></input>
             })}
        </div>
    }
}

class Sample3 extends React.Component {
    render(){
        return <div className='sample-three'>
            {this.props.props.map((val) => {
                return <input type='text'  onChange={this.props.handleChange}></input>
             })}
        </div>
    }
}

class Display extends React.Component {
    constructor(){
        super();
        this.state = {
            val:[1,2,3,4]
        }
    }
 
    handleChange(event){
        console.log(event.target.value)
    }
    

    render(){
        return <div>
            <Sample1 props={this.state.val} handleChange={this.handleChange}/>
            <Sample2 props={this.state.val} handleChange={this.handleChange}/>\
            <Sample3 props={this.state.val} handleChange={this.handleChange}/>
        </div>
    }
}

export  default Display;