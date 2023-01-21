import React, { useState } from 'react';
import { MeterModel } from '../../models/models';
import './MobileList.css';
import EditMeter from '../EditModel/EditMeter';

export interface MobileListProps {
  items: MeterModel[] | undefined;
}

const MobileList = ({ items }: MobileListProps) => {
  const [selectedItem, setSelectedItem] = useState<MeterModel>();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const openEdit = (item: MeterModel) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  return (
    <>
      <div className='cards-container'>
        {items &&
          items.map((item) => (
            <div key={item.id} className='card'>
              <p>
                <strong>Id: </strong>
                {item.id}
              </p>
              <p>
                <strong>Serial: </strong>
                {item.serial}
              </p>
              <p>
                <strong>Condition: </strong>
                {item.condition}
              </p>
              <p>
                <strong>Location: </strong>
                {item.location}
              </p>
              <div className='actions-container'>
                <button className='edit-btn action-btn' onClick={() => openEdit(item)}>
                  Edit
                </button>
                <button className='delete-btn action-btn'>Delete</button>
              </div>
            </div>
          ))}
      </div>
      {selectedItem && (
        <EditMeter show={openModal} close={() => setOpenModal(false)} meterItem={selectedItem} />
      )}
    </>
  );
};

export default MobileList;
