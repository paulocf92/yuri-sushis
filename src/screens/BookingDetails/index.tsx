import React, { useState, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import { addBusinessDays, format } from 'date-fns';

import {
  Container,
  Title,
  Wrapper,
  DateTimeButton,
  DateTimeButtonLabel,
  DateTimeButtonText,
  BookNowButton,
} from './styles';

import { StackNavigation } from '../../routes/types';

type DateTimeMode = 'date' | 'time';

export default function BookingDetails() {
  const { navigate } = useNavigation<StackNavigation>();

  const minimumDate = useMemo(() => addBusinessDays(new Date(), 1), []);

  const [date, setDate] = useState(minimumDate);
  const [mode, setMode] = useState<DateTimeMode>('date');
  const [show, setShow] = useState(false);

  const dateFormatted = useMemo(() => format(date, "MMMM', 'do"), [date]);

  const timeFormatted = useMemo(() => format(date, 'hh:mm'), [date]);

  const onChange = (_: Event, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: DateTimeMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <Container>
      <Wrapper>
        <Title>Choose your preferred date and time below.</Title>

        <DateTimeButtonLabel>Date</DateTimeButtonLabel>
        <DateTimeButton onPress={showDatepicker}>
          <DateTimeButtonText>{dateFormatted}</DateTimeButtonText>
        </DateTimeButton>

        <DateTimeButtonLabel>Time</DateTimeButtonLabel>
        <DateTimeButton onPress={showTimepicker}>
          <DateTimeButtonText>{timeFormatted}</DateTimeButtonText>
        </DateTimeButton>
      </Wrapper>

      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={mode}
          is24Hour={true}
          minimumDate={minimumDate}
          display='default'
          onChange={onChange}
        />
      )}

      <BookNowButton
        title='Book now!'
        onPress={() =>
          navigate('BookingConfirmation', { dateFormatted, timeFormatted })
        }
      />
    </Container>
  );
}
