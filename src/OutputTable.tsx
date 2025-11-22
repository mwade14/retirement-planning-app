/* eslint-disable react-hooks/exhaustive-deps */
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import type { AllInputValues } from "./App";
import { useEffect, useState } from "react";

type OutputTableProps = {
    enteredValues: AllInputValues,
}
type CalculatedTableRow = {
    year: number,
    ageSelf: number,
    ageSpouse: number,
    begInvPortValue: number,
    begPrimeResidenceValue: number,
    begRealEstateAndOtherValue: number,
    spendNeed: number,
    totalGrossSSIncomeSelf: number,
    totalGrossSSIncomeSpouse: number,
    realEstateAndOtherIncome: number,
    investWithdrawalIncome: number,
    taxesPaid: number,
    endInvPortValue: number,
    endPrimeResidenceValue: number,
    endRealEstateAndOtherValue: number,
}
const initialValues: CalculatedTableRow = {
    year: 0,
    ageSelf: 0,
    ageSpouse: 0,
    begInvPortValue: 0,
    begPrimeResidenceValue: 0,
    begRealEstateAndOtherValue: 0,
    spendNeed: 0,
    totalGrossSSIncomeSelf: 0,
    totalGrossSSIncomeSpouse: 0,
    realEstateAndOtherIncome: 0,
    investWithdrawalIncome: 0,
    taxesPaid: 0,
    endInvPortValue: 0,
    endPrimeResidenceValue: 0,
    endRealEstateAndOtherValue: 0,
}

const Headers = [
    "Year", "Age - SELF", "Age - SPOUSE", "Beginning Investment Portfolio Value", "Beginning Primary Residence Value (Net)",
    "Beginning Non-Primary Real Estate and All Other Assets Value (Net)", "Spend Need", "Total Gross Social Security Income - SELF",
    "Total Gross Social Security Income - SPOUSE", "Total Non-Primary Real Estate and All Other Asset Income", "Total Investment Withdrawal Income",
    "Taxes Paid", "Ending Investment Portfolio Value", "Ending Primary Residence Value (Net)", "Ending Non-Primary Real Estate and All Other Assets Value (Net)"
]

