import syllabus from '/data/syllabus-data';
import getRefs from './refs';
import getFilePaths from './icon-path-refs';
import {
  getHourWordInProperCase,
  makeTrainingPlanMarkup,
  makeWeekNumber,
} from './syllabus-aux';

const { symbolDefs } = getFilePaths();

const syllabusMarkup = `
<ul class="syllabus">
${syllabus
  .map((week, index) => {
    const {
      mobileTitle,
      regularTitle,
      theoryHours,
      practiceHours,
      theoryPlan,
      practicePlan,
      results,
    } = week;

    const isLastItem = index === week.length - 1;
    const number = index + 1;
    const weekNumber = makeWeekNumber(number);

    return `
		<li class="syllabus-item">
			<article class="syllabus-card" data-id="week-${number}">

			<!-- Week description (always visible block) -->
			<div class="syllabus-card-description">
				
			<p class="week">
				${
          !isLastItem &&
          `
					<span>${weekNumber}</span>
					<span>тиждень</span>
				`
        }
			</p>

				<div class="group-one">
					<div class="group-two">
						<h3 class="syllabus-card-title-tablet">${regularTitle}</h3>

						<ul class="hours-distribution">
							<li class="hours-distribution-item">
								<svg class="hours-distribution-icon">
									<use href="${symbolDefs}#icon-theory"></use>
								</svg>

								<p class="hours-distribution-text">
									<span class="theory-hour-count">${theoryHours}</span>
									<span>${getHourWordInProperCase(theoryHours)} теорії</span>
								</p> 
							</li>

							<li class="hours-distribution-item">
								<svg class="hours-distribution-icon">
									<use href="img/symbol-defs.svg#icon-practice"></use>
								</svg>

								<p class="hours-distribution-text">
									<span class="practice-hour-count">${practiceHours}</span>
									<span>${getHourWordInProperCase(practiceHours)} практики</span>
								</p>
							</li>
						</ul>
					</div>

					<button type="button" class="details-toggle-button" data-id="week-${number}">більше</button>

					<svg class="syllabus-card-expand-icon">
						<use href="${symbolDefs}#icon-arrow"></use>
					</svg>
				</div>
			</div>

			<!-- Week's detailed syllabus (slide-out block) -->
			<div class="details-overlay">
				<div class="syllabus-card-details">
					<h3 class="syllabus-card-title-mobile">${mobileTitle}</h3>

					<div class="training-blocks-wrapper">
						<div class="training-block theory">
							<h4 class="training-block-title">Теорія</h4>
							<ul class="training-block-items">
								${makeTrainingPlanMarkup(theoryPlan)}
							</ul>
						</div>

						<div class="training-block practice">
							<h4 class="training-block-title">Практика</h4>
							<ul class="training-block-items">
							${makeTrainingPlanMarkup(practicePlan)}
							</ul>
						</div>
					</div>

					<!-- Results (white block) -->
					<div class="expected-results">
						<h4 class="expected-results-title">Ваш результат:</h4>

						<ul class="expected-results-list">
						${results
              .map(
                ({ result }) =>
                  `<li class="expected-results-item">${result}</li>`
              )
              .join('')}
						</ul>
					</div>

				</div>
			</div>
			</article>
			</li>
`;
  })
  .join('')}
</ul>
`;

const { syllabusRenderCnt } = getRefs();

if (syllabus) syllabusRenderCnt.innerHTML = syllabusMarkup;
