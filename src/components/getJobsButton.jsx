import React from 'react';
import { Button } from '../styles';
import 'bootstrap-css-only/css/bootstrap.css'


class GetJobsButton extends React.Component {

  clickHandler = () => {
    window.location.href = "/jobs";
  };


  render() {
    return (
      <div>
        <Button primary={this.props.background} onClick={() => {
          this.clickHandler()
        }}>Let's do it!</Button>
      </div>
    );
  }

}

export default GetJobsButton;