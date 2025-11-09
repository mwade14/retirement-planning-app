import { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import InputForm from './InputForm';
import OutputTable from './OutputTable';

export type AllInputValues = {
  todaysDate: Dayjs,
  myBirthdate: Dayjs | null,
  spouseBirthdate: Dayjs | null,
  targetRetirementDate: Dayjs | null,
  startSocialSecurity: Dayjs | null,
  spouseStartSocialSecurity: Dayjs | null,

  age62SSMonthlyIncome: number | null,
  age63SSMonthlyIncome: number | null,
  age64SSMonthlyIncome: number | null,
  age65SSMonthlyIncome: number | null,
  age66SSMonthlyIncome: number | null,
  age67SSMonthlyIncome: number | null,
  age68SSMonthlyIncome: number | null,
  age69SSMonthlyIncome: number | null,
  age70LaterSSMonthlyIncome: number | null,

  spouseAge62SSMonthlyIncome: number | null,
  spouseAge63SSMonthlyIncome: number | null,
  spouseAge64SSMonthlyIncome: number | null,
  spouseAge65SSMonthlyIncome: number | null,
  spouseAge66SSMonthlyIncome: number | null,
  spouseAge67SSMonthlyIncome: number | null,
  spouseAge68SSMonthlyIncome: number | null,
  spouseAge69SSMonthlyIncome: number | null,
  spouseAge70LaterSSMonthlyIncome: number | null,

  principalResidenceValue: number | null,
  mortgageOnPrincipalResidence: number | null,

  otherRealEstateAndNonInvestedCapitalValue: number | null,
  allDebt: number | null,

  monetaryAssets: number | null,
  yearlyInvestmentChange: number | null,
  annualIncomeInRetirement: number | null,

  assetsRateOfGrowthBeforeRetirement: number | null,
  rateOfInflationBeforeRetirement: number | null,
  assetsRateOfGrowthAfterRetirement: number | null,
  rateOfInflationAfterRetirement: number | null,

  taxRate: number | null,
  investmentWithdrawalIncome: number | null,
  socialSecurityIncome: number | null,
  realEstateIncome: number | null,

  expectedSpendingAmountYearly: number | null,
}

const initialValues: AllInputValues = {
  todaysDate: dayjs(),
  myBirthdate: null,
  spouseBirthdate: null,
  targetRetirementDate: null,
  startSocialSecurity: null,
  spouseStartSocialSecurity: null,

  age62SSMonthlyIncome: null,
  age63SSMonthlyIncome: null,
  age64SSMonthlyIncome: null,
  age65SSMonthlyIncome: null,
  age66SSMonthlyIncome: null,
  age67SSMonthlyIncome: null,
  age68SSMonthlyIncome: null,
  age69SSMonthlyIncome: null,
  age70LaterSSMonthlyIncome: null,

  spouseAge62SSMonthlyIncome: null,
  spouseAge63SSMonthlyIncome: null,
  spouseAge64SSMonthlyIncome: null,
  spouseAge65SSMonthlyIncome: null,
  spouseAge66SSMonthlyIncome: null,
  spouseAge67SSMonthlyIncome: null,
  spouseAge68SSMonthlyIncome: null,
  spouseAge69SSMonthlyIncome: null,
  spouseAge70LaterSSMonthlyIncome: null,

  principalResidenceValue: null,
  mortgageOnPrincipalResidence: null,

  otherRealEstateAndNonInvestedCapitalValue: null,
  allDebt: null,

  monetaryAssets: null,
  yearlyInvestmentChange: null,
  annualIncomeInRetirement: null,

  assetsRateOfGrowthBeforeRetirement: null,
  rateOfInflationBeforeRetirement: null,
  assetsRateOfGrowthAfterRetirement: null,
  rateOfInflationAfterRetirement: null,

  taxRate: null,
  investmentWithdrawalIncome: null,
  socialSecurityIncome: null,
  realEstateIncome: null,

  expectedSpendingAmountYearly: null,
}

const App = () => {
  const loadSavedValues = (): AllInputValues => {
    const stored = localStorage.getItem('inputValues');
    if (!stored) { return initialValues }

    const parsed = JSON.parse(stored);
    return {
      ...parsed,
      todaysDate: dayjs(parsed.todaysDate),
      myBirthdate: dayjs(parsed.myBirthdate),
      spouseBirthdate: dayjs(parsed.spouseBirthdate),
      targetRetirementDate: dayjs(parsed.targetRetirementDate),
      startSocialSecurity: dayjs(parsed.startSocialSecurity),
      spouseStartSocialSecurity: dayjs(parsed.spouseStartSocialSecurity),
    }
  }

  const [enteredValues, setEnteredValues] = useState<AllInputValues>(loadSavedValues());
  const [showTable, setShowTable] = useState<boolean>(false);
  
  const handleSave = () => {
    localStorage.setItem('inputValues', JSON.stringify(enteredValues));
  };

  const updateValues = (newValues: Partial<AllInputValues>) => {
    const updatedValues = {
      ...enteredValues,
      ...newValues,
    };
    setEnteredValues(updatedValues);
    setShowTable(false); // hide the table whenever the user changes the input fields?
  }

  const disableCheck = (): boolean => {
    return Object.values(enteredValues).some(value => value === null);
  }

  return (
    <Box>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h2">
          Welcome to My Retirement Planning App
        </Typography>
        <Typography variant="h5">
          Please enter values for each of the prompts below to populate the output table.
        </Typography>
      </div>

      <InputForm enteredValues={enteredValues} updateValues={updateValues} />

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '3rem', marginTop: '3rem', marginBottom: '3rem'}}>
        <Button variant="contained" onClick={handleSave}>
          Save to Local Storage
        </Button>
        <Button variant="contained" onClick={() => setShowTable(true)} disabled={disableCheck()}>
          Generate the Output Table
        </Button>
      </div>

      {showTable && <OutputTable enteredValues={enteredValues} />}
    </Box>
  )
}

export default App;
