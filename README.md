# Crouch Register Redme Questions Answer

## Add at least 3 Project features :

 - JSON takes the data from the data and shows it on each data card
 - If you click on the card, the name of the card will be added to the sidebar
 - After the card name is shown, the read time of that card will be added to the time


## Discuss how you managed the state in your assignment project:

- In my project, I first loaded the data from the json file through useEffect state and stored it in useState. That data is sent through the mapping function to the card component. And the card component is dynamically shown to the browser through CardReact's virtual dome. Again by adding a click function on the card, the data of the selected card is again stored in useState in the previous component.

