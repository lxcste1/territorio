import axios from 'axios';
import Papa from 'papaparse';

const getServices = {
    list: async () => {
        return axios.get(
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vTgad_10W6lQK6SzJp2c_NPn_GXPsg1hGX19cNgn15ynXYBNZuLp5rmnq5hMwKOtTH12LXoMcyKt7_4/pub?output=csv',
            {
                responseType:'blob'
            }
            ).then(response =>{
                return new Promise((resolve, reject) =>{
                    Papa.parse(response.data, {
                        header: true,
                        complete: results => {
                            const response = results.data;
                            
                            return resolve(results.data)
                        },
                        error: (error) => {
                            return reject(error.message)
                        }
                    })
                })
            });
    },
};

export default getServices;