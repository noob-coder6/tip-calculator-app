# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Author](#author)


### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [Solution URL](https://your-solution-url.com)
- Live Site URL: [LIVE SITE URL](https://noob-coder6.github.io/tip-calculator-app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties (CSS variables)
- CSS Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript (ES6+)
- Real-time input validation

### What I learned

This project strengthened my understanding of form validation, state management, and creating interactive calculations with JavaScript.

#### 1. Real-Time Input Validation and Error Handling

I implemented dynamic error handling that provides immediate feedback when users enter invalid data (like zero people).

```javascript
function calculateTip() {
  if (peopleValue >= 1) {
    // Perform calculations
    errorMessage.style.display = 'none';
    peopleInput.classList.remove('error');
  } else {
    errorMessage.style.display = 'inline';
    peopleInput.classList.add('error');
  }
}
```

#### 2. Managing Application State

I learned to maintain application state using JavaScript variables and update the UI based on state changes.

```javascript
let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.0;

function handleBillInput() {
  billValue = parseFloat(billInput.value) || 0;
  calculateTip();
  activateResetButton();
}
```

#### 3. parseFloat() vs parseInt()

Understanding when to use different parsing methods based on the data type needed:

```javascript
// For decimal values (currency)
billValue = parseFloat(billInput.value) || 0;

// For whole numbers (people count)
peopleValue = parseInt(peopleInput.value) || 0;
```

#### 4. Dynamic Button States

I implemented logic to enable/disable the reset button based on whether the user has entered any data.

```javascript
function activateResetButton() {
  if (billValue > 0 || peopleValue > 0 || tipValue > 0) {
    resetButton.disabled = false;
  } else {
    resetButton.disabled = true;
  }
}
```

#### 5. Currency Formatting with toFixed()

Learned to format numbers as currency with exactly 2 decimal places:

```javascript
tipAmountDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
// Input: 5.6666666 → Output: "$5.67"
```

#### 6. Event Delegation for Multiple Buttons

Implemented efficient event handling for multiple tip selection buttons using data attributes:

```javascript
function handleTipClick(event) {
  tipButtons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  tipValue = parseFloat(event.target.dataset.tip);
  customTipInput.value = '';
  calculateTip();
}
```

#### 7. CSS Grid with repeat() Function

Used CSS Grid's repeat function to create responsive layouts with minimal code:

```css
.tip-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 900px) {
  .tip-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

#### 8. Absolute Positioning for Input Icons

Learned to position icons inside input fields using absolute positioning:

```css
.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
}
```

### Continued development

In future projects, I want to focus on:

- **Input sanitization**: Preventing invalid characters in number inputs (e.g., multiple decimal points, negative numbers)
- **Accessibility improvements**: Adding ARIA labels for screen readers, proper focus management, and keyboard navigation
- **Animation feedback**: Adding smooth transitions when values update
- **Currency selection**: Supporting multiple currencies and locale-based formatting
- **Calculation history**: Implementing a feature to track previous calculations
- **Progressive enhancement**: Ensuring the calculator works without JavaScript for basic functionality

## Author

- Frontend Mentor - [@noob-coder6](https://www.frontendmentor.io/profile/noob-coder6)
- GitHub - [@noob-coder6](https://github.com/noob-coder6)