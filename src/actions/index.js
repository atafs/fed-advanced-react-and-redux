import { FETCH_CUSTOMERS, FETCH_CARDS } from './types';

export function fetchCustomers() {
  return {
    type: FETCH_CUSTOMERS,
    payload: [
      {
        title: 'Mr',
        first_name: 'Ollie',
        last_name: 'Murphree',
        date_of_birth:' 01/07/1970',
        annual_income: '£34000',
        employment_status: 'Full Time Employment',
        house_number: '700',
        postcode: 'BS14 9PR '
      },
      {
        title: 'Miss',
        first_name: 'Elizabeth',
        last_name: 'Edmundson',
        date_of_birth: '29/06/1984',
        annual_income: '£17000',
        employment_status: 'Student',
        house_number: '177',
        postcode: 'PH12 8UW'
      },
      {
        title: 'Mr',
        first_name: 'Trevor',
        last_name: 'Rieck',
        date_of_birth: '07/09/1990',
        annual_income: '£15000',
        employment_status: 'Part Time Employed',
        house_number: '343',
        postcode: 'TS25 2NF',
      }
    ]
  };
}

export function fetchCards() {
  return {
    type: FETCH_CARDS,
    payload: [
      {
        apr: '18.9%',
        balance_transfer_offer_duration:'0 months',
        purchase_offer_duration: '6 Months',
        credit_available: '£1200'
      },
      {
        apr: '33.9%',
        balance_transfer_offer_duration:'0 months',
        purchase_offer_duration: '0 Months',
        credit_available: '£300'
      },
      {
        apr: '33.9%',
        balance_transfer_offer_duration:'12 months',
        purchase_offer_duration: '6 Months',
        credit_available: '£3000'
      }
    ]
  };
}
