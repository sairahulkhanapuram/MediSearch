const topics = [
  {
    id: 'heart-attack',
    title: 'Heart Attack',
    category: 'Critical',
    icon: '❤️',
    description: 'Recognize warning signs and seek emergency help immediately.',
    symptoms: ['Chest discomfort or pressure', 'Shortness of breath', 'Cold sweat', 'Lightheadedness', 'Nausea'],
    steps: ['Call emergency services immediately.', 'Help the person sit or lie down comfortably.', 'Loosen tight clothing and reassure them.', 'Monitor breathing and pulse closely.', 'Do not give food or drink unless advised by a professional.'],
    precautions: ['Keep the scene calm and safe.', 'Avoid sudden movement.', 'Do not let the person drive themselves.', 'Stay with them until help arrives.'],
    notToDo: ['Do not wait for symptoms to disappear.', 'Do not give aspirin unless advised.', 'Do not ignore persistent chest pain.'],
    whenToSeekHelp: ['Pain lasts more than a few minutes.', 'Trouble breathing or sudden weakness.', 'Sweating with dizziness.', 'Loss of consciousness.'],
    emergencyTip: 'Call emergency services without delay and keep the person calm.',
  },
  {
    id: 'stroke',
    title: 'Stroke',
    category: 'Critical',
    icon: '🧠',
    description: 'Act fast on stroke symptoms and get professional help urgently.',
    symptoms: ['Face drooping', 'Arm weakness', 'Speech difficulty', 'Sudden confusion', 'Trouble seeing'],
    steps: ['Call emergency services immediately.', 'Keep the person comfortable and supported.', 'Note the time symptoms started.', 'Do not give food or drink.', 'Stay calm and monitor breathing.'],
    precautions: ['Keep the person lying down safely.', 'Protect them from injury.', 'Do not leave them alone.', 'Avoid moving their head or neck.'],
    notToDo: ['Do not wait to see if symptoms pass.', 'Do not offer any medicine without advice.', 'Do not let them walk or stand alone.'],
    whenToSeekHelp: ['Sudden weakness in face or arm.', 'Trouble speaking clearly.', 'Sudden severe headache.', 'Loss of vision or coordination.'],
    emergencyTip: 'Recognize FAST signs and call for urgent help right away.',
  },
  {
    id: 'drowning',
    title: 'Drowning',
    category: 'Critical',
    icon: '🌊',
    description: 'Respond quickly if someone is struggling in water or has inhaled water.',
    symptoms: ['Difficulty breathing', 'Coughing water', 'Pale or blue skin', 'Weak or noisy breathing', 'Confusion'],
    steps: ['Call for help and remove the person from the water safely.', 'Check breathing and pulse once out of the water.', 'Keep the airway open and clear.', 'Warm them gently and keep them lying still.', 'If unresponsive, begin CPR if trained.'],
    precautions: ['Do not enter dangerous water alone.', 'Avoid moving the person unless safe.', 'Watch for delayed breathing issues.', 'Keep them warm after rescue.'],
    notToDo: ['Do not give food or drink if they are breathing poorly.', 'Do not slap the person hard.', 'Do not leave them unattended.'],
    whenToSeekHelp: ['They remain short of breath.', 'They are confused or weak.', 'They lose consciousness.', 'They show persistent coughing or chest pain.'],
    emergencyTip: 'Act fast to remove them from water and call for help.',
  },
  {
    id: 'cpr',
    title: 'CPR',
    category: 'Critical',
    icon: '💓',
    description: 'CPR helps maintain circulation until medical help arrives.',
    symptoms: ['Unconsciousness', 'No normal breathing', 'No response', 'Pale or bluish skin'],
    steps: ['Call emergency services immediately.', 'Lay the person on a firm surface.', 'Place your hands in the center of the chest.', 'Push hard and fast at a steady pace.', 'Resume normal breathing checks when possible.'],
    precautions: ['Only perform CPR if the person is unresponsive.', 'Keep your hands positioned correctly.', 'Do not interrupt chest compressions unnecessarily.'],
    notToDo: ['Do not perform CPR on someone who is breathing normally.', 'Do not stop too often.', 'Do not apply pressure to the ribs incorrectly.'],
    whenToSeekHelp: ['The person is not breathing.', 'They remain unconscious.', 'There are signs of cardiac arrest.', 'You are unsure how to continue.'],
    emergencyTip: 'Call for help first, then start chest compressions if trained.',
  },
  {
    id: 'electric-shock',
    title: 'Electric Shock',
    category: 'Critical',
    icon: '⚡',
    description: 'Ensure the power source is off before helping the injured person.',
    symptoms: ['Burn marks', 'Muscle pain', 'Difficulty breathing', 'Confusion', 'Unconsciousness'],
    steps: ['Switch off the power source if it is safe to do so.', 'Do not touch the person while the current is on.', 'Call emergency services if the person is injured.', 'Cover burns with a clean, dry cloth.', 'Monitor breathing and circulation.'],
    precautions: ['Keep the area safe.', 'Use a non-conductive object if needed.', 'Avoid touching the person directly until power is off.'],
    notToDo: ['Do not pull the person away while current is present.', 'Do not pour water on electrical burns.', 'Do not ignore loss of consciousness.'],
    whenToSeekHelp: ['The person is unconscious.', 'They have difficulty breathing.', 'There are deep burns.', 'They feel weak or confused.'],
    emergencyTip: 'Cut power first, then call for medical help and watch for breathing.',
  },
  {
    id: 'burns',
    title: 'Burns',
    category: 'Trauma',
    icon: '🔥',
    description: 'Cool minor burns and protect the skin to reduce damage.',
    symptoms: ['Redness', 'Pain', 'Swelling', 'Blisters', 'Warm skin'],
    steps: ['Remove the source of heat.', 'Cool the burn with running water for several minutes.', 'Cover with a clean, non-stick dressing.', 'Avoid bursting blisters.', 'Keep the person comfortable and warm.'],
    precautions: ['Do not apply ice directly.', 'Keep the burn area clean.', 'Do not use creams on serious burns.'],
    notToDo: ['Do not burst blisters.', 'Do not apply butter or oils.', 'Do not use adhesive dressings on the burn.'],
    whenToSeekHelp: ['The burn is large or very painful.', 'It affects the face or joints.', 'The person has difficulty breathing.', 'Signs of infection develop.'],
    emergencyTip: 'Cool the burn gently and protect it with clean material.',
  },
  {
    id: 'cuts',
    title: 'Cuts',
    category: 'Trauma',
    icon: '✂️',
    description: 'Clean cuts carefully and keep them covered to prevent infection.',
    symptoms: ['Bleeding', 'Pain', 'Swelling', 'Red edges', 'Dirt in the wound'],
    steps: ['Wash your hands and apply gentle pressure to stop bleeding.', 'Clean the cut with fresh water.', 'Cover with a sterile bandage.', 'Change the dressing if it becomes dirty.', 'Watch for signs of infection.'],
    precautions: ['Keep the wound dry and clean.', 'Avoid touching the cut with dirty hands.', 'Use a clean dressing.'],
    notToDo: ['Do not remove embedded objects yourself.', 'Do not apply strong antiseptics directly.', 'Do not ignore heavy bleeding.'],
    whenToSeekHelp: ['Bleeding does not stop.', 'The cut is deep or wide.', 'There is numbness or loss of movement.', 'Signs of infection appear.'],
    emergencyTip: 'Stop the bleeding with pressure, then keep the wound covered and clean.',
  },
  {
    id: 'bleeding',
    title: 'Bleeding',
    category: 'Trauma',
    icon: '🩸',
    description: 'Apply direct pressure and protect the wound until help arrives.',
    symptoms: ['Continuous bleeding', 'Soaked cloth', 'Pale skin', 'Dizziness', 'Weak pulse'],
    steps: ['Press firmly on the wound using clean material.', 'Keep pressure steady without lifting.', 'Elevate the injured area when possible.', 'If bleeding soaks through, add more dressing.', 'Seek help for heavy or uncontrolled bleeding.'],
    precautions: ['Avoid loosening the dressing.', 'Keep the injured limb elevated.', 'Stay calm and speak softly.'],
    notToDo: ['Do not remove the first dressing.', 'Do not apply a tourniquet unless trained.', 'Do not let the person walk if bleeding continues.'],
    whenToSeekHelp: ['Bleeding does not slow down.', 'There is blood loss from a major wound.', 'The person feels faint or weak.'],
    emergencyTip: 'Apply strong pressure and keep the wound elevated until help arrives.',
  },
  {
    id: 'fractures',
    title: 'Fractures',
    category: 'Trauma',
    icon: '🦴',
    description: 'Keep broken bones still and supported until professional care is available.',
    symptoms: ['Pain', 'Swelling', 'Deformity', 'Bruising', 'Difficulty moving the limb'],
    steps: ['Keep the injured area still and supported.', 'Use padding to support the limb if needed.', 'Do not try to straighten the bone.', 'Apply cold compresses gently around the injury.', 'Seek medical care promptly.'],
    precautions: ['Avoid putting weight on the limb.', 'Keep the person comfortable.', 'Do not squeeze or manipulate the area.'],
    notToDo: ['Do not move the injury unnecessarily.', 'Do not let the person continue normal activity.', 'Do not ignore severe pain.'],
    whenToSeekHelp: ['There is visible bone or deformity.', 'The person cannot move the limb.', 'The limb is numb or cold.', 'The pain is severe.'],
    emergencyTip: 'Support the injured area and get professional assessment quickly.',
  },
  {
    id: 'sprains',
    title: 'Sprains',
    category: 'Trauma',
    icon: '🤕',
    description: 'Rest and protect sprained joints to help reduce swelling.',
    symptoms: ['Pain around a joint', 'Swelling', 'Bruising', 'Limited motion', 'Tenderness'],
    steps: ['Rest the injured joint and avoid weight.', 'Apply ice wrapped in cloth for 10 to 15 minutes.', 'Compress with an elastic bandage if comfortable.', 'Elevate the limb above heart level.', 'Check circulation regularly.'],
    precautions: ['Do not keep applying ice for too long.', 'Avoid high-impact activities.', 'Keep the joint supported.'],
    notToDo: ['Do not ignore persistent swelling.', 'Do not force movement through pain.', 'Do not wrap too tightly.'],
    whenToSeekHelp: ['Pain is severe or does not improve.', 'The joint is numb or cold.', 'You cannot move the limb.'],
    emergencyTip: 'RICE: rest, ice, compression, and elevation until help is available.',
  },
  {
    id: 'fainting',
    title: 'Fainting',
    category: 'Medical',
    icon: '😴',
    description: 'Help someone who fainted by keeping them comfortable and monitoring closely.',
    symptoms: ['Dizziness', 'Weakness', 'Nausea', 'Pale skin', 'Blurred vision'],
    steps: ['Lay the person down on their back.', 'Raise their legs slightly.', 'Loosen tight clothing around the neck.', 'Check their breathing and pulse.', 'Keep them lying down until they feel steady.'],
    precautions: ['Do not let them stand up too quickly.', 'Keep the area clear of hazards.', 'Stay with them until they recover.'],
    notToDo: ['Do not offer strong coffee or food immediately.', 'Do not leave them alone.', 'Do not assume the cause is not serious.'],
    whenToSeekHelp: ['They do not regain consciousness quickly.', 'There is confusion after waking.', 'They have repeated fainting episodes.'],
    emergencyTip: 'Lay them flat, raise their legs, and observe how they recover.',
  },
  {
    id: 'seizures',
    title: 'Seizures',
    category: 'Medical',
    icon: '⚡',
    description: 'Protect the person from injury and seek help if needed.',
    symptoms: ['Uncontrolled shaking', 'Loss of awareness', 'Odd movements', 'Drooling', 'Confusion afterward'],
    steps: ['Move nearby objects away from the person.', 'Do not restrain their movements.', 'Place something soft under their head.', 'Time the seizure and stay with them.', 'Call for help if it lasts longer than five minutes.'],
    precautions: ['Protect their head from hard surfaces.', 'Keep the airway open after the seizure.', 'Remain calm and supportive.'],
    notToDo: ['Do not put anything in their mouth.', 'Do not hold them down.', 'Do not give food or drink until fully alert.'],
    whenToSeekHelp: ['The seizure lasts more than five minutes.', 'They have repeated seizures.', 'They are injured during the seizure.', 'They do not wake normally afterward.'],
    emergencyTip: 'Keep them safe, time the episode, and call for help if needed.',
  },
  {
    id: 'allergic-reaction',
    title: 'Severe Allergic Reaction',
    category: 'Medical',
    icon: '🤧',
    description: 'Seek urgent help if someone has a serious allergic reaction.',
    symptoms: ['Swelling of face or throat', 'Trouble breathing', 'Hives', 'Dizziness', 'Weak pulse'],
    steps: ['Call emergency services right away.', 'Help the person sit comfortably.', 'Loosen tight clothing.', 'If they have emergency medication, assist them to use it.', 'Monitor breathing and consciousness.'],
    precautions: ['Stay calm and keep them reassured.', 'Avoid exposure to the allergen.', 'Do not leave them alone.'],
    notToDo: ['Do not wait to see if symptoms improve.', 'Do not give food or drink if breathing is affected.', 'Do not ignore throat tightness.'],
    whenToSeekHelp: ['They have trouble breathing.', 'Swelling affects the face or throat.', 'They feel dizzy or faint.'],
    emergencyTip: 'Call for urgent help and support their breathing while waiting.',
  },
  {
    id: 'heatstroke',
    title: 'Heatstroke',
    category: 'Environmental',
    icon: '🌡️',
    description: 'Cool the person quickly and get medical help if symptoms are severe.',
    symptoms: ['High body temperature', 'Headache', 'Confusion', 'Hot, dry skin', 'Fast heartbeat'],
    steps: ['Move them to shade or a cool spot.', 'Loosen clothing.', 'Apply cool, damp cloths to the skin.', 'Offer small sips of water if alert.', 'Call medical help if symptoms are severe.'],
    precautions: ['Do not leave them in direct sun.', 'Watch for rising temperature.', 'Keep them comfortable and calm.'],
    notToDo: ['Do not give cold water too quickly.', 'Do not ignore confusion.', 'Do not leave them alone.'],
    whenToSeekHelp: ['They become confused or faint.', 'Their body temperature stays high.', 'They vomit or cannot drink.'],
    emergencyTip: 'Cool them down gently and seek help if they stay very hot or confused.',
  },
  {
    id: 'hypothermia',
    title: 'Hypothermia',
    category: 'Environmental',
    icon: '❄️',
    description: 'Warm the person gradually and seek professional care when needed.',
    symptoms: ['Shivering', 'Slow speech', 'Confusion', 'Cold skin', 'Slow pulse'],
    steps: ['Move them to a warmer place.', 'Remove wet clothing.', 'Wrap them in blankets.', 'Offer warm drinks if they are awake and alert.', 'Monitor breathing carefully.'],
    precautions: ['Avoid rapid rewarming.', 'Protect them from wind and cold.', 'Keep them warm and dry.'],
    notToDo: ['Do not rub their skin vigorously.', 'Do not give alcohol.', 'Do not leave them in the cold.'],
    whenToSeekHelp: ['They remain very cold.', 'They are confused or sleepy.', 'Their breathing is slow or shallow.'],
    emergencyTip: 'Warm them slowly and call for help if cooling continues.',
  },
  {
    id: 'dehydration',
    title: 'Dehydration',
    category: 'Environmental',
    icon: '💧',
    description: 'Provide fluids and cool the person if they show dehydration signs.',
    symptoms: ['Thirst', 'Dry mouth', 'Dark urine', 'Dizziness', 'Tiredness'],
    steps: ['Move them to a cool place.', 'Offer small sips of water.', 'Help them rest.', 'Monitor their condition.', 'Seek advice if symptoms worsen.'],
    precautions: ['Do not give large amounts of water quickly.', 'Avoid hot, direct sunlight.', 'Encourage slow rehydration.'],
    notToDo: ['Do not give alcohol or caffeinated drinks.', 'Do not force them to drink if unconscious.', 'Do not leave them in the heat.'],
    whenToSeekHelp: ['They feel weak or faint.', 'They have little or no urine.', 'They are confused or irritable.'],
    emergencyTip: 'Offer small sips of water and move them to a cooler place.',
  },
  {
    id: 'poisoning',
    title: 'Poisoning',
    category: 'Environmental',
    icon: '☠️',
    description: 'Get help quickly if someone is exposed to a poisonous substance.',
    symptoms: ['Nausea', 'Vomiting', 'Stomach pain', 'Confusion', 'Breathing difficulty'],
    steps: ['Call emergency services or poison control immediately.', 'Keep the person calm and still.', 'Do not induce vomiting unless advised.', 'Provide information about the substance.', 'Follow professional instructions carefully.'],
    precautions: ['Keep dangerous substances out of reach.', 'Check labels before use.', 'Do not guess what was swallowed.'],
    notToDo: ['Do not give them food or drink unless advised.', 'Do not delay calling for help.', 'Do not leave them alone.'],
    whenToSeekHelp: ['They are vomiting repeatedly.', 'They have trouble breathing.', 'They are confused or unconscious.'],
    emergencyTip: 'Call for expert advice and do not make assumptions.',
  },
  {
    id: 'eye-injury',
    title: 'Eye Injury',
    category: 'Trauma',
    icon: '👁️',
    description: 'Rinse gentle eye injuries with clean water and protect the eye.',
    symptoms: ['Pain in the eye', 'Redness', 'Tearing', 'Blurred vision', 'Sensitivity to light'],
    steps: ['Do not rub the eye.', 'Rinse carefully with clean water.', 'Cover the eye lightly if needed.', 'Avoid applying pressure.', 'Seek help if pain or vision changes persist.'],
    precautions: ['Keep fingers away from the eye.', 'Use clean water only.', 'Do not apply ointments without advice.'],
    notToDo: ['Do not rub the injured eye.', 'Do not try to remove an embedded object.', 'Do not ignore blurred vision.'],
    whenToSeekHelp: ['Pain is severe.', 'Vision is affected.', 'A foreign object remains in the eye.'],
    emergencyTip: 'Rinse the eye gently and seek care if discomfort continues.',
  },
  {
    id: 'insect-stings',
    title: 'Insect Stings',
    category: 'Trauma',
    icon: '🐝',
    description: 'Clean and soothe insect stings while watching for allergic reactions.',
    symptoms: ['Sharp pain', 'Redness', 'Swelling', 'Itching', 'Hives'],
    steps: ['Remove any visible sting carefully.', 'Wash the area with mild soap and water.', 'Apply a cool compress.', 'Keep the area clean and dry.', 'Seek help if swelling spreads.'],
    precautions: ['Avoid scratching the area.', 'Check for signs of allergy.', 'Keep the person calm.'],
    notToDo: ['Do not squeeze the sting forcefully.', 'Do not ignore growing swelling.', 'Do not apply strong irritants.'],
    whenToSeekHelp: ['They have trouble breathing.', 'Swelling spreads rapidly.', 'They feel dizzy or weak.'],
    emergencyTip: 'Remove the sting and cool the area while watching for any reaction.',
  },
  {
    id: 'minor-burns',
    title: 'Minor Burns',
    category: 'Trauma',
    icon: '🩹',
    description: 'Cool small burns and cover them to support healing.',
    symptoms: ['Red skin', 'Pain', 'Swelling', 'Blistering', 'Warmth'],
    steps: ['Hold the burn under cool running water for several minutes.', 'Do not apply ice directly to the skin.', 'Dry gently and cover with a clean dressing.', 'Keep the area protected.', 'Monitor for signs of infection.'],
    precautions: ['Use cool water, not ice.', 'Keep the burn clean.', 'Avoid tight or dirty dressings.'],
    notToDo: ['Do not apply butter or grease.', 'Do not burst blisters.', 'Do not use adhesive on the burn.'],
    whenToSeekHelp: ['The burn covers a large area.', 'The pain is severe.', 'The area looks infected.'],
    emergencyTip: 'Cool the burn with water and protect it with a clean covering.',
  },
];

