// Type for the data

export interface TableData { // satır verisi
  id: number;
  key: string;
  name: string;
  platform: string;
  version: string;
  upgradeNum: string;
  creator: string;
  createdAt: string;
  status?: string; // Optional if there is no 'status' field in all data objects
  isUpgraded?: boolean; // Optional if there is no 'isUpgraded' field in all data objects
}
// tablecolumda keylere karşılık gelen veri kısmı burdadır