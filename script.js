const weightSelector = document.getElementById('weight-selector');
const complimentText = document.getElementById('compliment');

const compliments = {
    100: "You are doing great! Keep up the awesome work!",
    105: "You're looking strong and determined!",
    110: "Your hard work is truly paying off!",
    115: "You're making amazing progress, keep going!",
    120: "You are unstoppable, stay focused!",
    125: "You’re pushing your limits every day!",
    130: "Incredible effort! You're an inspiration!",
    135: "You’re transforming and becoming stronger every day!",
    140: "Keep up the fantastic work, you're doing amazing!",
    145: "Your dedication is truly inspiring!",
    150: "You’re on a great path! Keep moving forward!",
    155: "You’re getting stronger with every step!",
    160: "Your consistency is leading to real results!",
    165: "Amazing job! Keep going, you're crushing it!",
    170: "You are achieving greatness, keep it up!",
    175: "You’re doing phenomenal, stay motivated!",
    180: "You are capable of incredible things, never stop!",
    185: "You’re stronger than you think. Keep going!",
    190: "Your journey is inspiring. Keep up the amazing work!",
    195: "You're conquering your goals, stay focused!",
    200: "You're unstoppable! Keep pushing forward!"
};

weightSelector.addEventListener('change', function() {
    const weight = weightSelector.value;
    complimentText.textContent = compliments[weight];
});