const dom = {};
const themeKey = 'medisearchTheme';
const favoritesKey = 'medisearchFavorites';
const recentsKey = 'medisearchRecents';
const maxRecentItems = 5;
let activeTopic = null;
let activeScenario = null;
let topicFavorites = new Set();
let recentTopics = [];
const getElement = (id) => document.getElementById(id);

const isFavorite = (topicId) => topicFavorites.has(topicId);

const saveFavorites = () => {
  localStorage.setItem(favoritesKey, JSON.stringify(Array.from(topicFavorites)));
};

const saveRecents = () => {
  localStorage.setItem(recentsKey, JSON.stringify(recentTopics));
};

const loadSavedState = () => {
  const storedFavorites = JSON.parse(localStorage.getItem(favoritesKey) || '[]');
  const storedRecents = JSON.parse(localStorage.getItem(recentsKey) || '[]');
  topicFavorites = new Set(storedFavorites);
  recentTopics = Array.isArray(storedRecents) ? storedRecents : [];
};

const addRecentTopic = (topic) => {
  recentTopics = [topic.id, ...recentTopics.filter((id) => id !== topic.id)].slice(0, maxRecentItems);
  saveRecents();
  renderRecentList();
};

const updateFavoriteCount = () => {
  if (dom.favoriteCount) dom.favoriteCount.textContent = topicFavorites.size;
};

