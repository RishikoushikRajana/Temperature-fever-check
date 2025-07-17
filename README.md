# Temperature-fever-check

Temperature Fever Checker
A simple, interactive web application to help users quickly check if their body temperature indicates a fever.

## Table of Contents
About

Features

How It Works

Technologies Used

Setup and Usage

Contributing

License

## About
This project provides a basic tool for users to input their body temperature and receive immediate feedback on whether it falls within a normal range or suggests a fever. It's designed to be user-friendly, responsive, and accessible directly in a web browser. Please note that this tool is for informational purposes only and should not replace professional medical advice.

## Features
Temperature Input: Allows users to enter their temperature in either Celsius or Fahrenheit.

Unit Toggle: Easily switch between Celsius and Fahrenheit input/display.

Fever Detection: Provides a clear indication (e.g., "Normal," "Elevated," "Fever") based on standard temperature guidelines.

Visual Feedback: Changes in styling (e.g., text color, background) to visually represent the temperature status.

Responsive Design: Adapts to various screen sizes (desktops, tablets, mobile phones).

Client-Side Logic: All calculations and checks are performed in the browser using JavaScript.

## How It Works
The application operates on client-side logic:

User Input: The user enters their temperature into a designated input field.

Unit Selection: The user selects their preferred unit (Celsius or Fahrenheit).

Conversion (if necessary): If the input unit is different from the unit used for internal comparison (e.g., Fahrenheit input, but Celsius is used for comparison), the value is converted.

Comparison: The entered temperature is compared against predefined thresholds for normal, elevated, and fever temperatures.

Result Display: Based on the comparison, a message is displayed to the user, indicating their temperature status, along with visual cues.

## Technologies Used
HTML5: For structuring the web page content.

CSS3: For styling the application, including layout, colors, and responsive design.

JavaScript (ES6+): For handling user input, performing temperature conversions, implementing fever logic, and dynamically updating the UI.
