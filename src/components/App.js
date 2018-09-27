import React, {
    Component
} from "react";
import '../styles/App.css';
import FetchData from "./FetchData";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            biasSelected: 'numeracy',
            optionSelected: 'Numeracy'
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSelect(event) {
        const biasDict = {
            Numeracy: 'numeracy',
            Systems: 'system',
            Physical: 'pw',
            Biological: 'bio',
            HumanNature: 'humannature',
            MicroeconomicsStrategy: 'mes',
            MilitaryWar: 'military'
        }
        console.log(event.target.value);
        this.setState({
            biasSelected: biasDict[event.target.value],
            optionSelected: event.target.value
        });
    }

    handleSubmit() {
        console.log(this.state);
    }
    
    render() {
        return (
            <div>
                <span className="heading">
                <h1>Mental Models</h1></span>
                <div className='container'>
                <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Models</label>
                </div>
                <select value={this.state.optionSelected}
                        onChange={this.handleSelect} class="custom-select" id="inputGroupSelect01">
                    <option>Numeracy</option>
                    <option>Systems</option>
                    <option>Physical</option>
                    <option>Biological</option>
                    <option>HumanNature</option>
                    <option>MicroeconomicsStrategy</option>
                    <option>MilitaryWar</option>
                </select>
                </div>
                <FetchData selected={this.state.biasSelected}/>
            </div>
        );
    }
}


export default App;