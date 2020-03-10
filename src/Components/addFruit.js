import React from 'react';

export default class AddFruit extends React.Component {
    state = {
        type: "",
        name: "",
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const inputName = target.name;

        this.setState({[inputName]: value});
    }

    onSave(event) {
    fetch('/api/fruits', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
    });
}

    render() {
        return (
            <React.Fragment>
            <form>
            <div>
                <label>Tyyppi:</label>
                <input type="text" onChange={(event) => this.handleInputChange(event)}/>
            </div>
            <div>
                <label>Nimi</label>
                <input type="text" onChange={(event) => this.handleInputChange(event)}/>
            </div>
            </form>
            <button onClick={(event) => this.onSave(event)}>Lisää</button>
            </React.Fragment>
        );
    }
}