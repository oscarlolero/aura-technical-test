import {Autocomplete, Box, TextField} from "@mui/material";
import {useState} from "react";
import {Company} from "./SearchData.tsx";

interface DropdownDataFilterProps {
  selectedCompanies: Company[];
  onSelectedCompany: (newCompany: Company) => void;
  companies: Company[];
}

export default function DropdownDataFilter({selectedCompanies, onSelectedCompany, companies}: DropdownDataFilterProps) {

  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState(null);

  // Filter by symbol and name
  const filterCompanyOptions = (companiesOptions: Company[], {inputValue}: { inputValue: string }) => {
    const filtered = companiesOptions.filter((company) => {
      const matchesInput =
        company.symbol.toLowerCase().includes(inputValue.toLowerCase()) ||
        company.name.toLowerCase().includes(inputValue.toLowerCase());

      const isSelected = selectedCompanies.find(
        selectedCompany => selectedCompany.symbol === company.symbol
      );

      return matchesInput && !isSelected;
    });
    return filtered.slice(0, 5);
  };

  return <>
    <Autocomplete
      options={companies || []}
      getOptionLabel={(company: Company) => `${company.symbol} - ${company.name}`}
      filterOptions={filterCompanyOptions}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
      }}
      value={value}
      onChange={(_, newCompany) => {
        if (newCompany) {
          onSelectedCompany(newCompany)
        }
        setValue(null);
        setInputValue('');
      }}
      // TODO: Add custom li color
      renderOption={(props, company) => (
        <li {...props} key={company.symbol}>
          <Box sx={{fontWeight: 'bold', mr: 1}}>
            {company.symbol}
          </Box>
          {`${company.name}`}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search company..."
          variant="outlined"
        />
      )}
    />
  </>
}
