

const SUB_CATEGORY = {
    FOOD: [
        { label: "Snacks", value: "SNACKS" },
        { label: "Meals, Pasta & Grains", value: "PASTA_GRAINS" },
        { label: "Breakfast & Cereal", value: "BREAKFAST_AND_CEREAL" },
        { label: "Beverages", value: "BEVERAGES" },
        { label: "Coffee", value: "COFFEE" },
        { label: "Candy, Chocolate, Sauces & Spices", value: "CANDY_CHOCOLATE_SAUCES_SPICES" },
        { label: "Soup", value: "SOUP" },
        { label: "Organic Foods", value: "ORGANIC_FOODS" },
        { label: "Fresh Food", value: "FRESH_FOOD" },
    ],
    PERSONAL_AND_BABY_CARE: [
        { label: "Baby Powder", value: "BABY_POWDER" },
        { label: "Shampoo", value: "SHAMPOO" },
    ],
    PHARMACY: [
        { label: "ENT", value: "ENT" },
        { label: "Hair", value: "HAIR" },
    ],
    HOME_IMPROVEMENT: [],
    CLOTHING_SHOES_ACCESSORIES: []
}

const PRODUCT_CATEGORIES = [
    {label: "Food", value: "FOOD", subCategory: SUB_CATEGORY.FOOD},
    {label: "Personal & Baby Care", value: "PERSONAL_AND_BABY_CARE", subCategory: SUB_CATEGORY.PERSONAL_AND_BABY_CARE},
    {label: "Pharmacy", value: "PHARMACY", subCategory: SUB_CATEGORY.PHARMACY},
    {label: "Home Improvement", value: "HOME_IMPROVEMENT", subCategory: SUB_CATEGORY.HOME_IMPROVEMENT},
    {label: "Clothing, Shoes & Accessories", value: "CLOTHING_SHOES_ACCESSORIES", subCategory: SUB_CATEGORY.CLOTHING_SHOES_ACCESSORIES}
]


export default PRODUCT_CATEGORIES