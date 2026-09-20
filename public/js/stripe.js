/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51UAWbtBfFJge18BjA8uA1VlhHx7SPPrU3P9HjUIh3A9EAcOu3ePNHNP0V1Sgm7sIO2GUy0eDcVgA76J4N2vZsuM800DKjYFIUO',
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios({
      method: 'POST',
      url: `/api/v1/bookings/checkout-session/${tourId}`,
      withCredentials: true,
    });
    // console.log(session);

    // 2) Create checkout form + charge credit card
    window.location.assign(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
