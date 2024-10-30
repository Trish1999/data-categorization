Food Items Categorization and Analysis
This application categorizes and lists various food items based on multiple attributes such as category, calories, protein content, and carbohydrate content. It provides an organized way to access nutritional information and categorize the foods for better analysis.
output:

list all the food items:  [

  'Apple',       'Banana',         'Orange',
  'Pear',        'Grapefruit',     'Strawberry',
  'Blueberry',   'Raspberry',      'Broccoli',
  'Cauliflower', 'Green Beans',    'Asparagus',
  'Spinach',     'Kale',           'Sweet Potato',
  'Potato',      'Carrot',         'Onion',
  'Egg',         'Chicken Breast', 'Salmon',
  'Tuna',        'Beef',           'Pork',
  'Lamb',        'Shrimp',         'Quinoa',
  'Brown Rice',  'Oats',           'Quinoa',
  'Bread',       'Pasta',          'Milk',
  'Cheese',      'Yogurt',         'Butter',
  'Almonds',     'Walnuts',        'Peanuts',
  'Cashews'
]

list all the food items with category vegetables:  [

  { Category: 'Vegetable', foodName: 'Broccoli' },
  { Category: 'Vegetable', foodName: 'Cauliflower' },
  { Category: 'Vegetable', foodName: 'Green Beans' },
  { Category: 'Vegetable', foodName: 'Asparagus' },
  { Category: 'Vegetable', foodName: 'Spinach' },
  { Category: 'Vegetable', foodName: 'Kale' },
  { Category: 'Vegetable', foodName: 'Sweet Potato' },
  { Category: 'Vegetable', foodName: 'Potato' },
  { Category: 'Vegetable', foodName: 'Carrot' },
  { Category: 'Vegetable', foodName: 'Onion' }
]

list all the food items with category fruit:  [

  { Category: 'Fruit', foodName: 'Apple' },
  { Category: 'Fruit', foodName: 'Banana' },
  { Category: 'Fruit', foodName: 'Orange' },
  { Category: 'Fruit', foodName: 'Pear' },
  { Category: 'Fruit', foodName: 'Grapefruit' },
  { Category: 'Fruit', foodName: 'Strawberry' },
  { Category: 'Fruit', foodName: 'Blueberry' },
  { Category: 'Fruit', foodName: 'Raspberry' }
]

list all the food items with category protien:  [

  { Category: 'Protein', foodName: 'Egg' },
  { Category: 'Protein', foodName: 'Chicken Breast' },
  { Category: 'Protein', foodName: 'Salmon' },
  { Category: 'Protein', foodName: 'Tuna' },
  { Category: 'Protein', foodName: 'Beef' },
  { Category: 'Protein', foodName: 'Pork' },
  { Category: 'Protein', foodName: 'Lamb' },
  { Category: 'Protein', foodName: 'Shrimp' }
]

list all the food items with category nuts:  [

  { Category: 'Nuts', foodName: 'Almonds' },
  { Category: 'Nuts', foodName: 'Walnuts' },
  { Category: 'Nuts', foodName: 'Peanuts' },
  { Category: 'Nuts', foodName: 'Cashews' }
]

list all the food items with category grains:  [

  { Category: 'Grain', foodName: 'Quinoa' },
  { Category: 'Grain', foodName: 'Brown Rice' },
  { Category: 'Grain', foodName: 'Oats' },
  { Category: 'Grain', foodName: 'Quinoa' },
  { Category: 'Grain', foodName: 'Bread' },
  { Category: 'Grain', foodName: 'Pasta' }
]

list all the food items with category dairy:  [

  { Category: 'Dairy', foodName: 'Milk' },
  { Category: 'Dairy', foodName: 'Cheese' },
  { Category: 'Dairy', foodName: 'Yogurt' },
  { Category: 'Dairy', foodName: 'Butter' }
]

list all the food items with calorie above 100:  [

  { Calorie: 105, foodName: 'Banana' },
  { Calorie: 103, foodName: 'Sweet Potato' },
  { Calorie: 161, foodName: 'Potato' },
  { Calorie: 165, foodName: 'Chicken Breast' },
  { Calorie: 206, foodName: 'Salmon' },
  { Calorie: 179, foodName: 'Tuna' },
  { Calorie: 250, foodName: 'Beef' },
  { Calorie: 242, foodName: 'Pork' },
  { Calorie: 294, foodName: 'Lamb' },
  { Calorie: 120, foodName: 'Quinoa' },
  { Calorie: 216, foodName: 'Brown Rice' },
  { Calorie: 389, foodName: 'Oats' },
  { Calorie: 120, foodName: 'Quinoa' },
  { Calorie: 265, foodName: 'Bread' },
  { Calorie: 131, foodName: 'Pasta' },
  { Calorie: 402, foodName: 'Cheese' },
  { Calorie: 717, foodName: 'Butter' },
  { Calorie: 579, foodName: 'Almonds' },
  { Calorie: 654, foodName: 'Walnuts' },
  { Calorie: 567, foodName: 'Peanuts' },
  { Calorie: 553, foodName: 'Cashews' }
]

