import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export default function InputDate({ value, setValue, label, className }) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                format="dd/MM/yyyy"
                label={label}
                value={value}
                onChange={setValue}
                className={className}
                fullWidth
            />
        </MuiPickersUtilsProvider>
    );
}