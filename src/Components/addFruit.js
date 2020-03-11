import React from "react";

export default class AddFruit extends React.Component {
    state = {
        type: "",
        name: ""
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
        })
        .then(response => response.json())
        .then(newFruit => this.props.onFruitAdded(newFruit));
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <div>
                        <label>Tyyppi:</label>
                        <select
                        name="type" onChange={(event) => this.handleInputChange(event)}>
                            <option value="apple">Omena</option>
                            <option value="pear">Päärynä</option>
                            <option value="orange">Appelsiini</option>
                        </select>
                    </div>
                    <div>
                        <label>Nimi:</label>
                        <input type="text" name="name" onChange={(event) => this.handleInputChange(event)}/>
                    </div>
                </form>
                <button onClick={(event) => this.onSave(event)}>Lisää</button>
            </React.Fragment>
        );
    }
}