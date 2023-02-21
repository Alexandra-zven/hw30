const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);

class Car extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){ return (
        <div className={'box'}>
            <div>{this.props.children}</div>
        </div>)
    }
}


class CarsList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {number: 134234, model: 'Carnival', manufacturer: 'Kia', year: 2019},
                {number: 254232, model: 'Corolla', manufacturer: 'Toyota', year: 2022},
                {number: 876543, model: 'Aveo', manufacturer: 'Chevrolet', year: 2008},
                {number: 445722, model: 'C90', manufacturer: 'Volvo', year: 2020},
            ]
    }}

    render(){
        return (
            <div className={'box'}>
                {this.state.cars.map(e => (
                    <Car><h3>{e.model}</h3>
                        <h4>{e.manufacturer}</h4>
                        <h5>{e.year}</h5>
                        {e.number}</Car>))}
            </div>
        )
    }
}

root.render(<CarsList/>);
