const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Static data for skincare solutions
const skincareData = [
    { symptom: "Dry Skin", solution: "Use a moisturizer with hyaluronic acid. Drink 8–10 glasses of water daily. Avoid hot showers." },
    { symptom: "Oily Skin", solution: "Cleanse twice daily with a gentle foaming cleanser. Use an oil-free, non-comedogenic moisturizer." },
    { symptom: "Acne", solution: "Use salicylic acid or benzoyl peroxide-based products. Don’t touch or pop pimples. Maintain a clean pillowcase." },
    { symptom: "Blackheads", solution: "Exfoliate 2–3 times per week using BHA. Use a clay mask and avoid oil-heavy makeup." },
    { symptom: "Whiteheads", solution: "Use a salicylic acid cleanser and niacinamide serum. Exfoliate gently. Avoid greasy products." },
    { symptom: "Dark Circles", solution: "Sleep 7–8 hours daily. Use an under-eye cream with vitamin C or caffeine. Apply cold compresses." },
    { symptom: "Pigmentation", solution: "Use sunscreen daily. Apply serums with niacinamide, alpha arbutin, or kojic acid." },
    { symptom: "Sunburn", solution: "Apply aloe vera gel. Use cool compresses. Avoid sun exposure and hydrate well." },
    { symptom: "Open Pores", solution: "Use toners with witch hazel or niacinamide. Apply clay masks weekly. Keep skin clean and exfoliated." },
    { symptom: "Uneven Skin Tone", solution: "Use vitamin C serum in the morning and sunscreen daily. Exfoliate regularly with AHAs." },
    { symptom: "Rashes or Itching", solution: "Use fragrance-free moisturizers. Apply calamine lotion. Avoid known allergens or irritants." },
    { symptom: "Redness/Rosacea", solution: "Use soothing products with centella or green tea. Avoid spicy foods, alcohol, and extreme temperatures." },
    { symptom: "Dehydrated Skin", solution: "Use a hydrating toner and glycerin-based moisturizer. Avoid alcohol-heavy skincare products." },
    { symptom: "Dull Skin", solution: "Use vitamin C and exfoliate gently with lactic acid. Stay hydrated and get adequate sleep." }
];

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoint for Skincare Solution
app.post('/api/solution', (req, res) => {
    const { userProblem } = req.body;

    console.log('Received problem:', userProblem); // Log the input

    // Find a matching solution
    const match = skincareData.find(item => item.symptom.toLowerCase() === userProblem.toLowerCase());

    if (match) {
        res.json({ solution: match.solution });
    } else {
        res.json({ solution: "Sorry, no solution was found for your problem." });
    }
});

// Default Route to Serve Frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});