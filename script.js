const weightSelector = document.getElementById('weight-selector');
const complimentText = document.getElementById('compliment');

const compliments = {
    100: "You're off to a strong start! Keep it up!",
    105: "You're doing amazing! Keep pushing forward!",
    110: "Great job! Every step counts!",
    115: "You're looking stronger every day!",
    120: "Fantastic! Your progress is inspiring!",
    125: "You're a true fitness warrior!",
    130: "You're crushing your goals! Keep it going!",
    135: "You're getting stronger with every workout!",
    140: "Incredible effort! You're unstoppable!",
    145: "Your dedication is paying off, keep going!",
    150: "You're making amazing progress, keep it up!",
    155: "You're a force to be reckoned with!",
    160: "Your hard work is inspiring!",
    165: "You're getting stronger each day!",
    170: "You're looking awesome, keep pushing!",
    175: "You're an absolute powerhouse!",
    180: "You're transforming your body, keep going!",
    185: "You're on fire, keep that momentum!",
    190: "You're a fitness champion!",
    195: "You're a beast! Keep going!",
    200: "You're unstoppable! Great job!"
};

weightSelector.addEventListener('change', function() {
    const weight = weightSelector.value;
    complimentText.textContent = compliments[weight];
});
