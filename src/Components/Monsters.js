import React,{Component} from 'react';
import CardList from './card-list/Card-list';
import SearchBox from './search-box';
class Monster extends Component{
    constructor(){
        super();
        this.state={
            monsters:[],
            searchField: ''
        }
    }
    componentDidMount(){
        fetch("http://jsonplaceholder.typicode.com/users")
          .then(response => response.json())
          .then(users => this.setState({monsters: users})
          )
          .catch(error => console.log("Error" + error));
    }
    handleChange = (event) => {
        this.setState({
            searchField: event.target.value });
    }
    render(){
        const {monsters,searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
        return(
           <div className="monster">
            <h1>Monster Roldex</h1>
            <SearchBox placeholder='search monster' handleChange={this.handleChange}/>
            <CardList monsters={filteredMonsters}></CardList>
          </div>
        )
    }
}


export default Monster;
