import React, {
    Component
} from "react";
import '../styles/App.css';
import App from './App';

class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            biases: []
        }
    }


    async componentDidMount() {
        const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
        const API_URL = `https://shrouded-atoll-30731.herokuapp.com/api/v1/mm/numeracy`;
        const response = await fetch(PROXY_URL + API_URL);
        const data = await response.json();
        console.log(data);
        this.setState({
            biases: data,
            loading: false
        })

    }

    async componentWillReceiveProps(nextProps) {
        if (nextProps.selected !== this.props.selected) {
            console.log("first " + this.props.selected);
            let selectedURL = nextProps.selected;
            const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
            const API_URL = `https://shrouded-atoll-30731.herokuapp.com/api/v1/mm/${selectedURL}`;
            const response = await fetch(PROXY_URL + API_URL);
            const data = await response.json();
            console.log(data);
            this.setState({
                biases: data,
                loading: false
            })

        }
    }
    
    render() {
        return (
            <div>
                <h1></h1>
                {this.state.loading ? 
                    '...loading' :

                    // (<div>
                    //     {this.state.people.map( (person) => 
                    //         <div key={person.login.uuid}>
                    //           <div>{person.name.title}</div>
                    //           <div>{person.name.first}</div>
                    //           <img src={person.picture.large}/>
                    //         </div>
                    //     )}
                    // </div>
                    // )
                    (<div>
                           {this.state.biases.map( (bias) => 
                            <div key={bias._id}>
                               <div>{bias.name}</div>
                            </div>
                    )}
                    </div>
                    )
                }
            </div>
        );
    }
}


export default FetchData;