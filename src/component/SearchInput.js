import React from "react";
class SearchInput extends React.Component{
   constructor(props)
   {
    super(props);
    this.state={entry:''};
    this.onFormSubmit=this.onFormSubmit.bind(this)//new function to  access state event from onformsubmit
   }
   onFormSubmit(event)
   {
    event.preventDefault();// to stop refreshing page by click enter
    console.log(this.state.entry);
   }
    render()
    {
        return(
            <div className="ui segment">
                
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                      <input type="text" placeholder="search..."//this component are uncontrolled component
                      onChange={(event)=>this.setState({entry:event.target.value})}// on submit or on click,must use onChange or onSubmit or onClick.otherwise function will not call
                      value={this.state.entry}//override the value of entry with the user input
                      />
                      <i className="search icon"></i>
                      </div>
                      </div>
                    
                    </form>
                
                </div>
        )
    }
}
export default SearchInput