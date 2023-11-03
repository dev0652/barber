export const getHourWordInProperCase = number => {
  const count = number.toString();
  let word = 'годин';

  if (count.endsWith(1) && !count.endsWith(11)) word = 'година';
  if (count.endsWith(2) || count.endsWith(3)) word = 'години';

  return word;
};

const makeItem = children => `<li class="training-block-item">${children}</li>`;

export const makeTrainingPlanMarkup = planItemsArray => {
  if (planItemsArray.length === 0) return null;

  return `
${planItemsArray
  .map((item, index) => {
    let sectionNumber = index + 1;
    const { topic, subtopics } = item;

    if (subtopics && subtopics.length > 0)
      return `
    ${makeItem(`${sectionNumber}/ ${topic}`)}
    
    ${subtopics
      .map(
        (subtopic, index) =>
          `${makeItem(`${sectionNumber}.${index + 1} ${subtopic}`)}`
      )
      .join('')}
`;

    return makeItem(`${sectionNumber}/ ${topic}`);
  })
  .join('')}
`;
};
