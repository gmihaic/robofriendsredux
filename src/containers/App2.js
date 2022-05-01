import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

import {connect} from 'react-redux';
import { setSearchField, requestRobots } from './../actions.js';
//import { requestRobots } from '../reducers';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField, //get from the state provided by the reducer
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.is_pending,
        error: state.requestRobots.error
    }
}

//the dispatch triggers the action
//dispatch is used to send actions
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
};

class App2 extends Component {

    constructor() {
        super();           
    }

    componentDidMount() {             
        this.props.onRequestRobots();      
    }        

    render() {
        
        const {searchField, onSearchChange, robots, isPending} = this.props;

        const robotsFiltered = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        
        if (isPending) {
            return <h1>Loading...</h1>
        };

        return (
            <>                
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <br/>    
                    <Scroll>
                        <CardList robots={robotsFiltered} />      
                    </Scroll>               
                                 
                </div>
            </>
        );
    }
}

//what state should app2 listen to
//what action should app2 listen to
export default connect(mapStateToProps, mapDispatchToProps)(App2);