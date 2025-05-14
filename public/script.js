document.getElementById('problem-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const userProblem = document.getElementById('user-problem').value;
    const aiSolutionDiv = document.getElementById('ai-solution');

    // Display a loading message
    aiSolutionDiv.innerHTML = '<p>Loading solution...</p>';

    try {
        const response = await fetch('https://skincare-ml-website.onrender.com/api/solution', { // Use your backend URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userProblem }),
        });

        const data = await response.json();

        if (data.solution) {
            aiSolutionDiv.innerHTML = `<h3>Solution:</h3><p>${data.solution}</p>`;
        } else {
            aiSolutionDiv.innerHTML = '<p>Sorry, no solution was found.</p>';
        }
    } catch (error) {
        console.error('Error fetching AI solution:', error);
        aiSolutionDiv.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
    }
});