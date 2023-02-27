// import { Select, Page, setOptions, getJson } from '@mobiscroll/react-lite';
import mobiscroll from '@mobiscroll/react-lite';
import { useEffect, useState } from 'react';

mobiscroll.setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

export const Countries = () => {
    const [myData, setMyData] = useState([]);
    
    const inputProps = {
        inputStyle: 'box',
        labelStyle: 'stacked',
        placeholder: 'Please select...'
    };
    
    useEffect(() => {
        mobiscroll.getJson('https://trial.mobiscroll.com/content/countries.json', (resp) => {
            const countries = [];
            for (let i = 0; i < resp.length; ++i) {
                const country = resp[i];
                countries.push({ text: country.text, value: country.value });
            }
            setMyData(countries);
        });
    }, []);

    const renderCustomItem = (item) => {
        return <div className="md-country-picker-item">
            <img className="md-country-picker-flag" src={'https://img.mobiscroll.com/demos/flags/' + item.data.value + '.png'} alt="Flag" />
            {item.display}
        </div>;
    }

    return (
        <mobiscroll.Page>
            <mobiscroll.Select
                data={myData}
                label="Countries"
                inputProps={inputProps}
                display="anchored"
                itemHeight={40}
                renderItem={renderCustomItem}
            />
        </mobiscroll.Page>
    ); 
}