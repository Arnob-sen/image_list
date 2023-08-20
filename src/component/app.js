import React from "react";
import SearchInput from './SearchInput';
import axios from "axios";
import ImageList from "./Image_list";
class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={images:[]}
        this.onSearchSubmit=this.onSearchSubmit.bind(this)
    }
   async onSearchSubmit(entry){//creating call back function
        
      const response= await axios.get(`https://pixabay.com/api/?key=38951609-f57c19e63bbf7fc1eb95c3495&q=${entry}&image_type=photo`)
      console.log(response.data.hits);
      this.setState({images:response.data.hits});
    }
        
    render(){
    return(
        <div className="ui container" style={{marginTop:'30px'}}>
            <SearchInput onSearchSubmit={this.onSearchSubmit} />
         <ImageList images={this.state.images}/>
        </div>
    )
    }
}
export default App;