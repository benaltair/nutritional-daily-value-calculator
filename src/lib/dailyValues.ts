interface Nutrient {
    name: string;
    unit: "g" | "mg" | "μg";
    value: number;
}

// Daily values for nutrients in Canada (for adults)
// https://www.canada.ca/en/health-canada/services/technical-documents-labelling-requirements/table-daily-values/nutrition-labelling.html

export const dailyValues: Nutrient[] = [
    {
        name: "Fat",
        unit: "g",
        value: 75,
    },
    {
        name: "Saturated + Trans Fat",
        unit: "g",
        value: 20,
    },
    {
        name: "Fibre",
        unit: "g",
        value: 28,
    }
    ,
    {
        name: "Sugars",
        unit: "g",
        value: 100
    }
    ,
    {
        name: "Sodium",
        unit: "mg",
        value: 2300,
    }
    ,
    {
        name: "Potassium",
        unit: "mg",
        value: 3400,
    },
    {
        name: "Calcium",
        unit: "mg",
        value: 1300,
    },
    {
        name: "Iron",
        unit: "mg",
        value: 18,
    },
    {
        name: "Vitamin A",
        unit: "μg",
        value: 900,
    },
    {
        name: "Vitamin C",
        unit: "mg",
        value: 90,
    },
    {
        name: "Vitamin D",
        unit: "μg",
        value: 20,
    },
    {
        name: "Vitamin E",
        unit: "mg",
        value: 15,
    },
    {
        name: "Vitamin K",
        unit: "μg",
        value: 120,
    },
    {
        name: "Thiamine",
        unit: "mg",
        value: 1.2,
    },
    {
        name: "Riboflavin",
        unit: "mg",
        value: 1.3,
    },
    {
        name: "Niacin",
        unit: "mg",
        value: 16,
    },
    {
        name: "Vitamin B6",
        unit: "mg",
        value: 1.7,
    },
    {
        name: "Folate",
        unit: "μg",
        value: 400,

    },
    {
        name: "Vitamin B12",
        unit: "μg",
        value: 2.4,
    },
    {
        name: "Choline",
        unit: "mg",
        value: 550,
    },
    {
        name: "Biotin",
        unit: "μg",
        value: 30,
    },
    {
        name: "Pantothenic Acid",
        unit: "mg",
        value: 5,
    },
    {
        name: "Phosphorus",
        unit: "mg",
        value: 1250,
    },
    {
        name: "Iodide",
        unit: "μg",
        value: 150,
    },
    {
        name: "Magnesium",
        unit: "mg",
        value: 420,
    },
    {
        name: "Zinc",
        unit: "mg",
        value: 11,
    },
    {
        name: "Selenium",
        unit: "μg",
        value: 55,
    },
    {
        name: "Copper",
        unit: "mg",
        value: 0.9,
    },
    {
        name: "Manganese",
        unit: "mg",
        value: 2.3,
    },
    {
        name: "Chromium",
        unit: "μg",
        value: 35,
    },
    {
        name: "Molybdenum",
        unit: "μg",
        value: 45,
    },
    {
        name: "Chloride",
        unit: "mg",
        value: 2300,
    }
]