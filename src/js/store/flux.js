const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites: []
		},
		actions: {
			removeFavorites(id) {
				//get the store
				const store = getStore();

				// add new visit
				const favorites = store.favorites.filter(f => id !== f.id);

				//reset the global store
				setStore({ favorites });
			},
			addFavorites(character) {
				//get the store
				const store = getStore();

				// add new visit
				const favorites = [...store.favorites, {
					...character,
					visitedTime: new Date()
				}]

				//reset the global store
				setStore({ favorites });
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
