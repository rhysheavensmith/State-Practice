# Step Tracker React App

The Step Tracker React App is a simple yet powerful tool to demonstrate the handling of state within a React application. This app displays three steps, allowing users to navigate between them. Each step is associated with a specific message.

## Features

- **Step Control:** Navigate between three distinct steps using "Previous" and "Next" buttons.
- **State Management:** Utilizes React's `useState` to manage the current step and `useEffect` to log the current step in the console.
- **Responsive Design:** Styled with CSS to create a visually appealing UI.

## How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/step-tracker.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd step-tracker
   ```

3. **Install the necessary dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Open your browser to `http://localhost:3000` to see the app.**

## Understanding the Code

### State Management

The app uses the `useState` hook to define and update the current step:
```javascript
const [step, setStep] = useState(1);
```

### Navigation Handlers

Two handler functions, `handleStepUp` and `handleStepDown`, control the navigation between steps:
```javascript
const handleStepUp = () => {
  step < 3 && setStep(step + 1);
};

const handleStepDown = () => {
  step > 1 && setStep(step - 1);
};
```

### Visual Indicators

CSS is used to highlight the active step, and a message corresponding to the current step is displayed.

## Conclusion

This app serves as a hands-on example for those looking to practice handling state in React. It could be further customized or expanded with additional features as needed.
