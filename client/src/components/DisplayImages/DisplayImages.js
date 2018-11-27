import React, { Component } from 'react';

import "./DisplayImages.css";

class DisplayImages extends Component {

    render() {

        return (
            <div className="giphyPic">

                {this.props.items.length > 0 && this.props.items.map(({ images }) => (
                    <img src={images.preview_gif.url} margin = "5px" height="200px" />
                    ))
                }
            </div>
        );
    }
}

export default DisplayImages;
