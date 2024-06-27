# React Date Fns Package by [Hygor Zorak](http://github.com/hygorzorak)

A React component for displaying formatted dates using `date-fns`. This package provides a `DateDisplay` component that can be customized with various date patterns and CSS classes.

## Installation

To install the package, run:

```bash
npm install react-date-fns-package
```

## Usage

### Importing the Component

You can import the `DateDisplay` component in your React application as follows:

```jsx
import React from "react";
import ReactDateFns, { DateDisplay } from "react-date-fns-package";

const App = () => {
  return (
    <div>
      <ReactDateFns.DateDisplay
        date={new Date()}
        className="date-class"
        pattern="yyyy-MM-dd"
      />
      <DateDisplay
        date={new Date()}
        className="date-class"
        pattern="MM/dd/yyyy"
      />
    </div>
  );
};

export default App;
```

### DateDisplay Props

The `DateDisplay` component accepts the following props:

- `date` (`Date`): The date to be formatted and displayed.
- `className` (`string`, optional): A CSS class to apply to the `<span>` element.
- `pattern` (`DatePattern`): The date format pattern. It can be one of the predefined patterns or any custom string pattern compatible with `date-fns`.

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

```

This README provides detailed information on how to install, use, and contribute to the package, as well as a list of available date format patterns. Feel free to adjust it based on your specific needs and preferences.
```
