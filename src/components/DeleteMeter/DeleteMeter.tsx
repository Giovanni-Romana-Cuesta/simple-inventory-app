import React, { useState } from 'react';
import './DeleteMeter.css';
import { deleteMeter } from '../../services/services';

export interface DeleteMeterProps {
  show: boolean;
  close: () => void;
  meterID: number;
  getMeters: () => Promise<void>;
}

const DeleteMeter = ({ close, show, meterID, getMeters }: DeleteMeterProps) => {
  const [error, setError] = useState<string | undefined>(undefined);

  const onDelete = async () => {
    try {
      await deleteMeter(meterID);
      close();
      getMeters();
    } catch (error) {
      setError('Something went wrong, try againn');
    }
  };

  return (
    <>
      {show && (
        <div className='overlay'>
          <div className='delete-modal'>
            <div className='close'>
              <i className='fas fa-times' onClick={close}></i>
            </div>
            <h1>Confirm Delete</h1>
            {error && <span className='error'>{error}</span>}
            <div className='form-buttons'>
              <button className='save-button' onClick={onDelete}>
                Confirm
              </button>
              <button className='delete-button' onClick={close}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteMeter;
