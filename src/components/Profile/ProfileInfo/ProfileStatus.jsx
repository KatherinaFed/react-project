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
    if (this.state.status.length <= 100) {
      this.setState({ status: e.currentTarget.value });
    } else {

    }
  };

  // метод вызывается когда меняется локальный стейт или пропсы извне
  // в данном случае поменялся локальный стейт и чтобы его обновить,
  // надо обязательно прописать условие для сравнения с предыдущим стейтом
  componentDidUpdate(prevProps) {
    if (this.props.status !== prevProps.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEditMode}>
              {this.props.status || 'Status is empty'}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onChange={this.onStatusChange}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
            <div>{this.state.status.length}/100</div>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
