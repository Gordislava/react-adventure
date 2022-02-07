import React, { Component } from "react";

import "./Filter.css";

export default class Filter extends Component {

    render() {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-info">all</button>
                <button type="button" className="btn btn-outline-secondary">active</button>
                <button type="button" className="btn btn-outline-secondary">done</button>
            </div>
        )
    }
}
