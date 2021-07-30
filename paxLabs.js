// - top 3 pods best selling per state in the past year
// - new products came out within the past year up to 5
// - 5 more backup data

// User: list of products
// returns: pod that we want to advertise

const podPromotionalData = {
  'CA': {
    indica: [...,...], // Unique productID numbers
    sativa: [...,...],
    hybrid: [...,...],
  },
  'WA': {
    indica: [...,...],
    sativa: [...,...],
    hybrid: [...,...],
  },  ...
  newProducts: {
    indica: [...,...],
    sativa: [...,...],
    hybrid: [...,...],
  },
  additionalProducts: {
    indica: [...,...],
    sativa: [...,...],
    hybrid: [...,...],
  }
}

// history from user's last three months, order by most recent to last used
const userHistory = {
  indica: [...,...],
  sativa: [...,...],
  hybrid: [...,...],
}

const podHistory = (user) => {
  // return preference
}

const user = (preference, state, history) => {
  // preference: sativa
  const topThreeState = podPromotionalData[state][preference][0];
  const podPromotion = podPromotionalData[newProducts][preference][0];
  const additionalProduct = podPromotionalData[additionalProducts][preference][0];

  if (!userHistory[preference].includes(topThreeState)) {
    return topThreeState;
  }

  if (!userHistory[preference].includes(podPromotion)) {
    return podPromotion;
  }
  return additionalProduct;


  // if topThreeState is found in recently used history
    // look thru newProducts for preference instead
  // if newProducts is found in recently used history
    // look thru additionalProducts for matching preference

  // return pod
}