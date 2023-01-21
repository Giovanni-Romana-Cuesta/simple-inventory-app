import React, { useState } from 'react';
import { MeterModel } from '../../models/models';
import './DesktopList.css';
import EditMeter from '../EditModel/EditMeter';

export interface DesktopListProps {
  items: MeterModel[] | undefined;
}

const DesktopList = ({ items }: DesktopListProps) => {
  const [selectedItem, setSelectedItem] = useState<MeterModel>();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const openEdit = (item: MeterModel) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  return (
    <>
      <div className='table-container'>
        {items && (
          <table className='meters-table'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Serial</th>
                <th>Condition</th>
                <th>Location</th>
                <th>Purchase Date</th>
                <th>Creation Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.serial}</td>
                  <td>{item.condition}</td>
                  <td>{item.location}</td>
                  <td>{item.purchase}</td>
                  <td>{item.created_at}</td>
                  <td>
                    <button className='edit-btn action-btn' onClick={() => openEdit(item)}>
                      Edit
                    </button>
                    <button className='delete-btn action-btn'>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {selectedItem && (
        <EditMeter show={openModal} close={() => setOpenModal(false)} meterItem={selectedItem} />
      )}
    </>
  );
};

export default DesktopList;
