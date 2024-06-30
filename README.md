# ReactDateFns Package

A React component library for displaying formatted dates using `date-fns`. This package provides several components: `DateDisplay`, `DateSelect`, and `CountdownTimer`. These components can be customized with various date patterns and CSS classes.

## Installation

To install the package, run:

```bash
npm install react-date-fns
```

## Usage

### Importing the Components

You can import the components in your React application as follows:

```jsx
import React from "react";
import { DateDisplay, DateSelect, CountdownTimer } from "react-date-fns";

const App = () => {
  const handleDateChange = (date) => {
    console.log("Selected date:", date);
  };

  return (
    <div>
      <DateDisplay className="date-class" pattern="MM/dd/yyyy">
        {new Date()}
      </DateDisplay>
      <DateSelect
        className="date-select-class"
        pattern="MM/dd/yyyy"
        onDateChange={handleDateChange}
        showSelectedDate
      />
      <CountdownTimer
        className="countdown-class"
        targetDate={new Date(new Date().getTime() + 10000)}
      />
    </div>
  );
};

export default App;
```

### DateDisplay Props

The `DateDisplay` component accepts the following props:

- `children` (`Date`): The date to be formatted and displayed.
- `className` (`string`, optional): A CSS class to apply to the `<span>` element.
- `pattern` (`string`): The date format pattern. It can be one of the predefined patterns or any custom string pattern compatible with `date-fns`.

### DateSelect Props

The `DateSelect` component accepts the following props:

- `className` (`string`, optional): Additional CSS classes to apply to the container element.
- `pattern` (`string`): The format pattern to use for displaying the selected date.
- `onDateChange` (`function`, optional): Callback function to handle date changes.
- `showSelectedDate` (`boolean`, optional): Whether to display the selected date. Defaults to `true`.

### CountdownTimer Props

The `CountdownTimer` component accepts the following props:

- `targetDate` (`Date`): The date to count down to.
- `className` (`string`, optional): Additional CSS classes to apply to the container element.
- `timeLeftText` (`string`, optional): Text to display when the countdown reaches zero. Defaults to "Time’s up!".

### Available Patterns

Here are some of the predefined patterns you can use:

- `"MMMM"`
- `"yyyy-MM-dd"`
- `"MM/dd/yyyy"`
- `"dd-MM-yyyy"`
- `"dd/MM/yyyy"`
- `"yyyy/MM/dd"`
- `"dd MMMM yyyy"`
- `"EEEE, MMMM do, yyyy"`
- `"MM-dd-yyyy"`
- `"yyyy-MM-dd'T'HH:mm:ss"`
- `"yyyy-MM-dd HH:mm:ss"`
- `"HH:mm:ss"`
- `"hh:mm:ss a"`
- `"EEEE"`
- `"MMM d, yyyy"`
- `"MMMM do, yyyy"`
- `"dd MMM yyyy"`
- `"d MMM yyyy"`
- `"dd MMM"`
- `"d MMM"`
- `"MMMM yyyy"`
- `"MMM yyyy"`
- `"EEE, MMM d, ''yy"`
- `"h:mm a"`
- `"h:mm:ss a"`
- `"HH:mm"`
- `"HH:mm:ss"`
- `"h:mm:ss a zzz"`
- `"h:mm a zzz"`
- `"EEEE, MMMM do, yyyy, h:mm a"`

You can also use any custom string pattern compatible with `date-fns`.

## Development

### Building the Package

To build the package, run:

```bash
npm run build
```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