const renderRecentList = () => {
  if (!dom.recentList) return;
  if (recentTopics.length === 0) {
    dom.recentList.innerHTML = '<li>No topics viewed yet. Open one to begin.</li>';
    return;
  }
  dom.recentList.innerHTML = recentTopics
    .map((id) => {
      const topic = topics.find((item) => item.id === id);
      return topic
        ? `<li><button type="button" class="recent-link" data-id="${topic.id}">${topic.title}</button></li>`
        : '';
    })
    .join('');
  dom.recentList.querySelectorAll('.recent-link').forEach((button) => {
    button.addEventListener('click', () => {
      const topic = topics.find((item) => item.id === button.dataset.id);
      if (topic) openTopicLoading(topic);
    });
  });
};

const toggleFavorite = (topicId) => {
  if (topicFavorites.has(topicId)) {
    topicFavorites.delete(topicId);
  } else {
    topicFavorites.add(topicId);
  }
  saveFavorites();
  renderTopicCards();
  updateFavoriteCount();
};

const createTopicCard = (topic) => `
  <article class="topic-card" data-id="${topic.id}">
    <div class="card-top">
      <div class="card-head">
        <span class="icon-wrapper">${topic.icon}</span>
        <div>
          <h4>${topic.title}</h4>
          <p>${topic.description}</p>
        </div>
      </div>
      <button class="favorite-btn ${isFavorite(topic.id) ? 'active' : ''}" type="button" title="Save favorite" data-favorite="${topic.id}">
        ❤️
      </button>
    </div>
    <div class="card-meta">
      <span class="topic-tag ${topic.category}">${topic.category}</span>
      <p class="card-snippet">${(topic.symptoms || []).slice(0, 3).join(' • ')}</p>
    </div>
  </article>
`;

