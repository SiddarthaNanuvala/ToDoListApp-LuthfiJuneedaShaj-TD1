# To-Do List Application

A simple React-based To-Do List application that allows users to manage their tasks efficiently. Users can add tasks, mark tasks as complete, delete tasks, and reorder tasks in the list.

## Features

- **Add Tasks**: Add new tasks to the list by entering text in the input field and clicking the "Add" button.
- **Mark as Complete**: Mark a task as completed. Completed tasks move to the top of the list and display "Completed" in the button.
- **Delete Tasks**: Remove tasks from the list using the "Delete" button.
- **Reorder Tasks**: Move tasks up or down in the list using the arrow buttons (⬆️ and ⬇️).
- **Disable Movement for Completed Tasks**: Completed tasks cannot be reordered, and their move buttons are hidden.

## Technologies Used

- **React**: For building the user interface and managing component state.
- **JavaScript (ES6)**: For logic and event handling.
- **CSS**: For styling the application.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LUTHFI007/ToDoListApp-LuthfiJuneedaShaj-TD1.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-list-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to:

   ```
   http://localhost:5174
   ```

## Usage

1. Enter a task in the input field and click the **Add** button to add it to the list.
2. Click the **Complete** button to mark a task as completed. The task will move to the top of the list and display "Completed."
3. Use the **Delete** button to remove a task from the list.
4. Use the **⬆️** and **⬇️** buttons to move tasks up or down in the list. These buttons are hidden for completed tasks.

## Project Structure

```
├── public
│   └── index.html
├── src
│   ├── components
│   │   └── ToDoList.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md
```

## Components

- **ToDoList**: The main component that manages tasks and renders the to-do list interface.

## Future Enhancements

- Add support for task categories or tags.
- Implement due dates and reminders.
- Allow users to save tasks locally using browser storage or integrate with a backend.
- Add a search or filter functionality to quickly find tasks.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository, create a feature branch, and submit a pull request.

## Contact

For any inquiries or feedback, feel free to reach out:

- Email: luthfi.juneeda-shaj@edu.devinci.fr
- GitHub: LUTHFI007(https://github.com/LUTHFI007)
