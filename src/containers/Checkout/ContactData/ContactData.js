import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    username: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Shreyas Patil",
        address: {
          street: "6th street",
          zipCode: "98040",
          country: "USA"
        },
        email: "abc@test.com"
      },
      delivery: "fast"
    };

    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Name here"
        />
        <input
          className={classes.Input}
          type="email"
          name="name"
          placeholder="Name here"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Street here"
        />
        <input
          className={classes.Input}
          type="text"
          name="zipcode"
          placeholder="zipcode here"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h1>Enter your details: </h1>
        {form}
      </div>
    );
  }
}

export default ContactData;