const scenarios = [
  {
    id: 'fainted',
    title: 'Someone fainted',
    message: 'The person is dizzy or collapsed. Start by keeping them supported and watching their breathing.',
    consciousSteps: ['Help the person lie down and raise their legs slightly.', 'Loosen tight clothing around the neck and waist.', 'Ask them to breathe deeply and rest.', 'Offer water once they are fully alert.', 'Keep them lying down for a few minutes before sitting up.'],
    unconsciousSteps: ['Call emergency services right away.', 'Check breathing and pulse.', 'If they are not breathing normally, begin CPR if trained.', 'Place them in the recovery position if they are breathing.', 'Stay with them and monitor until help arrives.'],
    highlight: 'If they are conscious, keep them lying down with legs raised; if unconscious, call for help immediately.',
  },
  {
    id: 'drowning',
    title: 'Someone drowning',
    message: 'Water emergencies require fast, calm action and a safe rescue approach.',
    consciousSteps: ['Remove them from the water safely if possible.', 'Keep the airway open and watch breathing.', 'Warm them gently with blankets.', 'Encourage slow breathing while waiting for help.', 'Call emergency services for any breathing concerns.'],
    unconsciousSteps: ['Call emergency services immediately.', 'Check breathing and pulse once out of the water.', 'Begin CPR if trained and the person is not breathing.', 'Keep the head supported and airway clear.', 'Stay with them until professional help arrives.'],
    highlight: 'If unconscious, start basic life support after rescue; if conscious, keep them warm and monitored.',
  },
  {
    id: 'bleeding',
    title: 'Someone bleeding',
    message: 'Stop the bleed with steady pressure and protect the wound until help arrives.',
    consciousSteps: ['Press firmly on the wound with clean cloth or dressing.', 'Elevate the injured area if possible.', 'Add more dressing without removing the first layer if needed.', 'Keep them calm and still.', 'Call for help if bleeding continues.'],
    unconsciousSteps: ['Call emergency services immediately.', 'Keep firm pressure on the wound.', 'If the person is breathing, place them in the recovery position.', 'Watch for signs of shock and keep them warm.', 'Do not remove dressings unless instructed by a professional.'],
    highlight: 'The most important action is firm pressure on the wound until bleeding slows.',
  },
  {
    id: 'choking',
    title: 'Someone choking',
    message: 'Choking is a breathing emergency. Act quickly and avoid delay.',
    consciousSteps: ['Ask the person to cough and lean forward.', 'Give gentle back blows between the shoulder blades.', 'If trained, perform abdominal thrusts.', 'Call emergency services if the object does not clear.', 'Keep monitoring breathing and consciousness.'],
    unconsciousSteps: ['Call emergency services immediately.', 'If the person goes unconscious, begin CPR if trained.', 'Check the mouth for any visible object and remove it safely.', 'Continue care until professionals take over.', 'Keep their airway open and support breathing.'],
    highlight: 'If they can breathe, encourage coughing; if not, call for help and prepare to assist. ',
  },
  {
    id: 'collapsed',
    title: 'Someone collapsed',
    message: 'A sudden collapse may need quick attention and a calm response.',
    consciousSteps: ['Help them sit or lie down in a safe position.', 'Check if they feel weak or dizzy.', 'Offer water only if they are fully alert.', 'Keep them comfortable and monitor breathing.', 'Call for medical advice if they do not recover.'],
    unconsciousSteps: ['Call emergency services right away.', 'Check breathing and pulse.', 'Place them in the recovery position if they are breathing.', 'Begin CPR if they are not breathing normally and you are trained.', 'Stay with them until help arrives.'],
    highlight: 'If they are unconscious, call for help immediately and support breathing.',
  },
];

