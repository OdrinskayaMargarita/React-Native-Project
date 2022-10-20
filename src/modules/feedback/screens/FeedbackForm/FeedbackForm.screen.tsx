import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Keyboard } from 'react-native';
import { Heading, Button, Text, FormControl, Box, ScrollView } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { DashboardTemplate } from 'src/modules/dashboard/templates/Dashboard.template';
import { useAppDispatch, useAppSelector } from 'src/store/hooks/redux';
import useToast from 'src/shared/hooks/useToast';
import errorsHandler from 'src/shared/form/errorsHandler';
import { CustomInput } from 'src/shared/form/components/customInput/customInput.component';
import { FeedbackRate } from '../../components/feedbackRate/FeedbackRate.component';
import { sendFeedback } from '../../store/feedback.thunk';
import { clearState, setMessage } from '../../store/feedback.slice';
import { FeedbackRateType } from '../../enums/feedbackRateType.enum';
import { FeedbackRateValue } from '../../enums/feedbackRateValue.enum';
import { feedbackRateData } from '../../enums/feedbackRate.constants';
import { FeedbackPayload } from '../../models/feedbackPayload.model';

export const FeedbackFormScreen = () => {
	const dispatch = useAppDispatch();
	const { isLoading } = useAppSelector(({ feedbackSlice }) => feedbackSlice);
	const { t } = useTranslation();

	const validationSchema = Yup.object().shape({
		design: Yup.string().required(t('feedback.form.design.validation.required')),
		functionality: Yup.string().required(t('feedback.form.functionality.validation.required')),
		idea: Yup.string().required(t('feedback.form.idea.validation.required')),
		message: Yup.string().max(1000, t('feedback.form.message.validation.max')),
	});

	const {
		control,
		handleSubmit,
		setValue,
		setError,
		reset,
		formState: { errors },
	} = useForm<FeedbackPayload>({
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = async (data: FeedbackPayload): Promise<void> => {
		Keyboard.dismiss();

		dispatch(sendFeedback(data)).then(result => {
			if (sendFeedback.fulfilled.match(result)) {
				useToast.success(t('feedback.toast.success'));
				reset();
			} else {
				errorsHandler(result, setError);
			}
		});
	};

	const onRateChange = (type: FeedbackRateType, rate: FeedbackRateValue): void => {
		// @ts-ignore TODO: (ros)
		setValue(type, rate);
	};

	const onMessageChange = (value: string): void => {
		dispatch(setMessage(value));
	};

	useEffect(() => {
		return () => {
			dispatch(clearState());
		};
	}, [dispatch]);

	const listOfRatings = feedbackRateData.map((item, index) => (
		<FormControl isInvalid={item.type in errors} key={index}>
			<Controller
				name={item.type}
				control={control}
				render={({ field: { onChange } }) => (
					<FeedbackRate
						item={item}
						onChange={(type, value) => {
							onChange(type, value);
							onRateChange(type, value);
						}}
					/>
				)}
			/>
			<FormControl.ErrorMessage>{errors[item.type]?.message}</FormControl.ErrorMessage>
		</FormControl>
	));

	return (
		<DashboardTemplate>
			<ScrollView>
				<Heading>{t('feedback.rate_us')}</Heading>

				<Text>{t('feedback.your_opinion_is_important')}</Text>

				{/* Rating */}
				<Box>{listOfRatings}</Box>

				{/* Message */}
				<Text>{t('feedback.would_you_like_to_tell')}</Text>

				<CustomInput
					name={'message'}
					control={control}
					errors={errors}
					onChangeText={onMessageChange}
					placeholder={t('feedback.form.message.label')}
				/>

				<Button
					onPress={handleSubmit(onSubmit)}
					isLoading={isLoading}
					colorScheme='green'
					isLoadingText={t('general.loading')}
					_loading={{
						bg: 'green',
						_text: { color: 'white' },
					}}
					_spinner={{
						color: 'white',
					}}>
					{t('general.send')}
				</Button>
			</ScrollView>
		</DashboardTemplate>
	);
};
