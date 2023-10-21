A website meant to keep a wishlist of Magic the Gathering cards.
Deployed at https://gathering-list.netlify.app/

Uses:
React
Typescript - typechecking
Scryfall API - look up cards
Firebase Auth, UI - login in and logout
Firebase Database - data storage

Initial visit will bring User to screen where they can login via Google account with Firebase Auth.
Clicking the button in the bottom right corner brings up a dialog with a searchbar.
Enter the search term and the app will make a call to Scryfall API.
Select foil or nonfoil in radio buttons (foil will change the border).
Click "Add" to make the card show up in the main page.
In the main page the card's foil value can similarly be changed.
It can also be deleted with the delete button.
Cards will be saved in Firebase Realtime Database.
In order for cards to be saved you must click the "Save" button in the bottom left corner.

Notes
Hovering over a card will show information about the card.
The only exception to this is double-daced cards which will show the backside.
You can search with the "enter" key.
The dialog can be closed with the "esc" key.
Deleting a Card will delete all of the same printings.

If there are any problems, please contact me at ashe.kemuri@gmail.com
