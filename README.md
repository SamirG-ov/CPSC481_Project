# RESTAURANT ORDERING SYSTEM

Introducing our innovative ordering restaurant system, revolutionizing the dining experience for all types of customers. Our platform helps users to effortlessly browse through the many sections of the menu, place, return, and track orders, securely process payments, and provide meaningful feedback from the convenience of a handheld device. If you are looking for a new ordering system for your restaurant or bar, where clients can seamlessly interact with the menu and order directly from their seats, look no further!

## Group 9:

- Lauraine Baffot (30086699), lauraine.baffot@ucalgary.ca
- Samir Gulahmadov (30078572), samir.gulahmadov1@ucalgary.ca
- Kenny Jeon (30068677), kenny.jeon@ucalgary.ca
- Mohamed Mansour (30070631), mohamed.mansour1@ucalgary.ca
- Tanmay Mishra (30127407), tanmay.mishra2@ucalgary.ca

## Table of Contents

- [How To Run](#how-to-run)

## How To Run

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/SamirG-ov/CPSC481_Project.git
```

Through a terminal, navigate to the project directory:

```bash
cd CPSC481_Project
```

Install the dependencies:

```bash
npm i
```

Then to run the application, run:

```bash
npm start
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Or you can find our app deployed on this website: [https://newdeployment-liard.vercel.app/](https://newdeployment-liard.vercel.app/)

## Project Information

### Task 1: Ordering Food

- On the Welcome Page, click on either the `Show me recommendations` or `Access menu` button to redirect yourself to the Menu Page.
- Depending on which button you press, you will be redirected to a specific section of the menu.
- Look through the menu and select an item. To add this item to your cart, click on the `Add to Cart` button.
- You will be redirected to the Item Details Page of that item. Choose a quantity and write something in `Special Notes`. Click on the `Add to Order` button.
- You will be redirected to the Menu Page. Click on the `View Cart` button to see your item(s) in your cart.
- If satisfied, click on the `Place Order` button to place your order.

### Task 2: Order Tracking

- After completing [Task 1](#task-1-ordering-food), you will be redirected to the Track Order Page.
- You will see a progress bar for each of your items and a countdown with the estimated time it will take for that order to arrive at your table.
- Once the progress bar fills up completely or your countdown ends, your meal should be arriving at your table.

### Task 3: Returning an Item

- If you are located on the Menu Page, click on the `Track Order` button to take you back to the Track Order Page.
- On the other side of the progress bar, a red `Return Item` button can be found under the item's name.
- Clicking on this button will remove your item from the list, therefore removing the item from your menu.
- Click on the `Return Item` to watch the item disappear.

### Task 4: Paying the Bill

- Redirect yourself back to the Track Order Page and click on the `Checkout` button.
- You will be redirected to the Order Summary Page where the subtotal of your meal will be displayed. The details of the price breakdown are also shown for your convenience.
- When you are ready, press the `Pay Bill` button. This will redirect you to the accepted forms of payment.
- If you are paying with a card, select your card type, and you will be prompted to add a tip.
- Once you have selected a tip option, press the `Apply` button.
  The total price, with the tip, will be displayed on the NFC terminal on the iPad.
- If you are instead paying with cash, select the cash option and press `Apply`.
- A page will appear letting you know that assistance will be there promptly to process your transaction.
- Once the transaction is completed (whether on card or cash), a Complete Payment page will appear. On this page, you can either fill out a feedback form or do nothing, and the page will disappear after 10s.

### Task 5: Providing Feedback

- If you are on the Payment Complete Page and would like to give some feedback regarding your experience, click on the `Tell us how we did` button.
- The items that you ordered during your meal will show up on the form and you will be able to give a star rating for each item.
- Once completed, click on the `Submit` button and a confirmation modal will appear, letting you know that the feedback has been submitted successfully.

### Additional Info

- An Assistance Page is also included in the application and can be accessed by pressing the `Call Assistance` button either on the Welcome Page or the floating button on every page of the application. This page calls a server staff to come and assist you at your table.
