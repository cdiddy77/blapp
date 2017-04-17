import * as React from 'react';
import '../App.css';
import * as jsutil from '../../../shared/src/util/jsutil';

interface TabbedAreaProps {
    activeIndex?: number;
    children?: any[];
}
interface TabbedAreaState {
    activeIndex: number;
}
export class TabbedArea extends React.Component<TabbedAreaProps, TabbedAreaState>{
    constructor(props: any) {
        super(props);
        this.state = {
            activeIndex: this.props.activeIndex || 0
        };
    }

    render() {
        let children: any[] = this.props.children;
        let tabNodes = children.map((v, i, arr) => {
            let className = i == this.state.activeIndex ? 'active' : '';
            return (
                <li key={i} onClick={this._handleClick.bind(this, i)}>
                    <a className={className} href="#">{v.props.display}</a>
                </li>
            );
        });


        let contentNodes = children.map((v, i, arr) => {
            if (this.state.activeIndex === i) {
                return (
                    <div key={i} className="TabPane">
                        {v.props.children}
                    </div>
                );
            }
        });

        return (
            <div className="TabbedArea">
                <ul className="Tab">
                    {tabNodes}
                </ul>

                <section>
                    {contentNodes}
                </section>
            </div>
        );

    }

    _handleClick(index: number): void {
        this.setState({ activeIndex: index });
    }
}

export class TabPane extends React.Component<any, any>{
    render() {
        var active = this.props.active || false;
        if (active) {
            return this.props.children;
        } else {
            return null;
        }
    }
};