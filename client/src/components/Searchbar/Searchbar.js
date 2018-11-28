import React, { Component } from "react";
import API from "../../utils/API";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './Searchbar.css'
// component to show images on page
import DisplayImages from '../DisplayImages';  

class Login extends Component {



    constructor(props, context) {
        super(props, context);


        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleGihpySearchSubmit = this.handleGihpySearchSubmit.bind(this);

        this.state = {
            gihpySearch: "",
            items: []
        };
    }
    // handles all input change
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
            this.setState({
                [name]: value
            });
        }

    

    
    // CLEAR Search
    clearSearchState() {
        this.setState({
            gihpySearch: ""
        });
    }

    // handle Search Submit
    handleGihpySearchSubmit(event) {
        event.preventDefault();
        const gihpySearchObj = {
            term: this.state.gihpySearch
        }
        console.log(gihpySearchObj);
//         gives asccess to server paths
        API.getGihpy(
                gihpySearchObj
            )
                .then(res => {
                    console.log(res.data.data)
                    this.setState({ items: res.data.data })
                    // data[24].url
                })
                .catch(err => {
                    console.log(err)
                    
                });
        this.clearSearchState()
    }
   
// renders giphys to page and diplays Searchbar
    render() {
        console.log(this.state.items)
        return (
            
            <div>
                {/* Searchbar */}
                <div className="gihpySearch">
                    <form onSubmit={this.handleGihpySearchSubmit}>
                        <div className= "text" >Search For A Giphy</div>
                        <FormGroup controlId="email" bsSize="large">
                            
                            <FormControl
                                autoFocus
                                name="gihpySearch"
                                type="text"
                                placeholder="Enter Search"
                                value={this.state.gihpySearch}
                                onChange={this.handleInputChange} />
                        </FormGroup>



                        <Button className="gihpyButtion"
                            block
                            bsSize="large"

                            type="submit"
                        >
                            Submit Giphy
                    </Button>

                    </form>
                </div>
                <DisplayImages items={this.state.items} />
            </div>
        );
    }
}

export default Login;
