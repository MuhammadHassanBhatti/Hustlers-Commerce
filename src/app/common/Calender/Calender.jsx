import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
const useStyles = makeStyles({
    calenderClass: {
        '& .css-dplwbx-MuiPickersCalendarHeader-label': {
            fontWeight: "600",
            color: "#0F172A !important"
        },
    },
});
export default function CalendarComp() {
    const classess = useStyles()
    const today = dayjs();
    const [value, setValue] = React.useState(today);
    return (
        <Box className={classess.calenderClass}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar sx={{ fontWeight: "900" }} value={value} onChange={(newValue) => setValue(newValue)} />
            </LocalizationProvider>
        </Box>
    );
}