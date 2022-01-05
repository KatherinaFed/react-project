import React, { useState, useEffect } from 'react';

// Использование useEffect позволяет синхронизировать сущности,
// находящиеся за пределами дерева React, со свойствами и состоянием.
const ProfileStatusHook = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  // синхронизация происходит, когда меняется status
  // синхронизация с локальным и глобальным state с помощью хука =>
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]); // зависимость от статуса

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {editMode ? (
        <div>
          <input
            data-testid="input"
            autoFocus={true}
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={status}
          />
          <div>{300 - status.length}/300</div>
        </div>
      ) : (
        <div>
          <span data-testid="span" onClick={activateEditMode}>
            {status || 'Status is empty'}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusHook;
