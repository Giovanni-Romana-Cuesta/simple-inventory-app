import React, { useState } from 'react';
import './DeleteMeter.css';
import { deleteMeter } from '../../services/services';
import Loader from '../Loader/Loader';

export interface DeleteMeterProps {
  show: boolean;
  close: () => void;
  meterID: number;
  getMeters: () => Promise<void>;
  notify: () => void;
}

const DeleteMeter = ({ close, show, meterID, getMeters, notify }: DeleteMeterProps) => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onDelete = async () => {
    setIsLoading(true);
    try {
      await deleteMeter(meterID);
      close();
      getMeters();
      notify();
    } catch (error) {
      setError('Something went wrong, try againn');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {show && (
        <div className='overlay'>
          <div className='delete-modal'>
            {isLoading && <Loader />}
            {!isLoading && (
              <>
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
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteMeter;
