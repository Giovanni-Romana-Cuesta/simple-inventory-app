import React from 'react';
import { MeterModel } from '../../models/models';
import './DesktopList.css';

export interface DesktopListProps {
  items: MeterModel[] | undefined;
}

const DesktopList = ({ items }: DesktopListProps) => {
  return (
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
                  <button className='edit-btn action-btn'>Edit</button>
                  <button className='delete-btn action-btn'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DesktopList;
