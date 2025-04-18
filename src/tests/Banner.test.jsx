import { describe, it, expect } from 'vitest'
import {render, screen} from '@testing-library/react'
import Banner from '../Pages/Banner'

describe('campaign Banner renders', () =>{
    it('To make sure the campaign banner renders on the screen', () => {
      render(<Banner/>)
      expect(screen.getByTestId("campaign-banner")).toBeInTheDocument();
    });
});
