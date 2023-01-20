import React from 'react';
import { MeterModel } from '../../models/models';
import './MobileList.css';

export interface MobileListProps {
  items: MeterModel[] | undefined;
}

const MobileList = ({ items }: MobileListProps) => {
  return (
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
              <button className='edit-btn action-btn'>Edit</button>
              <button className='delete-btn action-btn'>Delete</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MobileList;
