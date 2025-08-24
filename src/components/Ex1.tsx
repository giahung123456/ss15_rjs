import React, { Component } from 'react'
interface StateType{
    email:string
}
export default class Ex1 extends Component<object,StateType> {
    constructor(props:object){
        super(props)
        this.state={
            email:""
        }
    }
    submitForm=(event:React.FormEvent)=>{
       
       
         event.preventDefault()
         console.log(this.state);
         
    }
     handleInput=(event:React.ChangeEvent<HTMLInputElement>)=>{
        // console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value } as Pick<StateType, keyof StateType>)
        
    }
  render() {
    return (
      <>
        <form action="" onSubmit={ this.submitForm }>
            
            <label htmlFor="">email </label>
            <input type="text" name='email' value={this.state.email} onChange={this.handleInput}/>
            
            <br />
            <br />
            
            <button type='submit'>submit</button>
        </form>
      </>
    )
  }
}
