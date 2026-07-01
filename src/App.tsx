import { PresentationProvider } from './components/Presentation/PresentationContext';
import { Presentation } from './components/Presentation/Presentation';

import { IntroSlide } from './slides/01_IntroSlide';
import { WhyConventionSlide } from './slides/02_WhyConventionSlide';
import { WorkflowSlide } from './slides/03_WorkflowSlide';
import { BranchStrategySlide } from './slides/04_BranchStrategySlide';
import { CommitSlide } from './slides/05_CommitSlide';
import { ConventionalCommitSlide } from './slides/06_ConventionalCommitSlide';
import { MergeVsRebaseSlide } from './slides/07_MergeVsRebaseSlide';
import { ResetVsRevertSlide } from './slides/08_ResetVsRevertSlide';
import { GitLogSlide } from './slides/09_GitLogSlide';
import { GitReflogSlide } from './slides/10_GitReflogSlide';
import { GitTagSlide } from './slides/11_GitTagSlide';
import { SemanticVersionSlide } from './slides/12_SemanticVersionSlide';
import { BestPracticesSlide } from './slides/13_BestPracticesSlide';
import { SummarySlide } from './slides/14_SummarySlide';
import { QASlide } from './slides/15_QASlide';

function App() {
  const slides = [
    <IntroSlide key="1" />,
    <WhyConventionSlide key="2" />,
    <WorkflowSlide key="3" />,
    <BranchStrategySlide key="4" />,
    <CommitSlide key="5" />,
    <ConventionalCommitSlide key="6" />,
    <MergeVsRebaseSlide key="7" />,
    <ResetVsRevertSlide key="8" />,
    <GitLogSlide key="9" />,
    <GitReflogSlide key="10" />,
    <GitTagSlide key="11" />,
    <SemanticVersionSlide key="12" />,
    <BestPracticesSlide key="13" />,
    <SummarySlide key="14" />,
    <QASlide key="15" />
  ];

  return (
    <PresentationProvider totalSlides={slides.length}>
      <Presentation>
        {slides}
      </Presentation>
    </PresentationProvider>
  );
}

export default App;
