import React from 'react';

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false, status: this.props.status };
  }

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    if (this.state.status.length <= 300) {
      this.setState({ status: e.currentTarget.value });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEditMode}>{this.props.status || 'Status is empty'}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus="true"
              onChange={this.onStatusChange}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
            <div>{this.state.status.length}/300</div>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
