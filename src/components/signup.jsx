
import PageHeader from "./common/pageHeader";
import Form from "./common/form";
import Joi from "joi-browser";

import http from "../services/httpService";
import { apiUrl } from "../config.json";

import { toast } from "react-toastify";
import { Redirect } from 'react-router-dom';

import userService from "../services/userService";

class Signup extends Form {
    state = {
        data: { email: "", password: "", name: "" },
        errors: {}
    };

    schema = {
        email: Joi.string().required().email().label("Email"),
        password: Joi.string().required().min(6).label("Password"),
        name: Joi.string().required().min(2).label("Name"),
    }

    doSubmit = async () => {
        const { data } = this.state;
        data.biz = false;

        try {
            await http.post(`${apiUrl}/users`, data);
            toast("A New Account was Created");
            this.props.history.replace("/signin");
        } catch (ex) {
            if (ex.response?.status === 400) {
                this.setState({ errors: { email: "Email is taken" } });
            }
        }
    }

    render() {

        if (userService.getCurrentUser()) return <Redirect to="/" />;
        return (


            <div className="container">
                <PageHeader titleText="Signup for up Real App"></PageHeader>
                <div className="row">
                    <div className="col-12">
                        <p>You can open new account for free!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
                            {this.renderInput("email", "Email", "email")}
                            {this.renderInput("password", "Password", "password")}
                            {this.renderInput("name", "Name")}
                            {this.renderButton("Submit")}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Signup;