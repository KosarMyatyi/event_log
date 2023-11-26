import { Avatar } from 'primereact/avatar';
import React, { useState } from 'react'
import { EventLogProps } from '../../types/types';
import { Tag } from 'primereact/tag';

const Card = (data: EventLogProps) => {
  const [isRead, setIsRead] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ') {
      setIsRead(true);
    }
  }

  const getSeverity = (data: EventLogProps) => {
    switch (data.importance) {
      case 'Низкая':
        return 'success';

      case 'Средняя':
        return 'warning';

      case 'Критическая':
        return 'danger';

      case 'Высокая':
        return 'danger';

      default:
        return null;
    }
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`col-12 sm:col-6 lg:col-12 xl:col-4 p-2 ${isRead ? '' : 'font-bold text-900'}`}>

      <div style={{ height: "100%", cursor: "pointer" }} className="p-4 border-1 surface-border surface-card border-round">
        <div className='flex gap-3'>
          <div style={{ flexGrow: 1 }} className='flex flex-column gap-2'>
            <div className="date">Дата: {data.date}</div>
            <div className={`importance-${data.importance}`}>
              <div className='flex gap-2 align-items-center'>
                Важность:
                <Tag value={data.importance} severity={getSeverity(data)}></Tag>
              </div>
            </div>
            <div className="overflow-wrap-break-word word-wrap-break-word gap-2">
              Оборудование: {data.equipment}
            </div>
            <div className="overflow-wrap-break-word word-wrap-break-word">
              Сообщение: {data.message}
            </div>
          </div>
          <div className='flex flex-column align-items-center gap-2'>
            <Avatar icon="pi pi-user" size="large"
              style={data.sex === "man" ? { backgroundColor: '#2196F3', color: '#ffffff' }
                : { backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
            <div className="responsible" style={{ whiteSpace: 'nowrap' }}>
              {data.responsible}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card