export const fetchData = async (url: string, pageNum: number, pageSize: number, orderBy: string, orderType: string) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pagination: {
                    pageNum: pageNum,
                    pageSize: pageSize,
                    orderBy: orderBy,
                    orderType: orderType,
                },
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const responseData = await response.json();
        return {
            data: responseData.data,
            isSuccess: true,
            message: 'OK',
            returnCode: 200,
            totalRecords: responseData.totalRecords
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            data: [],
            isSuccess: false,
            message: 'Error',
            returnCode: -1,
            totalRecords: 0
        };
    }
};
