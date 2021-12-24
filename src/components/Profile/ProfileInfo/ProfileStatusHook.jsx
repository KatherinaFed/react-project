import React, { useState } from 'react';

const ProfileStatusHook = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => setEditMode(true);
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {editMode
      ? <div>
          <input
            autoFocus={true}
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={status}
          />
          <div>{300 - (status.length)}/300</div>
        </div>
      : <div>
          <span onDoubleClick={activateEditMode}>{status || 'Status is empty'}</span>
        </div>
      }
    </div>
  );
};

export default ProfileStatusHook;
