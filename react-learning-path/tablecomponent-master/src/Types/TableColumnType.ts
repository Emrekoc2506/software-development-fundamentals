// Generic interface for TableColumn

export interface TableColumn<T> { // başlık sütun oluşturma
  action?: (record: T) => React.ReactNode; 
  title: string; // sütun başlıgı
  dataIndex?: keyof T;
  key: string; //verideki alan
  sorter?: (a: T, b: T) => number;
  render?: (text: any, record?: T) => React.ReactNode;
  width?: number;
}