const renderScenarioOptions = () => {
  if (!dom.scenarioOptions) return;
  dom.scenarioOptions.innerHTML = scenarios
    .map(
      (item) => `
      <button class="scenario-button" type="button" data-id="${item.id}">
        ${item.title}
      </button>
    `
    )
    .join('');

  dom.scenarioOptions.querySelectorAll('.scenario-button').forEach((button) => {
    button.addEventListener('click', () => {
      const selected = scenarios.find((scenario) => scenario.id === button.dataset.id);
      if (selected) {
        dom.scenarioOptions.querySelectorAll('.scenario-button').forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        showScenarioDetail(selected);
      }
    });
  });
};

const showScenarioDetail = (scenario) => {
  if (!dom.scenarioResult) return;
  activeScenario = scenario;
  if (dom.scenarioTitle) dom.scenarioTitle.textContent = scenario.title;
  if (dom.scenarioMessage) dom.scenarioMessage.textContent = scenario.message;
  if (dom.decisionQuestion) dom.decisionQuestion.textContent = 'Is the person conscious?';
  if (dom.scenarioSteps) dom.scenarioSteps.innerHTML = '';
  if (dom.decisionFlow) dom.decisionFlow.classList.remove('hidden');
  dom.scenarioResult.classList.remove('hidden');
};

