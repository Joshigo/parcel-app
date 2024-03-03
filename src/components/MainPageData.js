import { Component } from 'react';
import './MainPageStyles.css'
import MainP1 from '../assets/20.jpg'
import MainP2 from '../assets/6.jpg'
import MainP3 from '../assets/7.jpg'
import MainP4 from '../assets/6.jpg'


class MainPageData extends Component {
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>
                        {this.props.text}
                    </p>
                </div>
                <div className="image">
                    <img alt='img' src={this.props.img1}/>
                    <img alt='img' src={this.props.img2}/>
                </div>
            </div>
        )
    }
}

export default MainPageData