const OutputTable = ({ enteredValues }: OutputTableProps) => {
    const [tableData, setTableData] = useState<CalculatedTableRow[]>([]);

    useEffect(() => {
        if (!Object.values(enteredValues).some(value => value === null)) {
            calculateData();
        }
    }, [enteredValues]);

    const calculateData = () => {
        const currTableData = [{...calculateFirstRow()}]

        let lastIdx = 0;
        for(let i = currTableData[0].ageSelf + 1; i < 100; i++) {
            const currRow: CalculatedTableRow = initialValues;

            currRow.year = currTableData[lastIdx].year + 1;
            currRow.ageSelf = currTableData[lastIdx].ageSelf + 1;
            currRow.ageSpouse = currTableData[lastIdx].ageSpouse + 1;

            if (currRow.year < enteredValues.targetRetirementDate!.year()) {
                currRow.begInvPortValue = currTableData[lastIdx].endInvPortValue + enteredValues.yearlyInvestmentChange!;
            } else {
                currRow.begInvPortValue = currTableData[lastIdx].endInvPortValue;
            }

            currRow.begPrimeResidenceValue = currTableData[lastIdx].endPrimeResidenceValue;
            currRow.begRealEstateAndOtherValue = currTableData[lastIdx].endRealEstateAndOtherValue;

            if (currTableData[lastIdx].spendNeed === 0) {
                if (currRow.year === enteredValues.targetRetirementDate!.year()) {
                    currRow.spendNeed = enteredValues.expectedSpendingAmountYearly!;
                } else {
                    currRow.spendNeed = 0;
                }
            } else {
                currRow.spendNeed = currTableData[lastIdx].spendNeed * (1 + (enteredValues.rateOfInflationAfterRetirement! / 100));
            }

            if (currRow.year < enteredValues.startSocialSecurity!.year()) {
                currRow.totalGrossSSIncomeSelf = 0;
            } else {
                currRow.totalGrossSSIncomeSelf = 
                    determineSSIncomeFromYearSelf()
                    * 
                    ((1 + (enteredValues.rateOfInflationAfterRetirement! / 100)) ** (currRow.year - enteredValues.startSocialSecurity!.year()))
                    *
                    12;
            }

            if (currRow.year < enteredValues.spouseStartSocialSecurity!.year()) {
                currRow.totalGrossSSIncomeSpouse = 0;
            } else {
                currRow.totalGrossSSIncomeSpouse =
                    determineSSIncomeFromYearSpouse()
                    * 
                    ((1 + (enteredValues.rateOfInflationAfterRetirement! / 100)) ** (currRow.year - enteredValues.spouseStartSocialSecurity!.year()))
                    *
                    12;
            }

            if (currTableData[lastIdx].realEstateAndOtherIncome === 0) {
                if (currRow.year === enteredValues.targetRetirementDate!.year()) {
                    currRow.realEstateAndOtherIncome = enteredValues.annualIncomeInRetirement!;
                } else {
                    currRow.realEstateAndOtherIncome = 0;
                }
            } else {
                currRow.realEstateAndOtherIncome = currTableData[lastIdx].realEstateAndOtherIncome * (1 + (enteredValues.rateOfInflationAfterRetirement! / 100));
            }

            if (currRow.year >= enteredValues.targetRetirementDate!.year()) {
                currRow.investWithdrawalIncome = (currRow.spendNeed
                                                    - ((1 - (enteredValues.socialSecurityIncome! / 100) * (enteredValues.taxRate! / 100)) * (currRow.totalGrossSSIncomeSelf + currRow.totalGrossSSIncomeSpouse))
                                                    - ((1 - (enteredValues.realEstateIncome! / 100) * (enteredValues.taxRate! / 100)) * currRow.realEstateAndOtherIncome))
                                                / (1 - (enteredValues.investmentWithdrawalIncome! / 100) * (enteredValues.taxRate! / 100));
            } else {
                currRow.investWithdrawalIncome = 0;
            }

            if (currRow.year < enteredValues.startSocialSecurity!.year()) {
                currRow.taxesPaid = 0;
            } else {
                currRow.taxesPaid = (enteredValues.taxRate! / 100) *
                                        ((enteredValues.socialSecurityIncome! / 100) * (currRow.totalGrossSSIncomeSelf + currRow.totalGrossSSIncomeSpouse)
                                            + (enteredValues.realEstateIncome! / 100) * currRow.realEstateAndOtherIncome
                                            + (enteredValues.investmentWithdrawalIncome! / 100) * currRow.investWithdrawalIncome);
            }

            if (currRow.year < enteredValues.startSocialSecurity!.year()) {
                currRow.endInvPortValue = (currRow.begInvPortValue - currRow.investWithdrawalIncome) * (1 + (enteredValues.assetsRateOfGrowthBeforeRetirement! / 100));
            } else {
                currRow.endInvPortValue = (currRow.begInvPortValue - currRow.investWithdrawalIncome) * (1 + (enteredValues.assetsRateOfGrowthAfterRetirement! / 100));
            }

            if (currRow.year < enteredValues.startSocialSecurity!.year()) {
                currRow.endPrimeResidenceValue = currRow.begPrimeResidenceValue * (1 + (enteredValues.rateOfInflationBeforeRetirement! / 100));
            } else {
                currRow.endPrimeResidenceValue = currRow.begPrimeResidenceValue * (1 + (enteredValues.rateOfInflationAfterRetirement! / 100));
            }

            if (currRow.year < enteredValues.startSocialSecurity!.year()) {
                currRow.endRealEstateAndOtherValue = currRow.begRealEstateAndOtherValue * (1 + (enteredValues.rateOfInflationBeforeRetirement! / 100));
            } else {
                currRow.endRealEstateAndOtherValue = currRow.begRealEstateAndOtherValue * (1 + (enteredValues.rateOfInflationAfterRetirement! / 100));
            }

            currTableData.push({...currRow});
            lastIdx++;
        }

        setTableData(currTableData);
    }

    const calculateFirstRow = (): CalculatedTableRow => {
        const firstRow: CalculatedTableRow = initialValues;

        firstRow.year = enteredValues.todaysDate.year() + 1;
        firstRow.ageSelf = firstRow.year - enteredValues.myBirthdate!.year() - 1;
        firstRow.ageSpouse = firstRow.year - enteredValues.spouseBirthdate!.year() - 1;
        firstRow.begInvPortValue = enteredValues.monetaryAssets!;
        firstRow.begPrimeResidenceValue = enteredValues.principalResidenceValue! - enteredValues.mortgageOnPrincipalResidence!;
        firstRow.begRealEstateAndOtherValue = enteredValues.otherRealEstateAndNonInvestedCapitalValue! - enteredValues.allDebt!;

        if (firstRow.year < enteredValues.targetRetirementDate!.year()) {
            firstRow.spendNeed = 0;
        } else if (firstRow.year === enteredValues.targetRetirementDate!.year()) {
            firstRow.spendNeed = enteredValues.expectedSpendingAmountYearly!;
        } else {
            firstRow.spendNeed = NaN;
        }

        if (firstRow.year < enteredValues.startSocialSecurity!.year()) {
            firstRow.totalGrossSSIncomeSelf = 0;
        } else {
            firstRow.totalGrossSSIncomeSelf =
                determineSSIncomeFromYearSelf()
                * 
                ((1 + (enteredValues.rateOfInflationAfterRetirement! / 100)) ** (firstRow.year - enteredValues.startSocialSecurity!.year()))
                *
                12;
        }

        if (firstRow.year < enteredValues.spouseStartSocialSecurity!.year()) {
            firstRow.totalGrossSSIncomeSpouse = 0;
        } else {
            firstRow.totalGrossSSIncomeSpouse = 
                determineSSIncomeFromYearSpouse()
                * 
                ((1 + (enteredValues.rateOfInflationAfterRetirement! / 100)) ** (firstRow.year - enteredValues.spouseStartSocialSecurity!.year())) 
                * 
                12;
        }

        if (firstRow.year < enteredValues.targetRetirementDate!.year()) {
            firstRow.realEstateAndOtherIncome = 0;
        } else if (firstRow.year === enteredValues.targetRetirementDate!.year()) {
            firstRow.realEstateAndOtherIncome = enteredValues.annualIncomeInRetirement!;
        } else {
            firstRow.realEstateAndOtherIncome = NaN;
        }

        if (firstRow.year >= enteredValues.targetRetirementDate!.year()) {
            firstRow.investWithdrawalIncome = (firstRow.spendNeed
                                                   - (1 - (enteredValues.socialSecurityIncome! / 100) * (enteredValues.taxRate! / 100) * (firstRow.totalGrossSSIncomeSelf + firstRow.totalGrossSSIncomeSpouse))
                                                   - (1 - (enteredValues.realEstateIncome! / 100) * (enteredValues.taxRate! / 100) * firstRow.realEstateAndOtherIncome))
                                               / (1 - (enteredValues.investmentWithdrawalIncome! / 100) * (enteredValues.taxRate! / 100));
        } else {
            firstRow.investWithdrawalIncome = 0;
        }

        if (firstRow.year < enteredValues.startSocialSecurity!.year()) {
            firstRow.taxesPaid = 0;
        } else {
            firstRow.taxesPaid = (enteredValues.taxRate! / 100) *
                                    ((enteredValues.socialSecurityIncome! / 100) * (firstRow.totalGrossSSIncomeSelf + firstRow.totalGrossSSIncomeSpouse)
                                        + (enteredValues.realEstateIncome! / 100) * firstRow.realEstateAndOtherIncome
                                        + (enteredValues.investmentWithdrawalIncome! / 100) * firstRow.investWithdrawalIncome);
        }

        firstRow.endInvPortValue = firstRow.begInvPortValue;
        firstRow.endPrimeResidenceValue = firstRow.begPrimeResidenceValue;
        firstRow.endRealEstateAndOtherValue = firstRow.begRealEstateAndOtherValue;

        return firstRow;
    }

    const determineSSIncomeFromYearSelf = (): number => {
        if (enteredValues.startSocialSecurity!.year() >= enteredValues.myBirthdate!.year() + 71) {
            return enteredValues.age70LaterSSMonthlyIncome!;
        }
        if (enteredValues.startSocialSecurity!.year() >= enteredValues.myBirthdate!.year() + 70) {
            return enteredValues.age69SSMonthlyIncome!;
        }
        if (enteredValues.startSocialSecurity!.year() >= enteredValues.myBirthdate!.year() + 69) {
            return enteredValues.age68SSMonthlyIncome!;
        }
        if (enteredValues.startSocialSecurity!.year() >= enteredValues.myBirthdate!.year() + 68) {
            return enteredValues.age67SSMonthlyIncome!;
        }
        if (enteredValues.startSocialSecurity!.year() >= enteredValues.myBirthdate!.year() + 67) {
            return enteredValues.age66SSMonthlyIncome!;
        }
        if (enteredValues.startSocialSecurity!.year() >= enteredValues.myBirthdate!.year() + 66) {
            return enteredValues.age65SSMonthlyIncome!;
        }
        if (enteredValues.startSocialSecurity!.year() >= enteredValues.myBirthdate!.year() + 65) {
            return enteredValues.age64SSMonthlyIncome!;
        }
        if (enteredValues.startSocialSecurity!.year() >= enteredValues.myBirthdate!.year() + 64) {
            return enteredValues.age63SSMonthlyIncome!;
        }
        if (enteredValues.startSocialSecurity!.year() >= enteredValues.myBirthdate!.year() + 63) {
            return enteredValues.age62SSMonthlyIncome!;
        }

        return NaN;
    }
    const determineSSIncomeFromYearSpouse = (): number => {
        if (enteredValues.spouseStartSocialSecurity!.year() >= enteredValues.spouseBirthdate!.year() + 71) {
            return enteredValues.spouseAge70LaterSSMonthlyIncome!;
        }
        if (enteredValues.spouseStartSocialSecurity!.year() >= enteredValues.spouseBirthdate!.year() + 70) {
            return enteredValues.spouseAge69SSMonthlyIncome!;
        }
        if (enteredValues.spouseStartSocialSecurity!.year() >= enteredValues.spouseBirthdate!.year() + 69) {
            return enteredValues.spouseAge68SSMonthlyIncome!;
        }
        if (enteredValues.spouseStartSocialSecurity!.year() >= enteredValues.spouseBirthdate!.year() + 68) {
            return enteredValues.spouseAge67SSMonthlyIncome!;
        }
        if (enteredValues.spouseStartSocialSecurity!.year() >= enteredValues.spouseBirthdate!.year() + 67) {
            return enteredValues.spouseAge66SSMonthlyIncome!;
        }
        if (enteredValues.spouseStartSocialSecurity!.year() >= enteredValues.spouseBirthdate!.year() + 66) {
            return enteredValues.spouseAge65SSMonthlyIncome!;
        }
        if (enteredValues.spouseStartSocialSecurity!.year() >= enteredValues.spouseBirthdate!.year() + 65) {
            return enteredValues.spouseAge64SSMonthlyIncome!;
        }
        if (enteredValues.spouseStartSocialSecurity!.year() >= enteredValues.spouseBirthdate!.year() + 64) {
            return enteredValues.spouseAge63SSMonthlyIncome!;
        }
        if (enteredValues.spouseStartSocialSecurity!.year() >= enteredValues.spouseBirthdate!.year() + 63) {
            return enteredValues.spouseAge62SSMonthlyIncome!;
        }

        return NaN;
    }

    return <TableContainer component={Paper} sx={{ width: '100%' }}>
        <Table sx={{ width: '100%', tableLayout: 'fixed' }}>
            <TableHead>
                <TableRow>
                    {Headers.map((val, idx) => (
                        <TableCell key={idx} sx={{ fontWeight: 'bold', fontSize: 'clamp(10px, 1.5vw, 12px)' }} align="center">{val}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {tableData.map((row, idx) => (
                    <TableRow key={idx}>
                        {Object.values(row).map((val, idx2) => (
                            <TableCell key={idx2} sx={{ fontSize: 'clamp(10px, 1.5vw, 12px)' }} align="right">
                                {idx2 > 2 ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0, }).format(val) : val}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>;
}

export default OutputTable;