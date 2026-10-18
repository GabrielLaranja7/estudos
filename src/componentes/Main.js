import React, {component} from 'react';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            novaTarefa: '',
        };
    }


    render() {
        return <div ClassName="main">
            <h1>Hello world</h1>
            <h1>Lista de Tarefas</h1> 
            <form action="#">
            <input type='text' />
            <button type="submit">enviar</button>
            </form>
        </div>
    }
}