const displayScenarioBranch = (answer) => {
  if (!dom.scenarioSteps || !activeScenario) return;
  const steps = answer === 'yes' ? activeScenario.consciousSteps : activeScenario.unconsciousSteps;
  if (!steps) return;
  dom.scenarioSteps.innerHTML = steps.map((step) => `<li>${step}</li>`).join('');
  const hint = answer === 'yes' ? activeScenario.highlight : `If unconscious, call for help and support breathing: ${activeScenario.highlight}`;
  if (dom.scenarioMessage) dom.scenarioMessage.textContent = hint;
};

const initDecisionHandlers = () => {
  if (!dom.decisionFlow) return;
  dom.decisionFlow.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      displayScenarioBranch(button.dataset.answer);
    });
  });
};

const updateEmergencyPanelVisibility = () => {
  if (!dom.emergencyPanel || !dom.emergencyActionBtn) return;
  dom.emergencyActionBtn.addEventListener('click', () => {
    dom.emergencyPanel.classList.toggle('hidden');
  });
};

const initFixedEmergency = () => {
  if (!dom.fixedEmergencyButton || !dom.fixedEmergencyPanel) return;
  dom.fixedEmergencyButton.addEventListener('click', () => {
    dom.fixedEmergencyPanel.classList.toggle('hidden');
    dom.fixedEmergencyButton.classList.toggle('active');
  });
};

