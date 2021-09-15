import { Component } from "react";
import Joi from 'joi-browser';
import Input from "./input";

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema);
        if (!error) return null;

        const errors = {};
        error.details.forEach(detail => {
            errors[detail.path[0]] = detail.message;
        });
        return errors;
    }

    validateProperty = ({ name, value }) => {
        // const schemaTemp = {
        //     email: Joi.string().required().email().label("Email")
        // }
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} })
        if (errors) return;

        this.doSubmit();
    }

    renderButton(label) {
        return <button className="btn btn-primary" disabled={this.validate()}>{label}</button>
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMesage = this.validateProperty(input);
        if (errorMesage) errors[input.name] = errorMesage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;

        this.setState({ data, errors });
    }

    renderInput(name, label, type = "text") {
        const { data, errors } = this.state;

        return <Input
            type={type}
            value={data[name]}
            name={name}
            label={label}
            error={errors[name]}
            onChange={this.handleChange}

        />
    }
}

export default Form;