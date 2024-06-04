# OceanCapital - Front End

OnesCapital is an application developed by Gia Bao Tran in order to provide an easier way that people can manage their finances more conveniently and robust. Features such as Balance tracking, Expense logs, View currency, and other sets of useful tools one can leverage to successfully manage their finances $$$

Keep in mind that this is just the front end of the project, check my repos to view the backend code

## Features

- View Card Balance (depends on bank APIs)
- Stock Price Information
- Transaction logs
- Group expenses
- TBU

## Technology

This project is written in MERN stack and utilized Docker and Jenkins for CI/CD practices (might as well use AWS or RasberryPI for hosting 🤔)

## Project structure

I have carefully thought about how to build a REACT project that has so many components yet comprehensible and easy to read. Thus I have written the code in a well-structured manner that has a obvious and friendly hierachy so anyone can easily follow in a in-order "path". In order to learn the code, start in the following order.

1. <span style="background-color: #FFFF00">pages/Root.jsx</span>: is most important as it defines the overall structure of the app, containing fixed components such as the <Navbar> and <Sidebar>. These components are always rendered, providing a consistent layout across the application. Other pages of the app will be passed and rendered as children of <Root>, ensuring they are displayed within the context of the fixed structure. Dark-mode functionality is also defined within this file.

2. <span style="background-color: #FFFF00">pages/[FILES].jsx</span>: each of these files will contain content to display. They deal with other <Container> components, putting them together to form the structure of a dedicated page depending on context. Example: <Dashboard> page-component will contain other <Container> components in a structured manner and display necessary contents.

3. <span style="background-color: #FFFF00">container/[FILES].jsx</span>: these components serve as containers to hold sub-components. Each container component will act as a building block to layout different sections of a page. They are responsible for managing the layout and organization of their child components and handle new item creation. Example: <CardContainer> will hold many other <Card> component and is, thus, responsible for managing them including adding new <Card> functionality.

4. <span style="background-color: #FFFF00">components/[FILES].jsx</span>: any UI components will be stored in this folder. Yet there are some important sub-directory.

5. components/form/[FILES].jsx: these forms are likely to be passed as children of <Modal> component. It will handle user intention to create new item such as new cards or new transactions or etc. It contains some logic to modify the whole application's behavior (Example: only able to create new transaction based on available cards and their balance), therefore data's access requirement is a-must. This can easily be done with <Context.Provider>, which it is wrapped within

6. <span style="background-color: #FFFF00">models/[FILES].js</span>: contains classes that define important objects in the application for better maintenance and clarity. This is especially useful when upgrading to TypeScript, as it ensures that data structures are well-defined and consistent throughout the codebase.

## Shout out

HTML/CSS source code is provided publicly by [EGATOR](https://www.youtube.com/@EGATORTUTORIALS) youtube channel.
Thank you for your tutorial!