const setTheme = (mode) => {
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem(themeKey, mode);
  if (dom.themeToggle) {
    dom.themeToggle.innerHTML = mode === 'dark' ? '<span class="toggle-icon">☀️</span><span>Light</span>' : '<span class="toggle-icon">🌙</span><span>Dark</span>';
  }
};

const loadTheme = () => {
  const stored = localStorage.getItem(themeKey);
  setTheme(stored === 'dark' ? 'dark' : 'light');
};

const lockBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};

const unlockBodyScroll = () => {
  document.body.style.overflow = 'auto';
};

const updateResultCount = (count) => {
  if (dom.resultMarker) {
    dom.resultMarker.textContent = `${count} topic${count === 1 ? '' : 's'}`;
  }
};

const showNoResults = (visible) => {
  if (dom.noResults) dom.noResults.classList.toggle('hidden', !visible);
};

const getTopicSearchText = (topic) => {
  return [topic.title, topic.description, topic.category, ...(topic.symptoms || [])].join(' ').toLowerCase();
};

const getFilteredTopics = () => {
  const query = dom.searchInput?.value.trim().toLowerCase() || '';
  const category = dom.categoryFilter?.value || 'All';
  return topics.filter((topic) => {
    const text = getTopicSearchText(topic);
    const matchesText = query.length === 0 || text.includes(query);
    const matchesCategory = category === 'All' || topic.category === category;
    return matchesText && matchesCategory;
  });
};

const renderTopicCards = () => {
  if (!dom.topicCards) return;
  const filtered = getFilteredTopics();
  dom.topicCards.innerHTML = filtered.map(createTopicCard).join('');
  updateResultCount(filtered.length);
  showNoResults(filtered.length === 0);
  attachCardActions();
  updateFavoriteCount();
};

const attachCardActions = () => {
  if (!dom.topicCards) return;
  dom.topicCards.querySelectorAll('.favorite-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleFavorite(button.dataset.favorite);
    });
  });

  dom.topicCards.querySelectorAll('.topic-card').forEach((card) => {
    card.addEventListener('click', () => {
      const topic = topics.find((item) => item.id === card.dataset.id);
      if (topic) openTopicLoading(topic);
    });
  });
};

const openTopicLoading = (topic) => {
  if (!topic) {
    console.warn('openTopicLoading: topic data is missing');
    return;
  }
  if (!dom.detailModal) {
    console.warn('openTopicLoading: detailModal element not found');
    return;
  }
  dom.detailModal.classList.add('active');
  lockBodyScroll();
  setTimeout(() => openTopicModal(topic), 240);
};

