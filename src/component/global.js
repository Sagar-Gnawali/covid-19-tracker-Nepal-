import React,{Component} from 'react';
import Nepalstatus from './nepalstatus';
import './global.css';
class Global extends Component{
    state={
        result:{
            "Total Confirmed":0,
            "Total Deaths":0,
            "Total Recovered":0,
            "Active Cases":0,
            "In Isolation":0,
            "In Quarantined":0
        }
    }
    async componentDidMount()
    {
        let data;
        const proxy='https://cors-anywere.herokuapp.com/';
        await fetch(`${proxy}https://nepalcorona.info/api/v1/data/nepal`)
        .then(res=>res.json())
        .then(info=>data=info)
        .catch(error=>document.write("OOPS!! Something went wrong"));
        this.setState({
            result:{
                "Total Confirmed":(data||{}).tested_negative,
                "Total Deaths":(data||{}).deaths,
                "Total Recovered":(data||{}).recovered,
                "In Isolation":(data||{}).in_isolation,
                "In Quarantined":(data||{}).quarantined,
                "Active Cases":(data||{}).tested_negative-(data.recovered+data.deaths)
    
            }

        })     
    }
    render()
    {
        var show = Object.keys(this.state.result).map((key,index)=>{
            return (
                <Nepalstatus key={index} about={key} total={this.state.result[key]}/>
            );
        })
        return(
            <div className="Global">
                <h1 className="heading">Covid 19 Tracker Daily Summary</h1>
                <p className="description"> Details about covid-19 Nepal today</p>
                <div className="nepal-status">
                    {show}
                </div>
            </div>
        );
    }
}
export default Global;
