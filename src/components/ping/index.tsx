import * as React from "react";
import { connect } from 'react-redux'
import { Dispatch  } from 'redux'
import { IApplicationState } from 'src/store'
import { PingActions } from "src/store/ping/actions";
import { IPingState } from "src/store/ping/types";

interface IStateProps {
    ping: IPingState["ping"];
    text: IPingState["text"];
}

interface IDispatchProps {
    togglePing: typeof PingActions.togglePing;
    textPing: typeof PingActions.textPing;
}

const mapStateToProps = (state: IApplicationState): IStateProps => ({
    ping: state.ping.ping,
    text: state.ping.text,
})

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
    textPing: (text: string) => dispatch(PingActions.textPing(text)),
    togglePing: () => dispatch(PingActions.togglePing()),
})

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type Props = IStateProps & IDispatchProps

class Ping extends React.Component<Props > {
    constructor(props: Props) {
        super(props)
        this.textPing = this.textPing.bind(this);
    }
    public render() {
        return (
            <React.Fragment>
                <div onClick={this.props.togglePing}>PING!: {this.props.ping.toString()}</div>
                <input onChange={this.textPing} />
                <div>{this.props.text}</div>
            </React.Fragment>
        );
    };

    private textPing(e: any) {
        this.props.textPing(e.target.value);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ping);