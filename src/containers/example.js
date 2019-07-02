import React from "react";
import { connect } from "react-redux";
import { getGymById } from '../actions'

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getGymById();
  }

  componentDidUpdate() {
   
  }

  render() {
    return (
      <div>
        {this.props.isFetching === true ? (
         <div>hello react</div>
        ) : (
          <div style={{ textAlign: "center", alignItems: "center" }}>
            loading....
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    GymID: state.getIn(["gym", "GymID"]),
    gym: state.getIn(["gym", "gym"]),
    isFetching: state.getIn(["gym", "isFetching"])
  }),
  {
    getGymById
  }
)(Example);
