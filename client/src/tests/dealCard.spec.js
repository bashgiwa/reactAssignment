import {render, screen , cleanup, fireEvent, waitFor} from '@testing-library/react';
//import {toBeInTheDocument, toHaveStyle, toHaveTextContent} from '@testing-library/jest-dom'
import DealCard from "../components/DealCard/DealCard"
import { createMemoryHistory } from "history";
import { MemoryRouter, Router } from 'react-router';
import userEvent  from '@testing-library/user-event';

const mockDealData = {
  "title": "ReX",
  "metacriticLink": "\/game\/pc\/rex",
  "dealID": "%2Fk8PA8v9cduOBy2%2FwMptxvudUVO1YTNgLYjzRD2jva0%3D",
  "storeID": "1",
  "gameID": "187178",
  "salePrice": "1.79",
  "normalPrice": "17.99",
  "isOnSale": "1",
  "savings": "90.050028",
  "metacriticScore": "0",
  "steamRatingText": null,
  "steamRatingPercent": "0",
  "steamRatingCount": "0",
  "steamAppID": "727540",
  "releaseDate": 1637971200,
  "lastChange": 1637798894,
  "dealRating": "9.2",
  "thumb": "https:\/\/cdn.cloudflare.steamstatic.com\/steam\/apps\/727540\/capsule_sm_120.jpg?t=1630067466"
}

afterEach(cleanup);


describe('Given a deal', () => {
    test('all card info , are populated', () => {

      render(
         <MemoryRouter>
            <DealCard deal={mockDealData} />
          </MemoryRouter>
      )
      const title = screen.getByPlaceholderText("dealTitle");
      const normalPrice = screen.getByPlaceholderText("normalPrice");
      const vBtn = screen.getByRole('button');
      
      expect(title).toBeInTheDocument();
      expect(normalPrice).toBeInTheDocument();
      
      expect(title).toHaveTextContent("ReX");
      expect(normalPrice).toHaveTextContent("17.99");      
    
    })

    test('when deal is on sale original price is striked through,', () => {
  
      render(
        <MemoryRouter>
           <DealCard deal={mockDealData} />
         </MemoryRouter>
     )
      const normalPrice = screen.getByPlaceholderText("normalPrice");
      expect(normalPrice).toBeInTheDocument();
      expect(normalPrice).toHaveClass('retail-price show');
    })

    test('on click of view more button, navigates to details page', () => {
      const history = createMemoryHistory();
      const {getByRole, getByText}  = render(
        <Router location={history.location} navigator={history}>
           <DealCard deal={mockDealData} />
         </Router>
      )
      const vBtn = getByRole('button');
      expect(vBtn).toBeInTheDocument();
      
      userEvent.click(vBtn) ;
      expect(history.location.pathname).toEqual('/details');
    })
}) 

