import { describe, it, expect } from 'vitest'
import {render, screen} from '@testing-library/react'
import Banner from '../Pages/Banner'

describe('campaign Banner renders', () =>{
    it('To make sure the campaign banner renders on the screen', () => {
      render(<Banner/>)
      expect(screen.getByTestId("campaign-banner")).toBeInTheDocument();
    });
});




// describe("Banner container renders", () => {
//     it("Ensure the banner container renders on he screen", () => {
//       render(<Banner />);
//       expect(screen.getByTestId("banner-container")).toBeInTheDocument();
//     });
//   });
  

// import {describe, it, expect} from 'vitest';
// describe('something truthy and falsy', () => {
//     it('true to be true', ()=>{
//         expect(true).toBe(true);
//     });
    
//     it('false to be false', ()=>{
//         expect(false).toBe(false);
//     });
// });

//My Test Practice
// describe('checking an array for certain item', ()=>{
//     it('check if banana is there', ()=>{
      
//         const fruite = ['mango', 'banana']

//         expect(fruite).toContain('mango')
//     });
// });



 