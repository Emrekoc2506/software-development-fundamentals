// Generic interface for ActionMenu

export interface Action<T> { //arayüzün aktifmi degilmi oldugunu kontrol eder
    label: string;
    icon: React.ReactNode;
    style?: React.CSSProperties;
    onClick: (record: T) => void; // fonksiyonu tipi tanımlar t tipinde parametre alır
}
