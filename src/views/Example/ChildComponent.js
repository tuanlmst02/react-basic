import React from "react";

class ChildComponent extends React.Component {

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
                <div>Hello ChildComponent {(this.props.name)}</div>
                <div>Hello ChildComponent {(this.props.age)}</div>
                <div>Hello ChildComponent {(this.props.district)}</div>
            </>
        )
    }
}

export default ChildComponent;

