import {render, screen, cleanup} from '@testing-library/react';
import {toBeInTheDocuments, toHaveStyle} from '@testing-library/jest-dom'
import { DealCard } from "../components/DealCard/DealCard"

const mockDealData = {
  "storeID": "1",
  "gameID": "93503",
  "name": "BioShock Infinite",
  "steamAppID": "8870",
  "salePrice": "29.99",
  "retailPrice": "29.99",
  "steamRatingText": "Overwhelmingly Positive",
  "steamRatingPercent": "95",
  "steamRatingCount": "88340",
  "metacriticScore": "94",
  "metacriticLink": "\/game\/pc\/bioshock-infinite",
  "releaseDate": 1364169600,
  "publisher": "N\/A",
  "steamworks": "1",
  "thumb": "https:\/\/cdn.cloudflare.steamstatic.com\/steam\/apps\/8870\/capsule_sm_120.jpg?t=1602794480"
}

afterEach(cleanup);

describe('Given a deal that is on sale', () => {
    test('test that retail price , is crossed through', () => {
      
        render (<DealCard {...mockDealData} />)
        const salePrice = screen.getByTestId("retail-price");
        const viewMore = screen.getByTestId("view-more");

        expect(viewMore).toBeInTheDocument();
        expect(viewMore).toHaveStyle(` text-decoration: line-through;`);
        
    })
}) 


// describe('Given a controller that is offline', () => {
//     test('test that card is red and shows error message', () => {
      
//         render (<ControllerCard {...mockOfflineData} />)
//         const container = screen.getByTestId("card")
//         const signalElem = screen.getByText("Error status :")

//         expect(signalElem).toBeInTheDocument();
//         expect(container).toHaveStyle(`background-color : rgb(255 240 240)`)
        
//     })
// }) 