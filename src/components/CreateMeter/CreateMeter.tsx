import React, { useState } from 'react';
import './CreateMeter.css';
import {
  ConditionOption,
  ConnectionTypeOption,
  MeterModel,
  OwnerOption,
  StorageSystemOption,
} from '../../models/models';
import { createMeter } from '../../services/services';
import Loader from '../Loader/Loader';

export interface CreateMeterProps {
  show: boolean;
  close: () => void;
  getMeters: () => Promise<void>;
  notify: () => void;
}

const CreateMeter = ({ show, close, getMeters, notify }: CreateMeterProps) => {
  const [meter, setMeter] = useState<Partial<MeterModel>>({});
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const numericFields = ['i_n', 'seals', 'i_max'];
    setMeter({
      ...meter,
      [event.target.name]: numericFields.includes(event.target.name)
        ? +event.target.value
        : event.target.value,
    });
  };

  const onSave = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setError(undefined);
    setIsLoading(true);
    try {
      await createMeter(meter);
      close();
      getMeters();
      notify();
    } catch (error) {
      setError('Something went wrong, try againn');
    } finally {
      setIsLoading(false);
    }
  };

  const onClose = () => {
    close();
    setMeter({});
    setError(undefined);
  };
  return (
    <>
      {show && (
        <div className='overlay'>
          <div className='content' data-loading={isLoading}>
            {isLoading && <Loader />}
            {!isLoading && (
              <>
                <div className='close'>
                  <i className='fas fa-times' onClick={onClose}></i>
                </div>
                <h2>Create Meter</h2>
                {error && <span className='error'>{error}</span>}
                <form className='form'>
                  <label>Serial</label>
                  <input type='text' name='serial' value={meter.serial} onChange={handleChange} />
                  <label>Connection Type</label>
                  <select
                    name='connection_type'
                    value={meter.connection_type}
                    onChange={handleChange}
                  >
                    <option value='' disabled selected></option>
                    <option value={ConnectionTypeOption.DIRECTA}>
                      {ConnectionTypeOption.DIRECTA}
                    </option>
                    <option value={ConnectionTypeOption.INDIRECTA}>
                      {ConnectionTypeOption.INDIRECTA}
                    </option>
                    <option value={ConnectionTypeOption.SEMI_DIRECTA}>
                      {ConnectionTypeOption.SEMI_DIRECTA}
                    </option>
                  </select>
                  <label>Storage System</label>
                  <select
                    name='storage_system'
                    value={meter.storage_system}
                    onChange={handleChange}
                  >
                    <option value='' disabled selected></option>
                    <option value={StorageSystemOption.EXTERNO}>
                      {StorageSystemOption.EXTERNO}
                    </option>
                    <option value={StorageSystemOption.INTERNO}>
                      {StorageSystemOption.INTERNO}
                    </option>
                  </select>
                  <label>Condition</label>
                  <select name='condition' value={meter.condition} onChange={handleChange}>
                    <option value='' disabled selected></option>
                    <option value={ConditionOption.NUEVO}>{ConditionOption.NUEVO}</option>
                    <option value={ConditionOption.USADO}>{ConditionOption.USADO}</option>
                  </select>
                  <label>Owner</label>
                  <select name='owner' value={meter.owner} onChange={handleChange}>
                    <option value='' disabled selected></option>
                    <option value={OwnerOption.OR}>{OwnerOption.OR}</option>
                    <option value={OwnerOption.RF}>{OwnerOption.RF}</option>
                  </select>
                  <label>Location</label>
                  <input
                    type='text'
                    name='location'
                    value={meter.location}
                    onChange={handleChange}
                  />
                  <label>Manufacturer</label>
                  <input
                    type='text'
                    name='manufacturer'
                    value={meter.manufacturer}
                    onChange={handleChange}
                  />
                  <label>i_max</label>
                  <input type='number' name='i_max' value={meter.i_max} onChange={handleChange} />
                  <label>i_b</label>
                  <input type='number' name='i_b' value={meter.i_b} onChange={handleChange} />
                  <label>i_n</label>
                  <input type='number' name='i_n' value={meter.i_n} onChange={handleChange} />
                  <label>Seals</label>
                  <input type='number' name='seals' value={meter.seals} onChange={handleChange} />
                  <div className='form-buttons'>
                    <button className='save-button' onClick={onSave}>
                      Save
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CreateMeter;
