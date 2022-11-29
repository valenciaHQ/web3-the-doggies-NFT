import { render, screen } from "@testing-library/react"
import App from "./App"

test('Should show title and not connected label at landing page', () => {
    render(<App />)
    expect(screen.getByRole('heading')).toHaveTextContent('The Sandbox.')
    expect(screen.getByText(/You are not connected, please connect your wallet/i)).toBeInTheDocument()
})

test('Should popup Metamask', () => {

})