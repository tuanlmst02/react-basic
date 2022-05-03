import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
    }

    handleOnChangeFirstName = (event) => {

        this.setState({
            firstName: event.target.value,
        })

    }

    handleOnChangeLastName = (event) => {

        this.setState({
            lastName: event.target.value,
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert("Click me!!!")
    }

    render() {
        return (
            <>
                <form>
                    <label>First name:</label><br />
                    <input type="text" onChange={(event) => this.handleOnChangeFirstName(event)} value={(this.state.firstName)} /><br />
                    <label>Last name:</label><br />
                    <input type="text" onChange={(event) => this.handleOnChangeLastName(event)} value={(this.state.lastName)} /><br /><br /><br />
                    <input type="button" onClick={(event) => this.handleSubmit(event)} value="Submit" />
                </form>

                <ChildComponent name='Child one' age='34' district='HC' />
            </>
        )
    }
}

export default MyComponent;

