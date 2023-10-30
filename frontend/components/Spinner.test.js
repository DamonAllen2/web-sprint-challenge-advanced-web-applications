import Spinner from "./Spinner"
import React from 'react'
import { render, fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
test('sanity', () => {
  expect(true).toBe(true)
})



test('Spinner renders', () => {
  render(<Spinner />)
})

test('Spinner renders when on', async () => {
  render(<Spinner on={true}/>)
  expect(screen.getByText(/please wait.../i)).toBeInTheDocument();
})