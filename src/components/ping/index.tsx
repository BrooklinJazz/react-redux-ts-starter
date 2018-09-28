import * as React from "react";
import { connect } from 'react-redux'
// import { Dispatch  } from 'redux'
import { IApplicationState } from 'src/store'
// import { ping } from "src/store/ping/actions";
// import { PingActionTypes } from 'src/store/ping/types';
// Props passed from mapStateToProps
interface IStateProps {
    ping: boolean
}

// Props passed from mapDispatchToProps
// interface IDispatchProps {
//     pingIt: PingActionTypes.PING
// }

const mapStateToProps = (state: IApplicationState) => ({
    ping: state.ping.ping,
})

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//     pingIt: () => dispatch(ping())
// })

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type Props = IStateProps

// We separate OtherProps instead in combining them in the union type above for us to
// use the children prop pattern without typing issues.
class Ping extends React.Component<Props > {
    public render() {
        return <div>PING!: {this.props.ping.toString()}</div>
    }
}

export default connect(mapStateToProps, null)(Ping);