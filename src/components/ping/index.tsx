import * as React from "react";
import { connect } from 'react-redux'
import { Dispatch  } from 'redux'
import { IApplicationState } from 'src/store'
import { ping } from "src/store/ping/actions";
import { PingIt } from 'src/store/ping/types';
// Props passed from mapStateToProps
interface IStateProps {
    ping: boolean
}

interface IDispatchProps {
    pingIt(): PingIt;
}

const mapStateToProps = (state: IApplicationState) => ({
    ping: state.ping.ping,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    pingIt: () => dispatch(ping())
})

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type Props = IStateProps & IDispatchProps

class Ping extends React.Component<Props > {
    public render() {
        return <div onClick={this.props.pingIt}>PING!: {this.props.ping.toString()}</div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ping);