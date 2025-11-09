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

            {/* Section 1 - Initial Info */}
            <div style={{ marginTop: '2rem' }}></div>
            <Typography variant="h6">
                Initial Info:
            </Typography>
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
            
            {/* Section 2 - Monthly Social Security Income */}
            <div style={{ marginTop: '2rem' }}></div>
            <Typography variant="h6">
                Monthly Social Security Income:
            </Typography>
            <Grid container spacing={2}>
                {/* Section 2.1 - Your Income */}
                <Grid size={4}>
                    <Stack spacing={2}>
                        <Typography variant="body2">
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

                {/* Section 2.2 - Spouse's Income */}
                <Grid size={4}>
                    <Stack spacing={2}>
                        <Typography variant="body2">
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

            {/* Section 3 - Assets */}
            <div style={{ marginTop: '2rem' }}></div>
            <Typography variant="h6">
                Assets:
            </Typography>
            <Grid container spacing={2}>
                {/* Section 3.1 - Residence */}
                <Grid size={4}>
                    <Stack spacing={2}>
                        <TextField
                            label="Principal Residence Value Today"
                            type="number"
                            value={enteredValues.principalResidenceValue}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ principalResidenceValue: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Mortgage on Principal Residence (enter as positive value)"
                            type="number"
                            value={enteredValues.mortgageOnPrincipalResidence}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ mortgageOnPrincipalResidence: Number(e.target.value) })
                            }}
                        />
                    </Stack>
                </Grid>

                {/* Section 3.2 - Other Real Estate and Non-Invested Capital */}
                <Grid size={4}>
                    <Stack spacing={2}>
                        <TextField
                            label="Other Real Estate and Non-Invested Capital Value Today"
                            type="number"
                            value={enteredValues.otherRealEstateAndNonInvestedCapitalValue}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ otherRealEstateAndNonInvestedCapitalValue: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="All Debt Other than Principal Mortgage (enter as positive value)"
                            type="number"
                            value={enteredValues.allDebt}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ allDebt: Number(e.target.value) })
                            }}
                        />
                    </Stack>
                </Grid>

                {/* Section 3.3 - Total Monetary Assets & Annual Income */}
                <Grid size={8}>
                    <Stack spacing={2}>
                        <TextField
                            label="Total Monetary Assets Invested To Date (pre and post tax investments)"
                            type="number"
                            value={enteredValues.monetaryAssets}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ monetaryAssets: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Amount to be Added to (positive value) or Used from (negative value) Investments Each Year Between Now and Retirement"
                            type="number"
                            value={enteredValues.yearlyInvestmentChange}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ yearlyInvestmentChange: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Expected Annual Income Starting in Retirement on Non-Primary Residence Real Estate & Other Non-Invested Assets"
                            type="number"
                            value={enteredValues.annualIncomeInRetirement}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ annualIncomeInRetirement: Number(e.target.value) })
                            }}
                        />
                    </Stack>
                </Grid>
            </Grid>

            {/* Section 4 - Assumed Rate of Growth & Inflation */}
            <div style={{ marginTop: '2rem' }}></div>
            <Typography variant="h6">
                Assumed Rate of Growth & Inflation:
            </Typography>
            <Grid container spacing={2}>
                <Grid size={4}>
                    <Stack spacing={2}>
                        <TextField
                            label="Rate of Growth Between Now and Retirement"
                            type="number"
                            value={enteredValues.assetsRateOfGrowthBeforeRetirement}
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ assetsRateOfGrowthBeforeRetirement: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Rate of Inflation Between Now and Retirement"
                            type="number"
                            value={enteredValues.rateOfInflationBeforeRetirement}
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ rateOfInflationBeforeRetirement: Number(e.target.value) })
                            }}
                        />
                    </Stack>
                </Grid>
                <Grid size={4}>
                    <Stack spacing={2}>
                        <TextField
                            label="Rate of Growth After Retirement"
                            type="number"
                            value={enteredValues.assetsRateOfGrowthAfterRetirement}
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ assetsRateOfGrowthAfterRetirement: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Rate of Inflation After Retirement"
                            type="number"
                            value={enteredValues.rateOfInflationAfterRetirement}
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ rateOfInflationAfterRetirement: Number(e.target.value) })
                            }}
                        />
                    </Stack>
                </Grid>
            </Grid>

            {/* Section 5 - Tax Rates in Retirement */}
            <div style={{ marginTop: '2rem' }}></div>
            <Typography variant="h6">
                Tax Rates in Retirement:
            </Typography>
            <Typography variant="body2">
                The overall tax rate will be applied to the entered percentage of the respective income stream.
            </Typography>
            <Grid container spacing={2}>
                <Grid size={4}>
                    <Stack spacing={2}>
                        <TextField
                            label="Overall Tax Rate"
                            type="number"
                            value={enteredValues.taxRate}
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ taxRate: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Investment Withdrawal Income"
                            type="number"
                            value={enteredValues.investmentWithdrawalIncome}
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ investmentWithdrawalIncome: Number(e.target.value) })
                            }}
                        />
                    </Stack>
                </Grid>
                <Grid size={4}>
                    <Stack spacing={2}>
                        <TextField
                            label="Social Security Income"
                            type="number"
                            value={enteredValues.socialSecurityIncome}
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ socialSecurityIncome: Number(e.target.value) })
                            }}
                        />
                        <TextField
                            label="Non-Primary Residence Real Estate Income"
                            type="number"
                            value={enteredValues.realEstateIncome}
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ realEstateIncome: Number(e.target.value) })
                            }}
                        />
                    </Stack>
                </Grid>
            </Grid>

            {/* Section 6 - Expected Yearly Spending Amount */}
            <div style={{ marginTop: '2rem' }}></div>
            <Typography variant="h6">
                Expected Yearly Spending Amount:
            </Typography>
            <Typography variant="body2">
                This is the expected amount you need to spend starting in year 1 of retirement and continuing annually (this is AFTER-TAX so withdrawal amount will be grossed up).
            </Typography>
            <Grid container spacing={2}>
                <Grid size={8}>
                    <Stack spacing={2}>
                        <TextField
                            label="Expected Amount"
                            type="number"
                            value={enteredValues.expectedSpendingAmountYearly}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                },
                            }}
                            onChange={(e) => {
                                updateValues({ expectedSpendingAmountYearly: Number(e.target.value) })
                            }}
                        />
                    </Stack>
                </Grid>
            </Grid>
            
        </Stack>
    )
}

export default InputForm;
