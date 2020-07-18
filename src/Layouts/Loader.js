import React, { Component } from 'react'
import estilos from './Loader.module.css'
import FlareComponent from 'flare-react'
import loader_animation from '../assets/animations/loader.flr'

class Headers extends Component {
    render() {
        return (
            <div className={estilos.loaderBox}>
                <div className={estilos.loaderBoxContent}>
                    <FlareComponent width={200} height={200} animationName="Untitled" file={loader_animation} />
                </div>
            </div>
        )
    }
}

export default Headers