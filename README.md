# Netflix font-end clone

## Developed by: Matt Groberg

_This is a front-end clone of netflix, using React. It isnt an exact clone, but I tried to replicate most of the styles and functionality.

## Setup  
1. Clone, or Download this repository. 
2. Navigate to the root directory in your terminal.
2. Install Dependancies: npm i
3. Start dev Server (It will be running on localhost:3000) : npm start

### Features

1. Uses React Router to Conditionally Render the Login Page, or the Browse Page
* Click the sign in button at the top to route to the browse page, and the Netflix logo to route back to the Login page.

2. Uses class components only in the two main parent components (Login and Browse).

3. State is used on Login to alternate previews when Icons are clicked.

4. State and methods are used in Browse to:
*  Determine if window is at top, so navbar can change style
* Keep track of which dropdown to show in the navBar (Currently only Browse is functional).
* Keep track of titles added to the users list
* Track which titles are being selected (changing their rendoring)
* Toggling the Searchbox when hourglass is clicked.
* Keeping track of text entered into serch box.

5. A filter method is used to conditionally display Titles in each TitleRow, based on the arguments given to the function as a prop to TitleRow: (
	For example: 

	Input : filterTitles('genre','Documentary')

	Action: Checks each title object in a hard coded mock data array to see if the key of 'genre' is equal to 'Documentary'.

	Output: [
	{name:'Our Planet', genre: 'Documentary'. ...}
	{name:'Street Food', genre: 'Documentary'. ...}
	...
	]

)

6. When text is entered in the search box, renders a SearchResults component, rather than the TitleRows.

7. Entering text in the search box triggers a method that updates the state of the search text

8. A different filter function is used to test if each title includes the search text, and this array is passed as a prop to the SearchResults Component