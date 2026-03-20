export type MenuItem = {
	name: string;
	description?: string;
	price?: string;
	note?: string;
};

export type MenuSection = {
	title: string;
	subtitle?: string;
	items: MenuItem[];
};

export const menuSections: MenuSection[] = [
	{
		title: 'Starters',
		items: [
			{
				name: 'Pomodoro',
				price: '$12',
				description:
					'Italian tomato, bocconcini, pesto, and basil leaves.'
			},
			{
				name: 'Hummus',
				price: '$8',
				description:
					'Homemade chickpea dip topped with olive oil, served with mini naan bread.'
			},
			{
				name: 'Zaalok',
				price: '$9',
				description:
					'Eggplant, pepper, tomato, zucchini, and garlic slowly cooked in olive oil.'
			},
			{
				name: 'Moroccan Salad',
				price: '$8',
				description:
					'Oven-roasted green pepper, red onion, fresh tomato, and olive oil.'
			}
		]
	},
	{
		title: 'Mains',
		items: [
			{
				name: 'Atlantic',
				price: '$28',
				description:
					'Salmon fillet marinated with sesame oil and dill, served with barley, quinoa, and saut\u00e9ed cherry tomatoes and spinach.'
			},
			{
				name: 'Veggie',
				price: '$18',
				description:
					'Cauliflower, sweet potato, and green peas gratin baked with b\u00e9chamel sauce and cheese. Includes your choice of salad.'
			},
			{
				name: 'Beef Stroganoff',
				price: '$25',
				description:
					'Beef strip stew served with garlic mashed potatoes, caramelized onion, and roasted vegetables.'
			},
			{
				name: "The Farmer's",
				price: '$25',
				description:
					'Grilled chicken breast served with pilaf rice, roasted vegetables, and saffron sauce.'
			},
			{
				name: 'Bolognese',
				price: '$20',
				description:
					'Ground beef lasagna layered with b\u00e9chamel sauce, spinach, and cheese, topped with Bolognese sauce.'
			},
			{
				name: "The Butcher's Kabab",
				price: '$27',
				description:
					'Grilled ground beef served with pilaf rice and roasted vegetables.'
			},
			{
				name: "The Shepherd's",
				price: '$26',
				description:
					'Lamb foreshank slowly braised, served with garlic mashed potatoes, caramelized onions, glazed prunes, and gravy.'
			},
			{
				name: 'Moroccan Couscous',
				price: '$22',
				description:
					'Moroccan-style couscous with zucchini, carrots, chickpeas, and raisins. Served with lamb shank and vegetable gravy.'
			}
		]
	},
	{
		title: "Kids' Meals",
		items: [
			{
				name: 'Cheesy Penne',
				price: '$18',
				description:
					'Penne pasta with chicken in creamy sauce, topped with mozzarella cheese.'
			},
			{
				name: 'Chicken Wrap',
				price: '$16',
				description:
					'Wrap with pesto sauce, chicken, lettuce, and tomato. Served with roasted mini potatoes and your choice of sauce.'
			}
		]
	},
	{
		title: 'Desserts',
		items: [
			{
				name: 'Cheesecake',
				price: '$7.50'
			},
			{
				name: 'Tiramisu',
				price: '$7'
			},
			{
				name: 'Nutella Raspberry Brownie with Ice Cream',
				price: '$7'
			}
		]
	},
	{
		title: 'Paninis',
		subtitle: '$14',
		items: [
			{
				name: 'Palermo',
				description:
					'Honey sun-dried tomato sauce, chicken, and cabbage.'
			},
			{
				name: 'Milano',
				description:
					'Pesto sauce, grilled chicken, tomato, and lettuce.'
			},
			{
				name: 'Americano',
				description:
					'BBQ sauce, Philly steak, and cheddar.'
			},
			{
				name: 'Reuben',
				description:
					'Honey Dijon sauce, smoked beef, caramelized onions, and mozzarella.'
			},
			{
				name: 'Rustic',
				description:
					'Dijonnaise, turkey breast, brie, and dried figs.'
			},
			{
				name: 'Shawarma',
				description:
					'Garlic sauce, chicken shawarma, tomato, and lettuce.'
			},
			{
				name: 'Napolitan',
				description:
					'Hummus, roasted veggies, and goat cheese.'
			},
			{
				name: 'Oriental',
				description:
					'Wrap with garlic sauce, falafel, tomato, and lettuce.',
				note: 'Pre-order'
			}
		]
	},
	{
		title: 'Premium Paninis',
		subtitle: '$15',
		items: [
			{
				name: 'Italiano',
				description:
					'Pesto, smoked provolone, brie cheese, bocconcini, tomato, and lettuce.'
			},
			{
				name: 'Country Man',
				description:
					'Honey Dijon sauce, turkey breast, brie cheese, and apples.'
			},
			{
				name: 'Greek',
				description:
					'Tzatziki sauce, grilled chicken, cucumber, feta cheese, tomato, and lettuce.'
			},
			{
				name: 'Norwegian',
				description:
					'Cream cheese, smoked salmon, red onions, and dill.'
			},
			{
				name: 'Alpino',
				description:
					'Garlic sauce, chicken, beef, and Emmental cheese.'
			},
			{
				name: 'Moroccan',
				description:
					'Taktouka, lamb, and goat cheese.'
			}
		]
	},
	{
		title: 'Salads',
		subtitle: 'Small $10 \u00b7 Medium $14 \u00b7 Large $18',
		items: [
			{
				name: 'Mango',
				description:
					'Mango, peppers, onion, celery, cranberry, and mint.'
			},
			{
				name: 'Pasta',
				description:
					'Pasta, pesto, parmesan cheese, artichokes, and cherry tomatoes.'
			},
			{
				name: 'Quinoa',
				description:
					'Quinoa, corn, roasted chickpeas, peppers, lentils, parsley, and onion.'
			},
			{
				name: 'Greek',
				description:
					'Cucumber, peppers, tomato, onion, Kalamata olives, oregano, and feta cheese.'
			},
			{
				name: 'Orzo',
				description:
					'Orzo, cucumber, peppers, onion, feta cheese, parsley, and dill.'
			},
			{
				name: 'Broccoli',
				description:
					'Broccoli, cauliflower, carrot, mayonnaise, and red cabbage.'
			},
			{
				name: 'Potato',
				description:
					'Mini potatoes, parsley, and creamy Dijonnaise.'
			}
		]
	},
	{
		title: 'Juices',
		subtitle: '$7',
		items: [
			{
				name: 'Amber',
				description:
					'Carrot, banana, orange juice, cinnamon, and vanilla.'
			},
			{
				name: 'Beat the Heat',
				description:
					'Beets, orange juice, and banana.'
			}
		]
	},
	{
		title: 'Smoothies',
		subtitle: '$8',
		items: [
			{
				name: 'Strawberry Banana',
				description:
					'Strawberry, banana, milk, and yogurt.'
			},
			{
				name: 'Banana Dates Almond',
				description:
					'Banana, dates, almond, milk, and yogurt.'
			}
		]
	}
];

export const menuNotes = [
	'Tax not included in the prices.',
	'Make any panini a combo for +$5 (add a side salad or soup of the day).',
	'Make your panini gluten free for +$1.',
	'Salads can be topped with smoked salmon or chicken.'
];
