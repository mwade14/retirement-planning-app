import { InputAdornment, Stack, Grid, TextField, Typography } from '@mui/material';
import { DateField } from '@mui/x-date-pickers/DateField';
import type { AllInputValues } from './App';

type InputFormProps = {
    enteredValues: AllInputValues,
    updateValues: (newValues: Partial<AllInputValues>) => void,
}

const InputForm = ({ enteredValues, updateValues }: InputFormProps) => {
    return (
        <Stack spacing={2}>

            {/* Section 1 */}
            <Grid container spacing={2}>
                <Grid size={4}>
                    <Stack spacing={2}>
                        <DateField
                            label="Today's Date"
                            value={enteredValues.todaysDate}
                            onChange={(newVal) => {
                                updateValues({ todaysDate: newVal! });
                            }}
                            format="MM/DD/YYYY" />
                        <DateField
                            label="My Birthdate"
                            value={enteredValues.myBirthdate}
                            onChange={(newVal) => {
                                updateValues({ myBirthdate: newVal! });
                            }}
                            format="MM/DD/YYYY" />
                        <DateField
                            label="Spouse Birthdate"
                            value={enteredValues.spouseBirthdate}
                            onChange={(newVal) => {
                                updateValues({ spouseBirthdate: newVal! });
                            }}
                            format="MM/DD/YYYY" />
                        <DateField
                            label="Target Retirement Date"
                            value={enteredValues.targetRetirementDate}
                            onChange={(newVal) => {
                                updateValues({ targetRetirementDate: newVal! });
                            }}
                            format="MM/DD/YYYY" />
                    </Stack>
                </Grid>
                <Grid size={4}>
                    <Stack spacing={2}>
                        <TextField
                            label="My Age Now"
                            type="number"
                            value={enteredValues.myAgeNow}
                            onChange={(e) => {
                                updateValues({ myAgeNow: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Spouse Age Now"
                            type="number"
                            value={enteredValues.spouseAgeNow}
                            onChange={(e) => {
                                updateValues({ spouseAgeNow: Number(e.target.value) })
                            }}
                        />
                        <DateField
                            label="Start Social Security for Myself in This Year"
                            value={enteredValues.startSocialSecurity}
                            onChange={(newVal) => {
                                updateValues({ startSocialSecurity: newVal! });
                            }}
                            format="MM/DD/YYYY" />
                        <DateField
                            label="Start Social Security for Spouse in This Year"
                            value={enteredValues.spouseStartSocialSecurity}
                            onChange={(newVal) => {
                                updateValues({ spouseStartSocialSecurity: newVal! });
                            }}
                            format="MM/DD/YYYY" />
                    </Stack>
                </Grid>
            </Grid>
            
            <Grid container spacing={2}>
                {/* Section 2 */}
                <Grid size={5}>
                    <Stack spacing={2}>
                        <Typography variant="body1" style={{ marginTop: '2rem' }}>
                            Enter Your Monthly Social Security Income at:
                        </Typography>
                        <TextField
                            label="Age 62"
                            type="number"
                            value={enteredValues.age62SSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ age62SSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Age 63"
                            type="number"
                            value={enteredValues.age63SSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ age63SSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Age 64"
                            type="number"
                            value={enteredValues.age64SSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ age64SSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Age 65"
                            type="number"
                            value={enteredValues.age65SSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ age65SSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Age 66"
                            type="number"
                            value={enteredValues.age66SSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ age66SSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Age 67"
                            type="number"
                            value={enteredValues.age67SSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ age67SSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Age 68"
                            type="number"
                            value={enteredValues.age68SSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ age68SSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Age 69"
                            type="number"
                            value={enteredValues.age69SSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ age69SSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Age 70 and Later"
                            type="number"
                            value={enteredValues.age70LaterSSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ age70LaterSSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                    </Stack>
                </Grid>

                {/* Section 3 */}
                <Grid size={5}>
                    <Stack spacing={2}>
                        <Typography variant="body1" style={{ marginTop: '2rem' }}>
                            Enter Your Spouse's Monthly Social Security Income at:
                        </Typography>
                        <TextField
                            label="Age 62"
                            type="number"
                            value={enteredValues.spouseAge62SSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ spouseAge62SSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Age 63"
                            type="number"
                            value={enteredValues.spouseAge63SSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ spouseAge63SSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Age 64"
                            type="number"
                            value={enteredValues.spouseAge64SSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ spouseAge64SSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Age 65"
                            type="number"
                            value={enteredValues.spouseAge65SSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ spouseAge65SSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Age 66"
                            type="number"
                            value={enteredValues.spouseAge66SSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ spouseAge66SSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Age 67"
                            type="number"
                            value={enteredValues.spouseAge67SSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ spouseAge67SSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Age 68"
                            type="number"
                            value={enteredValues.spouseAge68SSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ spouseAge68SSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Age 69"
                            type="number"
                            value={enteredValues.spouseAge69SSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ spouseAge69SSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Age 70 and Later"
                            type="number"
                            value={enteredValues.spouseAge70LaterSSMonthlyIncome}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ spouseAge70LaterSSMonthlyIncome: Number(e.target.value) })
                            }}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default InputForm;
