// FetchDataResponse type
export interface FetchDataResponse<T> { //API den veri çekirdeginde gelen yanıtı temsil eder
    data: T[]; //
    isSuccess: boolean;
    message: string;
    returnCode: number;
    totalRecords: number; 
}
// API : bir yazılıdan diger yazılımlarla iletişim kurmaya yarıyor