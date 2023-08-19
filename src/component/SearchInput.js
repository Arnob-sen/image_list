import React from "react";
class SearchInput extends React.Component{
    onChangeinput(event)
    {
        console.log(event.target.value)
    }
    render()
    {
        return(
            <div className="ui segment">
                
                <form className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                      <input type="text" placeholder="search..."
                      onChange={this.onChangeinput}// on submit or on click,must use onChange or onSubmit or onClick.otherwise function will not call
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