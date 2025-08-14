import React from 'react';

// --- MOCK DATA & CONFIG ---
const exercisesByBodyPart = {
    'Chest': {
        'Compound': [
            { id: 'barbell_bench_press_flat', name: 'Barbell Bench Press (Flat)', type: 'reps', image: '/images/Barbell Bench flat.gif' },
            { id: 'dumbbell_bench_press_flat', name: 'Dumbbell Bench Press (Flat)', type: 'reps', image: '/images/flat dumbbell bench press.gif' },
            { id: 'push_ups', name: 'Push-Ups', type: 'reps', image: '/images/Push ups.gif' },
            { id: 'dips_chest', name: 'Dips (Chest-leaning)', type: 'reps', image: '/images/Dips (Chest-leaning).gif' },
            { id: 'machine_chest_press', name: 'Machine Chest Press', type: 'reps', image: '/images/Machine Chest Press.gif' },
        ],
        'Isolation': [
            { id: 'dumbbell_flyes_flat', name: 'Dumbbell Flyes (Flat)', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif' },
            { id: 'cable_flyes_mid', name: 'Cable Flyes', type: 'reps', image: '/images/Cable Fly.gif' },
            { id: 'pec_deck_machine', name: 'Pec Deck Machine', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif' },
        ]
    },
    'Shoulders': {
        'Compound': [
            { id: 'overhead_press_barbell', name: 'Overhead Press (Barbell)', type: 'reps', image: '/images/Overhead Press (Barbell).gif' },
            { id: 'arnold_press', name: 'Arnold Press', type: 'reps', image: '/images/arnold press.gif' },
            { id: 'push_press', name: 'Push Press', type: 'reps', image: '/images/Push Press.gif' },
        ],
        'Isolation': [
            { id: 'front_raise_dumbbell', name: 'Front Raise (Dumbbell)', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Front-Raise.gif' },
            { id: 'lateral_raise_dumbbell', name: 'Lateral Raise (Dumbbell)', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif' },
            { id: 'rear_delt_fly_dumbbell', name: 'Rear Delt Fly (Dumbbell)', type: 'reps', image: '/images/Rear Delt Fly (Dumbbell).gif' },
            { id: 'face_pulls', name: 'Face Pulls', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif' },
            { id: 'reverse_pec_deck', name: 'Reverse Pec Deck Machine', type: 'reps', image: '/images/Reverse Pec Deck Machine.gif' },
        ]
    },
    'Back': {
        'Compound': [
            { id: 'pull_ups', name: 'Pull-Ups', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif' },
            { id: 'barbell_row', name: 'Barbell Row', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif' },
            { id: 't_bar_row', name: 'T-Bar Row', type: 'reps', image: '/images/T-Bar Row.gif' },
            { id: 'lat_pulldown_wide', name: 'Lat Pulldown', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif' },
            { id: 'deadlift_conventional', name: 'Deadlift (Conventional)', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif' },
            { id: 'one_arm_dumbbell_row', name: 'One-Arm Dumbbell Row', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif' },
        ],
        'Isolation': [
            { id: 'straight_arm_pulldown', name: 'Straight Arm Pulldown', type: 'reps', image: '/images/Straight Arm Pulldown.gif' },
            { id: 'machine_row', name: 'Machine Row', type: 'reps', image: '/images/Machine Row.gif' },
        ]
    },
    'Biceps': {
        'Compound': [
            { id: 'chin_ups', name: 'Chin-Ups (Underhand)', type: 'reps', image: '/images/Chin-Ups (Underhand).gif' },
        ],
        'Isolation': [
            { id: 'barbell_curl', name: 'Barbell Curl', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif' },
            { id: 'dumbbell_curl_hammer', name: 'Hammer Curl (Dumbbell)', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif' },
            { id: 'concentration_curl', name: 'Concentration Curl', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Concentration-Curl.gif' },
            { id: 'preacher_curl_machine', name: 'Preacher Curl (Machine)', type: 'reps', image: '/images/Preacher Curl (Machine).gif' },
            { id: 'incline_dumbbell_curl', name: 'Incline Dumbbell Curl', type: 'reps', image: '/images/incline dumbbell curl.gif' },
        ]
    },
    'Triceps': {
         'Compound': [
            { id: 'close_grip_bench_press', name: 'Close Grip Bench Press', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Bench-Press.gif' },
            { id: 'dips_triceps', name: 'Dips (Triceps-focused)', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Dips.gif' },
         ],
         'Isolation': [
            { id: 'overhead_triceps_extension', name: 'Overhead Triceps Extension (Dumbbell)', type: 'reps', image: '/images/Overhead Triceps Extension.gif' },
            { id: 'triceps_pushdown_rope', name: 'Triceps Pushdown (Rope)', type: 'reps', image: '/images/Triceps Pushdown (Rope).gif' },
            { id: 'skull_crushers_ez', name: 'Skull Crushers (EZ bar)', type: 'reps', image: '/images/Skull Crushers (EZ Bar or Dumbbell).gif' },
         ]
    },
    'Legs': {
        'Compound': [
            { id: 'squat_back', name: 'Squat (Back)', type: 'reps', image: '/images/back squat.gif' },
            { id: 'front_squat', name: 'Front Squat', type: 'reps', image: '/images/front squat.gif' },
            { id: 'leg_press', name: 'Leg Press', type: 'reps', image: '/images/leg press.gif' },
            { id: 'romanian_deadlift', name: 'Romanian Deadlift', type: 'reps', image: '/images/romanian deadlift.gif' },
            { id: 'lunges_walking', name: 'Walking Lunges (Dumbbell)', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif' },
        ],
        'Isolation': [
            { id: 'leg_extension', name: 'Leg Extension', type: 'reps', image: '/images/leg extension.gif' },
            { id: 'hamstring_curl_lying', name: 'Lying Hamstring Curl', type: 'reps', image: '/images/Lying Hamstring Curl.gif' },
            { id: 'calf_raises_standing', name: 'Standing Calf Raises', type: 'reps', image: '/images/standing calf raise.gif' },
            { id: 'hip_thrusts', name: 'Hip Thrusts (Barbell)', type: 'reps', image: '/images/hip thrust.gif' },
        ]
    },
    'Core': {
        'Overall': [
            { id: 'plank', name: 'Plank', type: 'timed', image: '/images/Plank.gif' },
            { id: 'ab_wheel_rollout', name: 'Ab Wheel Rollout', type: 'reps', image: '/images/Ab Wheel Rollout.gif' },
            { id: 'mountain_climbers', name: 'Mountain Climbers', type: 'timed', image: '/images/Mountain Climbers.gif' }
        ],
        'Isolation': [
            { id: 'crunches', name: 'Crunches', type: 'reps', image: '/images/Crunches.gif' },
            { id: 'leg_raises_lying', name: 'Lying Leg Raises', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Leg-Raise.gif' },
            { id: 'russian_twists', name: 'Russian Twists', type: 'reps', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif' },
            { id: 'cable_woodchoppers', name: 'Cable Woodchoppers', type: 'reps', image: '/images/Cable Woodchoppers.gif' },
        ]
    }
};

const workoutPlans = {
    'push_day': {
        name: 'Push Day (Chest, Shoulders, Triceps)',
        type: 'ppl',
        exercises: [
            { name: 'Incline Barbell Bench Press', sets: 4, reps: '6-8', rest: '2-3 min', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Barbell-Bench-Press.gif' },
            { name: 'Flat Dumbbell Bench Press', sets: 3, reps: '8-10', rest: '2 min', image: '/images/flat dumbbell bench press.gif' },
            { name: 'Cable Fly (Low-to-High)', sets: 3, reps: '10-12', rest: '90 sec', image: '/images/Cable Fly (Low-to-High).gif' },
            { name: 'Overhead Press (Barbell or Dumbbell)', sets: 3, reps: '6-8', rest: '2 min', image: '/images/Overhead Press (Barbell or Dumbbell).gif' },
            { name: 'Lateral Raises', sets: 3, reps: '12-15', rest: '60-90 sec', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif' },
            { name: 'Triceps Pushdown (Rope)', sets: 3, reps: '10-12', rest: '90 sec', image: '/images/Triceps Pushdown (Rope).gif' },
            { name: 'Overhead Triceps Extension', sets: 3, reps: '10-12', rest: '90 sec', image: '/images/Overhead Triceps Extension.gif' },
        ]
    },
    'pull_day': {
        name: 'Pull Day (Back, Biceps)',
        type: 'ppl',
        exercises: [
            { name: 'Pull-Ups (Weighted if possible)', sets: 4, reps: '6-8', rest: '2-3 min', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif' },
            { name: 'Barbell Row (Overhand)', sets: 4, reps: '8-10', rest: '2 min', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif' },
            { name: 'One-Arm Dumbbell Row', sets: 3, reps: '8-10/side', rest: '90 sec', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif' },
            { name: 'Face Pulls', sets: 3, reps: '12-15', rest: '60-90 sec', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif' },
            { name: 'Barbell Curl (EZ Bar or Straight)', sets: 3, reps: '8-10', rest: '90 sec', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif' },
            { name: 'Incline Dumbbell Curl', sets: 3, reps: '10-12', rest: '90 sec', image: '/images/incline dumbbell curl.gif' },
        ]
    },
    'leg_day_ppl': {
        name: 'Leg Day (Quads, Hamstrings, Glutes, Calves)',
        type: 'ppl',
        exercises: [
            { name: 'Back Squat', sets: 4, reps: '6-8', rest: '2-3 min', image: '/images/back squat.gif' },
            { name: 'Romanian Deadlift', sets: 4, reps: '8-10', rest: '2-3 min', image: '/images/romanian deadlift.gif' },
            { name: 'Walking Lunges', sets: 3, reps: '10 steps/leg', rest: '90 sec', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif' },
            { name: 'Leg Press', sets: 3, reps: '10-12', rest: '2 min', image: '/images/leg press.gif' },
            { name: 'Leg Curl (Seated or Lying)', sets: 3, reps: '10-12', rest: '90 sec', image: '/images/Leg Curl (Seated or Lying).gif' },
            { name: 'Standing Calf Raise', sets: 4, reps: '12-15', rest: '60-90 sec', image: '/images/standing calf raise.gif' },
            { name: 'Hip Thrust', sets: 3, reps: '8-10', rest: '2 min', image: '/images/hip thrust.gif' },
        ]
    },
    'chest_shoulders_split': {
        name: 'Chest & Shoulders Focus',
        type: 'split',
        exercises: [
            { name: "Incline Barbell Bench Press", desc: "Targets the upper chest and builds overall pressing strength.", image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Barbell-Bench-Press.gif' },
            { name: "Flat Dumbbell Bench Press", desc: "Works the mid chest with a fuller range of motion than barbell.", image: '/images/flat dumbbell bench press.gif' },
            { name: "Cable Fly (Low-to-High)", desc: "Isolates and shapes the upper/inner chest.", image: '/images/Cable Fly (Low-to-High).gif' },
            { name: "Dips (Chest-leaning)", desc: "Emphasizes the lower chest and outer sweep when leaning forward.", image: '/images/Dips (Chest-leaning).gif' },
            { name: "Overhead Press (Barbell or Dumbbell)", desc: "Primary mass builder for front and side delts.", image: '/images/Overhead Press (Barbell or Dumbbell).gif' },
            { name: "Lateral Raises (Dumbbell or Cable)", desc: "Isolates the side delts for shoulder width.", image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif' },
            { name: "Face Pulls (Cable Rope)", desc: "Strengthens rear delts and improves shoulder joint health.", image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif' },
            { name: "Arnold Press", desc: "Hits all three deltoid heads with an extended range of motion.", image: '/images/arnold press.gif' },
        ]
    },
    'back_split': {
        name: 'Back Focus',
        type: 'split',
        exercises: [
             { name: "Pull-Ups (Weighted or Bodyweight)", desc: "Builds width by targeting the lats directly.", image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif' },
             { name: "Barbell Row (Overhand)", desc: "Adds thickness to the middle back and works traps.", image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif' },
             { name: "One-Arm Dumbbell Row", desc: "Isolates each side for balanced lat development.", image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif' },
             { name: "Lat Pulldown (Wide Grip)", desc: "Mimics pull-up motion and targets upper lats.", image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif' },
             { name: "Face Pulls (Cable Rope)", desc: "Strengthens rear delts and upper back for posture.", image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif' },
             { name: "Deadlift", desc: "Full-body power move that hits lower back, traps, and erectors.", image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif' },
        ]
    },
    'legs_split': {
        name: 'Legs Focus',
        type: 'split',
        exercises: [
            { name: "Back Squat", desc: "King of lower body lifts, builds overall leg mass and strength.", image: '/images/back squat.gif' },
            { name: "Front Squat", desc: "Emphasizes the quads and core stability.", image: '/images/front squat.gif' },
            { name: "Romanian Deadlift", desc: "Stretches and strengthens hamstrings and glutes.", image: '/images/romanian deadlift.gif' },
            { name: "Walking Lunges", desc: "Works quads, glutes, and balance at the same time.", image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif' },
            { name: "Leg Press", desc: "Heavy compound movement for quad thickness.", image: '/images/leg press.gif' },
            { name: "Leg Extension", desc: "Isolates the quads for definition.", image: '/images/leg extension.gif' },
            { name: "Seated or Lying Leg Curl", desc: "Isolates the hamstrings for size and strength.", image: '/images/Leg Curl (Seated or Lying).gif' },
            { name: "Standing Calf Raise", desc: "Builds calf size and ankle strength.", image: '/images/standing calf raise.gif' },
            { name: "Hip Thrust", desc: "Targets glutes for power and shape.", image: '/images/hip thrust.gif' },
        ]
    },
    'arms_split': {
        name: 'Arms Focus (Biceps & Triceps)',
        type: 'split',
        exercises: [
             { name: "Barbell Curl (Straight or EZ Bar)", desc: "Builds overall biceps mass and strength.", image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif' },
             { name: "Dumbbell Curl (Standard or Hammer Grip)", desc: "Adds peak and forearm thickness.", image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif' },
             { name: "Incline Dumbbell Curl", desc: "Stretches the biceps for greater muscle activation.", image: '/images/incline dumbbell curl.gif' },
             { name: "Concentration Curl", desc: "Isolates the biceps for a focused contraction.", image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Concentration-Curl.gif' },
             { name: "Close-Grip Bench Press", desc: "Heavy compound lift that adds triceps size and pressing strength.", image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Bench-Press.gif' },
             { name: "Overhead Triceps Extension (Dumbbell or Cable Rope)", desc: "Stretches and builds the long head of the triceps.", image: '/images/Overhead Triceps Extension.gif' },
             { name: "Triceps Pushdown (Rope or Straight Bar)", desc: "Isolates the triceps with constant cable tension.", image: '/images/Triceps Pushdown (Rope or Straight Bar).gif' },
             { name: "Skull Crushers (EZ Bar or Dumbbell)", desc: "Targets all three heads of the triceps with a strong lockout.", image: '/images/Skull Crushers (EZ Bar or Dumbbell).gif' },
        ]
    },
};

const bodyPartCategories = Object.keys(exercisesByBodyPart);

// --- REACT COMPONENTS ---

function App() {
    // --- STATE MANAGEMENT ---
    const [selectedCategory, setSelectedCategory] = React.useState(bodyPartCategories[0]);
    const [selectedMovementType, setSelectedMovementType] = React.useState(Object.keys(exercisesByBodyPart[bodyPartCategories[0]])[0]);
    const [selectedExercise, setSelectedExercise] = React.useState(exercisesByBodyPart[bodyPartCategories[0]][Object.keys(exercisesByBodyPart[bodyPartCategories[0]])[0]][0]);
    
    const [workoutLog, setWorkoutLog] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    // --- EVENT HANDLERS ---
    const handleCategoryChange = (event) => {
        const newCategory = event.target.value;
        setSelectedCategory(newCategory);
        const newMovementTypes = Object.keys(exercisesByBodyPart[newCategory]);
        const newMovementType = newMovementTypes[0];
        setSelectedMovementType(newMovementType);
        const newExercises = exercisesByBodyPart[newCategory][newMovementType];
        setSelectedExercise(newExercises[0]);
    };

    const handleMovementTypeChange = (event) => {
        const newMovementType = event.target.value;
        setSelectedMovementType(newMovementType);
        const newExercises = exercisesByBodyPart[selectedCategory][newMovementType];
        setSelectedExercise(newExercises[0]);
    };

    const handleExerciseChange = (event) => {
        const exerciseId = event.target.value;
        const exercise = exercisesByBodyPart[selectedCategory][selectedMovementType].find(ex => ex.id === exerciseId);
        setSelectedExercise(exercise);
    };

    const handleLogWorkout = (logData) => {
        const newLogEntry = {
            ...logData,
            id: new Date().toISOString(),
            exerciseId: selectedExercise.id,
            exerciseName: selectedExercise.name,
            category: selectedCategory,
            movementType: selectedMovementType,
            timestamp: new Date(),
        };
        setWorkoutLog(prevLogs => [newLogEntry, ...prevLogs]);
    };

    // --- RENDER ---
    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen font-['Inter'] p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <Header />
                <WorkoutPlans />
                <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>
                            Workout Logger
                        </h2>
                        <ExerciseSelector
                            selectedCategory={selectedCategory}
                            selectedMovementType={selectedMovementType}
                            selectedExerciseId={selectedExercise.id}
                            onCategoryChange={handleCategoryChange}
                            onMovementTypeChange={handleMovementTypeChange}
                            onExerciseChange={handleExerciseChange}
                        />
                        <WorkoutTracker
                            key={selectedExercise.id}
                            exercise={selectedExercise}
                            onLogWorkout={handleLogWorkout}
                        />
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <WorkoutLog logs={workoutLog} isLoading={isLoading} />
                    </div>
                </main>
            </div>
        </div>
    );
}

function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-gray-200 mb-6">
            <div>
                <h1 className="text-5xl font-extrabold text-gray-900 tracking-tighter">GymFit Tracker</h1>
                <p className="text-gray-600 mt-2 text-lg">Log your sets, reps, and follow structured workout plans.</p>
            </div>
        </header>
    );
}

function WorkoutPlans() {
    const [isOpen, setIsOpen] = React.useState(false);
    const planKeys = Object.keys(workoutPlans);
    const [selectedPlanKey, setSelectedPlanKey] = React.useState(planKeys[0]);

    const selectedPlan = workoutPlans[selectedPlanKey];

    return (
        <div className="my-6">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-4 bg-gray-800 hover:bg-gray-900 rounded-xl text-white font-bold text-lg transition-all flex justify-between items-center shadow-lg"
            >
                <span>{isOpen ? "Hide" : "Show"} Workout Plans</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            {isOpen && (
                 <div className="bg-white p-6 mt-4 rounded-2xl shadow-xl">
                    <div className="mb-6">
                        <label htmlFor="plan-select" className="block text-lg font-medium text-gray-700 mb-2">Choose a Plan:</label>
                        <select 
                            id="plan-select"
                            value={selectedPlanKey}
                            onChange={(e) => setSelectedPlanKey(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition"
                        >
                            {planKeys.map(key => (
                                <option key={key} value={key}>{workoutPlans[key].name}</option>
                            ))}
                        </select>
                    </div>
                    <h3 className="text-3xl font-bold text-blue-600 mb-4 tracking-tight">{selectedPlan.name}</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="p-4 font-semibold text-gray-600">Exercise</th>
                                    {selectedPlan.type === 'ppl' ? (
                                        <>
                                            <th className="p-4 text-center font-semibold text-gray-600">Sets</th>
                                            <th className="p-4 text-center font-semibold text-gray-600">Reps</th>
                                            <th className="p-4 text-center font-semibold text-gray-600">Rest</th>
                                        </>
                                    ) : (
                                        <th className="p-4 font-semibold text-gray-600">Description</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {selectedPlan.exercises.map(ex => (
                                    <tr key={ex.name} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-semibold">
                                            <div className="flex items-center gap-4">
                                                <img 
                                                    src={ex.image} 
                                                    alt={ex.name} 
                                                    className="w-16 h-16 object-cover rounded-md bg-gray-200"
                                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/F3F4F6/111827?text=N/A'; }}
                                                />
                                                <span className="text-gray-900">{ex.name}</span>
                                            </div>
                                        </td>
                                        {selectedPlan.type === 'ppl' ? (
                                            <>
                                                <td className="p-4 text-center text-gray-600">{ex.sets}</td>
                                                <td className="p-4 text-center text-gray-600">{ex.reps}</td>
                                                <td className="p-4 text-center text-gray-600">{ex.rest}</td>
                                            </>
                                        ) : (
                                            <td className="p-4 text-gray-600">{ex.desc}</td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                 </div>
            )}
        </div>
    );
}


function ExerciseSelector({ selectedCategory, selectedMovementType, selectedExerciseId, onCategoryChange, onMovementTypeChange, onExerciseChange }) {
    const movementTypes = Object.keys(exercisesByBodyPart[selectedCategory]);
    const exercises = exercisesByBodyPart[selectedCategory][selectedMovementType];

    return (
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Muscle Group</label>
                <select onChange={onCategoryChange} value={selectedCategory} className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition"><option value="" disabled>Select Muscle Group</option>{bodyPartCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}</select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Movement Type</label>
                <select onChange={onMovementTypeChange} value={selectedMovementType} className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition"><option value="" disabled>Select Type</option>{movementTypes.map(type => <option key={type} value={type}>{type}</option>)}</select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Exercise</label>
                <select onChange={onExerciseChange} value={selectedExerciseId} className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition"><option value="" disabled>Select Exercise</option>{exercises.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}</select>
            </div>
        </div>
    );
}

function WorkoutTracker({ exercise, onLogWorkout }) {
    return (
        <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">{exercise.name}</h3>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 md:w-1/2">
                    <img src={exercise.image} alt={`How to do ${exercise.name}`} className="w-full h-auto object-cover rounded-lg shadow-md border-2 border-gray-200" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/F3F4F6/111827?text=Image+Not+Found'; }}/>
                </div>
                <div className="md:w-1/2 flex">
                    {exercise.type === 'timed' ? <Timer onLogWorkout={onLogWorkout} /> : <RepCounter onLogWorkout={onLogWorkout} />}
                </div>
            </div>
        </div>
    );
}

function Timer({ onLogWorkout }) {
    const [time, setTime] = React.useState(0);
    const [isActive, setIsActive] = React.useState(false);
    const timerRef = React.useRef(null);

    React.useEffect(() => {
        if (isActive) {
            timerRef.current = setInterval(() => setTime(t => t + 1), 1000);
        } else {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [isActive]);

    const handleStartStop = () => setIsActive(!isActive);
    const handleReset = () => { setIsActive(false); setTime(0); };
    const handleLog = () => {
        if (time > 0) {
            onLogWorkout({ type: 'timed', duration: time });
            handleReset();
        } else {
            alert("Timer hasn't started yet!");
        }
    };
    const formatTime = (seconds) => new Date(seconds * 1000).toISOString().substr(11, 8);

    return (
        <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center h-full w-full border border-gray-200">
            <p className="text-gray-600 text-lg">Timer</p>
            <p className="text-6xl font-mono font-bold my-4 text-blue-600 tracking-tighter">{formatTime(time)}</p>
            <div className="flex gap-4 w-full">
                <button onClick={handleStartStop} className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${isActive ? 'bg-amber-400 hover:bg-amber-500 text-black' : 'bg-green-500 hover:bg-green-600 text-white'} shadow-md transform hover:scale-105`}>{isActive ? 'Pause' : 'Start'}</button>
                <button onClick={handleReset} className="w-full py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">Reset</button>
            </div>
            <button onClick={handleLog} className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all duration-300 disabled:bg-gray-300 shadow-md transform hover:scale-105 disabled:cursor-not-allowed" disabled={time === 0 && !isActive}>Log This Set</button>
        </div>
    );
}

function RepCounter({ onLogWorkout }) {
    const [reps, setReps] = React.useState(10);
    const [weight, setWeight] = React.useState(0);

    const handleLog = (e) => {
        e.preventDefault();
        if (parseInt(reps, 10) > 0) {
            onLogWorkout({ type: 'reps', reps: parseInt(reps, 10), weight: parseInt(weight, 10) });
        } else {
            alert("Please enter a valid number of reps.");
        }
    };

    return (
        <form onSubmit={handleLog} className="bg-gray-50 p-6 rounded-lg flex flex-col justify-center h-full w-full space-y-6 border border-gray-200">
            <div>
                <label htmlFor="reps" className="block text-lg font-medium text-gray-700 mb-2">Reps</label>
                <input id="reps" type="number" value={reps} onChange={(e) => setReps(e.target.value)} className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition" min="1" />
            </div>
            <div>
                <label htmlFor="weight" className="block text-lg font-medium text-gray-700 mb-2">Weight (kg) <span className="text-gray-500">(optional)</span></label>
                <input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition" min="0" />
            </div>
            <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all duration-300 shadow-md transform hover:scale-105">Log This Set</button>
        </form>
    );
}

function WorkoutLog({ logs, isLoading, error }) {
    const formatTimestamp = (ts) => ts ? ts.toLocaleString() : 'Just now';

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                Workout History
            </h2>
            {error && <p className="text-red-500">{error}</p>}
            {isLoading && <p className="text-gray-500">Loading history...</p>}
            {!isLoading && logs.length === 0 && <p className="text-gray-500">No workouts logged yet!</p>}
            <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-2">
                {logs.map(log => (
                    <div key={log.id} className="bg-gray-50 border border-gray-200 p-4 rounded-lg transition-all hover:shadow-md hover:border-blue-300">
                        <p className="font-bold text-blue-600">{log.exerciseName}</p>
                        <p className="text-sm text-gray-600">{log.category} <span className="text-gray-400">({log.movementType})</span></p>
                        {log.type === 'timed' ? (
                            <p className="text-gray-800 mt-1">Duration: {log.duration} seconds</p>
                        ) : (
                            <p className="text-gray-800 mt-1">Reps: {log.reps} {log.weight > 0 ? `@ ${log.weight} kg` : ''}</p>
                        )}
                        <p className="text-xs text-gray-400 mt-2">{formatTimestamp(log.timestamp)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
