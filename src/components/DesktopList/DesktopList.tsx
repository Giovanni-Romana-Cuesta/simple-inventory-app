import React, { useState } from 'react';
import { MeterModel } from '../../models/models';
import './DesktopList.css';
import EditMeter from '../EditModel/EditMeter';
import DeleteMeter from '../DeleteMeter/DeleteMeter';

export interface DesktopListProps {
  items: MeterModel[] | undefined;
  getMeters: () => Promise<void>;
  notify: () => void;
}

const DesktopList = ({ items, getMeters, notify }: DesktopListProps) => {
  const [selectedItem, setSelectedItem] = useState<MeterModel>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [idToDelete, setIdToDelete] = useState<number>();

  const openEdit = (item: MeterModel) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const openDelete = (id: number) => {
    setIdToDelete(id);
    setOpenDeleteModal(true);
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
                    <button className='delete-btn action-btn' onClick={() => openDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {selectedItem && (
        <EditMeter
          show={openModal}
          close={() => setOpenModal(false)}
          meterItem={selectedItem}
          getMeters={getMeters}
          notify={notify}
        />
      )}
      {idToDelete && (
        <DeleteMeter
          meterID={idToDelete}
          show={openDeleteModal}
          close={() => setOpenDeleteModal(false)}
          getMeters={getMeters}
          notify={notify}
        />
      )}
    </>
  );
};

export default DesktopList;