list all the food items with calorie below 100:  [

  { Calorie: 95, foodName: 'Apple' },
  { Calorie: 62, foodName: 'Orange' },
  { Calorie: 95, foodName: 'Pear' },
  { Calorie: 42, foodName: 'Grapefruit' },
  { Calorie: 46, foodName: 'Strawberry' },
  { Calorie: 52, foodName: 'Blueberry' },
  { Calorie: 52, foodName: 'Raspberry' },
  { Calorie: 34, foodName: 'Broccoli' },
  { Calorie: 25, foodName: 'Cauliflower' },
  { Calorie: 31, foodName: 'Green Beans' },
  { Calorie: 20, foodName: 'Asparagus' },
  { Calorie: 23, foodName: 'Spinach' },
  { Calorie: 33, foodName: 'Kale' },
  { Calorie: 41, foodName: 'Carrot' },
  { Calorie: 40, foodName: 'Onion' },
  { Calorie: 77, foodName: 'Egg' },
  { Calorie: 85, foodName: 'Shrimp' },
  { Calorie: 60, foodName: 'Milk' },
  { Calorie: 59, foodName: 'Yogurt' }
]

list all the food items with highest protien content to lowest:  [

  { Protiens: 39, foodName: 'Tuna' },
  { Protiens: 31, foodName: 'Chicken Breast' },
  { Protiens: 26, foodName: 'Beef' },
  { Protiens: 26, foodName: 'Pork' },
  { Protiens: 26, foodName: 'Peanuts' },
  { Protiens: 25, foodName: 'Lamb' },
  { Protiens: 25, foodName: 'Cheese' },
  { Protiens: 22, foodName: 'Salmon' },
  { Protiens: 21, foodName: 'Almonds' },
  { Protiens: 20, foodName: 'Shrimp' },
  { Protiens: 18, foodName: 'Cashews' },
  { Protiens: 16.9, foodName: 'Oats' },
  { Protiens: 15, foodName: 'Walnuts' },
  { Protiens: 9.4, foodName: 'Bread' },
  { Protiens: 6.3, foodName: 'Egg' },
  { Protiens: 5.5, foodName: 'Pasta' },
  { Protiens: 4.5, foodName: 'Brown Rice' },
  { Protiens: 4.4, foodName: 'Quinoa' },
  { Protiens: 4.4, foodName: 'Quinoa' },
  { Protiens: 4.3, foodName: 'Kale' },
  { Protiens: 4.3, foodName: 'Potato' },
  { Protiens: 3.5, foodName: 'Spinach' },
  { Protiens: 3.5, foodName: 'Yogurt' },
  { Protiens: 3.3, foodName: 'Broccoli' },
  { Protiens: 3.2, foodName: 'Milk' },
  { Protiens: 2.6, foodName: 'Cauliflower' },
  { Protiens: 2.4, foodName: 'Green Beans' },
  { Protiens: 2.2, foodName: 'Asparagus' },
  { Protiens: 2, foodName: 'Sweet Potato' },
  { Protiens: 1.5, foodName: 'Strawberry' },
  { Protiens: 1.4, foodName: 'Raspberry' },
  { Protiens: 1.4, foodName: 'Onion' },
  { Protiens: 1.3, foodName: 'Banana' },
  { Protiens: 1.2, foodName: 'Orange' },
  { Protiens: 1.1, foodName: 'Grapefruit' },
  { Protiens: 1.1, foodName: 'Blueberry' },
  { Protiens: 0.9, foodName: 'Carrot' },
  { Protiens: 0.9, foodName: 'Butter' },
  { Protiens: 0.5, foodName: 'Pear' },
  { Protiens: 0.3, foodName: 'Apple' }
]

list all the food items with lowest cab content to highest:  [

  { Cab: 0, foodName: 'Tuna' },
  { Cab: 0, foodName: 'Chicken Breast' },
  { Cab: 0, foodName: 'Beef' },
  { Cab: 0, foodName: 'Pork' },
  { Cab: 0, foodName: 'Lamb' },
  { Cab: 0, foodName: 'Salmon' },
  { Cab: 0.1, foodName: 'Butter' },
  { Cab: 0.2, foodName: 'Shrimp' },
  { Cab: 0.5, foodName: 'Egg' },
  { Cab: 2, foodName: 'Asparagus' },
  { Cab: 2.4, foodName: 'Cheese' },
  { Cab: 4, foodName: 'Spinach' },
  { Cab: 4, foodName: 'Green Beans' },
  { Cab: 5, foodName: 'Yogurt' },
  { Cab: 5, foodName: 'Broccoli' },
  { Cab: 5, foodName: 'Cauliflower' },
  { Cab: 5.1, foodName: 'Milk' },
  { Cab: 7, foodName: 'Kale' },
  { Cab: 9, foodName: 'Onion' },
  { Cab: 9, foodName: 'Carrot' },
  { Cab: 10, foodName: 'Strawberry' },
  { Cab: 11, foodName: 'Grapefruit' },
  { Cab: 14, foodName: 'Walnuts' },
  { Cab: 14, foodName: 'Blueberry' },
  { Cab: 15, foodName: 'Raspberry' },
  { Cab: 15, foodName: 'Orange' },
  { Cab: 16, foodName: 'Peanuts' },
  { Cab: 21, foodName: 'Quinoa' },
  { Cab: 21, foodName: 'Quinoa' },
  { Cab: 22, foodName: 'Almonds' },
  { Cab: 25, foodName: 'Pear' },
  { Cab: 25, foodName: 'Apple' },
  { Cab: 26, foodName: 'Pasta' },
  { Cab: 27, foodName: 'Sweet Potato' },
  { Cab: 27, foodName: 'Banana' },
  { Cab: 30, foodName: 'Cashews' },
  { Cab: 37, foodName: 'Potato' },
  { Cab: 45, foodName: 'Brown Rice' },
  { Cab: 49, foodName: 'Bread' },
  { Cab: 66, foodName: 'Oats' }
]