const openTopicModal = (topic) => {
  if (!topic) {
    console.warn('openTopicModal: topic data is missing');
    return;
  }
  activeTopic = topic;
  if (!dom.detailModal) return;
  if (dom.modalLoader) dom.modalLoader.classList.remove('hidden');
  if (dom.modalContent) dom.modalContent.classList.add('hidden');
  if (dom.modalBreadcrumbs) dom.modalBreadcrumbs.innerHTML = `Home <span class="breadcrumb-separator">›</span> Topics <span class="breadcrumb-separator">›</span> ${topic.title}`;
  if (dom.modalTitle) dom.modalTitle.textContent = topic.title;
  if (dom.modalCategory) dom.modalCategory.textContent = topic.category;
  if (dom.modalDescription) dom.modalDescription.textContent = topic.description;
  if (dom.modalIcon) dom.modalIcon.textContent = topic.icon || '⚕️';
  if (dom.modalSymptoms) dom.modalSymptoms.innerHTML = (topic.symptoms || []).map((item) => `<li>${item}</li>`).join('');
  if (dom.modalSteps) dom.modalSteps.innerHTML = (topic.steps || []).map((item) => `<li>${item}</li>`).join('');
  if (dom.modalPrecautions) dom.modalPrecautions.innerHTML = (topic.precautions || []).map((item) => `<li>${item}</li>`).join('');
  if (dom.modalNotToDo) dom.modalNotToDo.innerHTML = (topic.notToDo || []).map((item) => `<li>${item}</li>`).join('');
  if (dom.modalSeekHelp) dom.modalSeekHelp.innerHTML = (topic.whenToSeekHelp || []).map((item) => `<li>${item}</li>`).join('');
  if (dom.modalTip) dom.modalTip.textContent = topic.emergencyTip || 'Keep the scene safe and call for help if needed.';
  addRecentTopic(topic);
  setTimeout(() => {
    if (dom.modalLoader) dom.modalLoader.classList.add('hidden');
    if (dom.modalContent) dom.modalContent.classList.remove('hidden');
  }, 180);
};

const closeModal = () => {
  if (dom.detailModal) dom.detailModal.classList.remove('active');
  unlockBodyScroll();
};

const bindModalEvents = () => {
  if (dom.closeModalButton) dom.closeModalButton.addEventListener('click', closeModal);
  if (dom.detailModal) {
    dom.detailModal.addEventListener('click', (event) => {
      if (event.target === dom.detailModal) closeModal();
    });
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });
};

const initThemeToggle = () => {
  if (!dom.themeToggle) return;
  dom.themeToggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
};

const initSearch = () => {
  if (dom.searchInput) dom.searchInput.addEventListener('input', renderTopicCards);
  if (dom.categoryFilter) dom.categoryFilter.addEventListener('change', renderTopicCards);
};

const initBackTop = () => {
  if (!dom.backTop) return;
  dom.backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', () => dom.backTop.classList.toggle('visible', window.scrollY > 420));
};

const initializePage = () => {
  try {
    dom.searchInput = getElement('searchInput');
    dom.categoryFilter = getElement('categoryFilter');
    dom.topicCards = getElement('topicCards');
    dom.resultMarker = getElement('resultMarker');
    dom.noResults = getElement('noResults');
    dom.detailModal = getElement('detailModal');
    dom.closeModalButton = getElement('closeModal');
    dom.modalTitle = getElement('modalTitle');
    dom.modalCategory = getElement('modalCategory');
    dom.modalDescription = getElement('modalDescription');
    dom.modalSymptoms = getElement('modalSymptoms');
    dom.modalSteps = getElement('modalSteps');
    dom.modalPrecautions = getElement('modalPrecautions');
    dom.modalNotToDo = getElement('modalNotToDo');
    dom.modalSeekHelp = getElement('modalSeekHelp');
    dom.modalTip = getElement('modalTip');
    dom.modalIcon = getElement('modalIcon');
    dom.modalBreadcrumbs = getElement('modalBreadcrumbs');
    dom.modalLoader = getElement('modalLoader');
    dom.modalContent = getElement('modalContent');
    dom.themeToggle = getElement('themeToggle');
    dom.favoriteCount = getElement('favoriteCount');
    dom.backTop = getElement('backTop');
    dom.loader = getElement('loader');
    dom.scenarioOptions = getElement('scenarioOptions');
    dom.scenarioResult = getElement('scenarioResult');
    dom.scenarioTitle = getElement('scenarioTitle');
    dom.scenarioMessage = getElement('scenarioMessage');
    dom.decisionFlow = getElement('decisionFlow');
    dom.decisionQuestion = getElement('decisionQuestion');
    dom.scenarioSteps = getElement('scenarioSteps');
    dom.emergencyPanel = getElement('emergencyPanel');
    dom.emergencyActionBtn = getElement('emergencyActionBtn');
    dom.fixedEmergencyButton = getElement('fixedEmergencyButton');
    dom.fixedEmergencyPanel = getElement('fixedEmergencyPanel');
    dom.recentList = getElement('recentList');

    console.log('Initializing MediSearch app');
    loadTheme();
    loadSavedState();
    updateFavoriteCount();
    renderScenarioOptions();
    renderRecentList();
    initThemeToggle();
    bindModalEvents();
    initDecisionHandlers();
    updateEmergencyPanelVisibility();
    initFixedEmergency();
    initBackTop();
    initSearch();
    renderTopicCards();
  } catch (error) {
    console.error('Error during app initialization:', error);
  } finally {
    if (dom.loader) dom.loader.classList.add('hidden');
  }
};

document.addEventListener('DOMContentLoaded', initializePage);


