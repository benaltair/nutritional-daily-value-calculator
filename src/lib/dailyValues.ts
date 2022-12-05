export interface Nutrient {
    name: string;
    key: string;
    unit: "g" | "mg" | "μg";
    value: number;
    percentage?: number;
}

// Daily values for nutrients in Canada (for adults)
// https://www.canada.ca/en/health-canada/services/technical-documents-labelling-requirements/table-daily-values/nutrition-labelling.html

export const dailyValues: Nutrient[] = [
    {
        name: "Total Fat",
        key: "fat",
        unit: "g",
        value: 75,

    },
    {
        name: "Saturated + Trans Fat",
        key: "saturatedAndTransFat",
        unit: "g",
        value: 20,
    },
    {
        name: "Fibre",
        key: "fibre",
        unit: "g",
        value: 28,
    }
    ,
    {
        name: "Sugars",
        key: "sugars",
        unit: "g",
        value: 100
    }
    ,
    {
        name: "Sodium",
        key: "sodium",
        unit: "mg",
        value: 2300,
    }
    ,
    {
        name: "Potassium",
        key: "potassium",
        unit: "mg",
        value: 3400,
    },
    {
        name: "Calcium",
        key: "calcium",
        unit: "mg",
        value: 1300,
    },
    {
        name: "Iron",
        key: "iron",
        unit: "mg",
        value: 18,
    },
    {
        name: "Vitamin A",
        key: "A",
        unit: "μg",
        value: 900,
    },
    {
        name: "Vitamin C",
        key: "C",
        unit: "mg",
        value: 90,
    },
    {
        name: "Vitamin D",
        key: "D",
        unit: "μg",
        value: 20,
    },
    {
        name: "Vitamin E",
        key: "E",
        unit: "mg",
        value: 15,
    },
    {
        name: "Vitamin K",
        key: "K",
        unit: "μg",
        value: 120,
    },
    {
        name: "Thiamine",
        key: "thiamine",
        unit: "mg",
        value: 1.2,
    },
    {
        name: "Riboflavin",
        key: "riboflavin",
        unit: "mg",
        value: 1.3,
    },
    {
        name: "Niacin",
        key: "niacin",
        unit: "mg",
        value: 16,
    },
    {
        name: "Vitamin B6",
        key: "B6",
        unit: "mg",
        value: 1.7,
    },
    {
        name: "Folate",
        key: "folate",
        unit: "μg",
        value: 400,

    },
    {
        name: "Vitamin B12",
        key: "B12",
        unit: "μg",
        value: 2.4,
    },
    {
        name: "Choline",
        key: "choline",
        unit: "mg",
        value: 550,
    },
    {
        name: "Biotin",
        key: "biotin",
        unit: "μg",
        value: 30,
    },
    {
        name: "Pantothenic Acid",
        key: "pantothenicAcid",
        unit: "mg",
        value: 5,
    },
    {
        name: "Phosphorus",
        key: "phosphorus",
        unit: "mg",
        value: 1250,
    },
    {
        name: "Iodide",
        key: "iodide",
        unit: "μg",
        value: 150,
    },
    {
        name: "Magnesium",
        key: "magnesium",
        unit: "mg",
        value: 420,
    },
    {
        name: "Zinc",
        key: "zinc",
        unit: "mg",
        value: 11,
    },
    {
        name: "Selenium",
        key: "selenium",
        unit: "μg",
        value: 55,
    },
    {
        name: "Copper",
        key: "copper",
        unit: "mg",
        value: 0.9,
    },
    {
        name: "Manganese",
        key: "manganese",
        unit: "mg",
        value: 2.3,
    },
    {
        name: "Chromium",
        key: "chromium",
        unit: "μg",
        value: 35,
    },
    {
        name: "Molybdenum",
        key: "molybdenum",
        unit: "μg",
        value: 45,
    },
    {
        name: "Chloride",
        key: "chloride",
        unit: "mg",
        value: 2300,
    }
]