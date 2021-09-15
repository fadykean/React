import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class About extends Component {


    state = {};
    render() {
        return (
            <div className="container">
                <PageHeader titleText="About Real App"></PageHeader>
                <div className="row">
                    <div className="col-12">
                        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro nemo nesciunt doloribus voluptas in laboriosam asperiores distinctio perferendis maxime optio, beatae illum. Animi, atque at tempora totam voluptatum architecto hic!</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;