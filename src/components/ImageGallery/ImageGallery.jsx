import { Children, Component } from "react";

export class ImageGallery extends Component{

    render() {
        const {children} =this.props
        return (
            <ul className="gallery">
                {children}
</ul>
        )
    }
}