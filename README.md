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

This project is written in MERN stack and utilized Docker and Jenkins for CI/CD practices (might as well use AWS for hosting 🤔)

## Project structure
1. <span style="background-color: #FFFF00">pages/Root.jsx</span>: is most important as it defines the overall structure of the app, containing fixed components such as the <Navbar> and <Sidebar>. These components are always rendered, providing a consistent layout across the application. Other pages of the app will be passed and rendered as children of <Root>, ensuring they are displayed within the context of the fixed structure. Dark-mode functionality is also defined within this file.

2. <span style="background-color: #FFFF00">models/[FILE].js</span>: contains classes that define important objects in the application for better maintenance and clarity. This is especially useful when upgrading to TypeScript, as it ensures that data structures are well-defined and consistent throughout the codebase.

3. <span style="background-color: #FFFF00">container/[FILE].js</span>: These components serve as containers to hold sub-components. Each container component will act as a building block to layout different sections of a page. They are responsible for managing the layout and organization of their child components and handle new item creation. Example: <CardContainer> will hold many other <Card> component and is, thus, responsible for managing them including adding new <Card> functionality

4. <span style="background-color: #FFFF00">pages/Root</span>:

5. <span style="background-color: #FFFF00">pages/Root</span>:


## Shout out

HTML/CSS source code is provided publicly by [EGATOR](https://www.youtube.com/@EGATORTUTORIALS) youtube channel.
Thank you for your tutorial!

