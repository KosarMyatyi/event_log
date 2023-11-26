import React, { useState, useEffect } from 'react';
import { EventLogService } from './Service/ProductService';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Search } from '../Search/Search';
import Card from '../Card/Card';
import { Paginator } from 'primereact/paginator';
import { EventLogProps, PageChangeParams } from '../../types/types';

export const EventLog = () => {
  const [eventLog, setEventLog] = useState<EventLogProps[]>([]);
  const [layout, setLayout] = useState<"grid" | "list" | (string & Record<string, unknown>)>('grid');
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(9);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [_, setDisplayedLog] = useState<EventLogProps[]>([])

  const filteredData = EventLogService.getEventLogData().filter(item =>
    item.message.includes(searchTerm)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      generateCard();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getRandomCard = (cards: EventLogProps[]) => {
    return cards[Math.floor(Math.random() * cards.length)];
  }

  const onPageChange = (event: PageChangeParams) => {
    setFirst(event.first);
    setRows(event.rows);
    setDisplayedLog(getPageData(event));
  }

  const getPageData = ({ first, rows }: PageChangeParams) => {
    return eventLog.slice(first, first + rows);
  }

  const generateCard = () => {
    const randomCard = getRandomCard(EventLogService.getEventLogData());
    setEventLog(prev => [...prev, randomCard]);
  }

  const totalRecords = eventLog.length;

  const itemTemplate = (data: EventLogProps, layout: string,) => {

    const isMatch = filteredData.some(f => f.id === data.id)

    if (!isMatch) {
      return null;
    }

    if (!data) {
      return;
    }

    // if (layout === 'list') return listItem(data);
    else if (layout === 'grid') return Card(data);
  };

  const header = () => {
    return (
      <div className="flex justify-content-between">
        <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    );
  };

  return (
    <div className="card height-100vh flex flex-column" style={{ height: "100vh" }}>
      <DataView
        value={eventLog.slice(first, first + rows)}
        itemTemplate={itemTemplate}
        layout={layout}
        header={header()} />
      <Paginator
        totalRecords={totalRecords}
        style={{ marginTop: "auto", marginBottom: "50px" }}
        first={first}
        rows={rows}
        rowsPerPageOptions={[9]}
        onPageChange={onPageChange} />
    </div>
  )
}
