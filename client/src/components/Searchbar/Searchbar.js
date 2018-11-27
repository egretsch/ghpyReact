import React, { Component } from "react";
import API from "../../utils/API";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './Searchbar.css'
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
    clearLoginState() {
        this.setState({
            gihpySearch: ""
        });
    }

    // handle Login Submit
    handleGihpySearchSubmit(event) {
        event.preventDefault();
        const gihpySearchObj = {
            term: this.state.gihpySearch
        }
        console.log(gihpySearchObj);
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
        this.clearLoginState()
    }
   

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