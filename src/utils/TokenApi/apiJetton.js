const SIMPLE_COIN_ADDRESS = 'EQB9QBqniFI0jOmw3PU6v1v4LU3Sivm9yPXDDB9Qf7cXTDft';

export async function fetchJettonData() {
    try {
        const tonApiResponse = await fetch(`https://tonapi.io/v2/jettons/${SIMPLE_COIN_ADDRESS}`);
        const tonApiData = await tonApiResponse.json();

        const geckoApiResponse = await fetch(`https://api.geckoterminal.com/api/v2/networks/ton/tokens/${SIMPLE_COIN_ADDRESS}`);
        const geckoApiData = await geckoApiResponse.json();

        return {
            price: parseFloat(geckoApiData.data.attributes.price_usd),
            holders: tonApiData.holders_count,
            mcap: parseFloat(geckoApiData.data.attributes.fdv_usd),
            volume: parseFloat(geckoApiData.data.attributes.volume_usd.h24),
        };
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        return {
            price: null,
            holders: null,
            mcap: null,
            volume: null,
        };
    }
}

export function formatValue(value) {
    if (value === null || value === undefined) return '~'; 
    if (value >= 1) {
        const formatted = value.toFixed(2); 
        return formatted.endsWith('.00') ? parseInt(formatted) : formatted; 
    }
    return value;
}

export const formatWithCurrency = (value, key) => {
    if (value === null || value === undefined) return '~';
    const formattedValue = formatValue(value); 

    if (['price', 'mcap', 'volume'].includes(key)) {
        return `$${formattedValue}`;
    }

    return formattedValue;
};