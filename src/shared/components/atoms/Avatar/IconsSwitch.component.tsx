import * as React from 'react';
import { ArrowMissedIcon } from '../../icons/ArrowMissed.icon';
import { AttentionIcon } from '../../icons/Attention.icon';
import { BellIcon } from '../../icons/Bell.icon';
import { CheckIcon } from '../../icons/Check.icon';
import { ClockIcon } from '../../icons/Clock.icon';
import { ClockArrowIcon } from '../../icons/ClockArrow.icon';
import { DollarIcon } from '../../icons/Dollar.icon';
import { EtcIcon } from '../../icons/Etc.icon';
import { MinusIcon } from '../../icons/Minus.icon';
import { ProgressQuestionIcon } from '../../icons/ProgressQuestion.icon';
import { QuestionIcon } from '../../icons/Question.icon';
import { RollbackIcon } from '../../icons/Rollback.icon';
import { ArrowRightIcon } from '../../icons/ArrowRight.icon';

export const getIcon = (variant: string, color?: string) => {
	switch (variant) {
		case 'todo':
			return <BellIcon fillIcon={color} />;
		case 'in-progress':
			return <EtcIcon fillIcon={color} />;
		case 'done':
			return <CheckIcon fillIcon={color} />;
		case 'backlog':
			return <RollbackIcon fillIcon={color} />;
		case 'late':
			return <AttentionIcon fillIcon={color} />;
		case 'missed':
			return <ArrowMissedIcon fillIcon={color} />;
		case 'went':
			return <CheckIcon fillIcon={color} />;
		case 'going':
			return <ArrowRightIcon fillIcon={color} />;
		case 'not-going':
			return <MinusIcon fillIcon={color} />;
		case 'pending':
			return <ClockIcon fillIcon={color} />;
		case 'maybe':
			return <QuestionIcon fillIcon={color} />;
		case 'paid':
			return <DollarIcon fillIcon={color} />;
		case 'noAnswer':
			return <ProgressQuestionIcon fillIcon={color} />;
		case 'scheduled':
			return <ClockArrowIcon fillIcon={color} />;
		default:
			return '';
	}
};
