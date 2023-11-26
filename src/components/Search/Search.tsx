import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { SearchProps } from '../../types/types';

export const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {

  return (
    <div>
      <div className="p-inputgroup flex-1">
        <InputText
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Поиск по сообщению" />
        <Button icon="pi pi-search" className="p-button" />
      </div>
    </div>
  )
}
