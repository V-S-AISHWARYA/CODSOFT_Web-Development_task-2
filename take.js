function calculateScore() {
    let score = 0;
    let totalq = 3;
    
    const answers = {
        q1: "js",
        q2: "store",
        q3: "Procedural"
    };
    for (let i = 1; i <= totalq; i++) {
        const selector = `input[name="q${i}"]:checked`;
        const selected = document.querySelector(selector);
        
        if (selected && selected.value === answers[`q${i}`]) {
            score++;
        }
    }

    const result = document.getElementById('score-display');
    result.innerHTML = `Your final score is: ${score} out of ${totalq}`;
}
