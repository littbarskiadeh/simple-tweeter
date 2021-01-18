import { render, screen, fireEvent } from '@testing-library/react'
import LikeButton from './LikeButton'

test('increments counter when clicked', () => {
  
  render(<LikeButton />)
  fireEvent.click(screen.getByText(/Like!/i))
  expect(screen.getByText(/1/i)).toBeTruthy();
})