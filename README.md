# Employee Data

This is a simple Employee Data App that allows you to view a list of employees and add new employee records using Firebase Realtime Database. The app is built using React and Firebase.

## Technologies/Libraries Used

- React: A JavaScript library for building user interfaces.
- Firebase Realtime Database: A NoSQL database that allows you to store and sync data in real time.
- Firebase SDK: The Firebase JavaScript SDK for connecting to Firebase services.

## Features

- View a list of employees with their names, positions, and experience.
- Add new employee records to the database using a simple form.

## Approach

The app is built using React to create a seamless user interface. Firebase Realtime Database is used to store employee data. The app consists of two main components:

1. **Employees**: Fetches and displays the list of employees from the Firebase Realtime Database. It uses the Firebase SDK to establish a connection to the database and retrieve the data.

2. **Add Employee**: Provides a form to add new employee records to the database. It uses the Firebase SDK to push new records to the "employees" node.

## Challenges Faced

1. **Firebase Configuration**: Setting up and configuring Firebase correctly, including replacing the placeholder values in the Firebase config.

2. **Database Structure**: Understanding the structure of Firebase Realtime Database and adapting the code to work specially with its NoSQL structure.

3. **Firebase SDK Usage**: Learning and using the Firebase SDK to interact with the Realtime Database, including reading and writing data.

4. **Styling**: Creating a clean and user-friendly UI while ensuring responsive design.

---
